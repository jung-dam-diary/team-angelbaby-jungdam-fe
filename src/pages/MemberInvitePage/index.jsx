import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import DefaultContainer from '@styles/DefaultContainer';
import color from '@assets/colors';
import font from '@assets/fonts';
import { Input, Button, Icon, Spinner, Avatar, Modal } from '@components/base';
import { DetailPageHeader } from '@components/domain';
import { useForm } from '@hooks';
import { searchUser } from '@api/searchUser';

const MemberInvitePageWrapper = styled(DefaultContainer)`
  width: 100%;
  padding-top: 60px;
  position: relative;
  ${font.content_16}
`;

const SearchWrapper = styled.form`
  display: flex;
  margin-bottom: 24px;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  border: 1px solid ${color.grey_50};
  border-radius: 15px;
  padding: 8px;
  gap: 16px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
`;

const SerchedListWrapper = styled.div`
  z-index: 999;
  position: absolute;
  top: 92px;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${color.grey_50};
  width: 100%;
  padding: 14px;
  background-color: ${color.white};
  box-shadow: 0px 12px 40px -12px;
  cursor: pointer;
`;

const LoadingtWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const MemberInvitePage = () => {
  const inputref = useRef();
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [ModalVisible, setModalVisible] = useState(false);
  const [searchInfo, setSearchInfo] = useState([]);
  const { values, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: {
      email: '',
    },
    onSubmit: async () => {
      try {
        const {
          data: { data },
        } = await searchUser(values.email);
        setSearchInfo((values) => values.concat(data));
      } catch (e) {
        alert('해당하는 이메일의 사용자를 찾을 수 없습니다.');
      }
    },
  });

  const onSelectUser = () => {
    const curUser = searchInfo[0];
    selectedUsers.findIndex((value) => value.email === curUser.email) === -1 &&
      setSelectedUsers((selectedUsers) => [...selectedUsers, curUser]);
    inputref.current.value = '';
    setSearchInfo([]);
  };

  const searchedUserList = (list) =>
    list.map(({ nickname, email }, index) => (
      <SerchedListWrapper onClick={onSelectUser} key={index}>
        <span>{nickname}</span>
        <span>{email}</span>
      </SerchedListWrapper>
    ));

  const selectedUserList = (list) =>
    list.map(({ nickname, email, avatar }, index) => (
      <UserWrapper key={index}>
        <Avatar size="medium" src={avatar} />
        <TextWrapper>
          <span>{nickname}</span>
          <span>{email}</span>
        </TextWrapper>
      </UserWrapper>
    ));

  const OpenModal = () => {
    setModalVisible(true);
  };

  const CloseModal = () => {
    if (ModalVisible) {
      setModalVisible(false);
    }
  };

  return (
    <MemberInvitePageWrapper>
      <DetailPageHeader pageTitle="초대하기" />
      <SearchWrapper onSubmit={handleSubmit}>
        <>
          <Input
            name="email"
            onChange={handleChange}
            placeholder="찾을 멤버의 이메일을 입력해주세요."
            ref={inputref}
          ></Input>
          <Button onClick={handleSubmit}>
            <Icon name="carbon:search" color={color.brown} />
          </Button>
        </>
        {searchedUserList(searchInfo)}
      </SearchWrapper>
      {selectedUserList(selectedUsers)}
      {isLoading && (
        <LoadingtWrapper>
          <Spinner isLoading={isLoading} size={24} />
        </LoadingtWrapper>
      )}
      <ButtonWrapper>
        <Button mode="primary" onClick={OpenModal}>
          초대하기
        </Button>
      </ButtonWrapper>
      {selectedUsers.length === 0 ? (
        <Modal visible={ModalVisible} onClose={CloseModal} selectable={false}>
          초대할 인원이 없습니다.
        </Modal>
      ) : (
        <Modal visible={ModalVisible} onClose={CloseModal}>
          총 {selectedUsers.length}명의 인원을 초대하시겠습니까?
        </Modal>
      )}
    </MemberInvitePageWrapper>
  );
};

export default MemberInvitePage;
