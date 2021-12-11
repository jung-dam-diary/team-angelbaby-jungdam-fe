import styled from 'styled-components';
import font from '@assets/fonts';
import PropTypes from 'prop-types';
import { Avatar } from '@components/base';

const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  padding: 8px;
  ${font.content_16};
`;

const TextContent = styled.span`
  margin-left: 8px;
`;

const UserCard = ({ nickname, avatar, role }) => {
  return (
    <CardWrapper>
      <Avatar src={avatar} size="base" />
      <TextContent>{nickname}</TextContent>
      {role === 'OWNER' ? (
        <TextContent style={{ fontSize: 12 }}>관리자</TextContent>
      ) : null}
    </CardWrapper>
  );
};

UserCard.propTypes = {
  nickname: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  role: PropTypes.oneOf(['OWNER', 'MEMBER']),
};

UserCard.defaultProps = {
  avatar: '',
  role: 'MEMBER',
};

export default UserCard;
