import React, { useEffect, useState } from 'react';
import { ReactComponent as Logo } from '@assets/Image/Logo.svg';
import styled from '@emotion/styled';
import font from '@assets/fonts';
const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  padding: 32px;
  overflow-y: auto;
`;

const ResponsiveWrapper = styled(MainWrapper)`
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const ResponsiveTemplate = styled.div`
  width: 436px;
  height: 100%;
  /* border: 1px solid #c4c4c4; */
  overflow: hidden;
  border-radius: 4px;
`;

const Box = styled.div`
  margin-right: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 100%;
`;

const LogoBox = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  margin-top: 35px;
  ${font.heading_20};
`;

const DefaultTemplate = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  // 모바일 환경만 처리
  return width < 456 ? (
    <MainWrapper>{children}</MainWrapper>
  ) : (
    <ResponsiveWrapper>
      <ResponsiveTemplate>{children}</ResponsiveTemplate>
    </ResponsiveWrapper>
  );
};

export default DefaultTemplate;
