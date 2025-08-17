import axios from 'axios';
import { store } from './store/store';
import { setAccessToken, logoutSuccess } from './store/slices/authSlice';

const api = axios.create({
  baseURL: '/api',
});

// Request interceptor to add the access token to headers
api.interceptors.request.use(
  (config) => {
    const { accessToken } = store.getState().auth;
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const { refreshToken } = store.getState().auth;
      if (refreshToken) {
        try {
          const { data } = await axios.post('/api/auth/refresh', { token: refreshToken });
          store.dispatch(setAccessToken(data.accessToken));
          originalRequest.headers['Authorization'] = `Bearer ${data.accessToken}`;
          return api(originalRequest);
        } catch (refreshError) {
          store.dispatch(logoutSuccess());
          return Promise.reject(refreshError);
        }
      } else {
        store.dispatch(logoutSuccess());
      }
    }
    return Promise.reject(error);
  }
);

export default api;
