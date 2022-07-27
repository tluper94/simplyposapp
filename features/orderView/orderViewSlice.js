import { createSlice } from '@reduxjs/toolkit';
import { store } from '../../mockData';

const initialState = {
  menuItems: store.itemList,
  currentCategory: store.groupList[0].GroupID
};

const orderViewSlice = createSlice({
  name: 'orderView',
  initialState,
  reducers: {
    selectedCategory: (state, action) => {
      state.currentCategory = action.payload;
    }
  }
});

export const { selectedCategory } = orderViewSlice.actions;

export default orderViewSlice.reducer;
