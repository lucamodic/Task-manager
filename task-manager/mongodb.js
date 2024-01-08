const mongodb = require('mongodb-legacy');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!', error);
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Luca',
    //     age: 20
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user' + error);
    //     }
    //     console.log('Document inserted successfully:' + result.insertedId);
    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'Luca',
    //         age: 20
    //     },
    //     {
    //         name: 'Mateo',
    //         age: 20
    //     }
    // ], (error, result) => {
    //     if (error) return console.log(error)
    //     console.log(result)
    // })

    db.collection('tasks').insertMany([
        {
            description: 'Iron clothes',
            completed: true
        },
        {
            description: 'Wash the dishes',
            completed: false
        }
    ], (error, result) => {
        if (error) return console.log('Error: ' + error)
        console.log(result.insertedIds)
    })
});
