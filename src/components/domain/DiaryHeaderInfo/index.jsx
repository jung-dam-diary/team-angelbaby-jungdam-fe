import React from 'react';
import styled from '@emotion/styled';
import { Button, Icon } from '@components/base';
import font from '@assets/fonts';
import color from '@assets/colors';

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.span`
  ${() => font.heading_24}
`;

const SubtitleContainer = styled(TitleContainer)`
  margin-top: 10px;
  margin-bottom: 20px;
`;

const CreatedAt = styled.span`
  color: ${color.grey};
  ${() => font.content_16}
`;

// const Edit = styled.span`
//   color: ${color.grey};
//   ${() => font.content_16}
// `;

const DiaryDelete = styled.span`
  margin-left: 10px;
  color: ${color.grey};
  ${() => font.content_16}
`;

const DiaryHeaderInfo = ({
  title,
  createdAt,
  bookmark,
  auth,
  onBookmarkClick,
  onModal,
}) => {
  return (
    <>
      <TitleContainer>
        <Title>{title}</Title>
        <Button>
          {!bookmark ? (
            <Icon
              name="ant-design:star-outlined"
              color={color.brown}
              height={30}
              onClick={onBookmarkClick}
            />
          ) : (
            <Icon
              name="ant-design:star-filled"
              color={color.brown}
              height={30}
              onClick={onBookmarkClick}
            />
          )}
        </Button>
      </TitleContainer>

      <SubtitleContainer>
        <CreatedAt>{createdAt}</CreatedAt>
        <div>
          {/* {auth && <Edit>수정</Edit>} */}
          {auth && <DiaryDelete onClick={onModal}>삭제</DiaryDelete>}
        </div>
      </SubtitleContainer>
    </>
  );
};

export default DiaryHeaderInfo;
