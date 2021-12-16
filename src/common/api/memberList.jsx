import api from './api';

export const searchUser = async (email) =>
  await api({
    url: `/api/v1/members/search?email=${email}`,
    method: 'GET',
  });

// export const inviteUser = async (albumId) =>
//   await api({
//     url: `/api/v1/albums/${albumId}/invitations`,
//     method: 'POST',
//   });
