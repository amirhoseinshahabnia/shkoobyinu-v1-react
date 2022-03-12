import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Login from './components/login';
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
                <div className="relative m-h-vh text-white">
                    <div className="">
                        {accountData.ens?.name
                            ? `${accountData.ens?.name} (${accountData.address})`
                            : accountData.address}
                    </div>
                    <div className="">Connected to {accountData.connector.name}</div>
                    <button className="button" onClick={disconnect}>Disconnect</button>
                </div>
                <div className="text-white font-bold ma6">
                    {data?.formatted} {data?.symbol}
                </div>
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