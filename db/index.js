import { MongoClient } from "mongodb";
const connectionString = process.env.ATLAS_URI || "mongodb+srv://rishikeshgoyal46:KLXNfFFTJPI8Rkex@cluster0.tvrrock.mongodb.net/";
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}
let db = conn.db("sample_training");
export default db;