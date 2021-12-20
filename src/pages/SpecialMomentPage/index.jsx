import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DefaultContainer from '@styles/DefaultContainer';
import font from '@assets/fonts';
import color from '@assets/colors';
import { Image, Spinner } from '@components/base';
import { OnlyInfoHeader, Navigation } from '@components/domain';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { getSpecialMoment } from '@api/getSpecialMoment';
import { getAlbumInfo } from '@api/getAlbumInfo';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';

import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';

SwiperCore.use([EffectCoverflow, Pagination]);

const SpecialMomentPageWrapper = styled(DefaultContainer)`
  width: 100%;
  padding-top: 60px;
  ${font.content_16}
`;

const PageTitle = styled.div`
  margin-top: 24px;
  text-align: center;
  ${font.heading_20};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
`;

const TooltipWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 24px;
  background: #5677f4;
  color: ${color.white};
  padding: 12px;
  border-radius: 18px;
  box-shadow: 2px 2px 3px #d1d1d1;
  z-index: -1;
`;

const StyledSwiper = styled(Swiper)`
  box-sizing: content-box;
  width: 100%;
  padding: 34px;
  margin: 0 -24px;
`;

const ListTitleWrapper = styled.div`
  text-align: center;
  margin-top: 24px;
  ${font.content_18}
`;

const SpinnerWrapper = styled.div`
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpecialMomentPage = () => {
  const { albumId } = useParams();
  const navigate = useNavigate();
  const [momentList, getMomentList] = useState([]);
  const [albumTitle, setAlbumTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadMoment = async () => {
      try {
        setIsLoading(true);

        const payload = await getAlbumInfo(albumId);
        setAlbumTitle(payload.data.data.title);

        const {
          data: { data },
        } = await getSpecialMoment(albumId);
        getMomentList(data.moments);

        setIsLoading(false);
      } catch (e) {
        console.log(e.response);
      }
    };
    loadMoment();
  }, [albumId]);

  const slideStyle = {
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '85%',
  };

  const toDetailPage = (diaryId) => {
    navigate(`../../album/${albumId}/diary/${diaryId}`);
  };

  const slideList = (list) =>
    list.map(({ diaryId, title, thumbnail, recordedAt }, index) => (
      <SwiperSlide
        style={slideStyle}
        key={index}
        onClick={() => toDetailPage(diaryId)}
      >
        <TooltipWrapper>{recordedAt.substr(0, 10)}</TooltipWrapper>
        <Image
          src={thumbnail}
          alt={index}
          style={{
            borderRadius: 12,
            width: '100%',
            height: '265px',
          }}
        />
        <ListTitleWrapper>{title}</ListTitleWrapper>
      </SwiperSlide>
    ));

  return (
    <>
      <SpecialMomentPageWrapper>
        <OnlyInfoHeader pageTitle="특별한 순간" />
        {isLoading ? (
          <SpinnerWrapper>
            <Spinner size={24} />
          </SpinnerWrapper>
        ) : (
          <>
            <PageTitle>'{albumTitle}'의 기억들</PageTitle>
            <ContentWrapper>
              <StyledSwiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                spaceBetween={1}
                height={550}
                coverflowEffect={{
                  slideShadows: false,
                }}
              >
                {slideList(momentList)}
              </StyledSwiper>
            </ContentWrapper>
          </>
        )}
      </SpecialMomentPageWrapper>
      <Navigation />
    </>
  );
};

export default SpecialMomentPage;
