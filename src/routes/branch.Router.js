import express from 'express';

import {
    getAllBranch,
    addBranch
} from '../controllers/Branch.controller';

import JWT_Middleware from '../middlewares/jwtMiddleware';

const branchRouter = express.Router();

//routes
branchRouter
    .route('/:collegeId')
    .get(getAllBranch);

branchRouter
    .route('/:collegeId/add')
    .post(JWT_Middleware,addBranch)




export default branchRouter;