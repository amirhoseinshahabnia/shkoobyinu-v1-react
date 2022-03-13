import styled from 'styled-components';
import { Link } from 'react-router-dom';
const StyledFooter = styled.footer`
  padding: 50px 100px;
  position: relative;
  display: flex;
  justify-content: space-between;

  .top-border {
    height: 2px;
    width: 100%;
    background: rgb(120, 33, 215);
    background: linear-gradient(
      90deg,
      rgba(120, 33, 215, 1) 0%,
      rgba(144, 253, 239, 1) 100%
    );
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  h5 {
    font-family: 'ArchivoBlack Regular';
    font-size: 1.6em;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 2rem;
  }

  p {
    font-family: 'Chakra Bold';
    font-size: 1.125em;
  }

  ul {
    padding: 0;
    list-style: none;
    font-family: 'Chakra Bold';
    font-size: 1.125em;
  }

  ul li {
    text-transform: uppercase;
    margin-bottom: 15px;
  }

  ul li:last-child {
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
  }

  .right-ctn {
    display: flex;
  }

  .right-ctn .right-links-ctn {
    margin-left: 100px;
  }

  @media screen and (max-width: 768px) {
    padding: 50px 20px;

    .right-ctn .right-links-ctn {
      margin-left: 50px;
    }

    .left-ctn {
      width: 43%;
    }

    h5 {
      font-size: 1.2em;
      margin-bottom: 20px;
    }

    p {
      font-size: 1em;
    }

    ul {
      font-size: 1em;
    }
  }

  @media screen and (max-width: 580px) {
    padding: 40px 10px;

    .left-ctn {
      width: 40%;
    }

    .right-ctn {
      width: 45%;
      justify-content: space-between;
    }

    .right-ctn .right-links-ctn {
      margin-left: 0;
    }

    h5 {
      font-size: 1.1em;
      margin-bottom: 15px;
    }

    p {
      font-size: 0.9em;
    }

    ul {
      font-size: 0.8em;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter className="white">
      <div className="top-border"></div>
      <div className="left-ctn">
        <h5>
          <Link to="/" className="white opacity">
            Shkooby Inu
          </Link>
        </h5>
        <p>{`Copyright © ${new Date().getFullYear()} Shkooby Inu.`}</p>
      </div>
      <div className="right-ctn">
        <ul>
          <li><a href="https://etherscan.io/token/0x29a5c1db7321c5c9eae57f9366ee8eef00ca11fb" target="_blank">Token</a></li>
          <li><a href="#roadmap">Roadmap</a></li>
          <li><a href="https://www.docdroid.net/7LeGzhU/shkooby-inu-litepaper-deck-1-pdf" target="_blank">Litepaper</a></li>
          <li><a href="https://app.uniswap.org" target="_blank">Buy Now</a></li>
        </ul>
        <ul className="right-links-ctn">
          <li>
            <a href="https://t.me/shkoobyinu" target="_blank" className="white opacity">
              Telegram
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/shkoobyinu" target="_blank" className="white opacity">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://medium.com/@shkoobyinu" target="_blank" className="white opacity">
              Medium
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/shkoobyinu" target="_blank" className="white opacity">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </StyledFooter>
  );
};

export default Footer;
