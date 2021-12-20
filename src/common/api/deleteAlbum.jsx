import api from './api';

export const deleteAlbum = async (albumId) =>
  await api({
    url: `/api/v1/albums/${albumId}`,
    type: 'DELETE',
  });
