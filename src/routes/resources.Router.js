import express from 'express';


import {
    addResources,
    getAllResources
} from "../controllers/resources.controller"

import JWT_Middleware from '../middlewares/jwtMiddleware';

const resoucesRouter = express.Router();

resoucesRouter
    .route('/:subjectId')
    .get(getAllResources);

resoucesRouter
    .route('/:subjectId/add')
    .post(JWT_Middleware,addResources)


export default resoucesRouter;