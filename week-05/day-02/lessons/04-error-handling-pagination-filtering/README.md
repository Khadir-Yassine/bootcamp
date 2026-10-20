# Error Handling, Pagination & Filtering

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Module 17: Error Handling, Pagination, and Filtering**

### **1. Professional Error Handling**

In a real application, things go wrong: the database might be down, or a unique constraint (like an email) might be violated. We use `try...catch` blocks to ensure our server stays online even when an error occurs.

**The "Safety First" Pattern:**

```javascript
try {
  const newUser = await User.create(req.body);
  res.status(201).json(newUser);
} catch (error) {
  // If the error is a duplicate email (Code 11000)
  if (error.code === 11000) {
    return res.status(400).json({ message: "Email already exists!" });
  }
  // Generic server error
  res.status(500).json({ message: "Server error, please try again later." });
}
```

---

### **2. Pagination: The **`.skip()` and `.limit()` Formula

Imagine Facebook trying to load every post ever made on one page. It would crash your phone! **Pagination** allows us to serve data in small "chunks."

- `.limit(n)`: Tells MongoDB to only return `n` documents.

- `.skip(n)`: Tells MongoDB to jump over the first `n` documents.

**The Magic Formula:**

To get any specific page, we use: `(page - 1) * limit`.

```javascript
const page = 2;   // The user wants page 2
const limit = 10; // 10 items per page

const users = await User.find()
  .sort({ createdAt: -1 }) // Usually best to show newest first
  .skip((page - 1) * limit) // Skips the first 10
  .limit(limit);            // Takes the next 10
```

---

### **3. Dynamic Filtering**

In a real app, users want to filter data (e.g., "Show me only 'Completed' tasks" or "Show me users over 20"). We can build this dynamically by passing an object into `.find()`.

**Code Example:**

```javascript
const filter = {};

// If the user sent a 'status' in the URL, add it to our filter
if (req.query.status) {
  filter.status = req.query.status;
}

// If the user wants a specific age range
if (req.query.minAge) {
  filter.age = { $gte: req.query.minAge };
}

const users = await User.find(filter);
```

---

### **4. Why This Matters for Performance**

| **Feature** | **Benefit** |
| --- | --- |
| **Error Handling** | Prevents the "Spinning Wheel of Death" for users when something fails. |
| **Pagination** | Saves **RAM** and **Bandwidth** by not loading unnecessary data. |
| **Filtering** | Reduces the "Payload" size, making your app feel snappy and fast. |

---

### **💡 Summary**

> **Think of your API like a Restaurant:**
> 
> 
> 
> - **Filtering** is the Customer ordering a specific dish.
> 
> - **Pagination** is serving the meal in courses so the table isn't overwhelmed.
> 
> - **Error Handling** is the Waiter politely explaining that the kitchen is out of fish, instead of just disappearing forever!
