import { APIError } from "../utilities/APIError"
import { UserModel } from "../models/model.index"
import JWT from 'jsonwebtoken';

import { jwtSecretKeyAuth, authTokenExpiry, AUTH_COOKIE_KEY } from "../constants"

export const SignUpAdmin = async (req, res) => {
    const data = req.body
    const { email, password } = data
    if (!email || !password) {
        throw new APIError(400, 'Please enter email or password');
    }
    const user = new UserModel({
        email,
        password,
        role: 'admin'
    });

    const savedUser = await user.save()

    res.send({ status: true, savedUser })
}


export const LoginInAdmin = async (req, res) => {

    
    const data = req.body
    const { email, password } = data

    if (!email || !password) {
        throw new APIError('Please enter email or password');
    }

    try {
        const admin = await UserModel.findOne({ email })
        if (!admin) {
            throw new APIError(400, 'Invalid Email')
        }

        if (admin.password != password) {
            throw new APIError(400, 'Invalid Password')
        }


        const token = JWT.sign({
            tokenType: 0,
            adminId: admin._id
        },
            jwtSecretKeyAuth, { expiresIn: 60 * parseInt(authTokenExpiry) }
        );

        res.cookie(AUTH_COOKIE_KEY, token, { httpOnly: true });

        res.send({ status: true })


    } catch (error) {
        throw new APIError(500, 'Internal Server Error')

    }
}



export const logoutAdmin = (req, res, next) => {
    res.clearCookie(AUTH_COOKIE_KEY);
    res.send({ status: true });
};