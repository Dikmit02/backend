import express from 'express';


import {
    addSemesters,
    getAllSemesters
} from "../controllers/semester.controller"


const semesterRouter = express.Router();

semesterRouter
    .route('/:regulationId')
    .get(getAllSemesters);

semesterRouter
    .route('/:regulationId/add')
    .post(addSemesters)


export default semesterRouter;