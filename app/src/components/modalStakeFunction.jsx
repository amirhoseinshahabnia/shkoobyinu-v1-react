import { useEffect, useState, createRef } from 'react';
import { chain, Provider, defaultChains, useConnect, useAccount, useNetwork, useBalance, useTransaction, useWaitForTransaction, useProvider, useSignMessage } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { utils, Contract, ethers, BigNumber, providers } from 'ethers'

import Modal from "components/helpers/modal";
import "components/helpers/modal.css";
import ABI from "contracts/artifacts/StakingPool.json";

const ShkoobyMock = () => {

    const [signMessage] = useSignMessage();
    const [{ data: accountData }, disconnect] = useAccount();

    const [ period, setPeriod ] = useState( '' );
    const [ amount, setAmount ] = useState( '0' );

    const [{ data, error, loading }, sendTransaction] = useTransaction({
        request: {
            to: period,
            value: amount
        }
    })

    console.log(chain);
    console.log("amount" + amount);
    console.log("address" + period);
    console.log(accountData?.connector);

    const handleSubmit = async (event) => {
        await sendTransaction({period}, {amount});
    }

    return (

        <Modal className="p-12 z-40"
               activator={({ setShow }) => (


                <button className="text-white font-bold"
                        type="button"
                        onClick={() => setShow(true)}
                >
                    Deposit
                </button>

            )}
        >

            <div className="h-screen flex flex-col items-center justify-center gap-2 ">

                <h1 className="text-white text-3xl -mt-24 font-bold mb-12">SHKOOBY</h1>

                <form onSubmit={
                                e => {
                                 e.preventDefault()
                                 handleSubmit()
                                }
                               }>

                    <h2>LOCK DAYS</h2>

                    <div>
                        <input
                            name="period"
                            type="radio"
                            value={process.env.REACT_APP_MAIN_CONTRACT}
                            onChange={(event) => setPeriod(event.target.value)}
                        />
                        <input
                            name="period"
                            type="radio"
                            value={process.env.REACT_APP_POOL_SK_ONE}
                            onChange={(event) => setPeriod(event.target.value)}
                        />
                        <input
                            name="period"
                            type="radio"
                            value={process.env.REACT_APP_POOL_SK_TWO}
                            onChange={(event) => setPeriod(event.target.value)}
                        />
                        <input
                            name="period"
                            type="radio"
                            value={process.env.REACT_APP_POOL_SK_THR}
                            onChange={(event) => setPeriod(event.target.value)}
                        />
                    </div>

                    <h2>SHKOOBY</h2>

                    <div className="">

                        <div className="">Wallet Balance: </div>
                        <div className="">Staked Balance: </div>

                    </div>

                    <input
                        name="amount"
                        value={amount}
                        type="number"
                        onChange={(event) => setAmount(event.target.value)}
                    />

                    <div>
                        <input
                            name="updateNumber"
                            type="radio"
                            value="0"
                            onChange={(event) => setAmount(event.target.value)}
                        />
                        <input
                            name="updateNumber"
                            type="radio"
                            value="250000"
                            onChange={(event) => setAmount(event.target.value)}
                        />
                        <input
                            name="updateNumber"
                            type="radio"
                            value="500000"
                            onChange={(event) => setAmount(event.target.value)}
                        />
                        <input
                            name="updateNumber"
                            type="radio"
                            value="1000000000"
                            onChange={(event) => setAmount(event.target.value)}
                        />
                    </div>

                    <span className="">Disclaimer: APR percentages are an estimation and might change over time.</span>

                {   !data &&
                    
                        <button>Deposit</button>

                }

                {   loading &&
                    
                        <button>loading ...</button>

                }

                {   data?.TransactionReceipt && 

                    <div>Transaction: {JSON.stringify(data)}</div>

                } 

                    <a href="https://app.uniswap.org" target="_blank">Buy Shkooby</a>

                </form>

            </div>

        </Modal>
    )
}
export default ShkoobyMock
