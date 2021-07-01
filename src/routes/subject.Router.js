import express from 'express';


import {
    addSubject,
    getAllSubject
} from "../controllers/subject.controller"


const subjectRouter = express.Router();

subjectRouter
    .route('/:semesterId')
    .get(getAllSubject);

subjectRouter
    .route('/:semesterId/add')
    .post(addSubject)


export default subjectRouter;