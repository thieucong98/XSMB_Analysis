import userRouter from './user.js';
import spareRouter from './sparse.js';
import crawlDataRouter from './crawl.js';
import { Router } from 'express';
const routes = new Router();

routes.use('/users', userRouter);
routes.use('/sparses', spareRouter);
routes.use('/crawl-data', crawlDataRouter);

export default routes;
