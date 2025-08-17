const passport = require('passport');

const protect = passport.authenticate('jwt', { session: false });

const authorize = (roles) => (req, res, next) => {
  if (!roles.some((role) => req.user.roles.includes(role))) {
    return res.status(403).json({ message: 'Forbidden' });
  }
  next();
};

module.exports = {
  protect,
  authorize,
};
