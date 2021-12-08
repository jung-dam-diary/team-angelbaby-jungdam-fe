import styled from '@emotion/styled';
import { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import color from '@assets/colors';
import useClickAway from '@hooks/useClickAway';
import { Button } from '@components/base';

const BackgroundDim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${color.black_90};
  z-index: 1000;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: rgb(0 0 0 / 10%) 0px 12px 40px -12px;
  border-radius: 12px;
  box-sizing: border-box;
  padding: 40px 32px;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 38px;
  gap: 16px;
`;

// const Button = styled.button`
//   border: none;
//   background-color: transparent;
//   padding: 0;
//   cursor: pointer;
// `;

const Modal = ({ children, width, visible, onClose, ...props }) => {
  const ref = useClickAway(() => {
    onClose();
  });

  const containerStyle = useMemo(() => {
    return {
      width,
    };
  }, [width]);

  const el = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, [el]);

  useEffect(() => {
    if (visible) {
      document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = '';
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      };
    }
  }, [visible]);

  return ReactDOM.createPortal(
    <BackgroundDim style={{ display: visible ? 'block' : 'none' }}>
      <ModalContainer
        ref={ref}
        {...props}
        style={{ ...props.style, ...containerStyle }}
      >
        {children}
        <ButtonWrapper>
          <Button onClick={onClose}>예</Button>
          <Button onClick={onClose}>아니오</Button>
        </ButtonWrapper>
      </ModalContainer>
    </BackgroundDim>,
    el,
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  style: PropTypes.object,
};

Modal.defaultProps = {
  width: '60%',
  visible: false,
  onClose: () => {},
  style: {},
};

export default Modal;
