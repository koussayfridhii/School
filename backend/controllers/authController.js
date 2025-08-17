const User = require('../models/User');
const {
  generateAccessToken,
  generateRefreshToken,
} = require('../config/jwt');
const {
  addRefreshToken,
  hasRefreshToken,
  removeRefreshToken,
} = require('../config/tokenStore');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error registering user', error });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    addRefreshToken(refreshToken);

    res.json({
      accessToken,
      refreshToken,
      user: { id: user.id, email: user.email, roles: user.roles },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.refresh = (req, res) => {
  const { token } = req.body;
  if (!token) {
    return res.sendStatus(401);
  }

  if (!hasRefreshToken(token)) {
    return res.sendStatus(403);
  }

  jwt.verify(token, process.env.JWT_REFRESH_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    const accessToken = generateAccessToken({ id: user.id, roles: user.roles });
    res.json({ accessToken });
  });
};

exports.logout = (req, res) => {
  const { token } = req.body;
  removeRefreshToken(token);
  res.json({ message: 'Logout successful' });
};
