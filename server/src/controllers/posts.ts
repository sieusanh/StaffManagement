import { Request, Response, NextFunction } from 'express';
import log from 'log';
import PostModel from '../models/post';
const logger = log.get('controller-account');

// Common controllers
async function getPosts(req: Request, res: Response, next: NextFunction) {
    try {
        const params = req.query || {};
        const posts = await PostModel.find(params);

        res.status(200).json({ total: posts.length, data: posts });
    } catch (err) {
        next(err);
    }
}

// Admin controllers
async function createPost(req: Request, res: Response, next: NextFunction) {
    try {
        const params = req.body;
        const post = await PostModel.create(params);

        res.status(201);
        res.end();
    } catch (err) {
        next(err);
    }
}

async function updatePost(req: Request, res: Response, next: NextFunction) {
    try {
        const queryParams = req.query || {};
        const updateParams = req.body || {};
        await PostModel.updateOne(queryParams, { $set: updateParams });

        res.status(200).json({ message: 'Successfully updated.' });
    } catch (err) {
        next(err);
    }
}

export default { getPosts, createPost, updatePost };
