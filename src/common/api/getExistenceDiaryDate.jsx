import api from './api';

export const getExistenceDiaryDate = async ({ albumId, date }) => {
  const {
    data: { data },
  } = await api({
    url: `/api/v1/albums/${albumId}/diaries/search?q=${date}`,
  });

  return data;
};
