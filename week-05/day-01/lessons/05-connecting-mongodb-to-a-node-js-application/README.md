# Connecting MongoDB to a Node.js Application

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Module 10: Connecting Node.js to MongoDB**

In a real-world application, your Node.js server acts as the "brain," and MongoDB acts as the "memory." Mongoose is the nervous system that connects them.

### **Step 1: Installation**

First, you need to add the Mongoose library to your Node.js project. Run this command in your project folder terminal:

```text
npm install mongoose
```

---

### **Step 2: Establishing the Connection**

Unlike a single command in the shell, a Node.js application needs to maintain a continuous "pool" of connections. Here is the standard way to set up that bridge:

```javascript
const mongoose = require("mongoose");

// The Connection String: Protocol + Host + Port + Database Name
const dbURI = "mongodb://localhost:27017/bootcampDB";

mongoose.connect(dbURI)
  .then(() => console.log("🚀 Connection Successful: Node.js is now talking to MongoDB"))
  .catch(err => console.error("❌ Connection Error:", err));
```

---

### **Understanding the Connection String**

The string `mongodb://localhost:27017/bootcampDB` is like a URL for your database. Here is how it breaks down:

- `mongodb://`: The standard protocol.

- `localhost`: Your own computer (the server and DB are in the same place).

- `27017`: The default port where MongoDB "listens" for requests.

- `bootcampDB`: The specific database you want to use. If it doesn't exist, MongoDB will create it for you the moment you save data!

---

### **Best Practices for Connections**

**1. Handling Errors Gracefully**

Always use `.catch()` or a `try/catch` block. If your database is down and your code doesn't handle the error, your entire Node.js server might crash!

**2. The "Once Only" Rule**

You only need to call `mongoose.connect()` **once** in your main entry file (usually `app.js` or `server.js`). Mongoose is smart—it opens the connection and keeps it alive for all other files in your project to use.

**3. Using Environment Variables**

In a professional setting, you never hardcode your connection string (especially if it contains a password). You store it in a `.env` file.

---

### **💡 Pro-Tip**

> If you see an error like `ECONNREFUSED`, it usually means your MongoDB service isn't running on your computer. Make sure you can open **MongoDB Compass** before trying to connect with Node.js!
