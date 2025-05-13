import express from 'express';
import * as categoryController from '../controllers/categoryController.js';
import { authenticateToken, authorizeRole } from '../middleware/auth.js';
import { uploadCategoryImage } from '../config/cloudinaryConfig.js';

const router = express.Router();

// Public routes
router.get('/all', categoryController.getAllCategories);
router.get('/:category_id', categoryController.getCategoryById);

// Protected routes (chỉ admin)
router.post('/create', authenticateToken, authorizeRole([1]), categoryController.createCategory);
router.put('/update/:category_id', authenticateToken, authorizeRole([1]), categoryController.updateCategory);
router.delete('/delete/:category_id', authenticateToken, authorizeRole([1]), categoryController.deleteCategory);
router.post('/upload-image/:category_id', authenticateToken, authorizeRole([1]), uploadCategoryImage.single('image'), categoryController.uploadCategoryImage);

export default router;