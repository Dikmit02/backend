import express from 'express';
import { createValidator } from 'express-joi-validation';
import {
    registerCollege
} from '../validators/Auth.validator';

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
    .post(validator.body(registerCollege), registerCollegeController);

collegeRouter
    .route('/')
    .get(getAllColleges);

collegeRouter
    .route('/:collegeId')
    .patch(UpdateCollege)

collegeRouter
    .route('/:collegeId')
    .delete(DeleteCollege)

export default collegeRouter;