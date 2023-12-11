

import HttpStatusCode from './http-status-code';



class BaseError extends Error {
    public readonly name: string;
    public readonly httpCode: HttpStatusCode;
    public readonly isOperational: boolean;

    constructor(name: string, httpCode: HttpStatusCode, isOperational: boolean, description: string) {
        super(description);

        Object.setPrototypeOf(this, new.target.prototype);

        this.name = name;
        this.httpCode = httpCode;
        this.isOperational = isOperational;

        Error.captureStackTrace(this);
    }
}

// free to extend the BaseError
class APIError extends BaseError {
    constructor(name: string, httpCode = HttpStatusCode.INTERNAL_SERVER,
        isOperational = true, description = 'internal server error') {
        super(name, httpCode, isOperational, description);
    }
}

class HTTP400Error extends BaseError {
    constructor(description = 'bad request') {
        super('NOT FOUND', HttpStatusCode.BAD_REQUEST, true, description);
    }
}

// // const user = await User.getUserById(1);
// const user = null;
// if (user === null) {
//     throw new APIError(
//         'NOT FOUND',
//         HttpStatusCode.NOT_FOUND,
//         true,
//         'Error detail'
//     );
// }

class ErrorHandler {
    public async handleError(err: Error): Promise<void> {
        // await logger.error(
        //     'Error message from the centralized error-handling component',
        //     err
        // );

        // await sendMailToAdminIfCritical();
        // await sendEventsToSentry();
    }

    public isTrustedError(error: Error) {
        if (error instanceof BaseError) {
            return error.isOperational;
        }

        return false;
    }
}

const errorHandler = new ErrorHandler();

export default { BaseError, APIError, HTTP400Error, errorHandler };
