import express from 'express';
import * as userController from '../controllers/userController.js';
import { authenticateToken, authorizeRole } from '../middleware/auth.js';
import { uploadAvatar } from '../config/cloudinaryConfig.js';

const router = express.Router();

// Public routes
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.post('/firebase-google-login', userController.firebaseGoogleLogin);
router.post('/refresh-token', userController.refreshAccessToken);
router.post('/request-otp', userController.requestOtp);
router.post('/verify-otp', userController.verifyOtp);
router.post('/reset-password', userController.resetPassword);

// Protected routes
router.post('/logout', authenticateToken, userController.logoutUser);
router.put('/update', authenticateToken, userController.updateUser);
router.delete('/:user_id', authenticateToken, authorizeRole([1]), userController.deleteUser);
router.get('/:user_id', authenticateToken, userController.getUserById);
router.get('/all', authenticateToken, authorizeRole([1]), userController.getAllUsers);
router.post('/upload-avatar', authenticateToken, uploadAvatar.single('avatar'), userController.uploadAvatar);

export default router;