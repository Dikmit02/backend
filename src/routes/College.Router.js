import express from 'express';
import { createValidator } from 'express-joi-validation';
import {
    registerCollege
} from '../validators/Auth.validator';

import JWT_Middleware from '../middlewares/jwtMiddleware';

import {
    registerCollegeController,
    getAllColleges,
    UpdateCollege,
    DeleteCollege
} from '../controllers/College.controller';

const validator = createValidator({ passError: true });

const collegeRouter = express.Router();

collegeRouter
    .route('/register')
    .post(JWT_Middleware,validator.body(registerCollege), registerCollegeController);

collegeRouter
    .route('/')
    .get(getAllColleges);

collegeRouter
    .route('/:collegeId')
    .patch(JWT_Middleware,UpdateCollege)

collegeRouter
    .route('/:collegeId')
    .delete(JWT_Middleware,DeleteCollege)

export default collegeRouter;