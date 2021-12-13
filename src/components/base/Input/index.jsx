import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import color from '@assets/colors';
import font from '@assets/fonts';
import { forwardRef } from 'react';

const inputSizes = {
  sm: `${font.content_12}`,
  base: `${font.content_16}`,
  lg: `${font.content_18}`,
};

const StyledInput = styled.input`
  display: block;
  width: ${({ width }) => width};
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid ${color.brown};
  background-color: transparent;
  color: ${color.black};
  outline: none;
  ${({ size }) => inputSizes[size]};

  &::placeholder {
    color: ${color.grey};
  }

  &:disabled,
  &:disabled:hover {
    border-color: ${color.grey};
    cursor: not-allowed;
    transition: none;
  }

  &.error {
    border-color: #f53354;
  }

  &.success {
    border-color: #50c24e;
  }
`;

const Input = forwardRef(
  ({ width, onChange, size, name, error, success, ...props }, ref) => {
    let status = '';

    if (error) {
      status = 'error';
    }
    if (success) {
      status = 'success';
    }

    return (
      <StyledInput
        onChange={onChange}
        name={name}
        size={size}
        width={width}
        className={status || undefined}
        {...props}
        style={{ ...props.style }}
        ref={ref}
      />
    );
  },
);

Input.propTypes = {
  width: PropTypes.string,
  isFullWidth: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'base', 'lg']),
  error: PropTypes.bool,
  success: PropTypes.bool,
  style: PropTypes.object,
};

Input.defaultProps = {
  width: '100%',
  onChange: () => {},
  size: 'base',
  error: false,
  success: false,
  style: {},
};

export default Input;
