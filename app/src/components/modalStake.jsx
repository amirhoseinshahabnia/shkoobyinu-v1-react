import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BsWallet2 } from "react-icons/bs";

import { useLocation } from "react-router-dom";

import coin from "assets/img/shkoobycoin.svg";

const ModalContainer = styled.div`
    ${tw`
        absolute
        overflow-hidden
        z-50
        text-white
        w-[70%]
        h-[70%]
        bg-black
        top-[50%]
        left-[50%]
        rounded-2xl
        border-4
        border-green
        flex 
        flex-col
        p-8
        items-center
        space-y-4
    `};

    & {
        transform: translate(-50%, -50%);
    }

    font-family: "Chakra Semi Bold";
`;

const ProgressBar = styled.div`
    ${tw`
        w-full
        flex
        flex-row
        items-center
        justify-center
        my-5
    `};

    & {
        counter-reset: step;
    }
`;

const ProgressPoint = styled.button`
    ${tw`
        
        relative
        w-[85px]
        
    `};

    &:before {
        content: counter(step);
        counter-increment: step;
        width: 30px;
        height: 30px;
        line-height: 30px;
        border: 2px solid #ffffff;
        display: block;
        text-align: center;
        margin: 0 auto 10px;
        border-radius: 50%;
        background-color: #000000;
    }

    &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #ffffff;
        top: 15px;
        left: -5%;
        z-index: -1;
    }

    &.active {
        color: #aeff57;
    }

    &.active:before {
        border-color: #aeff57;
    }
`;

const PercentBar = styled(ProgressBar)``;
const PercentPoint = styled(ProgressPoint)``;

const OutlineButton = styled.button`
    ${tw`
        py-2
        px-10
        mx-1
        rounded-2xl
    `};
    outline: 2px solid #aeff57;
    outline-offset: -2px;
`;

const StakeModal = () => {
    return (
        <>
            <ModalContainer>
                <div>
                    <img src={coin} alt="coin" className="m-5" />
                    <h1 className="text-2xl">SHKOOBY</h1>
                </div>
                <h1 className="text-md">APR</h1>
                <h1 className="text-3xl">100%</h1>
                <h1 className="text-xl">Lock Days</h1>
                <div>
                    <ProgressBar>
                        <ProgressPoint className="active">Flex</ProgressPoint>
                        <ProgressPoint>30 Days</ProgressPoint>
                        <ProgressPoint>90 Days</ProgressPoint>
                        <ProgressPoint>180 Days</ProgressPoint>
                    </ProgressBar>
                </div>
                <h1>SHKOOBY</h1>
                <div className="flex flex-wrap space-x-8">
                    <div className="flex items-center space-x-2">
                        <BsWallet2 className="w-6" />
                        <h1>Staked Balance: 41240</h1>
                    </div>

                    <div className="flex space-x-2">
                        <img src={coin} alt="coin" className="w-5" />
                        <h1>Staked Balance: 41240</h1>
                    </div>
                </div>
                <input
                    type="number"
                    className="text-left pl-6 text-xl text-black outline-none border-green border border-2 rounded-xl w-[70%] h-[50px]"
                />
                <div>
                    <PercentBar>
                        <PercentPoint>25%</PercentPoint>
                        <PercentPoint className="active">50%</PercentPoint>
                        <PercentPoint>75%</PercentPoint>
                        <PercentPoint>100%</PercentPoint>
                    </PercentBar>
                </div>
                <OutlineButton>Deposit</OutlineButton>
            </ModalContainer>
        </>
    );
};

export default StakeModal;
