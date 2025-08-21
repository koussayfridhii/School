import { useQuery } from '@tanstack/react-query';
import api from '../api/api.js';

const fetchUsers = async () => {
  const { data } = await api.get('/users'); // Assuming a /api/users endpoint
  return data;
};

export const useFetchUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
};
