import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import SideDrawer from 'components/sideDrawer';
import Backdrop from 'components/backdrop';
import { ReactComponent as MainLogo } from 'assets/img/logo-dark.svg';
import mobileLogo from 'assets/img/mobileLogo.svg';

const StyledNav = styled.header`
  height: 65px;
  border-bottom: 1px solid #fff;
  background-color: #000;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;

  .logo-link {
    width: 15%;
  }

  #heaedr-logo {
    display: block;
    max-width: 250px;
    cursor: pointer;
  }

  #heaedr-logo-mobile {
    display: block;
    height: 80px;
  }

  .ham-ctn {
    flex-basis: 100%;
    display: flex;
    justify-content: flex-end;
  }

  #hamburger-menu {
    width: 75px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    height: 100px;

    .logo-link {
      flex-basis: 100%;
    }
  }

  @media screen and (max-width: 1000px) {
    padding: 0 10px;
  }

  @media screen and (max-width: 480px) {
    padding: 0 10px;

    .logo-link {
      flex-basis: 80%;
    }

    .ham-ctn {
      flex-basis: 80%;
    }

    #hamburger-menu {
      width: 60px;
    }

    #heaedr-logo-mobile {
      display: block;
      height: 60px;
    }
  }
`;

const StyledLinks = styled.ul`
  font-family: 'Chakra Bold';
  list-style: none;
  padding: 0;
  display: flex;
  width: 65%;
  justify-content: space-around;

  li {
    font-size: 1.125em;
    text-transform: uppercase;
  }

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 769px) and (max-width: 809px) {
    width: 56%;
  }

  @media screen and (min-width: 810px) and (max-width: 999px) {
    width: 60%;
  }
`;

const StyledButton = styled.button`
  width: 20%;
  max-width: 231px;

  @media screen and (max-width: 768px) {
    width: 230px;
    flex-basis: 100%;
  }

  @media screen and (max-width: 480px) {
    width: 200px;
    flex-basis: 120%;
  }

  @media screen and (max-width: 390px) {
    flex-basis: 130%;
  }

  @media screen and (min-width: 768px) and (max-width: 999px) {
    width: 175px;
    max-width: 175px;
    flex-basis: 100%;
  }

  @media screen and (min-width: 1000px) and (max-width: 1200px) {
    width: 190px;
    max-width: 190px;
    flex-basis: 100%;
  }
`;

const Nav = () => {

const location = useLocation();

const isCurrentURL = (url) => {
    return location.pathname.toLowerCase() === url.toLowerCase();
}


  // const [{ data: accountData }, disconnect] = useAccount();

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  const isTablet = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <StyledNav>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <ul className="mobile-links">
          <li>
            <a className="opacity white" href="/">
              Roadmap
            </a>
          </li>
          <li className="external-mobile">
            <a
              className="opacity white"
              href="https://www.docdroid.net/7LeGzhU/shkooby-inu-litepaper-deck-1-pdf"
              target="_blank"
            >
              Litepaper
            </a>
          </li>
          <li>
            <Link className="opacity white" to="/staking">
              Staking
            </Link>
            <ul>
              <li className="wallet white">Dashboard</li>
            </ul>
          </li>
          <li className="external-mobile">
            <a className="opacity white" href="#">
              Staking Guide
            </a>
          </li>
        </ul>
      </SideDrawer>
      <Link to="/" className="logo-link">
        {isTablet ? (
          <img id="heaedr-logo-mobile" className="opacity" src={mobileLogo} />
        ) : (
          <MainLogo id="header-logo" className="opacity" />
        )}
      </Link>
      <StyledLinks>
        <li>
          <a className="opacity white" href="/">
            Roadmap
          </a>
        </li>
        <li>
          <a
            className="opacity white external"
            href="https://www.docdroid.net/7LeGzhU/shkooby-inu-litepaper-deck-1-pdf"
            target="_blank"
          >
            Litepaper
          </a>
        </li>
        <li>
          <Link className="opacity white" to="/staking">
            Staking
          </Link>
        </li>
        <li>
          <a className="opacity white external" href="#">
            Staking Guide
          </a>
        </li>
      </StyledLinks>
                { !isCurrentURL('/staking') ? <>
                    <button className="primary-bg main-btn invest-only" href="/Profile">BUY SHKOOBY</button>
                  </> 
                  : <>
                    <button className="primary-bg main-btn invest-only" href="/Profile">CONNECT WALLET</button>
                  </>  }

      {/*<StyledButton className="primary-bg main-btn">Buy Shkooby</StyledButton>*/}
      
      
      
      <StyledButton className="primary-bg main-btn invest-only hidden">Buy Shkooby</StyledButton>
    {isTablet ? (
        <div className="header__btn ham-ctn" onClick={setDrawerIsOpen}>

            <div id="navButton" onClick={setDrawerIsOpen} className={` p25 ${drawerIsOpen ? "open" : ""}`}>
                <div className="bars link"><span></span><span></span><span></span><div className="other-bar"></div></div>
            </div>

        </div>
      ) : null}

    </StyledNav>
  );
};

export default Nav;
