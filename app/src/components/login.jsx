import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import Modal from "components/helpers/modal";
import "components/helpers/modal.css";

const Login = () => {

    return (

        <Modal className="p-12"
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

                <button>connect</button>

            </div>

        </Modal>
    )
}
export default Login