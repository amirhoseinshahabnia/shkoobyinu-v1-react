import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Logbook from "./logbook";
import StakeShkooby from "./stakeShkooby";

import unicorn from "../assets/img/unicorniconsvg.svg";
import shkooby from "../assets/img/shkoobycoin.svg";
import shkoobyeth from "../assets/img/shkoobyethcoin.svg";

const Container = styled.div`
    ${tw`
        min-h-screen
        w-full
        p-5
 `};

    font-family: "Chakra Semi Bold";
`;

const Grid = styled.div`
    ${tw`
        w-full
        justify-items-center
        grid
        md:grid-cols-5
        row-auto
        gap-4
        grid-flow-row
        
    `};
`;

const BlueCard = styled.div`
    ${tw`
        bg-blue
        text-white
        p-5
        rounded-xl
        border
        border-solid
        border-4
        w-full
    `};
`;

const Staked = styled(BlueCard)`
    ${tw`
        border-lightpurple
        col-span-2
    `};
`;

const Claimed = styled(BlueCard)`
    ${tw`
        border-lightblue
        md:col-span-2
        col-span-3

    `};
`;

const Buy = styled(BlueCard)`
    ${tw`
        border-lightblue
        border-yellow
        flex
        justify-center
        flex-col
        items-center
        md:col-span-1
        col-span-5
    `};
`;

const Account = styled(BlueCard)`
    ${tw`
        col-span-5
    `};
`;

const AccountLeft = styled.div`
    ${tw`
        flex
        flex-col
        space-y-4
        my-8
        w-full
    `};
`;

const AccountRight = styled.div`
    ${tw`
        flex
        flex-col
        space-y-4
        my-8
        w-full
    `};
`;

const Button = styled.button`
    ${tw`
        px-4
        py-2
        flex
        justify-center
        items-center
        text-sm
        
    `};
`;

const ScanButton = styled(Button)`
    ${tw`

        rounded-2xl
    `};
    outline: 2px solid #ffff00;
    outline-offset: -2px;
`;

const ClaimButton = styled(ScanButton)`
    ${tw``};
    outline: 2px solid #ffffff;
    outline-offset: -2px;
`;

const BuyButton = styled(Button)`
    ${tw`
        bg-yellow
        rounded-2xl
        text-black
    `};
`;

const StakeButton = styled(Button)`
    ${tw`
        rounded-2xl
        text-black
    `};
`;

const Dashboard = () => {
    return (
        <>
            <Container>
                <Grid>
                    <Staked>
                        <h1 className="text-lg lg:text-2xl">Staked</h1>
                        <h2>Total Amount (TVL)</h2>
                        <br />
                        <h1 className="text-lg lg:text-2xl">
                            USD 1,221,012.79
                        </h1>
                    </Staked>
                    <Claimed>
                        <h1 className="text-lg lg:text-2xl">Claimed</h1>
                        <h2>Total Amount</h2>
                        <br />
                        <h1 className="text-lg lg:text-2xl">USD 832,302</h1>
                    </Claimed>
                    <Buy>
                        <button className="text-2xl">Buy SHKOOBY</button>
                        <img src={unicorn} className="w-4" alt="unicorn" />
                    </Buy>
                    <Account>
                        <h1 className="text-xl">My Account</h1>
                        <div className="flex flex-col lg:flex-row lg:justify-around lg:items-center lg:space-x-16">
                            <AccountLeft>
                                <div className="flex justify-between items-center">
                                    <div className="text-md">
                                        SHKOOBY BALANCE
                                    </div>
                                    <ScanButton>Scan</ScanButton>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="text-2xl">
                                        1,231,312,312
                                    </div>
                                    <BuyButton>Scan</BuyButton>
                                </div>
                                <h1 className="text-xl w-full">
                                    Staked Balance
                                </h1>

                                <div className="flex justify-between items-center">
                                    <div className="flex">
                                        <img
                                            src={shkooby}
                                            className="w-6 mr-2"
                                            alt="shkoobycoin"
                                        />
                                        <h1 className="text-sm">SHKOOBY</h1>
                                    </div>
                                    <div className="flex justify-between items-center space-x-3">
                                        <h1 className="text-sm">
                                            1,231,312,321
                                        </h1>
                                        <StakeButton className="bg-green">
                                            Stake
                                        </StakeButton>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex">
                                        <img
                                            src={shkoobyeth}
                                            className="w-6 mr-2"
                                            alt="shkoobycoin"
                                        />
                                        <h1 className="text-sm">
                                            SHKOOBY-ETH-LP
                                        </h1>
                                    </div>
                                    <div className="flex justify-between items-center space-x-3">
                                        <h1 className="text-sm">
                                            1,231,312,321
                                        </h1>
                                        <StakeButton className="bg-darkpink">
                                            Stake
                                        </StakeButton>
                                    </div>
                                </div>
                            </AccountLeft>
                            <AccountRight>
                                <div className="flex justify-between items-center">
                                    <div className="text-lg">
                                        SHKOOBY ETH LP BALANCE
                                    </div>
                                    <ScanButton>Scan</ScanButton>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="text-2xl">
                                        1,231,312,312
                                    </div>
                                    <BuyButton>Scan</BuyButton>
                                </div>
                                <h1 className="text-xl w-full">
                                    Unclaimed Balance
                                </h1>

                                <div className="flex justify-between items-center">
                                    <div className="flex">
                                        <img
                                            src={shkooby}
                                            className="w-6 mr-2"
                                            alt="shkoobycoin"
                                        />
                                        <h1 className="text-sm">SHKOOBY</h1>
                                    </div>
                                    <div className="flex justify-between items-center space-x-3">
                                        <h1 className="text-sm">
                                            1,231,312,321
                                        </h1>
                                        <ClaimButton>Claim</ClaimButton>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex">
                                        <img
                                            src={shkoobyeth}
                                            className="w-6 mr-2"
                                            alt="shkoobycoin"
                                        />
                                        <h1 className="text-sm">
                                            SHKOOBY-ETH-LP
                                        </h1>
                                    </div>
                                    <div className="flex justify-between items-center space-x-3">
                                        <h1 className="text-sm">
                                            1,231,312,321
                                        </h1>
                                        <ClaimButton>Claim</ClaimButton>
                                    </div>
                                </div>
                            </AccountRight>
                        </div>
                    </Account>

                    <Logbook />
                    <stakeShkooby />
                </Grid>
            </Container>
            ;
        </>
    );
};

export default Dashboard;
