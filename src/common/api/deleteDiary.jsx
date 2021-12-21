import api from './api';

export const deleteDiary = async ({ albumId, diaryId }) => {
  const {
    data: { data },
  } = await api({
    url: `/api/v1/albums/${albumId}/diaries/${diaryId}`,
    type: 'DELETE',
  });
  console.log(data);
  return data;
};
