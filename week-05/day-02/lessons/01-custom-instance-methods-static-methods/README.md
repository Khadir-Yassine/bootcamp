# Custom Instance Methods & Static Methods

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Module 16: Custom Instance & Static Methods**

Think of **Instance Methods** as things a single document can do, and **Static Methods** as things the entire collection can do.

### **1. Instance Methods (The "Self" Logic)**

An **Instance Method** is a function that is available on every single document created from your model. It is perfect for logic that depends on the data *inside* that specific document.

**Use Case:** Calculating a property, formatting a string, or checking a permission for a specific user.

**Code Example:**

```javascript
// Adding a method to check if a specific user is an adult
userSchema.methods.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Usage:
const user = await User.findById(id);
console.log(user.getFullName()); // "Lina Ahmed"
```

> **Note:** Just like middleware, we use `function()` instead of arrow functions so we can access `this` (the document).

---

### **2. Static Methods (The "Global" Logic)**

A **Static Method** is attached to the **Model**, not the document. It is used for operations that involve searching the whole collection or performing "helper" queries.

**Use Case:** Finding a group of documents based on a specific business rule or performing complex searches.

**Code Example:**

```javascript
// Adding a static method to find all "Admin" users
userSchema.statics.findByRole = function (roleName) {
  return this.find({ role: roleName });
};

// Usage:
const admins = await User.findByRole('admin');
```

---

### **3. When to Use Which?**

| **Feature** | **Instance Method (.methods)** | **Static Method (.statics)** |
| --- | --- | --- |
| **Operates on** | A **single** document | The **entire** collection |
| **Accessed via** | `user.methodName()` | `User.methodName()` |
| `this` refers to | The specific document | The Model (User) |
| **Example** | `user.verifyPassword()` | `User.findTopSellers()` |

---

### **💡 Pro-Tip: The "Fat Model" Pattern**

Professional developers use these methods to hide complexity. If your app needs to "Archive all inactive users," don't write that logic in your route. Write a **Static Method** called `User.archiveInactive()`. This makes your code much easier to test and reuse!

---

### **🧠 Knowledge Check**

If you want to create a function that sends a reset password email to **one specific user**, would you use an **Instance** or a **Static** method?

*(Answer: ****Instance Method****, because the email is sent to one specific document!)*

---

**Would you like me to create a "Design Challenge" where you add both a Static and an Instance method to a "Product" model to calculate discounts?**
