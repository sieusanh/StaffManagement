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
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const database_1 = __importDefault(require("./database"));
const routes_1 = __importDefault(require("./routes"));
const middlewares_1 = __importDefault(require("./middlewares"));
const libs_1 = require("./libs");
const app = (0, express_1.default)();
const { userRouter } = routes_1.default;
const { common } = middlewares_1.default;
const myPath = path_1.default.join(__dirname, '../../client/src/public');
class Server {
    constructor() {
        this.PORT = parseInt(process.env.PORT);
    }
    ;
    static getInstance() {
        if (!Server.instance) {
            Server.instance = new Server();
        }
        return Server.instance;
    }
    wait() {
        return __awaiter(this, void 0, void 0, function* () {
            const PORT = this.PORT;
            const promise = new Promise((resolve, reject) => {
                app.listen(PORT, () => {
                    console.log(`Server is listening on ${PORT}`);
                }).on('error', err => {
                    console.log('App error: ', err);
                    reject(err);
                });
            });
            return promise;
        });
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Database connection
                yield database_1.default.connect();
                console.log('database connected.');
                // Run http server
                this.wait();
                // Third-party middleware
                app.use((0, cors_1.default)({
                    origin: '*',
                    methods: ['GET']
                }));
                // Built-in middleware
                app.use(express_1.default.json());
                // app.use('/', express.static(__dirname + '/src/public'));
                app.use('/', express_1.default.static(myPath));
                app.get('/', (req, res) => res.sendFile('index.html'));
                // Application-level middleware
                app.use((req, res, next) => {
                    next();
                });
                app.use('/:id', (req, res, next) => {
                    console.log('type: ', req.method);
                    next();
                });
                app.use('/users', common, userRouter);
                // Error-handling middleware
                app.use((err, req, res, next) => __awaiter(this, void 0, void 0, function* () {
                    console.error(err.stack);
                    yield (0, libs_1.LogEvents)(err.message);
                    if (!libs_1.ErrorHandler.errorHandler.isTrustedError(err)) {
                        res.status(500).json({ a: 'mes' });
                    }
                    yield libs_1.ErrorHandler.errorHandler.handleError(err);
                }));
            }
            catch (err) {
                console.log('start error: ', err);
                process.exit(1);
            }
        });
    }
    stop() {
        // Database disconnect
        process.on('unhandledRejection', (error, promise) => {
            throw error;
        });
        process.on('uncaughtException', (error) => __awaiter(this, void 0, void 0, function* () {
            yield (0, libs_1.LogEvents)(error.toString());
            libs_1.ErrorHandler.errorHandler.handleError(error);
            if (!libs_1.ErrorHandler.errorHandler.isTrustedError(error)) {
                process.exit(1);
            }
        }));
    }
}
const server = Server.getInstance();
exports.default = server;
//# sourceMappingURL=server.js.map