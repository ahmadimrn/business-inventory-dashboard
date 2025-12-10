import { Router } from "express";
import productRoutes from './product.routes.js';
import importRoutes from './import.routes.js';

const router = Router();
router.use('/products', productRoutes);
router.use('/import', importRoutes);

export default router;