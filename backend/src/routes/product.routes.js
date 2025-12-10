import { Router } from "express";
import * as controller from '../controllers/product.controller.js'

const router = Router();

router.get('/', controller.getAll);
router.post('/:id', controller.create);
router.put('/:id', controller.update);

export default router;