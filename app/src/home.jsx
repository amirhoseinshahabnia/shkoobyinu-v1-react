import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from 'react-responsive';
import { ToastContainer, toast } from 'react-toastify';
import heroImg from './assets/img/shkooby-hero.png';
import gradientBg from './assets/img/grad-bg@2x.png';
import gradientBgLrg from './assets/img/grad-bg-lrg.png';
import arrowBg from './assets/img/li-bg@2x.png';
import circleBg from './assets/img/li-circle@2x.png';
import sqaures from './assets/img/steps-squares.png';
import copyIcon from './assets/img/copy-icon@2x.png';
import 'react-toastify/dist/ReactToastify.css';

gsap.registerPlugin(ScrollTrigger);

const StyledHero = styled.section`
  padding-top: 75px;
  img {
    display: block;
    width: 100%;
  }
`;

const StyledTimeline = styled.section`
  padding: 50px 0 150px;
  position: relative;
  /* background: url(${gradientBg}); */

  .timeline {
    padding-top: 100px;
    width: 80%;
    max-width: 1300px;
    margin: 0 auto;
    position: relative;
  }

  .timeline .vl {
    border-left: 2px solid #fff;
    position: absolute;
    left: 50%;
    margin-left: -1px;
    top: 75px;
    bottom: 10px;
  }

  .timeline .right {
    display: flex;
    align-items: flex-end;
  }

  .timeline .right > div {
    margin-left: 57%;
  }

  .timeline ul {
    list-style: none;
    padding-left: 0;
  }

  .timeline li {
    font-family: 'Chakra Regular';
    font-size: 1.5625em;
    margin-bottom: 25px;
    position: relative;
  }

  .timeline li:last-child {
    margin-bottom: 0;
  }

  .timeline li::before {
    content: '';
    position: absolute;
    top: 0;
    left: -35px;
  }

  .timeline li.ticked::before {
    width: 29px;
    height: 29px;
    background: url(${arrowBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .timeline li.circle::before {
    width: 24px;
    height: 24px;
    background: url(${circleBg});
    background-position: left center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .tl-content {
    padding-top: 30px;
  }

  .tl-content > div {
    padding-left: 60px;
  }

  .tl-content:first-child {
    padding-top: 0;
  }

  .phase-2 {
    border: 1px solid #fff;
    border-radius: 50px;
    padding-top: 30px;
    padding-bottom: 30px;
    width: 40%;
    padding-right: 30px;
    max-width: 500px;
  }

  #grad-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 1440px) {
    .timeline {
      padding-top: 100px;
      width: 90%;
      max-width: 1400px;
      margin: 0 auto;
      position: relative;
    }
  }

  @media screen and (min-width: 1441px) {
    padding: 200px 0;
  }
`;

const StyledSteps = styled.section`
  width: 80%;
  margin: 0 auto;
  padding: 75px 0;

  > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .step-title {
    font-family: 'VT Regular';
    font-size: 10.3125em;
    margin: 0;
  }

  .step-sub {
    font-family: 'Poppins Semi Bold';
    font-size: 1.25em;
    text-transform: uppercase;
  }

  h5 {
    font-family: 'Press Start';
    font-size: 2em;
    margin-top: 0;
    text-transform: uppercase;
  }
`;

const StyledAddressInput = styled.section`
  padding: 75px 0;
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h5 {
    font-size: 2.2em;
    font-family: 'Chakra Semi Bold';
    margin: 0 0 30px;
  }

  .input-ctn {
    display: flex;
    align-items: center;
    width: 80%;
    justify-content: center;
  }

  input {
    width: 80%;
    height: 60px;
    border: none;
    border-radius: 100px;
    font-size: 21px;
    text-align: center;
  }

  input:disabled {
    background-color: #fff;
    color: #000;
  }

  img {
    cursor: pointer;
    width: 43px;
    display: block;
    margin-left: 30px;
  }
`;

const Home = () => {
  const [owner, setOwner] = useState('');
  const [contractAddress, setContractAddress] = useState('');
  const [chain, setBlockchain] = useState('Ethereum');

  const INU_ADDRESS = '0x29a5c1db7321c5c9eae57f9366ee8eef00ca11fb';

  console.log(owner);
  console.log(contractAddress);
  console.log(chain);

  const isLargeDesktop = useMediaQuery({
    query: '(min-width: 1441px)',
  });

  function copyText(entryText) {
    navigator.clipboard.writeText(entryText);
  }

  const copyClickHandler = () => {
    copyText(INU_ADDRESS);
    toast.success('Copied To Clipboard');
  };

  const launchRef = useRef(null);
  const phaseOneRef = useRef(null);
  const phaseTwoRef = useRef(null);
  const phaseThreeRef = useRef(null);
  const phaseFourRef = useRef(null);

  useEffect(() => {
    const launchEl = launchRef.current;
    const oneEl = phaseOneRef.current;
    const twoEl = phaseTwoRef.current;
    const threeEl = phaseThreeRef.current;
    const fourEl = phaseFourRef.current;

    gsap.fromTo(
      launchEl,
      { x: -500, opacity: 0 },
      { opacity: 1, x: 0, duration: 1, scrollTrigger: { trigger: launchEl } }
    );

    gsap.fromTo(
      oneEl,
      { x: 500, opacity: 0 },
      { opacity: 1, x: 0, duration: 1, scrollTrigger: { trigger: oneEl } }
    );

    gsap.fromTo(
      twoEl,
      { x: -500, opacity: 0 },
      { opacity: 1, x: 0, duration: 1, scrollTrigger: { trigger: twoEl } }
    );

    gsap.fromTo(
      threeEl,
      { x: 500, opacity: 0 },
      { opacity: 1, x: 0, duration: 1, scrollTrigger: { trigger: threeEl } }
    );

    gsap.fromTo(
      fourEl,
      { x: -500, opacity: 0 },
      { opacity: 1, x: 0, duration: 1, scrollTrigger: { trigger: fourEl } }
    );
  }, []);

  return (
    <div>
      <StyledHero className="center-content">
        <h1 className="white main-heading">SHKOOBY</h1>
        <p className="white sub-heading">We are the future of the Metaverse</p>
        <img src={heroImg} alt="Shkooby" className="hero-img" />
      </StyledHero>
      <StyledTimeline id="frontTime">
        {isLargeDesktop ? (
          <img src={gradientBgLrg} alt="Gradient Background" id="grad-bg" />
        ) : (
          <img src={gradientBg} alt="Gradient Background" id="grad-bg" />
        )}
        <h2
          className="white main-heading center-content"
          style={{ position: 'relative' }}
        >
          SHKOOBY ROADMAP
        </h2>
        <div className="timeline">
          <div className="vl"></div>
          <div className="left tl-content white" ref={launchRef}>
            <div>
              <h4 className="secondary-heading">Launch</h4>
              <ul>
                <li className="ticked">
                  Fair launch with 100% circulating
                  <br />
                  supply on the market
                </li>
                <li className="ticked">No presale</li>
                <li className="ticked">Liquidity Burnt</li>
                <li className="ticked">CoinGecko Listing</li>
                <li className="ticked">Community Marketing Fund</li>
                <li className="ticked">Marketing Campaign</li>
                <li className="ticked">Website Launch</li>
              </ul>
            </div>
          </div>
          <div className="right tl-content white" ref={phaseOneRef}>
            <div>
              <h4 className="secondary-heading">Phase 1</h4>
              <ul>
                <li className="ticked">CoinMarketcap Listing</li>
                <li className="ticked">Community Contests</li>
                <li className="ticked">Social media growth campaign</li>
              </ul>
            </div>
          </div>
          <div className="left tl-content white" ref={phaseTwoRef}>
            <div className="phase-2">
              <h4 className="secondary-heading">Phase 2</h4>
              <ul>
                <li className="ticked">Staking Dapp Release</li>
                <li className="circle">NFT Collection reveal and Mint</li>
                <li className="circle">Tier 2 & 3 exchange listings</li>
                <li className="circle">Growth Marketing Campaign</li>
              </ul>
            </div>
          </div>
          <div className="right tl-content white" ref={phaseThreeRef}>
            <div>
              <h4 className="secondary-heading">Phase 3</h4>
              <ul>
                <li className="circle">Shkoobyverse Beta release</li>
                <li className="circle">Shkoobyverse Launch Event Party</li>
                <li className="circle">Shkooby-Paper Release (white paper)</li>
                <li className="circle">Viral Marketing Campaign</li>
              </ul>
            </div>
          </div>
          <div className="left tl-content white" ref={phaseFourRef}>
            <div>
              <h4 className="secondary-heading">Phase 4</h4>
              <ul>
                <li className="circle">Shkooby Partner reveals</li>
                <li className="circle">Shkoobyverse Alpha release</li>
                <li className="circle">Re-occuring Shkooby Events</li>
                <li className="circle">First game within the Shkoobyverse</li>
                <li className="circle">
                  Celebrity Meet and Greet at first
                  <br />
                  real world Shkooby party
                </li>
              </ul>
            </div>
          </div>
        </div>
      </StyledTimeline>
      <StyledSteps>
        <h5 className="teal center-content">How To Buy SHKOOBY</h5>
        <div>
          <div className="step-content white center-content">
            <p className="step-title">1</p>
            <p className="step-sub">
              Create <br />A Wallet
            </p>
          </div>
          <div className="steps-squares">
            <img src={sqaures} alt="" id="steps-squares" />
          </div>
          <div className="step-content white center-content">
            <p className="step-title">2</p>
            <p className="step-sub">
              Find Your <br />
              Wallet With ETH
            </p>
          </div>
          <div className="steps-squares">
            <img src={sqaures} alt="" id="steps-squares" />
          </div>
          <div className="step-content white center-content">
            <p className="step-title">3</p>
            <p className="step-sub">
              Input SHKOOBY <br />
              Adress In Uniswap
            </p>
          </div>
          <div className="steps-squares">
            <img src={sqaures} alt="" id="steps-squares" />
          </div>
          <div className="step-content white center-content">
            <p className="step-title">4</p>
            <p className="step-sub">
              Hit 'Swap' <br />
              On Uniswap
            </p>
          </div>
        </div>
      </StyledSteps>
      <StyledAddressInput>
        <h5 className="accent-color">Shkooby Inu Contact Address</h5>
        <div className="input-ctn">
          <input
            type="text"
            value="0x29a5c1db7321c5c9eae57f9366ee8eef00ca11fb"
            readonly
            disabled
          />
          <img
            src={copyIcon}
            alt="Copy Ctn"
            className="opacity"
            onClick={copyClickHandler}
          />
        </div>
      </StyledAddressInput>

      <footer className="page-footer"></footer>
      <ToastContainer type="success" theme="dark" />
    </div>
  );
};

export default Home;
