import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Login from './components/login';
import { useAccount, useConnect, useBalance } from 'wagmi';
import { ClipboardIcon } from '@heroicons/react/outline';
import './investement.css';
import Background from './assets/img/background.jpg';
import Icon from './assets/img/Asset3.svg';
import CountDown from './components/countDown';

const Invest = () => {

    // const [{ data: connectData, error: connectError }, connect] = useConnect()
    // const [{ data: accountData }, disconnect] = useAccount({
    //     fetchEns: true,
    // })

    // const [{ data, error, loading }, getBalance] = useBalance({
    //     addressOrName: accountData?.address,
    //     token: '0x29A5c1Db7321C5c9EaE57F9366eE8eef00cA11fb',
    // })

    // if (loading) return <div>Fetching balance…</div>
    // if (error) return <div>Error fetching balance</div>

    // if (accountData) {
    //     console.log(accountData?.address);
    //     console.log(accountData?.connector);
    //     console.log(accountData?.chainId)
    // }

    return (

        <div id="investment-content" style={{ backgroundImage:`url(${Background})` }}>

            <div className="top-content text-white">

                <h1 className="main-heading">STAKING</h1>
                <h3 className="secondary-heading">
                <span className="desktop">Start SHKOOBY in one of our two pools to start earning rewards</span>
                <span className="mobile">Let your Shkooby Tokens work you</span>
                </h3>
                <CountDown  date={new Date('2022-03-T01:02:03')} />
                {/*<button className="desktop sc-furwcr jWBxkT primary-bg main-btn">CONNECT</button>*/}

            </div>

            <div className="bottom-content">

                <a href="https://hacken.io/wp-content/uploads/2021/11/Shkoobiinu_16112021SCAudit_Report.pdf" target="_blank" style={{ backgroundImage:`url(${Icon})` }}><span>View Audit Report</span></a>

            </div>

        </div>
    )

}
export default Invest