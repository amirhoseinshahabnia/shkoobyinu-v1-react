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