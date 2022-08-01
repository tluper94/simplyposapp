import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    modifyQuantity: (state, action) => {
      const idx = state.cartItems.findIndex(
        item => item.id === action.payload.id
      );
      state.cartItems[idx].quantity = action.payload.value;
    }
  }
});

export const { addToCart, modifyQuantity } = cartSlice.actions;

export default cartSlice.reducer;
