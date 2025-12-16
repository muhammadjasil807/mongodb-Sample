const { MongoClient } = require("mongodb");


const uri = "YOUR_URI_HERE";

async function main() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("Connected to Atlas ");

    const db = client.db("school");           // database name
    const students = db.collection("students"); // collection name

    // CREATE
    await students.insertOne({ name: "Dev", age: 22, marks: 88 });
    console.log("Inserted one document.");

    // READ
    const docs = await students.find().toArray();
    console.log("Documents in students:", docs);

    // UPDATE
    await students.updateOne({ name: "Dev" }, { $set: { marks: 90 } });
    console.log("Updated one document.");

    // DELETE (commented out)
    // await students.deleteOne({ name: "Dev" });
    // console.log("Deleted one document.");

  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    await client.close();
    console.log("Connection closed.");
  }
}

main();