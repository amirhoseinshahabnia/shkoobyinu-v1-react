import { useState, useEffect } from "react";
import { useConnect, useAccount } from "wagmi";
import { Link, useNavigate } from "react-router-dom"
import Modal from "./helpers/modal";
import "./helpers/modal.css";

const Login = () => {
    const [{ data, error }, connect] = useConnect()
    const [{ data: accountData, loading }, disconnect] = useAccount()
    // const [chain, setBlockchain] = useState("Ethereum")
    const navigate = useNavigate()

    return (

        <Modal className="p-12"
               activator={({ setShow }) => (

                <button className="z-50 relative mx-1 px-2 md:px-4 py-2 bg-indigo-700 text-white text-xs font-bold"
                        type="button"
                        onClick={() => setShow(true)}
                >
                    LOGIN
                </button>
            )}
        >

            <div className="flex flex-col items-center justify-center gap-2 ">
                <h1 className="text-white text-3xl -mt-24 font-bold mb-12">Login</h1>

                {
                    data.connectors.map((x) => (
                    <div key={x.id} className="w-2/6">
                        <button className="py-3 w-full bg-white rounded-sm hover:bg-slate-100" disabled={!x.ready} key={x.id} onClick={() => {
                            connect(x)
                        }}>
                            {x.name}
                            {!x.ready && ' (unsupported)'}
                        </button>
                    </div>
                ))}

                {
                    error && <div>{error?.message ?? 'Failed to connect'}</div>}

            </div>

        </Modal>
    )
}
export default Login