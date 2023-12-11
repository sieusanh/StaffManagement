"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
class Database {
    constructor() { }
    ;
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
    connect() {
        const url = process.env.MONGODB_URL;
        console.log('db url: ', url);
        const connection = mongoose_1.default.connect(`mongodb://${url}/sanh-db`);
        return connection;
    }
    disconnect() { }
}
const database = Database.getInstance();
exports.default = database;
//# sourceMappingURL=database.js.map