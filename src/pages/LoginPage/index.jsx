import React from 'react';
import styled from '@emotion/styled';
import color from '@assets/colors';
import DefaultContainer from '@styles/DefaultContainer';
import {
  GOOGLE_AUTH_URL,
  KAKAO_AUTH_URL,
  NAVER_AUTH_URL,
} from '@utils/constants';
import { Button, Image } from '@components/base';
import google from '@assets/Image/google.png';
import kakao from '@assets/Image/kakao.png';
import naver from '@assets/Image/naver.png';
import { ReactComponent as Logo } from '@assets/Image/Logo.svg';

/**
 * 소셜 로그인 페이지
 * - 소셜 로그인 버튼 클릭 시 로그인 RedirectPage 이동
 * - OAuth2.0
 */

const SOCIAL_LOGIN_BUTTON_LIST = [
  {
    name: 'naver',
    label: 'Naver',
    icon: naver,
    link: NAVER_AUTH_URL,
    bgColor: '#03C75A',
  },
  {
    name: 'kakao',
    label: 'Kakao',
    icon: kakao,
    link: KAKAO_AUTH_URL,
    bgColor: '#FEE500',
  },
  {
    name: 'google',
    label: 'Google',
    icon: google,
    link: GOOGLE_AUTH_URL,
    bgColor: color.white,
  },
];

const LoginPageContainer = styled(DefaultContainer)`
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30vh;
`;

const LoginButtonContainer = styled.div`
  width: 100%;
  button:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const LoginPage = () => {
  const renderLoginButton = (socialLoginButtonList) =>
    socialLoginButtonList.map(({ name, label, icon, link, bgColor }) => (
      <Button
        key={name}
        mode="primary"
        value={link}
        bgColor={bgColor}
        onClick={handleLogin}
        gap="10px"
        disabled={name === 'naver' && true}
      >
        <Image
          src={icon}
          alt={label}
          width="18px"
          height={name === 'naver' ? '32px' : '18px'}
          mode="cover"
        />
        Login with {label}
      </Button>
    ));

  const handleLogin = (e) => {
    e.preventDefault();
    // 로그인 RedirectPage 이동
    window.location = e.target.value;
  };

  return (
    <LoginPageContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <LoginButtonContainer>
        {renderLoginButton(SOCIAL_LOGIN_BUTTON_LIST)}
      </LoginButtonContainer>
    </LoginPageContainer>
  );
};

export default LoginPage;
