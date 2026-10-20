# Indexes & Performance Basics

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Module 8: Indexes and Performance Basics**

Imagine trying to find a specific topic in a 500-page textbook. Without an **Index** at the back, you would have to read every page until you found what you needed. Database indexes work exactly the same way.

### **How Indexes Work**

An index is a special data structure that stores a small portion of the collection's data in a way that is easy to traverse (usually a B-Tree). It points to the location of the full document.

---

### **1. Creating an Index**

You can create an index on any field. The value `1` specifies an ascending index, while `-1` specifies a descending one.

**Command:**

```javascript
db.users.createIndex({ email: 1 })
```

*Now, when you search for a user by email, MongoDB jumps straight to the result.*

---

### **2. When to Use Indexes**

You shouldn't index everything! Use them strategically for:

- **Frequent Filters:** Any field appearing inside a `.find({ ... })` often.

- **Sorting:** Fields used to order results (e.g., `price` or `createdAt`).

- **Uniqueness:** Ensuring no two users have the same username.

**Example: Unique Index**

```javascript
db.users.createIndex({ username: 1 }, { unique: true })
```

---

### **3. The Cost of Indexing**

There is no "free lunch" in database performance.

- **Faster Reads:** Finding data becomes nearly instantaneous.

- **Slower Writes:** Every time you `insert` or `update` a document, MongoDB must also update the Index.

- **Storage:** Indexes take up RAM and disk space.

---

### **4. How to verify performance: **`explain()`

Want to see if your index is actually working? Attach `.explain("executionStats")` to your query.

```javascript
db.users.find({ email: "lina@email.com" }).explain("executionStats")
```

**What to look for:**

- **COLLSCAN:** (Bad) The database scanned the whole collection.

- **IXSCAN:** (Good) The database used an Index.

---

### **💡 Summary**

> **Rule of Thumb:** Index the fields that are used in your most common queries, but keep your total number of indexes lean to maintain fast write speeds.
