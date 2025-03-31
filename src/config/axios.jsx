import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor cho request: Thêm token vào header nếu có
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor cho response: Xử lý lỗi chung
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Xử lý token hết hạn (errCode: 3, Token has expired)
    if (error.response?.data?.errCode === 3 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await axios.post('http://localhost:8082/api/users/refresh', {
          refreshToken,
        });
        if (response.data.errCode === 0) {
          const newAccessToken = response.data.data.accessToken;
          localStorage.setItem('accessToken', newAccessToken);
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return api(originalRequest); // Gửi lại request với token mới
        }
      } catch (refreshError) {
        // Nếu refresh token cũng thất bại, đăng xuất người dùng
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login'; // Chuyển hướng đến trang đăng nhập
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;