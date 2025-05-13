import express from 'express';
import { uploadDescriptionImage } from '../config/cloudinaryConfig.js';
import { uploadImage } from '../controllers/imageController.js';
import { authenticateToken, authorizeRole } from '../middleware/auth.js';

const router = express.Router();

// Route upload ảnh công khai cho description (chỉ admin)
router.post('/upload', authenticateToken, authorizeRole([1]), uploadDescriptionImage.single('image'), uploadImage);

export default router;