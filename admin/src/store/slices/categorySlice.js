import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/customAxios';
import toast from 'react-hot-toast';

// Thunk để lấy tất cả category
export const fetchCategories = createAsyncThunk('category/fetchCategories', async (_, { rejectWithValue }) => {
    try {
        const response = await api.get('/api/categories/all');
        return response.data;
    } catch (error) {
        return rejectWithValue({
            errCode: error.response?.data?.errCode || -1,
            errMessage: error.response?.data?.errMessage || error.message,
        });
    }
});

// Thunk để lấy category theo ID
export const fetchCategoryById = createAsyncThunk('category/fetchCategoryById', async (categoryId, { rejectWithValue }) => {
    try {
        const response = await api.get(`/api/categories/${categoryId}`);
        return response.data;
    } catch (error) {
        return rejectWithValue({
            errCode: error.response?.data?.errCode || -1,
            errMessage: error.response?.data?.errMessage || error.message,
        });
    }
});

// Thunk để tạo category
export const createCategory = createAsyncThunk('category/createCategory', async (categoryData, { rejectWithValue }) => {
    try {
        const response = await api.post('/api/categories/create', categoryData);
        return response.data;
    } catch (error) {
        return rejectWithValue({
            errCode: error.response?.data?.errCode || -1,
            errMessage: error.response?.data?.errMessage || error.message,
        });
    }
});

// Thunk để cập nhật category
export const updateCategory = createAsyncThunk('category/updateCategory', async ({ category_id, data }, { rejectWithValue }) => {
    try {
        const response = await api.put(`/api/categories/update/${category_id}`, data);
        return response.data;
    } catch (error) {
        return rejectWithValue({
            errCode: error.response?.data?.errCode || -1,
            errMessage: error.response?.data?.errMessage || error.message,
        });
    }
});

// Thunk để xóa category
export const deleteCategory = createAsyncThunk('category/deleteCategory', async (categoryId, { rejectWithValue }) => {
    try {
        const response = await api.delete(`/api/categories/delete/${categoryId}`);
        return { categoryId, ...response.data };
    } catch (error) {
        return rejectWithValue({
            errCode: error.response?.data?.errCode || -1,
            errMessage: error.response?.data?.errMessage || error.message,
        });
    }
});

// Thunk để upload ảnh category
export const uploadCategoryImage = createAsyncThunk('category/uploadCategoryImage', async ({ categoryId, file }, { rejectWithValue }) => {
    try {
        const formData = new FormData();
        if (file) {
            formData.append('image', file);
        }
        const response = await api.post(`/api/categories/upload-image/${categoryId}`, formData);
        return response.data;
    } catch (error) {
        return rejectWithValue({
            errCode: error.response?.data?.errCode || -1,
            errMessage: error.response?.data?.errMessage || error.message,
        });
    }
});

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categories: [],
        category: null,
        loading: false,
        error: null,
    },
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        // Fetch all categories
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload.data;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.errMessage;
                toast.error(action.payload.errMessage);
            });

        // Fetch category by ID
        builder
            .addCase(fetchCategoryById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCategoryById.fulfilled, (state, action) => {
                state.loading = false;
                state.category = action.payload.data;
            })
            .addCase(fetchCategoryById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.errMessage;
                toast.error(action.payload.errMessage);
            });

        // Create category
        builder
            .addCase(createCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.categories.push(action.payload.data);
            })
            .addCase(createCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.errMessage;
                toast.error(action.payload.errMessage);
            });

        // Update category
        builder
            .addCase(updateCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateCategory.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.categories.findIndex((cat) => cat.category_id === action.payload.data.category_id);
                if (index !== -1) {
                    state.categories[index] = action.payload.data;
                }
            })
            .addCase(updateCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.errMessage;
                toast.error(action.payload.errMessage);
            });

        // Delete category
        builder
            .addCase(deleteCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = state.categories.filter((cat) => cat.category_id !== action.payload.categoryId);
            })
            .addCase(deleteCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.errMessage;
                toast.error(action.payload.errMessage);
            });

        // Upload category image
        builder
            .addCase(uploadCategoryImage.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(uploadCategoryImage.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.categories.findIndex((cat) => cat.category_id === action.payload.data.category_id);
                if (index !== -1) {
                    state.categories[index] = action.payload.data;
                } else {
                    state.categories.push(action.payload.data);
                }
            })
            .addCase(uploadCategoryImage.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.errMessage;
                toast.error(action.payload.errMessage);
            });
    },
});

export const { clearError } = categorySlice.actions;
export default categorySlice.reducer;