import { useMutation, useQuery } from '@tanstack/react-query';
import api from '../api';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../store/slices/authSlice';

// Hook for user login
export const useLogin = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: (credentials) => api.post('/auth/login', credentials),
    onSuccess: (data) => {
      dispatch(loginSuccess(data.data));
    },
  });
};

// Hook for user registration
export const useRegister = () => {
  return useMutation({
    mutationFn: (userInfo) => api.post('/auth/register', userInfo),
  });
};

// Hook to fetch users (example of a protected query)
export const useFetchUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => api.get('/users').then((res) => res.data),
  });
};
