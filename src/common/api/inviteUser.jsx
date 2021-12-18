import api from './api';

export const inviteUser = async (albumId, body) => {
  const { data } = await api({
    url: `/api/v1/albums/${albumId}/invitations`,
    type: 'POST',
    params: body,
  });

  return data;
};
