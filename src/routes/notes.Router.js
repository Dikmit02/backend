import express from 'express';


import {
    addNotes,
    getAllNotes
} from "../controllers/notes.controller"

import JWT_Middleware from '../middlewares/jwtMiddleware';


const notesRouter = express.Router();

notesRouter
    .route('/:subjectId')
    .get(getAllNotes);

notesRouter
    .route('/:subjectId/add')
    .post(JWT_Middleware,addNotes)


export default notesRouter;