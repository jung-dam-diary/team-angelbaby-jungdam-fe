import axios from 'axios';
import { API_POINT } from '@utils/constants';
// axios 베이스 URL 설정 예정
// CRA에서 환경 변수 사용하기 위해서는 REACT_APP_이 접두어로 꼭 붙어야함.
axios.defaults.baseURL = API_POINT;

const api = ({
  url,
  type = 'GET',
  params,
  contentType = 'application/json',
}) => {
  const headers = {
    'Content-Type': contentType,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
    'Access-Control-Allow-Headers':
      'Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization',
  };

  // 토큰이 없을 시 header 값에 token이 포함되지 않음.
  const token = sessionStorage.getItem('token');

  if (token !== null) {
    headers.Authorization = `Bearer ${token}`;
  }

  return axios({
    method: type,
    url: `${url}`,
    data: params,
    headers,
  });
};

export default api;
