import styled from 'styled-components';
import color from '@assets/colors';
import font from '@assets/fonts';
import PropTypes from 'prop-types';
import { Avatar } from '@components/base';
import { useState } from 'react';

const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  border: 1px solid ${color.grey_50};
  border-radius: 5px;
  box-sizing: border-box;
  align-items: center;
  padding: 0 16px 0 16px;
  cursor: pointer;
  ${font.content_16};
  background-color: ${({ isToggle }) => (isToggle ? color.brown : color.white)};
  color: ${({ isToggle }) => (isToggle ? color.white : color.black)};
`;

const UserInfoContent = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const UserCard = ({ nickname, avatar, email }) => {
  const [isToggle, setIsToggle] = useState(false);

  const onToggle = async () => {
    setIsToggle((state) => !state);
  };

  return (
    <CardWrapper onClick={onToggle} isToggle={isToggle}>
      <Avatar src={avatar} size="medium" />
      <UserInfoContent>
        <span>{nickname}</span>
        <span>{email}</span>
      </UserInfoContent>
    </CardWrapper>
  );
};

UserCard.propTypes = {
  nickname: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  email: PropTypes.string.isRequired,
};

UserCard.defaultProps = {
  avatar: '',
};

export default UserCard;
