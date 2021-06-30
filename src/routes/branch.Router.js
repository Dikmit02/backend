import express from 'express';

import {
    getAllBranch,
    addBranch
} from '../controllers/Branch.controller';

import {
    getCollegeById
} from "../controllers/College.controller"


const branchRouter = express.Router();

// params
branchRouter.param("collegeId", getCollegeById);


//routes
branchRouter
    .route('/:collegeId')
    .get(getAllBranch);

branchRouter
    .route('/:collegeId/add')
    .post(addBranch)




export default branchRouter;