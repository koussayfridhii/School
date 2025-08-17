import React, { useState } from 'react';
import { useLogin } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginMutation = useLogin();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate({ email, password }, {
      onSuccess: () => {
        navigate('/dashboard');
      }
    });
  };

  return (
    <div className="p-4 flex justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-1/3">
        <h1 className="text-2xl">Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded"
        />
        <button type="submit" className="p-2 bg-primary text-white rounded">
          {loginMutation.isLoading ? 'Logging in...' : 'Login'}
        </button>
        {loginMutation.isError && (
          <p className="text-red-500">{loginMutation.error.response.data.message}</p>
        )}
      </form>
    </div>
  );
};

export default Login;
