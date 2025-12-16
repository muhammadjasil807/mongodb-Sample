MongoDB CRUD Demo (Node.js)

A simple **MongoDB + Node.js** project demonstrating how to **connect to MongoDB Atlas** and perform **basic CRUD operations** (Create, Read, Update, Delete).
This project is designed for **beginners** to understand MongoDB setup, connection, and database operations step by step.

Project Overview

This project demonstrates:
* How to set up **MongoDB Atlas**
* How to connect MongoDB with **Node.js**
* Performing basic **CRUD operations**
* Using the official MongoDB Node.js driver
* Clean async/await based database handling

This is a **backend-only demo project**.
No frontend or framework is used.

Technologies Used

* **Node.js** – JavaScript runtime
* **MongoDB Atlas** – Cloud database
* **MongoDB Node.js Driver** – Database connectivity
* **JavaScript (ES6+)** – Application logic

Project Structure

```
mongodb-crud-nodejs/
│
├── index.js          # Main MongoDB CRUD code
├── package.json      # Project configuration
├── node_modules/     # Installed dependencies
└── README.md
```

MongoDB Atlas Setup (Step-by-Step)

1.Create MongoDB Atlas Account

1. Go to  [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Click **Sign Up**
3. Login using Google or Email

2 Create a Free Cluster

1. Click **Create**
2. Choose **Shared (Free Tier)**
3. Select cloud provider (AWS recommended)
4. Choose nearest region
5. Click **Create Cluster**

3 Create Database User

1. Go to **Database Access**
2. Click **Add New Database User**
3. Username: `admin` (or your choice)
4. Password: set a strong password
5. Role: **Read and write to any database**
6. Save user

4 Allow Network Access

1. Go to **Network Access**
2. Click **Add IP Address**
3. Choose **Allow Access From Anywhere**
4. Confirm

5 Get MongoDB Connection URI

1. Go to **Clusters**
2. Click **Connect**
3. Choose **Connect your application**
4. Copy the connection string:

```
mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/
```

Replace URI in Code:-

In `index.js`, replace:

```js
const uri = "YOUR_URI_HERE";
```

With:

```js
const uri = "mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/";
```

---

Code Explanation (CRUD Operations)

Connect to MongoDB

```js
await client.connect();
console.log("Connected to Atlas");
```

---

CREATE (Insert Document)

```js
await students.insertOne({ name: "Dev", age: 22, marks: 88 });
```

---

READ (Fetch Documents)

```js
const docs = await students.find().toArray();
```

---

UPDATE (Modify Document)

```js
await students.updateOne(
  { name: "Dev" },
  { $set: { marks: 90 } }
);
```

---

DELETE 

```js
await students.deleteOne({ name: "Dev" });
```

---

## How to Run Locally

### 1 Create Project Folder

```
mkdir mongodb-demo
cd mongodb-demo
```

---

### 2 Initialize Node Project

```
npm init -y
```

---

### 3 Install MongoDB Driver

```
npm install mongodb
```

---

### 4 Run the Program

```
node index.js
```

---

Sample Output

```
Connected to Atlas
Inserted one document.
Documents in students: [ { name: 'Dev', age: 22, marks: 88 } ]
Updated one document.
Connection closed.
```

---

what do we learn
* Understanding MongoDB Atlas setup
* Connecting MongoDB with Node.js
* Performing CRUD operations
* Using async/await for database handling
* Structuring backend demo projects

Disclaimer:
This project is created **for educational purposes only**.
Do not expose your MongoDB credentials publicly.
