import { useState, useEffect } from "react";
import { useConnect, useAccount } from "wagmi";
import { Link, useNavigate } from "react-router-dom"
import Modal from "helpers/modal";
import "helpers/modal.css";

const Login = () => {
    const [{ data, error }, connect] = useConnect()
    const [{ data: accountData, loading }, disconnect] = useAccount()
    // const [chain, setBlockchain] = useState("Ethereum")
    const navigate = useNavigate()

    return (

        <Modal className=""
               activator={({ setShow }) => (

                <button className=""
                        type="button"
                        onClick={() => setShow(true)}
                >
                    LOGIN
                </button>
            )}
        >

            <div className="">
                <h1 className="">Login</h1>

                {
                    data.connectors.map((x) => (
                    <div key={x.id} className="">
                        <button className="" disabled={!x.ready} key={x.id} onClick={() => {
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