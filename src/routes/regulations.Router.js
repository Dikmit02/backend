import express from 'express';


import {
    addRegulations,
    getAllRegulations
} from "../controllers/regulations.controller"


const regulationRouter = express.Router();

regulationRouter
    .route('/:branchId')
    .get(getAllRegulations);

regulationRouter
    .route('/:branchId/add')
    .post(addRegulations)


export default regulationRouter;