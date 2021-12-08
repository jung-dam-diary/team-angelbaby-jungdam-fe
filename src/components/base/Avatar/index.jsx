import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import color from '@assets/colors';
import { Image } from '@components/base';

const Sizes = {
  large: '80px',
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
  return (
    <AvatarWrapper {...props} size={size}>
      <Image src={src} alt="userProfile" mode="cover" />
    </AvatarWrapper>
  );
};

Avatar.defaultProps = {
  size: 'base',
  src: 'https://cdn-icons.flaticon.com/png/512/2354/premium/2354573.png?token=exp=1638950397~hmac=9731e542cbe409f1e9207cc451749e82',
};

Avatar.propTypes = {
  size: PropTypes.oneOf(['base', 'large']),
  src: PropTypes.string,
};

export default Avatar;
