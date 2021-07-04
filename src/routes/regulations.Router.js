import express from 'express';


import {
    addRegulations,
    getAllRegulations
} from "../controllers/regulations.controller"

import JWT_Middleware from '../middlewares/jwtMiddleware';

const regulationRouter = express.Router();

regulationRouter
    .route('/:branchId')
    .get(getAllRegulations);

regulationRouter
    .route('/:branchId/add')
    .post(JWT_Middleware,addRegulations)


export default regulationRouter;