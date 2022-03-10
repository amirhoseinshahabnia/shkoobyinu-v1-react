// Root file: contracts/ethereum/interfaces/IERC20Mintable.sol

pragma solidity >=0.6.0 <0.8.0;

/**
 * @notice Interface for minting any ERC20 token
 */
interface IERC20Mintable {
    function mint(address _to, uint256 _amount) external returns (uint256);
}
