import api from './api';

export const getAlbumInfo = async (albumId) => {
  await api({
    url: `/api/v1/albums/${albumId}`,
    type: 'GET',
  });
};
