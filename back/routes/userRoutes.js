import express from 'express';
import { getUsers } from '../controllers/userController.js';
import { protect, authorize } from '../middlewares/authMiddleware.js';

const router = express.Router();

// @route   GET /api/users
// @desc    Get all users
// @access  Private/Admin
router.route('/').get(protect, authorize('admin'), getUsers);

export default router;
