import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectAccessToken, selectCurrentUser } from '../store/authSlice.js';

const Protect = ({ children, allowedRoles }) => {
  const token = useSelector(selectAccessToken);
  const user = useSelector(selectCurrentUser);
  const location = useLocation();

  // 1. Check for authentication
  if (!token) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to. This allows us to send them back after they log in.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 2. Check for authorization (if allowedRoles is provided)
  const hasRequiredRole = allowedRoles ? user?.roles?.some(role => allowedRoles.includes(role)) : true;

  if (!hasRequiredRole) {
    // Redirect them to a 'forbidden' page or the home page if they lack the role
    // For simplicity, we'll redirect to home. A dedicated "unauthorized" page would be better.
    return <Navigate to="/" replace />;
  }

  // 3. If authenticated and authorized, render the child components
  return children;
};

export default Protect;
