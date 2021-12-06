import { createSlice } from '@reduxjs/toolkit';

const name = 'user';

// 비동기 함수를 활용가능.
const initialValue = {
  user: {
    id: '',
    admin: false,
    groupCode: '',
    name: '',
    email: '',
  },
  token: '',
  isLoading: false,
};

// const fetchUserLogin = createAsyncThunk(
//   `${name}/fetchUserLogin`,
//   async (user) => {
//     const { data } = await axios.post('/user/login', user);
//     console.log(data);
//   },
// );

export const user = createSlice({
  name,
  initialState: initialValue,
  reducers: {
    // LoginStart: {
    //   reducer: (state) => {
    //     state.isLoading = true;
    //   },
    // },
    // LoginSuccess: {
    //   reducer: (state, action) => {
    //     state.isLoading = false;
    //     state.user = action.payload;
    //   },
    //   prepare: ({ token, id, admin, groupCode, name, email }) => ({
    //     payload: {
    //       token,
    //       id,
    //       admin,
    //       groupCode,
    //       name,
    //       email,
    //     },
    //   }),
    // },
    // Logout: {
    //   reducer: (state) => {
    //     state.user = initialValue.user;
    //   },
    // },
  },
  extraReducers: {},
});
