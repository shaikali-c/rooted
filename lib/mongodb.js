import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

let client;
let db;

global._mongoClient = global._mongoClient || null;

export async function getDB() {
  if (db) return db;

  if (!global._mongoClient) {
    global._mongoClient = new MongoClient(uri, {
      maxPoolSize: 10,
    });
    await global._mongoClient.connect();
  }

  client = global._mongoClient;
  db = client.db(dbName);
  return db;
}
