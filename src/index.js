import express, { urlencoded } from 'express';
import { router } from './routes/index';
import { PORT } from './config';
import { dbConnect } from './services/databaseService';
import { APIError } from './utilities/APIError';
import { errorHandler } from './middlewares/errorMiddleware';
import CookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(
    cors({
        credentials: true,
        origin: function (origin, callback) {
            return callback(null, true);
        }
    })
);

app.use(CookieParser());

app.use(urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', router);

app.use((req, res, next) => {
    next(new APIError(404, 'NOT_FOUND'));
});

app.use('/', (req, res) => res.send('Health Ok'));

app.use(errorHandler);


const startServer = async () => {
    try {
        await dbConnect();
        app.listen(PORT, () => console.info('Server Started and Db Connected Successfully'));
    } catch (error) {
        console.error(error);
    }
};


startServer()
