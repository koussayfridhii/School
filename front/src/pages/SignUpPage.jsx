import React, { useState } from 'react';
import { useRegister } from '../hooks/useAuth.js';
import { useNavigate, Link } from 'react-router-dom';
import Card, { CardBody, CardHeader } from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';

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
        <main className="flex-grow flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <Card>
                    <CardBody className="text-center">
                        <h2 className="text-2xl font-bold mb-4">Registration Successful!</h2>
                        <p>You can now log in.</p>
                        <Button onClick={() => navigate('/login')} className="mt-6">
                            Go to Login
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </main>
    )
  }

  return (
    <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md">
            <Card>
                <CardHeader>
                    <h2 className="text-2xl font-bold text-center">Sign Up</h2>
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
                            {isLoading ? 'Signing up...' : 'Sign Up'}
                        </Button>
                        {error && <p className="text-red-500 mt-4 text-center">{error.response?.data?.message || 'An error occurred'}</p>}
                         <p className="mt-6 text-center text-sm">
                            Already have an account? <Link to="/login" className="text-primary hover:underline">Log In</Link>
                        </p>
                    </form>
                </CardBody>
            </Card>
        </div>
    </main>
  );
};

export default SignUpPage;
