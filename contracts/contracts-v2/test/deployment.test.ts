import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { ethers } from 'hardhat';
import { BigNumber } from 'ethers';

import { TestToken__factory } from '../typechain/factories/TestToken__factory';
import { TestToken } from '../typechain/TestToken';

import { StakingFactory__factory } from '../typechain/factories/StakingFactory__factory';
import { StakingFactory } from '../typechain/StakingFactory';

describe('Check deployment', async () => {
    let stakingFatory: StakingFactory;
    let admin: SignerWithAddress;

    let mockShkbooyToken: TestToken;
    let mockLpToken: TestToken;

    beforeEach(async () => {
        [admin] = await ethers.getSigners();
        mockShkbooyToken = await new TestToken__factory(admin).deploy('Shkooby', 'SH', BigNumber.from(10).pow(30), admin.address);
        mockLpToken = await new TestToken__factory(admin).deploy('Shkooby-ETH-LP', 'SHB-ETH-LP', BigNumber.from(10).pow(30), admin.address);

        stakingFatory = await new StakingFactory__factory(admin).deploy(
            admin.address,
            BigNumber.from(10).pow(18),
            BigNumber.from(10).pow(19),
            mockShkbooyToken.address,
            mockShkbooyToken.address,
            mockLpToken.address
        );
    });

    it('check contracts', async () => {
        console.log({ mockLpToken: mockLpToken.address, mockShkbooyToken: mockShkbooyToken.address, stakingFatory: stakingFatory.address });
    });
});