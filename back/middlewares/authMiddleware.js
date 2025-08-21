import passport from 'passport';

// Middleware to protect routes, equivalent to passport.authenticate
export const protect = passport.authenticate('jwt', { session: false });

// Middleware for role-based authorization
export const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    // This middleware should run after the 'protect' middleware,
    // so req.user should be available.
    if (!req.user || !req.user.roles) {
      return res.status(403).json({ message: 'User roles not found.' });
    }

    const hasRole = req.user.roles.some(role => allowedRoles.includes(role));

    if (!hasRole) {
      return res.status(403).json({
        message: `Forbidden. You must have one of the following roles: ${allowedRoles.join(', ')}`,
      });
    }

    // If user has one of the required roles, proceed
    next();
  };
};
