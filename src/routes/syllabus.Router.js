import express from 'express';


import {
    addSyallbus,
    getAllSyallbus
} from "../controllers/syllabus.controller"


const syllabusRouter = express.Router();

syllabusRouter
    .route('/:subjectId')
    .get(getAllSyallbus);

syllabusRouter
    .route('/:subjectId/add')
    .post(addSyallbus)


export default syllabusRouter;