import { configureStore } from '@reduxjs/toolkit';
import orderViewSlice from './features/orderView/orderViewSlice';

export const store = configureStore({
  reducer: {
    orderView: orderViewSlice
  }
});
