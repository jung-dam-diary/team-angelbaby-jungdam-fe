import api from './api';

export const postDiaryCreate = async (albumId, body) => {
  const { data } = await api({
    url: `/api/v1/albums/${albumId}/diaries`,
    type: 'POST',
    params: body,
  });

  return data;
};
