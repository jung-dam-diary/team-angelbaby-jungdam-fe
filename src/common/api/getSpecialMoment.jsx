import api from './api';

export const getSpecialMoment = async (albumId) =>
  await api({
    url: `/api/v1/albums/${albumId}/moments`,
    type: 'GET',
  });
