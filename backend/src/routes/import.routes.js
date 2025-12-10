import { Router } from 'express';
import * as controller from '../controllers/import.controller.js';

const router = Router();

router.post('/', controller.importData);

export default router;