import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  isVisable: false,
  selectedItem: null
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
    },
    displayCartModal: state => {
      state.isVisable = !state.isVisable;
    },
    selectItem: (state, action) => {
      state.selectedItem = action.payload;
    }
  }
});

export const { addToCart, modifyQuantity, displayCartModal, selectItem } =
  cartSlice.actions;

export default cartSlice.reducer;
