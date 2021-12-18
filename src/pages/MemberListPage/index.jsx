import styled from 'styled-components';
import DefaultContainer from '@styles/DefaultContainer';
import font from '@assets/fonts';
import { Icon, Divider } from '@components/base';
import { OnlyInfoHeader, UserCard } from '@components/domain';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMemberList } from '@api/getMemberList';
import { useParams } from 'react-router';

const MemberListPageContainer = styled(DefaultContainer)`
  width: 100%;
  padding-top: 60px;
  ${font.content_16}
`;

const ToInvitePage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
`;

const InviteWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const MemberListWrapper = styled.div`
  margin-top: 78px;
`;

const MemberListTitle = styled.div`
  height: 32px;
  ${font.heading_20}
`;

const MemberListPage = () => {
  const navigate = useNavigate();
  const { albumId } = useParams();
  const [albumMemberList, setAlbumMemberList] = useState([]);

  const handleToInvite = (e) => {
    navigate('invite');
  };

  const memberList = (list) =>
    list.map(({ nickname, avatar, role }, index) => (
      <UserCard nickname={nickname} avatar={avatar} role={role} key={index} />
    ));

  useEffect(() => {
    const getUserList = async () => {
      try {
        const {
          data: { data },
        } = await getMemberList(albumId);
        setAlbumMemberList(data.participants);
      } catch (e) {
        console.log(e.response);
      }
    };
    getUserList();
  }, []);

  return (
    <MemberListPageContainer>
      <OnlyInfoHeader pageTitle="멤버 리스트" />
      <ToInvitePage onClick={handleToInvite}>
        <InviteWrapper>
          <Icon name="octicon:person-add-24" />
          멤버 초대하기
        </InviteWrapper>
        <Icon name="octicon:chevron-right-24" />
      </ToInvitePage>
      <Divider size={4} />
      <MemberListWrapper>
        <MemberListTitle>멤버</MemberListTitle>
        <Divider size={4} />
        {memberList(albumMemberList)}
      </MemberListWrapper>
    </MemberListPageContainer>
  );
};

export default MemberListPage;
