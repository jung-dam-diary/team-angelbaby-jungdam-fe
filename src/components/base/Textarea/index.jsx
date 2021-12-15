import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import font from '@assets/fonts';
import color from '@assets/colors';
import { useRef } from 'react';

const TextareaContainer = styled.textarea`
  border: none;
  resize: none;
  box-sizing: border-box;
  outline: none;
  overflow: scroll;
  background-attachment: local;
  background-image: linear-gradient(
      to right,
      ${color.white} 0px,
      transparent 0px
    ),
    linear-gradient(to left, ${color.white} 0px, transparent 0px),
    repeating-linear-gradient(
      ${color.white},
      ${color.white} 30px,
      ${color.black_30} 30px,
      ${color.black_30} 31px,
      ${color.white} 31px
    );
  ${font.content_16};
  line-height: 31px;

  &::placeholder {
    color: ${color.grey};
  }
`;

const Textarea = ({ placeholder, onChange, width, height, ...props }) => {
  const ref = useRef();

  const textareaSize = {
    width,
    height,
  };

  return (
    <TextareaContainer
      ref={ref}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
      style={{ ...textareaSize, ...props.style }}
    />
  );
};

Textarea.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
};

Textarea.defaultProps = {
  placeholder: '일기의 내용을 입력해주세요.',
  onChange: () => {},
  width: '100%',
  style: {},
};

export default Textarea;
