import React from 'react';
import { Upload, Icon, Image } from '@components/base';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import color from '@assets/colors';
import font from '@assets/fonts';
import { useState, useEffect } from 'react';
import getBase64ToFile from '@utils/getBase64ToFile';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Pagination]);

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  margin-bottom: 10px;

  &.subtitle {
    margin-bottom: 20px;
    color: ${color.grey};
    ${font.content_16};
  }

  ${font.heading_24};
`;

const IconStyle = css`
  cursor: pointer;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 33vh;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  position: relative;
  border-radius: 5px;
`;

const DiaryCreateStepThree = ({ onChange, photos }) => {
  const [base64, setBase64] = useState([]);

  useEffect(() => {
    getBase64ToFile(photos, setBase64);
  }, [photos]);

  const swiperParams = {
    pagination: true,
  };

  return (
    <Container>
      <Title>추억이 담긴 사진을 넣어보세요.</Title>
      <Title className="subtitle">
        여러장의 사진을 동시에 저장할 수 있어요 !
      </Title>
      <Upload onChange={onChange} name={'photos'}>
        <Icon
          name="fluent:camera-add-24-regular"
          height={48}
          color={color.brown}
          css={IconStyle}
        />
      </Upload>

      {base64 && (
        <StyledSwiper {...swiperParams}>
          {base64.map((info, index) => (
            <SwiperSlide key={index}>
              <Image src={info} alt="image" width="100%" height="100%" />
            </SwiperSlide>
          ))}
        </StyledSwiper>
      )}
    </Container>
  );
};

export default DiaryCreateStepThree;
