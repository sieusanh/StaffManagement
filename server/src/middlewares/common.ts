





import { Request, Response, NextFunction } from 'express';

function common(req: Request, res: Response, next: NextFunction) {

    console.log('common');

    next();
}

export default common;
