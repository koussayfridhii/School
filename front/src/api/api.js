import axios from 'axios';
import { store } from '../store/store.js';
import { setCredentials, clearCredentials } from '../store/authSlice.js';

const api = axios.create({
  baseURL: '/api',
});

// Request interceptor to add the access token to headers
api.interceptors.request.use(
  (config) => {
    const { accessToken } = store.getState().auth;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
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
    const { refreshToken } = store.getState().auth;

    // If the error is 401 and it's not a retry request
    if (error.response.status === 401 && !originalRequest._retry && refreshToken) {
      originalRequest._retry = true;
      try {
        // Use a new axios instance to avoid recursive interceptor calls
        const { data } = await axios.post('/api/auth/refresh', { refreshToken });
        const { accessToken } = data;

        // Update the store with the new credentials (user data is preserved)
        const { user } = store.getState().auth;
        store.dispatch(setCredentials({ user, accessToken, refreshToken }));

        // Update the authorization header and retry the original request
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        // If refresh fails, clear credentials and effectively log the user out
        store.dispatch(clearCredentials());
        // In a real app, you would redirect to the login page here.
        // For example: window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
