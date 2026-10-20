# CRUD Operations in Depth

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Module 3: CRUD Operations in MongoDB**

CRUD stands for **Create, Read, Update, and Delete**. These four fundamental operations are the backbone of interacting with any database, and MongoDB provides powerful and flexible methods for each.

We'll use a `users` collection for all our examples. Let's imagine our collection starts empty.

### **1. Create Operations (Insert)**

Creating operations add new documents to a collection.

`insertOne()`: Adding a Single Document

This method adds one document to a specified collection.

**Command:**

```javascript
db.users.insertOne({
  name: "Alice",
  age: 30,
  city: "New York"
});
```

**Result:** The `users` collection now contains:

```javascript
[
  { "_id": ObjectId("..."), "name": "Alice", "age": 30, "city": "New York" }
]
```

> Alice joins the database!

`insertMany()`: Adding Multiple Documents

This method allows you to add an array of documents to a collection in a single operation.

**Command:**

```javascript
db.users.insertMany([
  { name: "Bob", age: 24, city: "London" },
  { name: "Charlie", age: 35, city: "Paris" }
]);
```

**Result:** The `users` collection now contains:

```javascript
[
  { "_id": ObjectId("..."), "name": "Alice", "age": 30, "city": "New York" },
  { "_id": ObjectId("..."), "name": "Bob", "age": 24, "city": "London" },
  { "_id": ObjectId("..."), "name": "Charlie", "age": 35, "city": "Paris" }
]
```

> Bob and Charlie are now part of our user base!

---

### **2. Read Operations (Find)**

Read operations retrieve documents from a collection. The `find()` method is your primary tool.

`find()`: Retrieving All Documents

Calling `find()` without any arguments returns all documents in the collection.

**Command:**

```javascript
db.users.find();
```

**Result (all documents):**

```javascript
[
  { "_id": ObjectId("..."), "name": "Alice", "age": 30, "city": "New York" },
  { "_id": ObjectId("..."), "name": "Bob", "age": 24, "city": "London" },
  { "_id": ObjectId("..."), "name": "Charlie", "age": 35, "city": "Paris" }
]
```

`find({ <query> })`: Retrieving Filtered Documents

You can pass a query document to `find()` to retrieve specific documents that match certain criteria.

**Command (find users older than 25):**

```javascript
db.users.find({ age: { $gt: 25 } }); // $gt means "greater than"
```

**Result (users with age > 25):**

```javascript
[
  { "_id": ObjectId("..."), "name": "Alice", "age": 30, "city": "New York" },
  { "_id": ObjectId("..."), "name": "Charlie", "age": 35, "city": "Paris" }
]
```

> We're filtering the data to find exactly what we need.

---

### **3. Update Operations**

Update operations modify existing documents in a collection. You typically specify:

1. A **filter** to select which documents to update.

2. An **update operator** (`$set`, `$inc`, `$push`, etc.) to define how to modify the document.

`updateOne()`: Modifying a Single Document

This method updates the *first* document that matches the filter.

**Scenario:** Alice has a birthday! **Command:**

JavaScript

```javascript
db.users.updateOne(
  { name: "Alice" }, // Filter: Find Alice
  { $set: { age: 31, status: "active" } } // Update: Set new age and add status
);
```

**Before Update:**

```javascript
{ "_id": ObjectId("..."), "name": "Alice", "age": 30, "city": "New York" }
```

**After Update:**

```javascript
{ "_id": ObjectId("..."), "name": "Alice", "age": 31, "city": "New York", "status": "active" }
```

> Alice's profile is now updated. Notice how a new field `status` was added!

`updateMany()`: Modifying Multiple Documents

This method updates *all* documents that match the specified filter.

**Scenario:** All users in London are now "premium". **Command:**

```javascript
db.users.updateMany(
  { city: "London" }, // Filter: Find all users in London
  { $set: { type: "premium" } } // Update: Add type field
);
```

**Before Update:**

```javascript
[
  { "_id": ObjectId("..."), "name": "Alice", "age": 31, "city": "New York", "status": "active" },
  { "_id": ObjectId("..."), "name": "Bob", "age": 24, "city": "London" },
  { "_id": ObjectId("..."), "name": "Charlie", "age": 35, "city": "Paris" }
]
```

**After Update:**

```javascript
[
  { "_id": ObjectId("..."), "name": "Alice", "age": 31, "city": "New York", "status": "active" },
  { "_id": ObjectId("..."), "name": "Bob", "age": 24, "city": "London", "type": "premium" }, // Bob updated
  { "_id": ObjectId("..."), "name": "Charlie", "age": 35, "city": "Paris" }
]
```

> Bob, our user in London, now has a premium status.

---

### **4. Delete Operations**

Delete operations remove documents from a collection.

`deleteOne()`: Removing a Single Document

This method removes the *first* document that matches the filter.

**Scenario:** Bob leaves! **Command:**

```javascript
db.users.deleteOne({ name: "Bob" });
```

**Before Delete:**

```javascript
[
  { "_id": ObjectId("..."), "name": "Alice", "age": 31, "city": "New York", "status": "active" },
  { "_id": ObjectId("..."), "name": "Bob", "age": 24, "city": "London", "type": "premium" },
  { "_id": ObjectId("..."), "name": "Charlie", "age": 35, "city": "Paris" }
]
```

**After Delete:**

```javascript
[
  { "_id": ObjectId("..."), "name": "Alice", "age": 31, "city": "New York", "status": "active" },
  { "_id": ObjectId("..."), "name": "Charlie", "age": 35, "city": "Paris" }
]
```

> Bob's record is gone.

`deleteMany()`: Removing Multiple Documents

This method removes *all* documents that match the specified filter.

**Scenario:** All users in Paris are removed. **Command:**

```javascript
db.users.deleteMany({ city: "Paris" });
```

**Before Delete:**

```javascript
[
  { "_id": ObjectId("..."), "name": "Alice", "age": 31, "city": "New York", "status": "active" },
  { "_id": ObjectId("..."), "name": "Charlie", "age": 35, "city": "Paris" }
]
```

**After Delete:**

```javascript
[
  { "_id": ObjectId("..."), "name": "Alice", "age": 31, "city": "New York", "status": "active" }
]
```

> Charlie, our last user from Paris, is removed.
