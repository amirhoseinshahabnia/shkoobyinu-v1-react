import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <StyledBackdrop
      className="backdrop"
      onClick={props.onClick}
    ></StyledBackdrop>,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;
