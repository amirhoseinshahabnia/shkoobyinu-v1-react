pragma solidity >=0.6.0 <0.8.0;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/token/ERC20/SafeERC20.sol';
import '@openzeppelin/contracts/math/SafeMath.sol';

import './interfaces/IPoolFactory.sol';

import './interfaces/IERC20Mintable.sol';
import './Errors.sol';

contract StakingPool is Ownable {
    using SafeERC20 for IERC20;
    using SafeMath for uint256;

    enum DepositState {
        NOT_CREATED,
        DEPOSITED,
        WITHDRAWN,
        REWARD_CLAIMED
    }

    struct Deposit {
        uint256 amount;
        uint256 startBlock;
        uint256 unlockBlock;
        address user;
        DepositState depositState;
        uint256 vestedRewardUnlockBlock;
        uint256 vestedRewards;
    }

    /**
     * @notice Total number of blocks in one year
     */
    uint256 public constant totalBlocksPerYear = 2400000; // use 2.4 million for mainnet deployment, use a smaller number for testing

    /**
     * @notice Address of factory
     */
    address public immutable factory;

    /**
     * @notice minimum number of blocks to be locked
     */
    uint256 public immutable lockinBlocks;

    /**
     * @notice Block at which starting starts
     */
    uint256 public immutable startBlock;

    /**
     * @notice Block at which dapp ends
     */
    uint256 public immutable endBlock;

    /**
     * @notice block at which staking ends
     */
    uint256 public immutable stakingEndBlock;

    /**
     * @notice address of staking token
     */
    address public immutable stakingToken;

    /**
     * @notice deposit counter
     */
    uint256 public depositCounter;

    /**
     * @notice total value locked
     */
    uint256 public tvl;

    /**
     * @notice deposits
     */
    mapping(uint256 => Deposit) public deposits;

    /**
     * @notice event when deposit is emitted
     */
    event Deposited(uint256 indexed depositNumber, address indexed depositor, uint256 amount, uint256 unlockBlock);

    /**
     * @notice event when deposit is withdrawn
     */
    event Withdraw(uint256 indexed depositNumber);

    /**
     * @notice event when vested reward is withdrawn
     */
    event WithdrawVestedReward(uint256 indexed depositNumber);

    /**
     * @notice event when token are withdrawn on emergency
     */
    event EmegencyWithdrawToken(uint256 indexed depositNumber);

    /**
     * @notice max number of deposits that can be operated in the single call
     */
    uint256 public constant MAX_LOOP_ITERATIONS = 20;

    /**
     * @param _stakingToken Address of the staking token
     * @param _lockinBlocks Minimum number of blocks the deposit should be staked
     * @param _operator Address of the staking operator
     */
    constructor(
        address _stakingToken,
        uint256 _lockinBlocks,
        address _operator
    ) Ownable() {
        require(_lockinBlocks < totalBlocksPerYear, Errors.LOCK_IN_BLOCK_LESS_THAN_MIN);
        factory = msg.sender;

        lockinBlocks = _lockinBlocks;
        startBlock = block.number;
        endBlock = block.number.add(totalBlocksPerYear);
        stakingEndBlock = block.number.add(totalBlocksPerYear.sub(_lockinBlocks));

        stakingToken = _stakingToken;

        Ownable.transferOwnership(_operator);
    }

    /**
     * @notice Deposit to Staking Contract, The token must be approved before this function is called
     * @param amount Amount of tokens to be staked
     */
    function deposit(uint256 amount) external beforeStakingEnds defence {
        IERC20(stakingToken).safeTransferFrom(msg.sender, address(this), amount);
        depositCounter++;
        uint256 unlockBlock = block.number.add(lockinBlocks);
        deposits[depositCounter] = Deposit(amount, block.number, unlockBlock, msg.sender, DepositState.DEPOSITED, 0, 0);

        tvl = tvl.add(amount);
        IPoolFactory(factory).updateTVL(tvl);

        emit Deposited(depositCounter, msg.sender, amount, unlockBlock);
    }

    /**
     * @notice Withdraw Multiple Deposits
     * @param depositNumbers Deposit Numbers to withdraw
     */
    function withdrawShkoobyMultiple(uint256[] calldata depositNumbers) public defence {
        require(depositNumbers.length <= MAX_LOOP_ITERATIONS, Errors.EXCEEDS_MAX_ITERATION);
        for (uint256 index = 0; index < depositNumbers.length; index++) {
            withdrawShkooby(depositNumbers[index]);
        }
    }

    /**
     * @notice Withdraw shkooby
     * @param depositNumber Deposit Number
     */
    function withdrawShkooby(uint256 depositNumber) public onlyWhenDeposited(depositNumber) onlyDepositor(depositNumber) defence {
        Deposit storage _deposit = deposits[depositNumber];
        require(block.number > _deposit.unlockBlock, Errors.ONLY_AFTER_END_BLOCK);

        uint256 blockNumber = block.number;

        if (blockNumber > endBlock) {
            blockNumber = endBlock;
        }
        _deposit.depositState = DepositState.WITHDRAWN;
        _deposit.vestedRewardUnlockBlock = blockNumber.add(totalBlocksPerYear);

        uint256 numberOfBlocksStaked = _deposit.unlockBlock.sub(_deposit.startBlock);

        uint256 vestedReward = getVestedRewards(_deposit.amount, numberOfBlocksStaked);
        _deposit.vestedRewards = vestedReward;

        IERC20(stakingToken).safeTransfer(_deposit.user, _deposit.amount);
        tvl = tvl.sub(_deposit.amount);
        IPoolFactory(factory).updateTVL(tvl);

        emit Withdraw(depositNumber);
    }

    /**
     * @notice Returns the number of Vested shkooby token for a given deposit
     * @param depositNumber Deposit Number
     */
    function getShkoobyVestedAmount(uint256 depositNumber) public view returns (uint256) {
        Deposit storage _deposit = deposits[depositNumber];
        if (_deposit.depositState != DepositState.WITHDRAWN) {
            return 0;
        }

        uint256 numberOfBlocksStaked = _deposit.unlockBlock.sub(_deposit.startBlock);
        return getVestedRewards(_deposit.amount, numberOfBlocksStaked);
    }

    /**
     * @notice Withdraw Multiple Vested Rewards
     * @param depositNumbers Deposit Numbers to withdraw
     */
    function withdrawVestedShkoobyMultiple(uint256[] calldata depositNumbers) public defence {
        require(depositNumbers.length <= MAX_LOOP_ITERATIONS, Errors.EXCEEDS_MAX_ITERATION);
        for (uint256 index = 0; index < depositNumbers.length; index++) {
            withdrawVestedShkooby(depositNumbers[index]);
        }
    }

    /**
     * @notice Withdraw Vested Reward
     * @param depositNumber Deposit Number to withdraw
     */
    function withdrawVestedShkooby(uint256 depositNumber) public onlyWhenWithdrawn(depositNumber) onlyDepositor(depositNumber) defence {
        Deposit storage _deposit = deposits[depositNumber];
        require(block.number > _deposit.vestedRewardUnlockBlock, Errors.VESTED_TIME_NOT_REACHED);
        _deposit.depositState = DepositState.REWARD_CLAIMED;
        IPoolFactory(factory).flushReward(msg.sender, _deposit.vestedRewards);
        emit WithdrawVestedReward(depositNumber);
    }

    /**
     * @notice Returns the number of Vested Rewards for given number of blocks and amount
     * @param amount Amount of staked token
     * @param numberOfBlocksStaked Number of blocks staked
     */
    function getVestedRewards(uint256 amount, uint256 numberOfBlocksStaked) internal view returns (uint256) {
        uint256 totalPoolShare = IPoolFactory(factory).getPoolShare(address(this));
        return totalPoolShare.mul(amount).mul(numberOfBlocksStaked).div(totalBlocksPerYear).div(tvl);
    }

    /**
     * @notice Withdraw Multiple Vested Rewards
     * @param depositNumbers Deposit Numbers to emergency withdraw
     */
    function emergencyWithdrawMultiple(uint256[] calldata depositNumbers) public {
        require(depositNumbers.length <= MAX_LOOP_ITERATIONS, Errors.EXCEEDS_MAX_ITERATION);
        for (uint256 index = 0; index < depositNumbers.length; index++) {
            emergencyWithdraw(depositNumbers[index]);
        }
    }

    /**
     * @notice Remove the staking token from contract. No Rewards will released in this case
     * @param depositNumber deposit number
     */
    function emergencyWithdraw(uint256 depositNumber)
        public
        onlyWhenDepositorOrWithdraw(depositNumber)
        onlyDepositor(depositNumber)
        defence
    {
        Deposit memory _deposit = deposits[depositNumber];
        IERC20(stakingToken).safeTransfer(_deposit.user, _deposit.amount);
        tvl = tvl.sub(_deposit.amount);
        IPoolFactory(factory).updateTVL(tvl);
        delete deposits[depositNumber];
        emit EmegencyWithdrawToken(depositNumber);
    }

    /**
     * @notice Modifier to prevent staking after the staking period ends
     */
    modifier beforeStakingEnds() {
        require(block.number < stakingEndBlock, Errors.ONLY_BEFORE_STAKING_ENDS);
        _;
    }

    /**
     * @notice Modifier that allows only factory contract to call
     */
    modifier onlyFactory() {
        require(msg.sender == factory, Errors.ONLY_FACTORY_CAN_CALL);
        _;
    }

    /**
     * @notice Modifier to prevent contract interaction
     */
    modifier defence() {
        require((msg.sender == tx.origin), Errors.DEFENCE);
        _;
    }

    /**
     * @notice Modifier to check if the deposit state is DEPOSITED
     */
    modifier onlyWhenDeposited(uint256 depositNumber) {
        require(deposits[depositNumber].depositState == DepositState.DEPOSITED, Errors.ONLY_WHEN_DEPOSITED);
        _;
    }

    /**
     * @notice Modifier to check if the deposit state is WITHDRAWN
     */
    modifier onlyWhenWithdrawn(uint256 depositNumber) {
        require(deposits[depositNumber].depositState == DepositState.WITHDRAWN, Errors.ONLY_WHEN_WITHDRAWN);
        _;
    }

    /**
     * @notice Modifier to check if the eposit state is DEPOSITED or WITHDRAWN
     */
    modifier onlyWhenDepositorOrWithdraw(uint256 depositNumber) {
        Deposit memory _deposit = deposits[depositNumber];
        require(
            _deposit.depositState == DepositState.WITHDRAWN || _deposit.depositState == DepositState.DEPOSITED,
            Errors.ONLY_DEPOSIT_OR_WITHDRAWN
        );
        _;
    }

    /**
     * @notice Modifier to ensure only depositor calls
     */
    modifier onlyDepositor(uint256 depositNumber) {
        require(deposits[depositNumber].user == msg.sender, Errors.ONLY_DEPOSITOR);
        _;
    }
}
