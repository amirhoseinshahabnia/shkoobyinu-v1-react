import React, { useState, useEffect } from 'react';
import Login from './login';

const Home = () => {
  // const [owner, setOwner] = useState('');
  // const [contractAddress, setContractAddress] = useState('');
  // const [NFTs, setNFTs] = useState('');
  // const [chain, setBlockchain] = useState('Ethereum');

  useEffect(() => {
    console.log('mounted');
  });

  return (
    <div>
      <Login />

      <div>
        <section className="section relative h-vh relative">
          <div className="po-a xy">
            <div className="ft-center w-15">
              <div className="text-center black">
                <h1
                  className="mx-auto mb40"
                  value="0x29a5c1db7321c5c9eae57f9366ee8eef00ca11fb"
                >
                  SHKOOBY
                </h1>

                <p className="black ft-1xl">
                  A community-driven meme token. We are the future of the
                  Metaverse.
                </p>

                <p className="mb40 black">
                  Stay tuned for DEX platform, Games, NFT Marketplace and MEMES
                </p>

                <a href="#" className="mx-auto btn--primary report mb40">
                  View Audit Report
                </a>
                <a href="#" className="positive top-10">
                  <img
                    src=""
                    alt="logo"
                    width="80"
                    height="40"
                    className="mx-auto"
                  />
                </a>
              </div>

              <br />
              <br />

              <br />
              <br />

              <div className="ft-center black noflex">
                <div className="black">
                  <h3 className="black ft-4xl mb20 mt20">
                    SHKOOBY INU CONTRACT ADDRESS
                  </h3>

                  <input
                    id="adddress"
                    className="blk w-100 mb40  btn--secondary"
                    value="0x29a5c1db7321c5c9eae57f9366ee8eef00ca11fb"
                  />

                  <span className="blo`ck mb10 blk"></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="howTo" className="bg-gradient-pink">
          <div className="pt50 pb50 pl40 pr40 m-pr0 m-pl0 ">
            <h2 className="headline center">How to Buy Shkooby</h2>

            <div className="black center">
              <div className="flx justify-center mobile-swipe">
                <div className="swipe" style={{ flexGrow: 3 }}>
                  <p className="blk ft-3xl lg5">1</p>
                  <span className="blk alt-2">
                    create
                    <br />a wallet
                  </span>
                </div>

                <div className="dt" style={{ flexGrow: 2 }}>
                  <p
                    className="blk ft-3xl relative"
                    style={{ height: '5px', top: '40%' }}
                  >
                    {' '}
                    &#9632; &#9632; &#9632; &#9632;{' '}
                  </p>
                </div>

                <div className="swipe" style={{ flexGrow: 3 }}>
                  <p className="blk ft-3xl lg5">2</p>
                  <span className="blk alt-2">
                    Fund your wallet
                    <br />
                    with Ether
                  </span>
                </div>

                <div className="dt" style={{ flexGrow: 2 }}>
                  <p
                    className="blk ft-3xl relative"
                    style={{ height: '5px', top: '40%' }}
                  >
                    {' '}
                    &#9632; &#9632; &#9632; &#9632;{' '}
                  </p>
                </div>

                <div className="swipe" style={{ flexGrow: 3 }}>
                  <p className="blk ft-3xl lg5">3</p>
                  <span className="blk alt-2">
                    Input Shkoobyy
                    <br />
                    Address in Uniswap
                  </span>
                </div>

                <div className="dt" style={{ flexGrow: 2 }}>
                  <p
                    className="blk ft-3xl relative"
                    style={{ height: '5px', top: '40%' }}
                  >
                    {' '}
                    &#9632; &#9632; &#9632; &#9632;{' '}
                  </p>
                </div>

                <div className="swipe" style={{ flexGrow: 3 }}>
                  <p className="blk ft-3xl lg5">4</p>
                  <span className="blk alt-2">
                    Hit 'SWAP' on
                    <br />
                    Uniswap
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-black">
            <section id="roadmap">
              <div className="container">
                <h2 className="mb30">SHKOOBY ROADMAP</h2>
              </div>
            </section>

            <section className="timeline">
              <ul>
                <li>
                  <div>
                    <time>Launch</time>
                    Fair launch with 100% circulating supply on the market
                    <br />
                    No presale
                    <br />
                    Liquidity Burnt
                    <br />
                    CoinGecko Listing
                    <br />
                    Community Marketing Fund
                    <br />
                    Marketing Campaign
                    <br />
                    Website Launch
                    <br />
                  </div>
                </li>
                <li>
                  <div>
                    <time>Phase 1</time>
                    CoinMarketcap Listing
                    <br />
                    Community Contests
                    <br />
                    1,000 Holders
                    <br />
                    2,000 Telegram Members
                    <br />
                    2,000 Twitter Followers
                    <br />
                    3,000 Instagram Followers
                    <br />
                    Twitter & Instagram Campaigns
                    <br />
                  </div>
                </li>
                <li>
                  <div>
                    <time>Phase 2</time>
                    Fair launch with 100% circulating supply on the market
                    <br />
                    5,000 Holders
                    <br />
                    5,000 Telegram Members
                    <br />
                    First Phase Partner Reveals
                    <br />
                    Billboard Campaign
                    <br />
                    Reddit Community Campaign
                    <br />
                    Litepaper Release
                    <br />
                    Contract Audit
                    <br />
                    Tier 3 Exchange Listings
                    <br />
                  </div>
                </li>
                <li>
                  <div>
                    <time>Phase 3</time>
                    <br />
                    10,000 Holders
                    <br />
                    15,000 Telegram Members
                    <br />
                    2nd Phase Partner Reveals
                    <br />
                    SHKOOBY-PAPER Release (Whitepaper)
                    <br />
                    Growth Marketing Campaign (Buses/Taxis)
                    <br />
                    SHKOOBY-VERSE Reveal (Metaverse)
                    <br />
                  </div>
                </li>
                <li>
                  <div>
                    <time>Phase 5</time>
                    100,000 Holders
                    <br />
                    100,000 Telegram Members
                    <br />
                    Viral Marketing Campaign
                    <br />
                    3rd Phase Partner Reveals
                    <br />
                    SHKOOBY-VERSE Full Release
                    <br />
                    First SHKOOBY-VERSE Game
                    <br />
                    SHKOOBY-SWAP Launch
                    <br />
                    Launch Party
                    <br />
                    Celebrity Meet & Greet
                    <br />
                  </div>
                </li>
              </ul>
            </section>
            <footer className="page-footer">
              <span>made by </span>
              <a href="https://georgemartsoukos.com/" target="_blank">
                <img
                  width="24"
                  height="24"
                  src="https://assets.codepen.io/162656/george-martsoukos-small-logo.svg"
                  alt="George Martsoukos logo"
                />
              </a>
            </footer>
          </div>
        </section>

        <section>
          <div></div>
        </section>

        <footer>
          <div></div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
