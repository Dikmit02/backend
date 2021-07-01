import express from 'express';


import {
    addNotes,
    getAllNotes
} from "../controllers/notes.controller"


const notesRouter = express.Router();

notesRouter
    .route('/:subjectId')
    .get(getAllNotes);

notesRouter
    .route('/:subjectId/add')
    .post(addNotes)


export default notesRouter;