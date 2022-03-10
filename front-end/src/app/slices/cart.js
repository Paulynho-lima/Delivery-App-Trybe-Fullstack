import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    setCart: (state, action) => {
      const { payload } = action;
      state.push(payload);
    },

    updateCart: (state, action) => {
      const { payload } = action;

      const product = state.find((element) => element.id === payload.id);
      product.subTotal = payload.newSubTotal;
      product.quantity = payload.newQuantity;

      const newCart = state.filter((element) => element.id === payload.id);
      state = [...newCart, product];
    },
    deleteCart: (state) => {
      while (state.length > 0) {
        state.pop();
      }
    },
  },
});

export const { setTotal, setCart, deleteCart, updateCart } = cartSlice.actions;

export default cartSlice.reducer;
