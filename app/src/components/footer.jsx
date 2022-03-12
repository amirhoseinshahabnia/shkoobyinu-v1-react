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
          <li>Token</li>
          <li>Roadmap</li>
          <li>Litepaper</li>
          <li>Buy Shkooby</li>
        </ul>
        <ul className="right-links-ctn">
          <li>
            <a href="#" className="white opacity">
              Telegram
            </a>
          </li>
          <li>
            <a href="#" className="white opacity">
              Twitter
            </a>
          </li>
          <li>
            <a href="#" className="white opacity">
              Discord
            </a>
          </li>
          <li>
            <a href="#" className="white opacity">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </StyledFooter>
  );
};

export default Footer;
