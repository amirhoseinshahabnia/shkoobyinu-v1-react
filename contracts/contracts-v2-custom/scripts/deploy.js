const { SignerWithAddress } = require("@nomiclabs/hardhat-ethers/signers");
// const { ethers } = require("hardhat");
const { BigNumber } = require("ethers");

const { TestToken__factory } = require("../artifacts/contracts/ethereum/factories/TestToken__factory");
const { TestToken } = require("../artifacts/contracts/ethereum/TestToken");

const { StakingPoolFactory__factory } = require("../artifacts/contracts/ethereum/factories/StakingPoolFactory__factory");
const { StakingFactory } = require("../artifacts/contracts/ethereum/TestToken__factory");


// describe("Greeter", function () {
//     it("Should return the new greeting once it's changed", async function () {
//         const Greeter = await ethers.getContractFactory("Greeter");
//         const greeter = await Greeter.deploy("Hello, world!");
//         await greeter.deployed();

//         expect(await greeter.greet()).to.equal("Hello, world!");

//         const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//         // wait until the transaction is mined
//         await setGreetingTx.wait();

//         expect(await greeter.greet()).to.equal("Hola, mundo!");
//     });
// });





describe('Check deployment', async () => {
    let stakingFaty = StakvngFactory;
    let admin = SignerWithAddress;

    let mockShkbooyToken = TestToken;
    let mockLpToken = TestToken;

    beforeEach(async () => {
        [admin] = await ethers.getSigners();
        mockShkbooyToken = await new TestToken__factory(admin).deploy('Shkooby', 'SH', BigNumber.from(10).pow(30), admin.address);
        mockLpToken = await new TestToken__factory(admin).deploy('Shkooby-ETH-LP', 'SHB-ETH-LP', BigNumber.from(10).pow(30), admin.address);

        stakingFatory = await new StakingPoolFactory__factory(admin).deploy(
            admin.address, // 
            BigNumber.from(10).pow(18),
            BigNumber.from(10).pow(19),
            mockShkbooyToken.address,
            mockShkbooyToken.address,
            mockLpToken.address
        );
    });
    console.log("Greeter deployed to:", mockShkbooyToken.address);
    console.log("Greeter deployed to:", mockLpToken.address);


    it('check contracts', async () => {
        console.log({ mockLpToken: mockLpToken.address, mockShkbooyToken: mockShkbooyToken.address, stakingFatory: stakingFatory.address });
    });
});

/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const { 
    ETHERSCAN_API_KEY,
    INFURA_TOKEN,
    ALCHEMY_RINKEBY,
    ALCHEMY_ROPSTEN,
    ALCHEMY_MAINNET,
    MAINNET_DEPLOY_PRIVATE_KEY,
    MAINNET_DEPLOY_MNEMONIC,
    ROPSTEN_DEPLOY_MNEMONIC,
    ROPSTEN_DEPLOY_PRIVATE_KEY,
    RINKEBY_DEPLOY_MNEMONIC,
    RINKEBY_DEPLOY_PRIVATE_KEY } = process.env;

module.exports = {
    solidity: "0.7.0",
    defaultNetwork: "rinkeby",
    networks: {
        hardhat: {},
        mainnet: {
            chainId: 1,
            forking: {
                url: 'https://eth-mainnet.alchemyapi.io/v2/' + ALCHEMY_MAINNET,
                blockNumber: 13316039,
            },
            blockGasLimit: 22500000,
            url: 'https://eth-ropsten.alchemyapi.io/v2/' + ALCHEMY_MAINNET,
            accounts: [`0x${ROPSTEN_DEPLOY_PRIVATE_KEY}`],
            live: true,
            saveDeployments: true,
        },
        ropsten: {
            chainId: 3,
            url: 'https://eth-ropsten.alchemyapi.io/v2/' + ALCHEMY_ROPSTEN,
            accounts: [`0x${ROPSTEN_DEPLOY_PRIVATE_KEY}`],
            live: true,
            gasPrice: 3000000000,
            saveDeployments: true,
        },
        rinkeby: {
            chainId: 4,
            url: 'https://eth-rinkeby.alchemyapi.io/v2/' + ALCHEMY_RINKEBY,
            accounts: [`0x${RINKEBY_DEPLOY_PRIVATE_KEY}`],
            live: true,
            gasPrice: 3000000000,
            saveDeployments: true,
        },
    },
    solidity: {
        version: "0.7.0",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
    paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./artifacts"
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY
    }
}

// remixd -s 'Now using node v16.14.0 (npm v8.3.1)' --remix-ide https://remix.ethereum.org
