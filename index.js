const express = require('express');
const cors = require('cors');
const { MongoClient } = require("mongodb");

require('dotenv').config();

// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGO_URL;

// Connect to your Atlas cluster
const client = new MongoClient(url);

// Provide the name of the database and collection you want to use.
// If the database and/or collection do not exist, the driver and Atlas
// will create them automatically when you first write data.
const dbName = "f1_data";
const collectionName = "drivers";

let database;
let collection;

async function connectToMongo() {
    try {
        await client.connect();
        database = client.db(dbName);
        collection = database.collection(collectionName);
        console.log("Successfully connected to Atlas");

    } catch (err) {
        console.log(err.stack);
    }
}

connectToMongo().then(() => {
    const app = express();
    
    app.use(express.json());
    app.use(cors());

    // routes
    app.get('/api/drivers', async (req, res) => {
        try {
            const drivers = await collection.find({}).toArray();
            res.json(drivers);
        }
        catch(err) {
            console.log(err);
        }
    });
    
    app.listen(process.env.PORT, () => {
        console.log(`app listening on port http://localhost:${process.env.PORT}`)
    })
})