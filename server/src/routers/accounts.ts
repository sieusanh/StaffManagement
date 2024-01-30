

import { Router } from 'express';
import accountControllers from '../controllers/accounts';
import middlewares from '../middlewares';

const router = Router();
const { register, login, find, count } = accountControllers;
const { userAuthentication,
    adminAuthorization } = middlewares;

// Common
router.post('/register', register);
router.post('/login', login);

// User

// Admin
router.get('/count', userAuthentication,
    adminAuthorization, count);
router.get('/find', userAuthentication,
    adminAuthorization, find);

export default router;
