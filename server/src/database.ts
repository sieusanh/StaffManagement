


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
        // const url = process.env.MONGODB_URL || '127.0.0.1:27017';
        const host = process.env.MONGO_HOST;
        const port = process.env.MONGO_PORT;
        const database = process.env.MONGO_DATABASE;
        const connection = mongoose.connect(`mongodb://${host}:${port}/${database}`)
            .catch(err => console.log('Mongoose error: ', err));
        console.log('tt: ', typeof connection);
        return connection;
    }

    public disconnect() {

    };

    // create(table: string, params: Object) {
    //     const collection = this.database.collection(table);
    //     const promise = collection.insertOne(params);
    //     return promise;
    // }

    // count(table: string, params: Object) {
    //     const collection = this.database.collection(table);
    //     const promise = collection.countDocuments(params);
    //     return promise;
    // }

    // find(table: string, params: RequestParams) {
    //     const collection = this.database.collection(table);
    //     const { limit = 10, ...query } = params;

    //     const promise = collection.find(query, {
    //         projection: {
    //             _id: 0
    //         }
    //     }).limit(limit);

    //     return promise;
    // }
}

const database = Database.getInstance();

export default database;
