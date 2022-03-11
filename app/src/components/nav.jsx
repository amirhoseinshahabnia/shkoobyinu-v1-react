import { Buffer } from 'buffer';
import { Link } from 'react-router-dom';
import Login from '../login';
import { useAccount } from 'wagmi';
import { ClipboardIcon } from '@heroicons/react/outline';
import styled from 'styled-components';
import { ReactComponent as MainLogo } from '../assets/img/logo-dark.svg';
import ChakraSemiBold from '../assets/fonts/ChakraPetch-Bold.ttf';

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
`;

const StyledButton = styled.button`
  width: 20%;
  max-width: 231px;
`;

const Nav = () => {
  // const [{ data: accountData }, disconnect] = useAccount();
  return (
    <StyledNav>
      <Link to="/" className="logo-link">
        <MainLogo id="heaedr-logo" className="opacity" />
      </Link>
      <StyledLinks>
        <li>
          <a className="opacity white" href="#">
            Roadmap
          </a>
        </li>
        <li>
          <a className="opacity white external" href="#">
            Litepaper
          </a>
        </li>
        <li>
          <a className="opacity white" href="#">
            Staking
          </a>
        </li>
        <li>
          <a className="opacity white external" href="#">
            Staking Guide
          </a>
        </li>
      </StyledLinks>
      <StyledButton className="primary-bg main-btn">Buy Shkooby</StyledButton>
    </StyledNav>
  );
};

export default Nav;
