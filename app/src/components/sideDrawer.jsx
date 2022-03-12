import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const StyledSideDrawer = styled.aside`
  position: fixed;
  right: 0;
  top: 100px;
  z-index: 99999;
  min-height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(33px);
  padding: 50px;
  min-height: -webkit-fill-available;

  ul {
    list-style: none;
  }

  .mobile-links {
    font-size: 1.5em;
    font-family: 'Chakra Bold';
    text-transform: uppercase;
  }

  .mobile-links li {
    margin-bottom: 20px;
  }

  .mobile-links li:last-child {
    margin-bottom: 0;
  }

  .mobile-links a {
    text-decoration: none;
  }

  .wallet {
    margin-top: 15px;
  }
`;

const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-right"
      mountOnEnter
      unmountOnExit
    >
      <StyledSideDrawer onClick={props.onClick}>
        {props.children}
      </StyledSideDrawer>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
