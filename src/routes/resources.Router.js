import express from 'express';


import {
    addResources,
    getAllResources
} from "../controllers/resources.controller"


const resoucesRouter = express.Router();

resoucesRouter
    .route('/:subjectId')
    .get(getAllResources);

resoucesRouter
    .route('/:subjectId/add')
    .post(addResources)


export default resoucesRouter;