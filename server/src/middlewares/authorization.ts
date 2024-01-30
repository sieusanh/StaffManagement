'use strict'
import { Response, NextFunction } from 'express';
import { AuthInfoRequest } from '../libs/interfaces';

const adminAuthorization = (req: AuthInfoRequest,
    res: Response, next: NextFunction) => {

    if (req.info.role !== 'ADMIN') {
        res.status(403).json('Admin authorization failed.')
        return
    }

    next();
}

export default { adminAuthorization };
