import api from './api';

export const postImageUpload = async (image) => {
  const { data } = await api({
    url: '/api/v1/images',
    type: 'post',
    contentType: 'multipart/form-data',
    params: image,
  });

  return data;
};
