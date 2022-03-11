import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: null,
    userName: null,
    email: null,
    role: null,
    token: null,
  },
  reducers: {
    setUser: (state, action) => {
      const { payload: { id, name, email, role, token } } = action;
      state.id = id;
      state.userName = name;
      state.email = email;
      state.role = role;
      state.token = token;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
