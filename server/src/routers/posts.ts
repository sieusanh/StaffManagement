

import { Router } from 'express';
import postControllers from '../controllers/posts';
import middlewares from '../middlewares';

const router = Router();
const { getPosts, createPost, updatePost } = postControllers;
const { userAuthentication,
    adminAuthorization } = middlewares;

// Common

// User

// Admin
router.get('/find', getPosts);
router.post('/create', userAuthentication,
    adminAuthorization, createPost);
router.patch('/update', userAuthentication,
    adminAuthorization, updatePost);

export default router;
