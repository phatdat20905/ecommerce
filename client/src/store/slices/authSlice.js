import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/customAxios';
import toast from 'react-hot-toast';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../firebase';

// Thunk để đăng ký người dùng
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.post('/api/users/register', {
        email: userData.email,
        password: userData.password,
        full_name: userData.full_name,
        phone: userData.phone,
        role_id: 2,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { errMessage: 'Registration failed' });
    }
  }
);

// Thunk để đăng nhập người dùng (email/password)
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      if (!userData.email || !userData.password) {
        return rejectWithValue({
          errCode: 1,
          errMessage: 'Missing email or password',
        });
      }

      const response = await api.post('/api/users/login', {
        email: userData.email,
        password: userData.password,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { errMessage: 'Login failed' });
    }
  }
);

// Thunk để đăng nhập bằng Google
export const googleLogin = createAsyncThunk(
  'auth/googleLogin',
  async (_, { rejectWithValue }) => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();
      const response = await api.post('/api/users/firebase-google-login', { idToken });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { errMessage: 'Google login failed' });
    }
  }
);

// Thunk để yêu cầu OTP
export const requestOtp = createAsyncThunk(
  'auth/requestOtp',
  async (email, { rejectWithValue }) => {
    try {
      const response = await api.post('/api/users/request-otp', { email });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { errMessage: 'Failed to request OTP' });
    }
  }
);

// Thunk để xác minh OTP
export const verifyOtp = createAsyncThunk(
  'auth/verifyOtp',
  async ({ email, otp }, { rejectWithValue }) => {
    try {
      const response = await api.post('/api/users/verify-otp', { email, otp });
      return { ...response.data, email, otp };
    } catch (error) {
      return rejectWithValue(error.response?.data || { errMessage: 'Failed to verify OTP' });
    }
  }
);

// Thunk để đặt lại mật khẩu
export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ email, password, otp }, { rejectWithValue }) => {
    try {
      const response = await api.post('/api/users/reset-password', { email, newPassword: password, otp });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { errMessage: 'Failed to reset password' });
    }
  }
);

// Thunk để đăng xuất
export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { refreshToken } = getState().auth;
      if (!refreshToken) {
        return { errCode: 0, errMessage: 'Logged out successfully' };
      }
      const response = await api.post('/api/users/logout', { refreshToken });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { errMessage: 'Logout failed' });
    }
  }
);

// Thunk để lấy thông tin user
export const fetchUser = createAsyncThunk(
  'auth/fetchUser',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/users/${userId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { errMessage: 'Failed to fetch user' });
    }
  }
);

// Thunk để cập nhật thông tin user
export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.put('/api/users/update', userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { errMessage: 'Failed to update user' });
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    accessToken: localStorage.getItem('accessToken') || null,
    refreshToken: localStorage.getItem('refreshToken') || null,
    isLoading: false,
    error: null,
    otpRequestedEmail: null,
    verifiedOtp: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Register
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.errCode === 0) {
          toast.success(action.payload.errMessage);
        } else {
          state.error = action.payload.errMessage;
          toast.error(action.payload.errMessage);
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.errMessage;
        toast.error(action.payload.errMessage);
      });

    // Login
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.errCode === 0) {
          state.user = action.payload.data.user;
          state.accessToken = action.payload.data.accessToken;
          state.refreshToken = action.payload.data.refreshToken;
          localStorage.setItem('accessToken', action.payload.data.accessToken);
          localStorage.setItem('refreshToken', action.payload.data.refreshToken);
          toast.success(action.payload.errMessage);
        } else {
          state.error = action.payload.errMessage;
          toast.error(action.payload.errMessage);
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.errMessage;
        toast.error(action.payload.errMessage);
      });

    // Google Login
    builder
      .addCase(googleLogin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(googleLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.errCode === 0) {
          state.user = action.payload.data.user;
          state.accessToken = action.payload.data.accessToken;
          state.refreshToken = action.payload.data.refreshToken;
          localStorage.setItem('accessToken', action.payload.data.accessToken);
          localStorage.setItem('refreshToken', action.payload.data.refreshToken);
          toast.success(action.payload.errMessage);
        } else {
          state.error = action.payload.errMessage;
          toast.error(action.payload.errMessage);
        }
      })
      .addCase(googleLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.errMessage;
        toast.error(action.payload.errMessage);
      });

    // Request OTP
    builder
      .addCase(requestOtp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestOtp.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.errCode === 0) {
          state.otpRequestedEmail = action.meta.arg.email;
          toast.success(action.payload.errMessage);
        } else {
          state.error = action.payload.errMessage;
          toast.error(action.payload.errMessage);
        }
      })
      .addCase(requestOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.errMessage;
        toast.error(action.payload.errMessage);
      });

    // Verify OTP
    builder
      .addCase(verifyOtp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.errCode === 0) {
          state.otpRequestedEmail = action.payload.email;
          state.verifiedOtp = action.payload.otp;
          toast.success(action.payload.errMessage);
        } else {
          state.error = action.payload.errMessage;
          toast.error(action.payload.errMessage);
        }
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.errMessage;
        toast.error(action.payload.errMessage);
      });

    // Reset Password
    builder
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.errCode === 0) {
          state.otpRequestedEmail = null;
          state.verifiedOtp = null;
          toast.success(action.payload.errMessage);
        } else {
          state.error = action.payload.errMessage;
          toast.error(action.payload.errMessage);
        }
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.errMessage;
        toast.error(action.payload.errMessage);
      });

    // Logout
    builder
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.accessToken = null;
        state.refreshToken = null;
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        toast.success('Logged out successfully');
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.errMessage;
        toast.error(action.payload.errMessage);
      });

    // Fetch User
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.errCode === 0) {
          state.user = action.payload.data;
        } else {
          state.error = action.payload.errMessage;
          toast.error(action.payload.errMessage);
        }
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.errMessage;
        toast.error(action.payload.errMessage);
      });

    // Update User
    builder
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.errCode === 0) {
          state.user = action.payload.data;
          toast.success(action.payload.errMessage);
        } else {
          state.error = action.payload.errMessage;
          toast.error(action.payload.errMessage);
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.errMessage;
        toast.error(action.payload.errMessage);
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;