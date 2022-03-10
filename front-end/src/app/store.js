import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user';
import cartReducer from './slices/cart';
import totalReducer from './slices/totalPrice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    totalPrice: totalReducer,
  },
});

export default store;
