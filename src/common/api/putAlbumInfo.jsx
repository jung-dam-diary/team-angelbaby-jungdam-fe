import api from './api';

export const putAlbumInfo = async (albumId, params) =>
  await api({
    url: `/api/v1/albums/${albumId}`,
    type: 'PUT',
    params,
  });
