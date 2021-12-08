import styled from '@emotion/styled';
import colors from '@assets/colors/Color';
import PropTypes from 'prop-types';
const Icon = styled.i`
  display: inline-block;
  vertical-align: middle;
`;

const Spinner = ({ size = 16, color = colors.brown, isLoading = true }) => {
  const sizeStyle = {
    width: size,
    height: size,
  };

  return isLoading ? (
    <Icon>
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        xmlns="http://www.w3.org/2000/svg"
        stroke={color}
        style={sizeStyle}
      >
        <g fill="none" fill-rule="evenodd">
          <g transform="translate(1 1)" stroke-width="2">
            <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>
      </svg>
    </Icon>
  ) : null;
};

export default Spinner;

Spinner.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  isLoading: PropTypes.bool,
};
