import api from './api';

export const getParicipantsAlbumCheck = async ({ albumId }) =>
  await api({ url: `/api/v1/albums/${albumId}/participants/me`, type: 'get' });

export const getAlbums = async () => await api({ url: '/api/v1/albums' });

export const postAlbums = async (params) =>
  await api({ url: '/api/v1/albums', type: 'post', params });

export const getInvitations = async () =>
  await api({ url: '/api/v1/invitations' });

export const putInvitations = async ({ invitationId, status }) =>
  await api({
    url: `/api/v1/invitations/${invitationId}`,
    type: 'put',
    params: { status },
  });

export const getAlbumTitleInfo = async ({ albumId }) => {
  const {
    data: { data },
  } = await api({
    url: `/api/v1/albums/${albumId}`,
  });

  return data;
};
