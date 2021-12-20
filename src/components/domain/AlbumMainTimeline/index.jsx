import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import color from '@assets/colors';
import font from '@assets/fonts';
import { DimImage, Icon } from '@components/base';

const Container = styled.main`
  width: 100%;
  margin-top: 70px;
  margin-bottom: 70px;
`;

const Diary = styled.div`
  margin: 0;
  margin-bottom: 80px;
  box-shadow: 2px 2px 5px gray;
  border-radius: 6px;
`;

const DiaryUserInfo = styled.div`
  padding: 10px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Nickname = styled.div`
  margin-left: 5px;
  ${() => font.content_18}
`;

const DiaryInfo = styled.div`
  width: 100%;
`;

const DiaryImageSlider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const DiaryTitle = styled.div`
  color: ${color.white};
  ${font.heading_20};
`;

const DiaryDate = styled.div`
  color: ${color.white};
  ${font.content_16};
`;

const DefaultAlbum = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 1px ${color.grey};
  border-radius: 6px;
`;

const DefaultSpan = styled.span`
  margin-top: 10px;
  color: ${() => color.grey};
  ${() => font.content_16};
`;

const swiperParams = {
  pagination: true,
};

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 40vh;
  min-height: 40vh;
  display: flex;
  justify-content: center;
  position: relative;
`;

const StyledSwiperSlider = {
  width: '100%',
  height: '100%',
  borderRadius: '6px',
};

const AlbumMainTimeline = ({ diaries }) => {
  return (
    <Container>
      {diaries.length > 0 ? (
        diaries.map(({ diary, participant }) => (
          <Diary key={diary.diaryId}>
            <DiaryUserInfo>
              <Avatar src={participant.avatar} />
              <Nickname>{participant.nickname}</Nickname>
            </DiaryUserInfo>

            <DiaryInfo>
              {diary.diaryPhotos.length > 0 ? (
                <StyledSwiper {...swiperParams}>
                  {diary.diaryPhotos.map((photo, index) => (
                    <SwiperSlide key={index} style={StyledSwiperSlider}>
                      <DiaryImageSlider>
                        <DimImage
                          src={photo}
                          mode="cover"
                          style={{ borderRadius: '6px' }}
                        >
                          <DiaryTitle>{diary.title}</DiaryTitle>
                          <DiaryDate>{diary.recordedAt}</DiaryDate>
                        </DimImage>
                      </DiaryImageSlider>
                    </SwiperSlide>
                  ))}
                </StyledSwiper>
              ) : (
                <DimImage mode="cover" style={{ borderRadius: '6px' }}>
                  <DiaryTitle>{diary.title}</DiaryTitle>
                  <DiaryDate>{diary.recordedAt}</DiaryDate>
                </DimImage>
              )}
            </DiaryInfo>
          </Diary>
        ))
      ) : (
        <DefaultAlbum>
          <Icon name="healthicons:default" height={50} color={color.grey} />
          <DefaultSpan>작성된 일기가 없습니다 !</DefaultSpan>
          <DefaultSpan>먼저 일기를 작성해볼까요 ?</DefaultSpan>
        </DefaultAlbum>
      )}
    </Container>
  );
};

export default AlbumMainTimeline;
