import express from 'express';


import {
    addSemesters,
    getAllSemesters
} from "../controllers/semester.controller"

import JWT_Middleware from '../middlewares/jwtMiddleware';

const semesterRouter = express.Router();

semesterRouter
    .route('/:regulationId')
    .get(getAllSemesters);

semesterRouter
    .route('/:regulationId/add')
    .post(JWT_Middleware,addSemesters)


export default semesterRouter;