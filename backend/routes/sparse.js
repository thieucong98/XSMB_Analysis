import express from 'express';
import { sparseController } from '../controllers/index.js';
const spareRouter = express.Router();

spareRouter.get('/', sparseController.getAllSparses);
spareRouter.post('/insert', sparseController.insertNewSparseRecord);
spareRouter.get('/countSparse', sparseController.countAllSparses);
export default spareRouter;
