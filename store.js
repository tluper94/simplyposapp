import { configureStore } from '@reduxjs/toolkit';
import orderViewSlice from './features/orderView/orderViewSlice';
import cartSlice from './features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    orderView: orderViewSlice,
    cart: cartSlice
  }
});
