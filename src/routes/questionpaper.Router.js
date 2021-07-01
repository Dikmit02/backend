import express from 'express';


import {
    addQestionPapers,
    getAllQestionPapers
} from "../controllers/questionpaper.Router"


const questionpaperRouter = express.Router();

questionpaperRouter
    .route('/:subjectId')
    .get(getAllQestionPapers);

questionpaperRouter
    .route('/:subjectId/add')
    .post(addQestionPapers)


export default questionpaperRouter;