"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_code_1 = __importDefault(require("./http-status-code"));
class BaseError extends Error {
    constructor(name, httpCode, isOperational, description) {
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
    constructor(name, httpCode = http_status_code_1.default.INTERNAL_SERVER, isOperational = true, description = 'internal server error') {
        super(name, httpCode, isOperational, description);
    }
}
class HTTP400Error extends BaseError {
    constructor(description = 'bad request') {
        super('NOT FOUND', http_status_code_1.default.BAD_REQUEST, true, description);
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
    handleError(err) {
        return __awaiter(this, void 0, void 0, function* () {
            // await logger.error(
            //     'Error message from the centralized error-handling component',
            //     err
            // );
            // await sendMailToAdminIfCritical();
            // await sendEventsToSentry();
        });
    }
    isTrustedError(error) {
        if (error instanceof BaseError) {
            return error.isOperational;
        }
        return false;
    }
}
const errorHandler = new ErrorHandler();
exports.default = { BaseError, APIError, HTTP400Error, errorHandler };
//# sourceMappingURL=error-handler.js.map