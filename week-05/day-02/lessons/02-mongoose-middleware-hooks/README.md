# Mongoose Middleware (Hooks)

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Module 15: Mongoose Middleware (Hooks)**

Middleware functions are like checkpoints. They allow you to execute logic **Pre** (before) an event happens or **Post** (after) an event has finished.

### **1. Pre-Hooks (The "Before" Checkpoint)**

Pre-hooks are most commonly used for **data preparation**.

**Typical Use Cases:**

- **Password Hashing:** Encrypting a password before it hits the database.

- **Validation/Cleanup:** Converting an email to lowercase or trimming whitespace.

- **Auto-timestamps:** Manually updating a `lastModified` field.

**Example: Automatically updating a timestamp**

```javascript
userSchema.pre("save", function (next) {
  // 'this' refers to the document being saved
  this.updatedAt = new Date();
  
  // Always call next() to tell Mongoose to move to the next step!
  next();
});
```

> **Note:** We use a standard `function` instead of an arrow function `() => {}` because we need access to `this` (the document).

---

### **2. Post-Hooks (The "After" Checkpoint)**

Post-hooks run after the document has been successfully saved, updated, or deleted. These are used for **side effects**.

**Typical Use Cases:**

- **Logging:** Recording that an action took place.

- **Notifications:** Sending a "Welcome" email after a user is successfully created.

- **Analytics:** Updating a total count in another collection.

**Example: Logging a successful save**

```javascript
userSchema.post("save", function (doc) {
  // 'doc' is the document that was just saved
  console.log(`✅ Success: User ${doc.name} was saved with ID ${doc._id}`);
});
```

---

### **3. Common Middleware Triggers**

Middleware doesn't just work for `.save()`. You can hook into many different events:

| **Trigger** | **Type** | **Best For...** |
| --- | --- | --- |
| `validate` | Pre/Post | Final checks before data is processed. |
| `save` | Pre/Post | Hashing passwords or sending welcome emails. |
| `remove` | Pre/Post | Cleaning up related data (e.g., deleting a user's posts). |
| `findOneAndUpdate` | Pre | Modifying data during a direct update. |

---

### **💡 Summary**

- **Middleware** centralizes your logic so you don't repeat yourself (DRY principle).

- **Pre-hooks** can stop an operation if something is wrong (by not calling `next()`).

- **Post-hooks** are great for background tasks that don't need to block the user.

---

### **🧠 Critical Thinking Challenge**

Imagine a user changes their password. Which middleware would you use to ensure the new password is encrypted before it reaches the database?

*(Answer: A ****Pre-save**** hook!)*
