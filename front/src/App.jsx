import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Dashboard from './pages/Dashboard.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Protect from './components/Protect.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';

function App() {
  return (
    <Router>
      <div className="bg-background-light dark:bg-background-dark min-h-screen text-text-light dark:text-text-dark">
        <nav className="p-4 bg-primary-light dark:bg-primary-dark text-white flex justify-between items-center">
          <div>
            <Link to="/" className="mr-4">Home</Link>
            <Link to="/about" className="mr-4">About</Link>
            <Link to="/dashboard">Dashboard</Link>
          </div>
          <ThemeToggle />
        </nav>
        <main>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<LoginPage />} />

            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <Protect>
                  <Dashboard />
                </Protect>
              }
            />
             {/* Example of a role-protected route */}
            {/* <Route
              path="/admin"
              element={
                <Protect allowedRoles={['admin']}>
                  <AdminPage />
                </Protect>
              }
            /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
