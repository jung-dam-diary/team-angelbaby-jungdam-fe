import api from './api';

export const searchUser = async (albumId, email) =>
  await api({
    url: `/api/v1/albums/${albumId}/search?email=${email}`,
    type: 'GET',
  });
