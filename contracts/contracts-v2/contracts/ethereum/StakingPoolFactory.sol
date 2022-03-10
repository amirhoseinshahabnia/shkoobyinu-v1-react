pragma solidity >=0.6.0 <0.8.0;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/math/SafeMath.sol';
import '@openzeppelin/contracts/token/ERC20/SafeERC20.sol';

import './StakingPool.sol';
import './interfaces/IPoolFactory.sol';

contract PoolFactory is Ownable, IPoolFactory {
    using SafeERC20 for IERC20;
    using SafeMath for uint256;

    struct Pool {
        uint256 tvl;
        uint8 weight;
        bool isPool;
        bool shkoobyPool;
    }

    /**
     * @notice Weight is scaled by 10
     */
    uint8 public immutable SCALING_FACTOR = 100;

    /**
     * @notice event when pool is created
     * @param poolNumber Index of the pool
     * @param pool address of the pool
     */
    event CreatePool(uint256 indexed poolNumber, address indexed pool);

    /**
     * @notice event when tvl is updated
     * @param pool address of the pool
     */
    event UpdatePoolTVL(address indexed pool, uint256 tvl);

    /**
     * @notice pool params
     */
    mapping(address => Pool) public pools;

    /**
     * @notice pool number to pool address
     */
    mapping(uint256 => address) public poolNumberToPoolAddress;

    /**
     * @notice total number of pools
     */
    uint256 public totalPools;

    /**
     * @notice total shkooby token rewards allocation for locked pools
     */
    uint256 public shkoobyRewardsForShkoobyPools;

    /**
     * @notice total shkooby token rewards allocation for unlocked pools
     */
    uint256 public shkoobyRewardsForLpPools;

    /**
     * @notice total shkooby token claimed from the shkooby pools
     */
    uint256 public claimedShkoobyRewardsForShkoobyPools;

    /**
     * @notice total shkooby token rewards claimed from the lp pools
     */
    uint256 public claimedShkoobyRewardsForLpPools;

    /**
     * @notice address of the reward token
     */
    address public immutable rewardToken;

    /**
     * @notice Constructor
     * @param _admin Address of the admin
     * @param _shkoobyRewardsForShkoobyPoolsPools Shkooby Rewards to be distributed for the locked pools
     * @param _shkoobyRewardsForLpPoolsPools Shkooby Rewards to be distributed for the unlocked pools
     * @param _rewardToken Address of the reward token
     * @param _shkoobyToken Address of the shkooby token
     * @param _lpToken Address of the lp token
     */
    constructor(
        address _admin,
        uint256 _shkoobyRewardsForShkoobyPoolsPools,
        uint256 _shkoobyRewardsForLpPoolsPools,
        address _rewardToken,
        address _shkoobyToken,
        address _lpToken
    ) {
        Ownable.transferOwnership(_admin);
        shkoobyRewardsForShkoobyPools = _shkoobyRewardsForShkoobyPoolsPools;
        shkoobyRewardsForLpPools = _shkoobyRewardsForLpPoolsPools;

        rewardToken = _rewardToken;
        totalPools = 8;

        // for ease even pools are shkooby pool, odd pools are lp pools

        // unlocked pools
        _createPool(0, _shkoobyToken, 1, _admin, 100); // shkooby token pool, flexi pool
        _createPool(1, _lpToken, 1, _admin, 100); // lp token pool, flexi pool

        // locked pools
        _createPool(2, _shkoobyToken, 196300, _admin, 105); // shkooby token pool, 1 month lock in pool
        _createPool(3, _lpToken, 196300, _admin, 105); // lp token pool, 1 month lock in pool

        _createPool(4, _shkoobyToken, 589000, _admin, 115); // shkooby token pool, 3 month lock in pool
        _createPool(5, _lpToken, 589000, _admin, 115); // lp token pool, 3 month lock in pool

        _createPool(6, _shkoobyToken, 1179000, _admin, 150); //shkooby token pool, 6 month lock in pool
        _createPool(7, _lpToken, 1179000, _admin, 150); // lp token pool, 6 month lock in pool
    }

    /**
     * @notice internal function called in the constructor
     * @param poolNumber Index number of the pool
     * @param _stakingToken Address of the token to be staked
     * @param lockinBlocks Number of blocks the deposit is locked
     * @param _poolWeight Reward weight of the pool. Higher weight, higher rewards
     */
    function _createPool(
        uint256 poolNumber,
        address _stakingToken,
        uint256 lockinBlocks,
        address _admin,
        uint8 _poolWeight
    ) internal {
        require(_poolWeight != 0, Errors.SHOULD_BE_NON_ZERO);
        require(lockinBlocks != 0, Errors.SHOULD_BE_NON_ZERO);

        // address _stakingToken,
        // address _maticBridge,
        // uint256 _lockinBlocks

        StakingPool _pool = new StakingPool(_stakingToken, lockinBlocks, _admin); // change to actual addresses
        pools[address(_pool)] = Pool(0, _poolWeight, true, poolNumber % 2 == 0);
        poolNumberToPoolAddress[poolNumber] = address(_pool);
        emit CreatePool(poolNumber, address(_pool));
    }

    /**
     * @notice Update the TVL. Only a pool can call
     * @param tvl New TVL of the pool
     */
    function updateTVL(uint256 tvl) external override onlyPool {
        pools[msg.sender].tvl = tvl;
        emit UpdatePoolTVL(msg.sender, tvl);
    }

    /**
     * @notice Send shkooby token rewards user. Only a pool can call
     * @param user Address of the user to send reward to
     * @param amount Amount of tokens to send
     */
    function flushReward(address user, uint256 amount) external override onlyPool {
        if (pools[msg.sender].shkoobyPool) {
            claimedShkoobyRewardsForShkoobyPools = claimedShkoobyRewardsForShkoobyPools.add(amount);
        } else {
            claimedShkoobyRewardsForLpPools = claimedShkoobyRewardsForLpPools.add(amount);
        }
        IERC20(rewardToken).safeTransfer(user, amount);
    }

    /**
     * @notice Get Total Weight of TVL locked in all contracts
     */
    function getTotalTVLWeight() public view override returns (uint256 shkoobyPoolWeight, uint256 lpPoolWeight) {
        shkoobyPoolWeight = _getPoolWeight(0).add(_getPoolWeight(2)).add(_getPoolWeight(4)).add(_getPoolWeight(6));
        lpPoolWeight = _getPoolWeight(1).add(_getPoolWeight(3)).add(_getPoolWeight(5)).add(_getPoolWeight(7));
    }

    /**
     * @notice Internal function to calculate the weight of pool
     */
    function _getPoolWeight(uint256 poolNumber) internal view returns (uint256) {
        Pool storage pool = pools[poolNumberToPoolAddress[poolNumber]];
        return pool.tvl.mul(pool.weight).div(SCALING_FACTOR);
    }

    /**
     * @notice Calculate the number of shkooby reward tokens a pool is entitiled to at given point in time.
     * @param pool Address of the pool
     */
    function getPoolShare(address pool) public view override returns (uint256 amount) {
        Pool storage _pool = pools[pool];
        if (!_pool.isPool) {
            return 0;
        }
        (uint256 shkoobyPoolWeight, uint256 lpPoolWeight) = getTotalTVLWeight();

        uint256 totalTvlWeight = _pool.shkoobyPool ? shkoobyPoolWeight : lpPoolWeight;
        if (totalTvlWeight == 0) {
            // to avoid division overflow when tvl is 0
            return 0;
        }
        uint256 totalReward = _pool.shkoobyPool ? shkoobyRewardsForShkoobyPools : shkoobyRewardsForLpPools;

        uint256 claimedRewards = _pool.shkoobyPool ? claimedShkoobyRewardsForShkoobyPools : claimedShkoobyRewardsForLpPools;
        amount = (totalReward.sub(claimedRewards)).mul(_pool.tvl.mul(_pool.weight).div(SCALING_FACTOR)).div(totalTvlWeight);
    }

    /**
     * @notice Fetch Pool APR. Will return 0 if address is not a valid pool (or) the tvl in pool is zero
     * @param pool Address of the pool to fetch APR
     */
    function getPoolApr(address pool) public view returns (uint256) {
        uint256 share = getPoolShare(pool);
        Pool storage _pool = pools[pool];
        if (_pool.tvl == 0) {
            return 0;
        }
        return share.mul(10**18).div(_pool.tvl);
    }

    /**
     * @notice Change shkooby Rewards to be distributed for shkooby pools
     * @param amount New Amount
     */
    function changeShkoobyRewardsForShkoobyPools(uint256 amount) external onlyOwner {
        require(amount > shkoobyRewardsForShkoobyPools, Errors.SHOULD_BE_MORE_THAN_CLAIMED);
        shkoobyRewardsForShkoobyPools = amount;
    }

    /**
     * @notice Change shkooby Rewards to be distributed for LP pools
     * @param amount New Amount
     */
    function changeShkoobyRewardsForLpPools(uint256 amount) external onlyOwner {
        require(amount > claimedShkoobyRewardsForLpPools, Errors.SHOULD_BE_MORE_THAN_CLAIMED);
        claimedShkoobyRewardsForLpPools = amount;
    }

    /**
     * @notice Withdraw shkooby tokens available in case of any emergency
     * @param recipient Address to receive the emergency deposit
     */
    function emergencyWithdrawRewardBalance(address recipient) external onlyOwner {
        uint256 rewardBalance = IERC20(rewardToken).balanceOf(address(this));
        IERC20(rewardToken).transfer(recipient, rewardBalance);
    }

    /**
     * @notice ensures that sender is a registered pool
     */
    modifier onlyPool() {
        require(pools[msg.sender].isPool, Errors.ONLY_POOLS_CAN_CALL);
        _;
    }
}
