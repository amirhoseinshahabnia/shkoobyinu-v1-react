import styled from "styled-components";
import tw from "twin.macro";
import { BsWallet2 } from "react-icons/bs";

import { useEffect, useState, createRef } from "react";
import {
    chain,
    Provider,
    defaultChains,
    useConnect,
    useAccount,
    useNetwork,
    useBalance,
    useTransaction,
    useWaitForTransaction,
    useProvider,
    useSignMessage,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { utils, Contract, ethers, BigNumber, providers } from "ethers";

import Modal from "components/helpers/modal";
import "components/helpers/modal.css";
import ABI from "contracts/artifacts/StakingPool.json";

import coin from "assets/img/shkoobycoin.svg";

const ContainerWrapper = styled.div`
    ${tw`
    `};
    font-family: "Chakra Semi Bold";
`;

const Label = styled.label`
    ${tw`
        flex
        flex-row
        my-4
        mx-4
        rounded-full
        justify-center
        items-center
        cursor-pointer 
    `};

    h1 {
        ${tw`
            lg:text-lg
            mt-2
            text-sm
        `}
    }

    span {
        ${tw`
        w-8
        h-8
        border-2
        border-white
        rounded-full
        bg-black
        inline-block
        z-10
        `}
    }

    input {
        ${tw`
        hidden
    `};
    }

    input:checked + span {
        ${tw`
            border-green
            
        `}

        display: inline-block;
    }

    input:checked + span + h1 {
        ${tw`
            text-green
        `}
    }
`;

const Streak = styled.span`
    ${tw`
        w-full
        absolute
        h-1
        bg-white
        max-w-[300px]
    `};

    transform: translateY(-18px);
`;

const OutlineButton = styled.button`
    ${tw`
        flex
        relative
        justify-center
        items-center
        py-2
        px-10
        mx-1
        rounded-2xl
        text-lg
    `};
    outline: 2px solid #aeff57;
    outline-offset: -2px;
    width: 300px;
`;

const ShkoobyMock = () => {
    const [signMessage] = useSignMessage();
    const [{ data: accountData }, disconnect] = useAccount();

    const [period, setPeriod] = useState("");
    const [amount, setAmount] = useState("0");

    const [{ data, error, loading }, sendTransaction] = useTransaction({
        request: {
            to: period,
            value: amount,
        },
    });

    console.log(chain);
    console.log("amount" + amount);
    console.log("address" + period);
    console.log(accountData?.connector);

    const handleSubmit = async (event) => {
        await sendTransaction({ period }, { amount });
    };

    return (
        <Modal
            className="p-12 z-40 "
            activator={({ setShow }) => (
                <button
                    className="text-white font-bold"
                    type="button"
                    onClick={() => setShow(true)}
                >
                    Deposit
                </button>
            )}
        >
            <ContainerWrapper className="h-screen relative flex flex-col items-center justify-start gap-2 text-white py-12">
                <div>
                    <img src={coin} alt="coin" className="m-5" />
                    <h1 className="text-2xl">SHKOOBY</h1>
                </div>
                <h1 className="text-lg">APR</h1>
                <h1 className="text-3xl">100%</h1>
                <h1 className="text-xl">Lock Days</h1>

                <form
                    className="w-[90%] relative"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                >
                    <div className="flex w-full justify-center items-center">
                        <Streak></Streak>
                        <Label>
                            <div className="flex flex-col">
                                <input
                                    name="period"
                                    type="radio"
                                    value={process.env.REACT_APP_MAIN_CONTRACT}
                                    onChange={(event) =>
                                        setPeriod(event.target.value)
                                    }
                                />
                                <span></span>
                                <h1>Flex</h1>
                            </div>
                        </Label>

                        <Label>
                            <div className="flex flex-col">
                                <input
                                    name="period"
                                    type="radio"
                                    value={process.env.REACT_APP_POOL_SK_ONE}
                                    onChange={(event) =>
                                        setPeriod(event.target.value)
                                    }
                                />
                                <span></span>
                                <h1>30 D</h1>
                            </div>
                        </Label>

                        <Label>
                            <div className="flex flex-col">
                                <input
                                    name="period"
                                    type="radio"
                                    value={process.env.REACT_APP_POOL_SK_TWO}
                                    onChange={(event) =>
                                        setPeriod(event.target.value)
                                    }
                                />
                                <span></span>
                                <h1>90 D</h1>
                            </div>
                        </Label>

                        <Label>
                            <div className="flex flex-col">
                                <input
                                    name="period"
                                    type="radio"
                                    value={process.env.REACT_APP_POOL_SK_THR}
                                    onChange={(event) =>
                                        setPeriod(event.target.value)
                                    }
                                />
                                <span></span>
                                <h1>180 D</h1>
                            </div>
                        </Label>
                    </div>

                    <h1 className="text-lg mt-6">SHKOOBY</h1>
                    <div className="flex flex-wrap justify-center m-4 text-lg">
                        <div className="flex items-center space-x-2 mx-4">
                            <BsWallet2 className="w-6" />
                            <h1>Staked Balance: 41240</h1>
                        </div>

                        <div className="flex space-x-2 mx-4">
                            <img src={coin} alt="coin" className="w-5" />
                            <h1>Staked Balance: 41240</h1>
                        </div>
                    </div>

                    <input
                        name="amount"
                        value={amount}
                        type="number"
                        onChange={(event) => setAmount(event.target.value)}
                        className="text-left pl-6 text-xl text-black outline-none border-green border-2 rounded-xl w-[70%] h-[50px]"
                    />

                    <div className="flex w-full justify-center items-center mt-4">
                        <Streak></Streak>
                        <Label>
                            <div className="flex flex-col">
                                <input
                                    name="updateNumber"
                                    type="radio"
                                    value="0"
                                    onChange={(event) =>
                                        setAmount(event.target.value)
                                    }
                                />
                                <span></span>
                                <h1>25%</h1>
                            </div>
                        </Label>
                        <Label>
                            <div className="flex flex-col">
                                <input
                                    name="updateNumber"
                                    type="radio"
                                    value="250000"
                                    onChange={(event) =>
                                        setAmount(event.target.value)
                                    }
                                />
                                <span></span>
                                <h1>50%</h1>
                            </div>
                        </Label>
                        <Label>
                            <div className="flex flex-col">
                                <input
                                    name="updateNumber"
                                    type="radio"
                                    value="500000"
                                    onChange={(event) =>
                                        setAmount(event.target.value)
                                    }
                                />
                                <span></span>
                                <h1>75%</h1>
                            </div>
                        </Label>
                        <Label>
                            <div className="flex flex-col">
                                <input
                                    name="updateNumber"
                                    type="radio"
                                    value="1000000000"
                                    onChange={(event) =>
                                        setAmount(event.target.value)
                                    }
                                />
                                <span></span>
                                <h1>100%</h1>
                            </div>
                        </Label>
                    </div>

                    <div className="w-full text-sm justify-center flex my-6">
                        <h2 className="max-w-[30ch]">
                            Disclaimer: APR percentages are an estimation and
                            might change over time.
                        </h2>
                    </div>
                    <div className="flex flex-col my-4 items-center">
                        {!data && <OutlineButton>Deposit</OutlineButton>}

                        {loading && <button>loading ...</button>}

                        {data?.TransactionReceipt && (
                            <div>Transaction: {JSON.stringify(data)}</div>
                        )}
                    </div>
                    <a
                        href="https://app.uniswap.org"
                        target="_blank"
                        className="hover:border-b-2"
                    >
                        Buy Shkooby
                    </a>
                </form>
            </ContainerWrapper>
        </Modal>
    );
};
export default ShkoobyMock;
