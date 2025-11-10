const dotenv = require('dotenv');
dotenv.config();

//import mongo client
const MongoClient = require('mongodb').MongoClient;

let database;

const initDb = (callback) => {
    if (database) {
        console.log('Database is already initialized!');
        return callback(null, database);
    }
    MongoClient.connect(process.env.MONGODB_URL)
        .then((client) => {
            database = client.db('project1');  //defaults to the db in my URI
            callback(null, database);
        })
        .catch((err) => {
            callback(err);
        });
};

const getDatabase = () => {
    if(!database) {
        throw Error('Database is not initialized')
    }
    return database
}

module.exports = {
    initDb,
    getDatabase

}