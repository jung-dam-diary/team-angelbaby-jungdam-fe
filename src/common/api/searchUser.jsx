import api from './api';

export const searchUser = async (email) =>
  await api({
    url: `/api/v1/members/search?email=${email}`,
    type: 'GET',
  });
