import express from 'express';
import * as brandController from '../controllers/brandController.js';
import { authenticateToken, authorizeRole } from '../middleware/auth.js';
import { uploadBrandImage } from '../config/cloudinaryConfig.js';

const router = express.Router();

// Public routes
router.get('/all', brandController.getAllBrands);
router.get('/:brand_id', brandController.getBrandById);

// Protected routes (chỉ admin)
router.post('/create', authenticateToken, authorizeRole([1]), brandController.createBrand);
router.put('/update/:brand_id', authenticateToken, authorizeRole([1]), brandController.updateBrand);
router.delete('/delete/:brand_id', authenticateToken, authorizeRole([1]), brandController.deleteBrand);
router.post('/upload-image/:brand_id', authenticateToken, authorizeRole([1]), uploadBrandImage.single('image'), brandController.uploadBrandImage);

export default router;