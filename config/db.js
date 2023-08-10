const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const mongoClient = new MongoClient(url);

try {
  mongoClient.connect();
  console.log("connected to db");
} catch (err) {
  console.log(err);
}

const db = mongoClient.db("HR");
module.exports = { db };
