import React, { useState } from 'react';
import styled from '@emotion/styled';
import DefaultContainer from '@styles/DefaultContainer';
import color from '@assets/colors';
import font from '@assets/fonts';
import { useNavigate } from 'react-router-dom';
import { Modal, Divider } from '@components/base';
import { DetailPageHeader } from '@components/domain';

const ALBUM_SETTINGS_LIST = [
  {
    name: '앨범 정보 수정',
    to: 'edit',
  },
];

const AlbumSettingsPageWrapper = styled(DefaultContainer)`
  width: 100%;
  padding-top: 60px;
  ${font.content_16}
`;

const AlbumSettingsTitle = styled.div`
  ${font.heading_20}
`;

const SettingsList = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
`;

const AlbumSettingsPage = () => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const navigate = useNavigate();

  const albumSettings = (list) =>
    list.map(({ name, to }) => (
      <>
        <SettingsList
          onClick={() => {
            handleToPage(to);
          }}
        >
          {name}
        </SettingsList>
        <Divider size={6} />
      </>
    ));

  const handleToPage = (url) => {
    navigate(url);
  };

  const OpenDeleteModal = () => {
    setDeleteModalVisible(true);
  };

  const CloseDeleteModal = () => {
    if (deleteModalVisible) {
      setDeleteModalVisible(false);
    }
  };

  return (
    <AlbumSettingsPageWrapper>
      <DetailPageHeader pageTitle="앨범 설정" />
      <AlbumSettingsTitle>앨범 설정</AlbumSettingsTitle>
      <Divider style={{ backgroundColor: color.grey }} />
      {albumSettings(ALBUM_SETTINGS_LIST)}
      <SettingsList onClick={OpenDeleteModal}>앨범 삭제</SettingsList>
      <Divider size={6} />
      <Modal visible={deleteModalVisible} onClose={CloseDeleteModal}>
        정말로 앨범을 삭제하시겠습니까?
      </Modal>
    </AlbumSettingsPageWrapper>
  );
};
// Modal 의 예 버튼을 눌렀을 때 처리하는 이벤트 작성 필요

export default AlbumSettingsPage;
