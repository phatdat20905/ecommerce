import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../config/axios'; // Chúng ta sẽ tạo file này sau

// Thunk để lấy danh sách sản phẩm từ API
export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get('/products/');
    if (response.data.errCode === 0) {
      return response.data.data;
    } else {
      return rejectWithValue(response.data.errMessage);
    }
  } catch (err) {
    return rejectWithValue(err.response?.data?.errMessage || 'Failed to fetch products');
  }
});

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;