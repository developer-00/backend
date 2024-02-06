const { MongoClient } = require("mongodb");

async function connectToMongo() {
  try {
    const uri = global.gConfig.mongo_db;
    const client = new MongoClient(uri);
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = connectToMongo;
