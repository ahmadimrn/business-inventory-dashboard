import { Router } from "express";
import productRoutes from "./product.routes.js";
import importRoutes from "./import.routes.js";
import userRoutes from "./user.routes.js";

const router = Router();
router.use("/products", productRoutes);
router.use("/import", importRoutes);
router.use("/user", userRoutes);

export default router;
