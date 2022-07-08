import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import storesService from './storesService';

const initialState = {
  stores: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

export const getStores = createAsyncThunk('stores/get', async (_, thunkAPI) => {
  try {
    return await storesService.getStores();
  } catch (error) {
    const message = error.response.data.message;
    return thunkAPI.rejectWithValue(message);
  }
});

export const createStore = createAsyncThunk(
  'stores/create',
  async (storeData, thunkAPI) => {
    try {
      return await storesService.createStore(storeData);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateStore = createAsyncThunk(
  'stores/update',
  async (_, thunkAPI) => {
    try {
      return await storesService.updateStore();
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteStores = createAsyncThunk(
  'stores/delete',
  async (_, thunkAPI) => {
    try {
      return await storesService.deleteStore();
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const storeSlice = createSlice({
  name: 'stores',
  initialState,
  reducers: {
    resetState: state => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = '';
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getStores.pending, state => {
        state.isLoading = true;
      })
      .addCase(getStores.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.stores = action.payload.stores;
      })
      .addCase(getStores.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createStore.pending, state => {
        state.isLoading = true;
      })
      .addCase(createStore.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createStore.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateStore.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateStore.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateStore.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteStores.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteStores.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(deleteStores.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  }
});

export const { resetState } = storeSlice.actions;
export default storeSlice.reducer;
