// Root file: contracts/ethereum/interfaces/IPoolFactory.sol

pragma solidity >=0.6.0 <0.8.0;

interface IPoolFactory {
    function updateTVL(uint256 tvl) external;

    function flushReward(address user, uint256 amount) external;

    function getTotalTVLWeight() external view returns (uint256 lockedPoolTvlWeight, uint256 unlockedPoolTvlWeight);

    function getPoolShare(address pool) external view returns (uint256 amount);
}
