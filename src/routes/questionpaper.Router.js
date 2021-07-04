import express from 'express';


import {
    addQestionPapers,
    getAllQestionPapers
} from "../controllers/questionpaper.Router"

import JWT_Middleware from '../middlewares/jwtMiddleware';

const questionpaperRouter = express.Router();

questionpaperRouter
    .route('/:subjectId')
    .get(getAllQestionPapers);

questionpaperRouter
    .route('/:subjectId/add')
    .post(JWT_Middleware,addQestionPapers)


export default questionpaperRouter;