import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts as apiFetchProducts } from '../../services/productApi';

// Async thunk to load initial products
export const fetchProductsAsync = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await apiFetchProducts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  items: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { addProduct, deleteProduct, updateProduct } = productsSlice.actions;

export default productsSlice.reducer;
