import { useEffect, useState, createRef } from 'react';
import { useAccount } from "wagmi";
import { Contract, ethers } from 'ethers'
import moment from "moment";
import Modal from "./helpers/modal";
import "./helpers/modal.css";
import {
  humanReadableEscrowState,
  humanReadableUnixTimestamp,
} from "./utils/formatters";
import PoolContractOne from "../contracts/artifacts/StakingPool.json";

const escrowAddress = "0x376cfE58c65A30C4a7dd1B8aCa87d5E7e81Af04A"

const provider = new ethers.providers.Web3Provider(window.ethereum);
const contract = new ethers.Contract(escrowAddress, PoolContractOne.abi, provider);

// Show metamask for users to decide if they will pay or not
async function requestAccount() {
  try {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  } catch (error) {
    console.log("error");
    console.error(error);

    alert("Login to Metamask first");
  }
}

const ShkoobyPool = () => {

    const [contractEnd, setContractEnd] = useState(true);
    const [escrow, setEscrow] = useState({
        state: null,
        balance: 0,
        price: 1, // 1 ETH by default
        sales: 0,
        previousBuyers: [],
    });
  

 // Use object instead?
  const [seller, setSeller] = useState();
  const [sellerBalance, setSellerBalance] = useState();

  // Use object instead?
  const [buyer, setBuyer] = useState();
  const [buyerBalance, setBuyerBalance] = useState();

  // Use object instead?
  const [user, setUser] = useState();
  const [userBalance, setUserBalance] = useState();

  const [role, setRole] = useState();
  useEffect(() => {
    async function fetchData() {

      try {
        // Contract Events

        contract.on("Deposited", async (depositNumber, depositor, amount, unlockBlock, event) => {
          event.removeListener(); // Solve memory leak with this.

          const contractState = await contract.state();
          // const contractState = await contract.showState();

          const contractBalance = await provider.getBalance(contract.address);
          const previousBuyers = await contract.listPreviousBuyers();

          setEscrow({
            ...escrow,
            state: humanReadableEscrowState(contractState), // Easier
            // state: await contractState.toString(),
            balance: ethers.utils.formatEther(contractBalance.toString()),
            previousBuyers,
          })

          const contractSeller = await contract.seller();
          const contractSellerBalance = await provider.getBalance(contractSeller);
          setSellerBalance(ethers.utils.formatEther(contractSellerBalance));

          // console.log("when");
          // console.log(when);
          // console.log(humanReadableUnixTimestamp(when));
          console.log("Event - Closed");
          console.log(`State - ${humanReadableEscrowState(contractState)}`);
          console.log(`${moment(humanReadableUnixTimestamp(when)).fromNow()} - ${humanReadableUnixTimestamp(when)}`)
        });

        contract.on("Withdraw", async (depositNumber, event) => {
          event.removeListener(); // Solve memory leak with this.

          const contractState = await contract.state();
          const contractBalance = await provider.getBalance(contract.address);
          const previousBuyers = await contract.listPreviousBuyers();

          setEscrow({
            ...escrow,
            state: humanReadableEscrowState(contractState),
            balance: ethers.utils.formatEther(contractBalance.toString()),
            previousBuyers,
          })

          setBuyer(by);
          const contractBuyerBalance = await provider.getBalance(by);
          setBuyerBalance(ethers.utils.formatEther(contractBuyerBalance));

          setRole("buyer");
          console.log("This visitor became the buyer of this contract");

          // console.log("when");
          // console.log(when);
          // console.log(humanReadableUnixTimestamp(when));
          console.log("Event - ConfirmPurchase");
          console.log(`By - ${by}`);
          console.log(`State - ${humanReadableEscrowState(contractState)}`);
          console.log(`${moment(humanReadableUnixTimestamp(when)).fromNow()} - ${humanReadableUnixTimestamp(when)}`)
        });

        const signer = provider.getSigner(); // user

        const contractUser = await signer.getAddress();
        setUser(contractUser);

        const contractUserBalance = await provider.getBalance(contractUser);
        setUserBalance(ethers.utils.formatEther(contractUserBalance));


      } catch (error) {
        console.log("error");
        console.error(error);
      }
    }

    fetchData();
  }, []);

    return (

        <Modal className="p-12 z-40"
               activator={({ setShow }) => (

                <button className="relative top-4 md:top-48 mx-1 px-2 md:px-4 py-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-500 text-xs font-bold z-40"
                        type="button"
                        onClick={() => setShow(true)}
                >
                    Deposit
                </button>
            )}
        >

            <div className="h-screen flex flex-col items-center justify-center gap-2 ">
                <h1 className="text-white text-3xl -mt-24 font-bold mb-12">SHKOOBY</h1>

                

            </div>

        </Modal>
    )
}
export default ShkoobyPool