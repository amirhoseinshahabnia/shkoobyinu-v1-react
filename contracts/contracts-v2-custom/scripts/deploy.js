const { SignerWithAddress } = require("@nomiclabs/hardhat-ethers/signers");
const { ethers } = require("hardhat");
const { BigNumber } = require("ethers");

const { TestToken } = require("../artifacts/contracts/TestToken.sol/TestToken.json");
const { StakingPool } = require("../artifacts/contracts/ethereum/StakingPoolFactory.sol/PoolFactory.json");


async function main() {

    const [admin] = await ethers.getSigners();

    const TokenFactory = await ethers.getContractFactory("TestToken");
    const StakingPoolFactory = await ethers.getContractFactory("PoolFactory");

    const mockShkbooyToken = await TokenFactory.deploy('Shkooby', 'SH', BigNumber.from(10).pow(30), admin.address)
    const mockLpToken = await TokenFactory.deploy('Shkooby-ETH-LP', 'SHB-ETH-LP', BigNumber.from(10).pow(30), admin.address)

    console.log("deployed to:", mockShkbooyToken.address);
    console.log("deployed to:", mockLpToken.address);

    const mockPool = await StakingPoolFactory.deploy(
        admin.address,
        BigNumber.from(10).pow(18),
        BigNumber.from(10).pow(19),
        mockShkbooyToken.address,
        mockShkbooyToken.address,
        mockLpToken.address
    );

    console.log("deployed to:", mockPool.address);

};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});