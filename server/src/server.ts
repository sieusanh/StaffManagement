

import cors from 'cors';
import 'dotenv/config';
import express, { Request, Response, NextFunction }
    from 'express';
import path from 'path';
import database from './database';
import router from './routers';
import middlewares from './middlewares';
import { LogEvents, ErrorHandler } from './libs';

const app = express();
const { userRouter, accountRouter, postRouter } = router;
const { common } = middlewares;
const myPath = path.join(__dirname, '../../client/src/public');

class Server {
    private HOST: string;
    private PORT: number = parseInt(process.env.PORT);

    static instance: Server;

    private constructor() { };

    static getInstance(): Server {
        if (!Server.instance) {
            Server.instance = new Server();
        }

        return Server.instance;
    }

    public async wait() {
        const PORT = this.PORT;

        const promise = new Promise((resolve, reject) => {
            app.listen(PORT, () => {
                console.log(`Server is listening on ${PORT}`);
            }).on('error', err => {
                console.log('App error: ', err);
                reject(err);
            })
        });

        return promise;
    }

    public async start() {

        try {
            // Database connection
            await database.connect();
            console.log('database connected.');

            // Run http server
            this.wait();

            // Third-party middleware
            app.use(cors({
                origin: '*',
                methods: ['GET']
            }));

            // Built-in middleware
            app.use(express.json());

            // app.use('/', express.static(__dirname + '/src/public'));
            app.use('/', express.static(myPath));
            app.get('/', (req: Request, res: Response) =>
                res.sendFile('index.html')
            );

            // Application-level middleware
            app.use((req: Request, res: Response, next: NextFunction) => {
                next();
            });

            app.use('/:id', (req: Request, res: Response, next: NextFunction) => {
                console.log('type: ', req.method);
                next();
            });

            app.use('/users', common, userRouter);
            app.use('/accounts', common, accountRouter);
            app.use('/posts', common, postRouter);

            // Error-handling middleware
            app.use(async (
                err: { status: number, message: string },
                req: Request, res: Response, next: NextFunction) => {
                await LogEvents(err.message);
                const { status, message } = err;
                console.log('erre: ', err)
                res.status(status).json({ message });
                return;
                // if (!ErrorHandler.errorHandler.isTrustedError(err)) {
                //     console.log('if')
                //     res.status(status).json({ message });
                //     return;
                // }
                // await ErrorHandler.errorHandler.handleError(err);
            });

        } catch (err) {
            console.log('start error: ', err);
            process.exit(1);
        }
    }

    public stop() {

        // Database disconnect

        process.on('unhandledRejection', (error: Error, promise: Promise<any>) => {
            throw error;
        });

        process.on('uncaughtException', async (error: Error) => {
            await LogEvents(error.toString());

            ErrorHandler.errorHandler.handleError(error);
            if (!ErrorHandler.errorHandler.isTrustedError(error)) {
                process.exit(1);
            }
        });
    }
}

const server = Server.getInstance();

export default server;
