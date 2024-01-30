

import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {

    // const promise = new Promise((resolve, reject) => {
    //     // resolve(true);
    //     console.log('promise 1');
    //     reject('logic error');
    // });

    // const promise2 = new Promise((resolve, reject) => {
    //     throw new Error('He is not sleeping!');
    // });

    try {
        // await promise;
        console.log('promise 2');
        // Promise.reject('Invalid password');
        res.status(200).json({});
    } catch (error) {
        console.log('catch');
        console.log(error);
        next(error);
        // return;
    }

    // promise.then(rs => {
    //     throw new Error('He is not sleeping!');
    // })
});

export default router;

