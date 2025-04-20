import express from 'express';
import userRoutes from './userRoutes.js';
import brandRoutes from './brandRoutes.js';
import categoryRoutes from './categoryRoutes.js';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/brands', brandRoutes);
router.use('/categories', categoryRoutes);

export default router;