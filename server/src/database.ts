


import mongoose from 'mongoose';
import 'dotenv/config';

class Database {

    static instance: Database;

    private constructor() { };

    static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }

    public connect() {
        const url = process.env.MONGODB_URL || '127.0.0.1:27017';
        console.log('db url: ', url)
        const connection = mongoose.connect(`mongodb://${url}/sanh-db`);
        return connection;
    }

    public disconnect() { }
}

const database = Database.getInstance();

export default database;
