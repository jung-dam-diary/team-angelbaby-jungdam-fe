import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import font from '@assets/fonts';
import color from '@assets/colors';

const TextareaContainer = styled.textarea`
  padding: 8px 10px;
  border: none;
  resize: none;
  box-sizing: border-box;
  outline: none;
  background-attachment: local;
  background-image: linear-gradient(to right, white 10px, transparent 10px),
    linear-gradient(to left, white 10px, transparent 10px),
    repeating-linear-gradient(
      white,
      white 30px,
      #ccc 30px,
      #ccc 31px,
      white 31px
    );
  ${font.content_16};
  line-height: 31px;

  &::placeholder {
    color: ${color.grey};
  }
`;

const Textarea = ({ placeholder, onChange, width, height, ...props }) => {
  const textareaSize = {
    width,
    height,
  };

  return (
    <TextareaContainer
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
  height: '100px',
  style: {},
};

export default Textarea;
