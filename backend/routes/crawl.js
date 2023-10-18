import express from 'express';
import { crawlController } from '../controllers/index.js';

const crawlDataRouter = express.Router();

crawlDataRouter.get('/', crawlController.crawlData);

export default crawlDataRouter;
