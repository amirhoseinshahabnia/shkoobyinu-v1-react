import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroImg from './assets/img/shkooby-hero.png';
import gradientBg from './assets/img/grad-bg@2x.png';
import arrowBg from './assets/img/li-bg@2x.png';
import circleBg from './assets/img/li-circle@2x.png';

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
  background: url(${gradientBg});

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

  @media screen and (max-width: 1440px) {
    .timeline {
      padding-top: 100px;
      width: 90%;
      max-width: 1400px;
      margin: 0 auto;
      position: relative;
    }
  }
`;

const Home = () => {
  const [owner, setOwner] = useState('');
  const [contractAddress, setContractAddress] = useState('');
  const [chain, setBlockchain] = useState('Ethereum');

  console.log(owner)
  console.log(contractAddress)
  console.log(chain)

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
        <h2 className="white main-heading center-content">SHKOOBY ROADMAP</h2>
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

      <footer className="page-footer">
      </footer>
    </div>
  );
};

export default Home;
