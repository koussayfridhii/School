import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import api from '../api/api.js';
import { setCredentials } from '../store/authSlice.js';

// Hook for user login
export const useLogin = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: (credentials) => api.post('/auth/login', credentials),
    onSuccess: (data) => {
      // On successful login, dispatch the credentials to the Redux store
      dispatch(setCredentials(data.data));
    },
  });
};

// Hook for user registration
export const useRegister = () => {
  return useMutation({
    mutationFn: (userInfo) => api.post('/auth/register', userInfo),
  });
};
