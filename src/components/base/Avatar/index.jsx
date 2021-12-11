import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import color from '@assets/colors';
import { Image } from '@components/base';
import defaultUser from '@assets/Image/defaultUser.png';

const Sizes = {
  large: '80px',
  medium: '50px',
  base: '32px',
};

const AvatarWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => Sizes[size]};
  height: ${({ size }) => Sizes[size]};
  border: 1px solid ${color.grey_50};
  text-align: center;
  border-radius: 50%;
  overflow: hidden;
  > img {
    width: 100%;
  }
`;

const Avatar = ({ size, src, ...props }) => {
  const avatarSrc = src === '' ? defaultUser : src;

  return (
    <AvatarWrapper {...props} size={size}>
      <Image src={avatarSrc} alt="userProfile" mode="cover" />
    </AvatarWrapper>
  );
};

Avatar.defaultProps = {
  size: 'base',
  src: '',
};

Avatar.propTypes = {
  size: PropTypes.oneOf(['base', 'medium', 'large']),
  src: PropTypes.string,
};

export default Avatar;
