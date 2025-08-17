import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Unauthorized from '../pages/Unauthorized';
import Protect from '../components/auth/Protect';
import AppLayout from '../components/layout/AppLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'login', element: <Login /> },
      { path: 'unauthorized', element: <Unauthorized /> },
      {
        path: 'dashboard',
        element: (
          <Protect>
            <Dashboard />
          </Protect>
        ),
      },
    ],
  },
]);
