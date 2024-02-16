import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    id: null,
    username: '',
    createdAt: '',
    updatedAt: '',
    watchList: [
      {
        id: null,
        name: '',
        assetId: '',
        createdAt: '',
        updatedAt: '',
        user: null,
      },
    ],
  },
  isLogged: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isLogged = true;
      console.log('Action ', action.payload);
      console.log('User from state ', state.user);
      console.log('Login ', state.isLogged);
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
