# What is Mongoose & Why It Exists

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Module 9: Mongoose – The Bridge Between Node.js and MongoDB**

While MongoDB is "Schema-less" (giving you total freedom), that freedom can sometimes lead to messy data. **Mongoose** is an **ODM (Object Data Modeling)** library that brings discipline and structure to your database operations.

### **Why Mongoose?**

Think of MongoDB as a vast, open field where you can build anything. Mongoose is the **Architect** who ensures the buildings are safe, the walls are straight, and the plumbing works.

**1. Defined Schemas**

In the shell, you can accidentally save a user without an email. In Mongoose, you define exactly what a user *must* look like.

**2. Built-in Validation**

Mongoose can automatically check if an email is valid, if a password is long enough, or if a number is within a specific range **before** it even reaches the database.

**3. Middleware (Hooks)**

Mongoose allows you to run functions at specific times. For example: *"Automatically hash the password before saving it to the database."*

---

### **Mongoose vs. MongoDB Native**

| **Feature** | **MongoDB Native Driver** | **Mongoose (ODM)** |
| --- | --- | --- |
| **Schema** | No (Schema-less) | **Yes** (Strict structure) |
| **Validation** | Manual (In your code) | **Built-in** (Automatic) |
| **Data Types** | BSON types | **JS Objects** (Easier to use) |
| **Querying** | Raw commands | **Models** (e.g., `User.find()`) |

---

### **How it Looks in Code**

Here is a simple example of how Mongoose defines a "User" compared to the raw JSON we've been using:

```javascript
const mongoose = require('mongoose');

// 1. Define the Schema (The Rules)
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 18 },
  email: { type: String, unique: true, lowercase: true }
});

// 2. Create the Model (The Tool)
const User = mongoose.model('User', userSchema);

// 3. Use it in your app
const newUser = new User({ name: "Lina", age: 25, email: "LINA@email.com" });
await newUser.save(); // Mongoose will automatically lowercase the email!
```

---

### **💡 Summary**

> **Think of it this way:** MongoDB provides the storage, but Mongoose provides the **business logic**. It makes your code cleaner, safer, and much easier to maintain as your project grows.
