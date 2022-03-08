import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: null,
    email: null,
    role: null,
    token: null,
  },
  reducers: {
    setUser: (state, action) => {
      const { payload: { userName, email, role, token } } = action;
      state.userName = userName;
      state.email = email;
      state.role = role;
      state.token = token;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
