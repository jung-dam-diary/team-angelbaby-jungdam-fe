import api from './api';

export const postDiaryCreate = async ({ albumId, submitData }) => {
  const {
    data: { data },
  } = await api({
    url: `/api/v1/albums/${albumId}/diaries`,
    type: 'POST',
    params: submitData,
  });

  return data;
};
