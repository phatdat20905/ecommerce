import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/customAxios';

// Thunk để lấy tất cả brand
export const fetchBrands = createAsyncThunk('brand/fetchBrands', async (_, { rejectWithValue }) => {
    try {
        const response = await api.get('/api/brands/all');
        return response.data;
    } catch (error) {
        return rejectWithValue({
            errCode: error.response?.data?.errCode || -1,
            errMessage: error.response?.data?.errMessage || error.message,
        });
    }
});

// Thunk để lấy brand theo ID
export const fetchBrandById = createAsyncThunk('brand/fetchBrandById', async (brandId, { rejectWithValue }) => {
    try {
        const response = await api.get(`/api/brands/${brandId}`);
        return response.data;
    } catch (error) {
        return rejectWithValue({
            errCode: error.response?.data?.errCode || -1,
            errMessage: error.response?.data?.errMessage || error.message,
        });
    }
});

// Thunk để tạo brand
export const createBrand = createAsyncThunk('brand/createBrand', async (brandData, { rejectWithValue }) => {
    try {
        const response = await api.post('/api/brands/create', brandData);
        return response.data;
    } catch (error) {
        return rejectWithValue({
            errCode: error.response?.data?.errCode || -1,
            errMessage: error.response?.data?.errMessage || error.message,
        });
    }
});

// Thunk để cập nhật brand
export const updateBrand = createAsyncThunk('brand/updateBrand', async ({ brand_id, data }, { rejectWithValue }) => {
    try {
        const response = await api.put(`/api/brands/update/${brand_id}`, data);
        return response.data;
    } catch (error) {
        return rejectWithValue({
            errCode: error.response?.data?.errCode || -1,
            errMessage: error.response?.data?.errMessage || error.message,
        });
    }
});

// Thunk để xóa brand
export const deleteBrand = createAsyncThunk('brand/deleteBrand', async (brandId, { rejectWithValue }) => {
    try {
        const response = await api.delete(`/api/brands/delete/${brandId}`);
        return { brandId, ...response.data };
    } catch (error) {
        return rejectWithValue({
            errCode: error.response?.data?.errCode || -1,
            errMessage: error.response?.data?.errMessage || error.message,
        });
    }
});

// Thunk để upload ảnh brand
export const uploadBrandImage = createAsyncThunk('brand/uploadBrandImage', async ({ brandId, file }, { rejectWithValue }) => {
    try {
        const formData = new FormData();
        formData.append('image', file);
        const response = await api.post(`/api/brands/upload-image/${brandId}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response.data;
    } catch (error) {
        return rejectWithValue({
            errCode: error.response?.data?.errCode || -1,
            errMessage: error.response?.data?.errMessage || error.message,
        });
    }
});

const brandSlice = createSlice({
    name: 'brand',
    initialState: {
        brands: [],
        brand: null,
        loading: false,
        error: null,
    },
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        // Fetch all brands
        builder
            .addCase(fetchBrands.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBrands.fulfilled, (state, action) => {
                state.loading = false;
                state.brands = action.payload.data;
            })
            .addCase(fetchBrands.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.errMessage;
            });

        // Fetch brand by ID
        builder
            .addCase(fetchBrandById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBrandById.fulfilled, (state, action) => {
                state.loading = false;
                state.brand = action.payload.data;
            })
            .addCase(fetchBrandById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.errMessage;
            });

        // Create brand
        builder
            .addCase(createBrand.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createBrand.fulfilled, (state, action) => {
                state.loading = false;
                state.brands.push(action.payload.data);
            })
            .addCase(createBrand.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.errMessage;
            });

        // Update brand
        builder
            .addCase(updateBrand.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateBrand.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.brands.findIndex((brand) => brand.brand_id === action.payload.data.brand_id);
                if (index !== -1) {
                    state.brands[index] = action.payload.data;
                }
            })
            .addCase(updateBrand.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.errMessage;
            });

        // Delete brand
        builder
            .addCase(deleteBrand.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteBrand.fulfilled, (state, action) => {
                state.loading = false;
                state.brands = state.brands.filter((brand) => brand.brand_id !== action.payload.brandId);
            })
            .addCase(deleteBrand.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.errMessage;
            });

        // Upload brand image
        builder
            .addCase(uploadBrandImage.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(uploadBrandImage.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.brands.findIndex((brand) => brand.brand_id === action.payload.data.brand_id);
                if (index !== -1) {
                    state.brands[index] = action.payload.data;
                }
            })
            .addCase(uploadBrandImage.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.errMessage;
            });
    },
});

export const { clearError } = brandSlice.actions;
export default brandSlice.reducer;