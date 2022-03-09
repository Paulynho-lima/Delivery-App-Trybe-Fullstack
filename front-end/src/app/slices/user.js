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
      const { payload: { name, email, role, token } } = action;
      state.userName = name;
      state.email = email;
      state.role = role;
      state.token = token;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
