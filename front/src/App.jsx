import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectAccessToken, clearCredentials } from './store/authSlice.js';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Dashboard from './pages/Dashboard.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import Protect from './components/Protect.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';

function App() {
  const accessToken = useSelector(selectAccessToken);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearCredentials());
    // In a real app, you might want to also call a logout endpoint on the backend
  };

  return (
    <Router>
      <div className="bg-background-light dark:bg-background-dark min-h-screen text-text-light dark:text-text-dark">
        <header className="bg-white dark:bg-gray-800 shadow-md">
          <nav className="container mx-auto p-4 flex justify-between items-center">
            <div className="text-lg font-bold">
              <Link to="/">MyApp</Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/" className="hover:text-primary-light dark:hover:text-primary-dark">Home</Link>
              <Link to="/about" className="hover:text-primary-light dark:hover:text-primary-dark">About</Link>
              <Link to="/dashboard" className="hover:text-primary-light dark:hover:text-primary-dark">Dashboard</Link>
            </div>
            <div className="flex items-center space-x-4">
              {accessToken ? (
                <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Logout</button>
              ) : (
                <>
                  <Link to="/login" className="hover:text-primary-light dark:hover:text-primary-dark">Login</Link>
                  <Link to="/signup" className="bg-primary-light dark:bg-primary-dark hover:opacity-90 text-white px-4 py-2 rounded">Sign Up</Link>
                </>
              )}
              <ThemeToggle />
            </div>
          </nav>
        </header>
        <main className="container mx-auto p-4">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />

            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <Protect>
                  <Dashboard />
                </Protect>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
