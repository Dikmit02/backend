import express from 'express';


import {
    addSubject,
    getAllSubject
} from "../controllers/subject.controller"

import JWT_Middleware from '../middlewares/jwtMiddleware';

const subjectRouter = express.Router();

subjectRouter
    .route('/:semesterId')
    .get(getAllSubject);

subjectRouter
    .route('/:semesterId/add')
    .post(JWT_Middleware,addSubject)


export default subjectRouter;