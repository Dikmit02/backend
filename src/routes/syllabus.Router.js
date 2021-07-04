import express from 'express';


import {
    addSyallbus,
    getAllSyallbus
} from "../controllers/syllabus.controller"

import JWT_Middleware from '../middlewares/jwtMiddleware';

const syllabusRouter = express.Router();

syllabusRouter
    .route('/:subjectId')
    .get(getAllSyallbus);

syllabusRouter
    .route('/:subjectId/add')
    .post(JWT_Middleware,addSyallbus)


export default syllabusRouter;