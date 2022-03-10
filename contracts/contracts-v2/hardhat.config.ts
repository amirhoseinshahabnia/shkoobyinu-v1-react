require('dotenv').config();

import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-ganache';
import '@nomiclabs/hardhat-etherscan';
import '@openzeppelin/hardhat-upgrades';

import 'hardhat-typechain';
import 'solidity-coverage';
import 'hardhat-deploy';
import 'hardhat-tracer';
import 'hardhat-log-remover';

import 'hardhat-gas-reporter';

import { task } from 'hardhat/config';
import { HardhatUserConfig } from 'hardhat/types';

import { privateKeys, kovanPrivateKeys } from './utils/wallet';

import {
    etherscanKey,
    INFURA_TOKEN,
    MAINNET_DEPLOY_PRIVATE_KEY,
    MAINNET_DEPLOY_MNEMONIC,
    ROPSTEN_DEPLOY_MNEMONIC,
    ROPSTEN_DEPLOY_PRIVATE_KEY,
    RINKEBY_DEPLOY_MNEMONIC,
    RINKEBY_DEPLOY_PRIVATE_KEY,
} from './utils/keys';

function getHardhatPrivateKeys() {
    return privateKeys.map((key) => {
        const ONE_MILLION_ETH = '1000000000000000000000000';
        return {
            privateKey: key,
            balance: ONE_MILLION_ETH,
        };
    });
}

task('accounts', 'Prints the list of accounts', async (args, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(await account.address);
    }
});

const config: HardhatUserConfig = {
    defaultNetwork: 'hardhat',
    networks: {
        hardhat: {
            // hardfork: "istanbul",
            forking: {
                url: 'https://eth-mainnet.alchemyapi.io/v2/Dk_wQm_VjPxSfI7NUicHv3zi1aHhnSly',
                blockNumber: 13316039,
            },
            blockGasLimit: 22500000,
            accounts: getHardhatPrivateKeys(),
            live: true,
            saveDeployments: process.env.SAVE_DEPLOYMENT && process.env.SAVE_DEPLOYMENT.toLowerCase() === 'true' ? true : false,
            loggingEnabled: process.env.LOGGING && process.env.LOGGING.toLowerCase() === 'true' ? true : false,
            tags: ['hardhat'],
        },
        localhost: {
            url: 'http://127.0.0.1:8545',
            timeout: 100000,
            live: false,
            accounts: process.env.PRIVATE_KEYS ? process.env.PRIVATE_KEYS.split(',') : [],
            saveDeployments: process.env.SAVE_DEPLOYMENT && process.env.SAVE_DEPLOYMENT.toLowerCase() === 'true' ? true : false,
            loggingEnabled: process.env.LOGGING && process.env.LOGGING.toLowerCase() === 'true' ? true : false,
            tags: ['localhost'],
        },
        rinkeby: {
            chainId: 4,
            url: 'https://rinkeby.infura.io/v3/' + INFURA_TOKEN,
            // @ts-ignore
            accounts: process.env.PRIVATE_KEYS ? process.env.PRIVATE_KEYS.split(',') : [],
            live: true,
            gasPrice: 3000000000,
            saveDeployments: process.env.SAVE_DEPLOYMENT && process.env.SAVE_DEPLOYMENT.toLowerCase() === 'true' ? true : false,
            loggingEnabled: process.env.LOGGING && process.env.LOGGING.toLowerCase() === 'true' ? true : false,
            tags: ['rinkeby'],
        },
        rinkeby_privKey: {
            chainId: 4,
            url: 'https://rinkeby.infura.io/v3/' + INFURA_TOKEN,
            // @ts-ignore
            accounts: [`0x${rinkeby_DEPLOY_PRIVATE_KEY}`],
            saveDeployments: process.env.SAVE_DEPLOYMENT && process.env.SAVE_DEPLOYMENT.toLowerCase() === 'true' ? true : false,
            loggingEnabled: process.env.LOGGING && process.env.LOGGING.toLowerCase() === 'true' ? true : false,
            tags: ['rinkeby_privKey'],
        },
        rinkeby_custom_accounts: {
            chainId: 4,
            url: 'https://rinkeby.infura.io/v3/' + INFURA_TOKEN,
            // @ts-ignore
            accounts: rinkebyPrivateKeys,
            saveDeployments: process.env.SAVE_DEPLOYMENT && process.env.SAVE_DEPLOYMENT.toLowerCase() === 'true' ? true : false,
            loggingEnabled: process.env.LOGGING && process.env.LOGGING.toLowerCase() === 'true' ? true : false,
            tags: ['rinkeby_custom_accounts'],
        },
        rinkeby_fork: {
            url: 'http://127.0.0.1:8545',
            // @ts-ignore
            accounts: process.env.PRIVATE_KEYS ? process.env.PRIVATE_KEYS.split(',') : [],
            saveDeployments: process.env.SAVE_DEPLOYMENT && process.env.SAVE_DEPLOYMENT.toLowerCase() === 'true' ? true : false,
            loggingEnabled: process.env.LOGGING && process.env.LOGGING.toLowerCase() === 'true' ? true : false,
            gasPrice: 1000000000,
            tags: ['rinkeby_fork'],
        },
        ropsten: {
            chainId: 3,
            url: 'https://ropsten.infura.io/v3/' + INFURA_TOKEN,
            // @ts-ignore
            accounts: { mnemonic: ROPSTEN_DEPLOY_MNEMONIC },
            saveDeployments: process.env.SAVE_DEPLOYMENT && process.env.SAVE_DEPLOYMENT.toLowerCase() === 'true' ? true : false,
            loggingEnabled: process.env.LOGGING && process.env.LOGGING.toLowerCase() === 'true' ? true : false,
            tags: ['ropsten'],
        },
        ropsten_privKey: {
            chainId: 3,
            url: 'https://ropsten.infura.io/v3/' + INFURA_TOKEN,
            // @ts-ignore
            accounts: [`0x${ROPSTEN_DEPLOY_PRIVATE_KEY}`],
            saveDeployments: process.env.SAVE_DEPLOYMENT && process.env.SAVE_DEPLOYMENT.toLowerCase() === 'true' ? true : false,
            loggingEnabled: process.env.LOGGING && process.env.LOGGING.toLowerCase() === 'true' ? true : false,
            tags: ['ropsten_privKey'],
        },
        ropsten_fork: {
            chainId: 3,
            url: 'http://127.0.0.1:8545',
            saveDeployments: process.env.SAVE_DEPLOYMENT && process.env.SAVE_DEPLOYMENT.toLowerCase() === 'true' ? true : false,
            loggingEnabled: process.env.LOGGING && process.env.LOGGING.toLowerCase() === 'true' ? true : false,
            tags: ['ropsten_fork'],
        },
        mainnet: {
            chainId: 1,
            url: 'https://mainnet.infura.io/v3/' + INFURA_TOKEN,
            // @ts-ignore
            accounts: { mnemonic: MAINNET_DEPLOY_MNEMONIC },
            saveDeployments: process.env.SAVE_DEPLOYMENT && process.env.SAVE_DEPLOYMENT.toLowerCase() === 'true' ? true : false,
            loggingEnabled: process.env.LOGGING && process.env.LOGGING.toLowerCase() === 'true' ? true : false,
            tags: ['mainnet'],
        },
        mainnet_privKey: {
            chainId: 1,
            url: 'https://mainnet.infura.io/v3/' + INFURA_TOKEN,
            // @ts-ignore
            accounts: [`0x${MAINNET_DEPLOY_PRIVATE_KEY}`],
            saveDeployments: process.env.SAVE_DEPLOYMENT && process.env.SAVE_DEPLOYMENT.toLowerCase() === 'true' ? true : false,
            loggingEnabled: process.env.LOGGING && process.env.LOGGING.toLowerCase() === 'true' ? true : false,
            tags: ['mainnet_privKey'],
        },
        mainnet_fork: {
            chainId: 1,
            url: 'http://127.0.0.1:8545',
            saveDeployments: process.env.SAVE_DEPLOYMENT && process.env.SAVE_DEPLOYMENT.toLowerCase() === 'true' ? true : false,
            loggingEnabled: process.env.LOGGING && process.env.LOGGING.toLowerCase() === 'true' ? true : false,
            tags: ['mainnet_fork'],
        },
        // goerli: {
        //     chainId: 5,
        //     // url: 'https://goerli.infura.io/v3/' + INFURA_TOKEN,
        //     url: `${process.env.GOERLI_RPC}`,
        //     accounts: [`${process.env.GOERLI_PRIVATE_KEY}`, `${process.env.GOERLI_PRIVATE_KEY_2}`],
        //     saveDeployments: process.env.SAVE_DEPLOYMENT && process.env.SAVE_DEPLOYMENT.toLowerCase() === 'true' ? true : false,
        //     loggingEnabled: process.env.LOGGING && process.env.LOGGING.toLowerCase() === 'true' ? true : false,
        //     tags: ['goerli'],
        // },
        // matic_mumbai: {
        //     chainId: 80001,
        //     // url: 'https://polygon-mumbai.infura.io/v3/' + INFURA_TOKEN,
        //     url: `${process.env.MATIC_RPC}`,
        //     accounts: [
        //         `${process.env.MATIC_MUMAI_PRIVATE_KEY}`,
        //         `${process.env.MATIC_MUMAI_PRIVATE_KEY_2}`,
        //         `${process.env.MATIC_MUMAI_PRIVATE_KEY_3}`,
        //     ],
        //     saveDeployments: process.env.SAVE_DEPLOYMENT && process.env.SAVE_DEPLOYMENT.toLowerCase() === 'true' ? true : false,
        //     loggingEnabled: process.env.LOGGING && process.env.LOGGING.toLowerCase() === 'true' ? true : false,
        //     tags: ['matic_mumbai'],
        //     gasPrice: 1000000000,
        // },
    },
    typechain: {
        outDir: 'typechain',
        target: 'ethers-v5',
    },
    solidity: {
        version: '0.7.0',
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
    mocha: {
        timeout: 20000000,
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN,
    },
    gasReporter: {
        gasPrice: 120,
        enabled: true,
        currency: 'USD',
        coinmarketcap: 'da89ad6f-bf96-45ae-890d-4228febc52f7',
        outputFile: 'gasReport.md',
        noColors: true,
    },
};

export default config;
