import React, { useState } from 'react';
import { useLogin } from '../hooks/useAuth.js';
import { useNavigate, Link } from 'react-router-dom';
import Card, { CardBody, CardHeader } from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';

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
    <main className="flex-grow flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold text-center">Login</h2>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-color-default">Username</label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-color-default">Password</label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? 'Logging in...' : 'Login'}
              </Button>
              {error && <p className="text-red-500 mt-4 text-center">{error.response?.data?.message || 'An error occurred'}</p>}
              <p className="mt-6 text-center text-sm">
                Don't have an account? <Link to="/signup" className="text-primary hover:underline">Sign Up</Link>
              </p>
            </form>
          </CardBody>
        </Card>
      </div>
    </main>
  );
};

export default LoginPage;
