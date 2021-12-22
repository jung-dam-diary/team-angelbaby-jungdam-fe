import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import DefaultContainer from '@styles/DefaultContainer';
import font from '@assets/fonts';
import color from '@assets/colors';
import { Input, Upload, Icon, Button, LoadingModal } from '@components/base';
import { DetailPageHeader } from '@components/domain';
import { getAlbumInfo } from '@api/getAlbumInfo';
import { putAlbumInfo } from '@api/putAlbumInfo';
import { postImageUploads } from '@api/commonApi';
import { useParams } from 'react-router';
import { useForm } from '@hooks';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';

const ALBUM_EDIT_LIST = [
  {
    name: 'title',
    text: '앨범 명을 입력해주세요.',
    placeholder: '예) 사랑하는 우리 가족 🥰',
    type: 'input',
  },
  {
    name: 'thumbnail',
    text: '대표 사진을 등록해주세요.',
    type: 'upload',
  },
  {
    name: 'familyMotto',
    text: '가훈을 입력해주세요.',
    placeholder: '예) 둥근 마음 열린 생각 바른 행동',
    type: 'input',
  },
];

const AlbumSettingsEditPageWrapper = styled(DefaultContainer)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 60px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 42px;
`;
const ContentTitle = styled.span`
  padding: 0;
  ${font.content_16}
`;

const UploadStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 288px;
  border: 1px solid ${color.brown};
  border-radius: 15px;
`;

const ThumbnailWrapper = styled.div`
  display: flex;
  background-image: url(${({ src }) => src || null});
  background-size: cover;
  background-position: center;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
`;

const AlbumSettingsEditPage = () => {
  const { albumId } = useParams();
  const navigate = useNavigate();

  const intialState = {
    title: '',
    thumbnail: '',
    familyMotto: '',
  };

  const [albumInfo, setAlbumInfo] = useState(intialState);
  const [image, setImage] = useState('');

  const { values, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: intialState,
    onSubmit: async () => {
      if (image === '' && values.title === '' && values.familyMotto === '') {
        alert('변경할 앨범 정보가 없습니다.');
      } else {
        for (let value in albumInfo) {
          if (value === 'id') continue;
          if (
            values[value] === '' ||
            values[value] === 0 ||
            value === 'thumbnail'
          ) {
            values[value] = albumInfo[value];
          }
        }

        if (image !== '') {
          const imageUrl = await postImageUploads(image);
          values.thumbnail = imageUrl;
        }

        try {
          const res = await putAlbumInfo(albumId, values);
          res && alert('성공적으로 변경되었습니다.');
          goBack();
        } catch ({ response }) {
          const { data } = response;
          console.log(data);
        }
      }
    },
  });

  useEffect(() => {
    const getInfo = async () => {
      try {
        const {
          data: { data },
        } = await getAlbumInfo(albumId);
        setAlbumInfo(data);
      } catch (e) {
        console.log(e.response);
      }
    };
    getInfo();
  }, [albumId]);

  const handleUpload = (e) => {
    const reader = new FileReader();
    const image = e.target.files[0];
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      setAlbumInfo({ ...albumInfo, thumbnail: reader.result });
      setImage(image);
    };
  };

  const goBack = () => {
    navigate('../');
  };

  console.log(albumInfo);
  const EditLists = (list) =>
    list.map(({ name, text, placeholder, type }, index) => (
      <ContentWrapper key={index}>
        <ContentTitle>{text}</ContentTitle>
        {type === 'upload' ? (
          <Upload onChange={handleUpload} name="thumbnail" css={UploadStyle}>
            <ThumbnailWrapper src={albumInfo.thumbnail}>
              {!image && (
                <Icon name="fluent:camera-add-24-regular" height={32} />
              )}
            </ThumbnailWrapper>
          </Upload>
        ) : (
          <Input
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
          />
        )}
      </ContentWrapper>
    ));

  return (
    <AlbumSettingsEditPageWrapper>
      <DetailPageHeader pageTitle="앨범 정보 수정" handleGoBack={goBack} />
      <LoadingModal isLoading={isLoading} />
      {EditLists(ALBUM_EDIT_LIST)}
      <Button mode="primary" onClick={handleSubmit}>
        확인
      </Button>
    </AlbumSettingsEditPageWrapper>
  );
};

export default AlbumSettingsEditPage;
