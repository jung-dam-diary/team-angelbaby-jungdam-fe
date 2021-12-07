import PropTypes from 'prop-types';

const Image = ({ alt, block, width, height, mode, ...props }) => {
  // image style 설정 가로,세로,모드,블록 설정 완료
  const imageStyle = {
    width,
    height,
    objectFit: mode, // cover, fill, contain
    display: block ? 'block' : undefined,
  };

  return <img alt={alt} style={{ ...props.style, ...imageStyle }} {...props} />;
};

export default Image;

Image.propTypes = {
  alt: PropTypes.string,
  block: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mode: PropTypes.oneOf(['cover', 'fill', 'contain']),
};
