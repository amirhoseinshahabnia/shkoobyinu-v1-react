import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Login from './components/login';
import ShkoobyPool from './components/shkoobyPool';
import { useAccount, useConnect, useBalance } from 'wagmi';
import { ClipboardIcon } from '@heroicons/react/outline';

const Invest = () => {

    const [{ data: connectData, error: connectError }, connect] = useConnect()
    const [{ data: accountData }, disconnect] = useAccount({
        fetchEns: true,
    })

  const [{ data, error, loading }, getBalance] = useBalance({
    addressOrName: accountData?.address,
    token: '0x29A5c1Db7321C5c9EaE57F9366eE8eef00cA11fb',
  })

  if (loading) return <div>Fetching balance…</div>
  if (error) return <div>Error fetching balance</div>

if (accountData) {

    console.log(accountData?.address)
    console.log(accountData?.connector)
    console.log(accountData?.chainId)

        return (
            <>
            <div>
                <div>
                    {accountData.ens?.name
                        ? `${accountData.ens?.name} (${accountData.address})`
                        : accountData.address}
                </div>
                <div>Connected to {accountData.connector.name}</div>
                <button onClick={disconnect}>Disconnect</button>
            </div>
            <div>
                {data?.formatted} {data?.symbol} {/*{data?.value}*/}
            </div>

            <ShkoobyPool />
            </>
        )
    }

    return (
        <div className="explore">
            <section className='flex flex-wrap justify-center'>
                <Login />
            </section>
        </div>
    )
}
export default Invest