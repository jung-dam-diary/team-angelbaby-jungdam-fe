import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import color from '@assets/colors/Color';

// Divide Props
const Line = styled.hr`
  border: none;
  background-color: ${color.grey_50};

  &.vertical {
    position: relative;
    top: -1;
    display: inline-block;
    width: 1px;
    height: 13px;
    vertical-align: middle;
  }

  &.horizontal {
    display: block;
    width: 100%;
    height: 1px;
  }
`;

const Divider = ({ type = 'horizontal', size = 12, ...rest }) => {
  // 가로/세로 두 가지 경우에 따른 Divider 사이 간격 설정
  // size 값이 없을 경우, 양 디바이드의 Margin 기본 값은 12px
  const dividerStyle = {
    margin: type === 'vertical' ? `0 ${size}px` : `${size}px 0`,
  };

  return (
    <Line
      {...rest}
      className={type}
      style={{ ...dividerStyle, ...rest.style }}
    />
  );
};

export default Divider;

Divider.propTypes = {
  type: PropTypes.oneOf(['horizontal', 'vertical']),
  size: PropTypes.number,
};
