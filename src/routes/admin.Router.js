import express from 'express';

import {
    LoginInAdmin,
    SignUpAdmin,
    logoutAdmin
} from '../controllers/adminController';


const adminRouter = express.Router();

//routes

// adminRouter
//     .route('/register')
//     .post(SignUpAdmin)

adminRouter
    .route('/login')
    .post(LoginInAdmin)


adminRouter
    .route('/logout')
    .get(logoutAdmin);


export default adminRouter;