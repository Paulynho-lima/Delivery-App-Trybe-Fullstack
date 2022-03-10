import { createSlice } from '@reduxjs/toolkit';

export const totalSlice = createSlice({
  name: 'totalPrice',
  initialState: {
    totalPrice: null,
  },

  reducers: {
    setTotal: (state, action) => {
      state.totalPrice = action.payload;
    },

  },
});

export const { setTotal } = totalSlice.actions;

export default totalSlice.reducer;
