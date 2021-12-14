import { getMember } from '@api/memberApi';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const name = 'member';

// 비동기 함수를 활용가능.
const initialValue = {
  data: {
    memberEmail: '',
    memberNickname: '',
    memberAvatar: '',
    memberRole: '',
  },
  token: '',
  isLoading: false,
  error: '',
};

export const fetchMemberLogin = createAsyncThunk(
  `${name}/fetchMemberLogin`,
  async () => {
    const {
      data: { data },
    } = await getMember();
    return data;
  },
);

// const fetchAuthToken = createAsyncThunk(
//   `${name}/fetchAuthToken`,
//   async (token) => {
//     const { data } = await axios.post('/member/token', token);
//     return data;
//   },
// );

export const member = createSlice({
  name,
  initialState: initialValue,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: {
    [fetchMemberLogin.pending]: (state, action) => {
      state.error = '';
      state.isLoading = true;
    },
    [fetchMemberLogin.fulfilled]: (state, action) => {
      state.data = { ...action.payload };
      state.isLoading = false;
    },
    [fetchMemberLogin.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
    // [fetchAuthToken.pending]: (state, action) => {
    //   state.member = initialValue.member;
    //   state.isLoading = true;
    // },
    // [fetchAuthToken.fulfilled]: (state, action) => {
    //   state.member = { ...action.payload };
    //   state.isLoading = false;
    // },
    // [fetchAuthToken.rejected]: (state, action) => {
    //   state.error = action.error.message;
    //   state.isLoading = false;
    // },
  },
});
