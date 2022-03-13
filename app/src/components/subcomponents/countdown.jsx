import { useEffect, useState, createRef } from 'react';
import Countdown from 'react-countdown';

import Modal from "components/helpers/modal";
import "components/helpers/modal2.css";

const CountDown = () => {

    return (

        <Modal className="p-12 z-40"
               activator={({ setShow }) => (


                <button className="sc-furwcr jWBxkT primary-bg main-btn"
                        type="button"
                        onClick={() => setShow(true)}
                >
                    CONNECT WALLET
                </button>

            )}
        >

            <div className="contain">

                <h3 className="time-Title">STAKING WILL INITIATE IN</h3>
                <Countdown className="time-time" date={'2022-03-14T10:02:03'} />

            </div>

        </Modal>
    )
}
export default CountDown
