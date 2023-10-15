import userRouter from "./user.js";
import spareRouter from "./sparse.js";
import { Router } from 'express';
const routes = new Router();


routes.use('/users', userRouter);
routes.use('/sparses', spareRouter);

export default routes;
