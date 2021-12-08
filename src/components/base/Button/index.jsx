import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import font from '@assets/fonts';
import color from '@assets/colors';

const Root = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
  color: ${color.black};
  gap: ${({ gap }) => gap};
  &.primary {
    width: 100%;
    height: 50px;
    border-radius: 15px;
    background-color: ${({ bgColor }) => (bgColor ? bgColor : color.beige)};
    box-shadow: 1px 2px 4px 0px ${color.black_30};
    ${font.content_16};
  }

  &.border {
    width: 80px;
    height: 30px;
    background-color: ${color.white};
    border: 1px solid ${color.brown};
    ${font.content_12};
  }
`;

// mode : 기본 꽉찬 버튼 (Primary), 선 있는 버튼 (Border)
// bgColor : 배경 컬러
// gap : 버튼 안의 요소 사이의 간격
const Button = ({ children, mode, bgColor, gap = '2px', ...props }) => (
  <Root type="button" bgColor={bgColor} className={mode} gap={gap} {...props}>
    {children}
  </Root>
);

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  mode: PropTypes.string,
  gap: PropTypes.string,
};
