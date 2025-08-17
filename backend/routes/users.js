const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const { protect, authorize } = require('../middlewares/authMiddleware');

router.get(
  '/',
  protect,
  authorize(['admin']),
  usersController.getUsers
);

module.exports = router;
