
import { Request } from 'express';
import { AccessInfo } from './types';

interface RequestParams {
    limit: number
};

interface AuthInfoRequest extends Request {
    info: AccessInfo
}

export { RequestParams, AuthInfoRequest };
