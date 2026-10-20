# CRUD Operations with Mongoose

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Module 12: CRUD Operations with Mongoose**

Mongoose models provide a high-level API that is often more readable and powerful than the raw MongoDB driver.

### **1. Create (Inserting Data)**

There are two main ways to save a new document. You can create an "instance" and then call `.save()`, or do it all in one step with `.create()`.

**Option A: The Instance Way**

Useful if you want to modify the data before finally saving it.

```javascript
const user = new User({
  name: "Nora",
  email: "nora@email.com",
  age: 26
});

await user.save(); // This sends the data to MongoDB
```

**Option B: The Shortcut (**`.create`)

```javascript
await User.create({ name: "Nora", email: "nora@email.com", age: 26 });
```

---

### **2. Read (Querying Data)**

Mongoose makes searching for data feel like natural English.

- `find()`: Always returns an **Array** (even if only one result is found).

- `findOne()`: Returns a **single Object** (the first match it finds).

- `findById()`: The fastest way to find a specific document using its `_id`.

```javascript
const allUsers = await User.find(); 
const nora = await User.findOne({ email: "nora@email.com" });
const specificUser = await User.findById("65c2b..."); 
```

---

### **3. Update (Modifying Data)**

Updates in Mongoose are safer and more descriptive. You don't always need to use `$set`—Mongoose can handle simple object updates automatically.

**Common Methods:**

- `updateOne()`: Updates the first match.

- `updateMany()`: Updates all matches.

- `findByIdAndUpdate()`: Finds by ID and updates it in one shot (very popular for APIs).

```javascript
await User.updateOne(
  { email: "nora@email.com" }, // Filter
  { age: 27 }                  // New Data
);
```

---

### **4. Delete (Removing Data)**

Be careful with these! Once a document is deleted via Mongoose, it is gone from the collection.

```javascript
// Remove by a specific filter
await User.deleteOne({ email: "nora@email.com" });

// Remove by ID (safest way)
await User.findByIdAndDelete("65c2b...");
```

---

### **The Mongoose "Magic": Middleware Hooks**

One major advantage of doing CRUD in Mongoose rather than the Shell is **Middleware**. For example, you can tell Mongoose: *"Every time I run a 'Delete' operation, also delete all the orders belonging to that user."*

---

### **💡 Summary**

| **Task** | **Mongoose Method** | **Return Value** |
| --- | --- | --- |
| **Add New** | `.create()` | The new document |
| **Search All** | `.find()` | An Array `[]` |
| **Search One** | `.findOne()` | One Object `{}` |
| **Change** | `.updateOne()` | Result metadata |
| **Remove** | `.deleteOne()` | Result metadata |
