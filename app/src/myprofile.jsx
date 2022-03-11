import { useAccount } from 'wagmi';
import { useEffect, useState } from 'react';
import Login from './login';
import { ClipboardIcon } from "@heroicons/react/outline"

const MyProfile = () => {
    const [{ data: accountData, loading }, disconnect] = useAccount()
    const [chain, setBlockchain] = useState("Ethereum")
    
    useEffect(async () => {
        if (accountData) {

        }
    }, [accountData && accountData.address, chain])

    return (
        <div className="profile">
            {
                loading ?
                    <div><h1>Loading...</h1></div> :
                    accountData ?
                        <div>
                            <header className=' py-40  mb-12 w-full flex flex-col items-center justify-center alchemy text-white '>

                                <div className='flex flex-col items-center'>

                                    <div className='flex items-center'>
                                        <h3 className='mt-4 text-l'>{accountData.address}</h3>
                                        <ClipboardIcon onClick={() => navigator.clipboard.writeText(accountData.address)} className="h-4 w-4 -mt-2 text-slate-200 cursor-pointer"></ClipboardIcon>
                                    </div>

                                    <div className='mt-4'>

                                    </div>

                                </div>

                            </header>

                            <div className='flex flex-wrap justify-center'>


                            </div>

                        </div>
                        :
                        <div>
                            <Login />
                        </div>
            }
        </div>
    )
}

export default MyProfile