import React, { useState } from 'react';
import { useRegister } from '../hooks/useAuth.js';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { mutate: register, isLoading, error, isSuccess } = useRegister();

  const handleSubmit = (e) => {
    e.preventDefault();
    register({ username, password });
  };

  if (isSuccess) {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="p-8 bg-white dark:bg-gray-800 shadow-md rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Registration Successful!</h2>
                <p>You can now log in.</p>
                <button onClick={() => navigate('/login')} className="mt-4 bg-primary-light dark:bg-primary-dark text-white p-2 rounded">
                    Go to Login
                </button>
            </div>
        </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="p-8 bg-white dark:bg-gray-800 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
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
          {isLoading ? 'Signing up...' : 'Sign Up'}
        </button>
        {error && <p className="text-red-500 mt-4">{error.response?.data?.message || 'An error occurred'}</p>}
      </form>
    </div>
  );
};

export default SignUpPage;
