import express from 'express';

import {
    getBranchById
} from '../controllers/Branch.controller';

import {
    addRegulations,
    getAllRegulations
} from "../controllers/regulations.controller"


const regulationRouter = express.Router();

// params
regulationRouter.param("branchId", getBranchById);

regulationRouter
    .route('/:branchId')
    .get(getAllRegulations);

regulationRouter
    .route('/:branchId/add')
    .post(addRegulations)


export default regulationRouter;