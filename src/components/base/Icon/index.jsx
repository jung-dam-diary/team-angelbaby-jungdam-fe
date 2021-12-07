import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

const IconComponent = ({ name, color, height }) => {
  return <Icon icon={name} color={color} height={height} />;
};

IconComponent.defaultProps = {
  height: 20,
};

IconComponent.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
};

export default IconComponent;
