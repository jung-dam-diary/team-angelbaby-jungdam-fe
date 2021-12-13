import dotenv from 'dotenv';
dotenv.config();

export const isProduction = process.env.REACT_APP_MODE === 'production';

export const API_POINT = isProduction ? 'none' : process.env.REACT_APP_API_URL;
export const OAUTH2_REDIRECT_URL = isProduction
  ? process.env.REACT_APP_HOME_URL
  : process.env.REACT_APP_OAUTH2_REDIRECT_URL;

// OAuth2
export const GOOGLE_AUTH_URL =
  API_POINT +
  '/oauth2/authorization/google?redirect_uri=' +
  OAUTH2_REDIRECT_URL;

export const KAKAO_AUTH_URL =
  API_POINT + '/oauth2/authorization/kakao?redirect_uri=' + OAUTH2_REDIRECT_URL;

export const NAVER_AUTH_URL =
  API_POINT + '/oauth2/authorization/naver?redirect_uri=' + OAUTH2_REDIRECT_URL;
