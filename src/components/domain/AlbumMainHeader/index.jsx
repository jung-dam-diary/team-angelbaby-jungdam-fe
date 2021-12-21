import { Button, Icon } from '@components/base';
import font from '@assets/fonts';
import color from '@assets/colors';
import styled from '@emotion/styled';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0px 32px 0 32px;
  background-color: ${color.white};
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  width: 100%;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
`;

const AlbumName = styled.span`
  ${() => font.heading_20}
`;

const FamilyMotto = styled.span`
  ${() => font.content_16}
`;

const AlbumMainHeader = ({ albumName, familyMotto, role }) => {
  const navigate = useNavigate();

  const handleClickGoBack = useCallback(() => {
    navigate('/album');
  }, [navigate]);

  const handleClickGoSetting = useCallback(() => {
    navigate('../settings');
  }, [navigate]);

  return (
    <Container>
      <Button onClick={handleClickGoBack}>
        <Icon name="ep:back" color={color.brown} />
      </Button>

      <ContentWrapper>
        <AlbumName>{albumName}</AlbumName>
        <FamilyMotto>{familyMotto}</FamilyMotto>
      </ContentWrapper>

      {role === 'ROLE_ADMIN' && (
        <Button onClick={handleClickGoSetting}>
          <Icon
            name="ant-design:setting-filled"
            height={25}
            color={color.brown}
          />
        </Button>
      )}
    </Container>
  );
};

export default AlbumMainHeader;
