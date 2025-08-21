import React, { useState } from 'react';
import { useLogin } from '../hooks/useAuth.js';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { mutate: login, isLoading, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password }, {
      onSuccess: () => {
        navigate('/dashboard'); // Redirect to dashboard on successful login
      }
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="p-8 bg-white dark:bg-gray-800 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <div className="mb-4">
          <label className="block mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded bg-gray-200 dark:bg-gray-700"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded bg-gray-200 dark:bg-gray-700"
            required
          />
        </div>
        <button type="submit" disabled={isLoading} className="w-full bg-primary-light dark:bg-primary-dark text-white p-2 rounded">
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        {error && <p className="text-red-500 mt-4">{error.response?.data?.message || 'An error occurred'}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
