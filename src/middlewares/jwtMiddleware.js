import JWT from "jsonwebtoken";
import { jwtSecretKeyAuth, AUTH_COOKIE_KEY } from "../constants";
import { APIError } from "../utilities/APIError";

const verifyJwtToken = async (req, res, next) => {
    const token = req.cookies[AUTH_COOKIE_KEY];
    try {
        if (!token)
            return next(
                new APIError(
                    401,
                    'UNAUTHORIZED_REQUEST'
                )
            );

        const verified = JWT.verify(token, jwtSecretKeyAuth);

        if (!verified)
            return next(
                new APIError(
                    401,
                    'UNAUTHORIZED_REQUEST'
                )
            );

        req.userId = verified.userId;
        next();
    } catch (err) {
        return next(
            new APIError(
                401,
                'UNAUTHORIZED_REQUEST'
            )
        );
    }
};

export default verifyJwtToken;
