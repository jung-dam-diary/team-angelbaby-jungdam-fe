import api from './api';

export const getMemberList = async (albumId) =>
  await api({
    url: `/api/v1/albums/${albumId}/participants`,
    type: 'GET',
  });
