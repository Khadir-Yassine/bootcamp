# MongoDB Data Types & ObjectId

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Module 5: MongoDB Data Types & The ObjectId**

In traditional SQL, you are often limited to simple strings and numbers. MongoDB is different; it allows you to store **nested data structures** (Objects and Arrays) directly inside a document.

### **Common MongoDB Data Types**

MongoDB uses **BSON** (Binary JSON), which extends the standard JSON types to include more specific categories:

| **Data Type** | **Usage** | **Example** |
| --- | --- | --- |
| **String** | Text data (UTF-8) | `"name": "Smartphone"` |
| **Number** | Integers or Decimals | `"price": 899.99` |
| **Boolean** | True or False | `"inStock": true` |
| **Array** | Lists of values | `"tags": ["tech", "sale"]` |
| **Object** | Nested documents | `"specs": { "ram": 16, "cpu": "i7" }` |
| **Date** | ISO Date/Time | `"addedAt": new Date()` |
| **ObjectId** | Unique Document ID | `_id: ObjectId("...")` |

---

### **The "First-Class Citizens": Arrays and Objects**

In MongoDB, you don't need a separate table to store a list of categories or a shipping address. You simply **embed** them.

**Example of a Rich Document:**

```javascript
{
  "name": "Gaming Laptop",
  "price": 1200,
  "isAvailable": true,
  "tags": ["electronics", "gaming", "high-end"], // Array
  "dimensions": { "weight": "2kg", "screen": "15 inch" }, // Nested Object
  "createdAt": new Date() // Date Type
}
```

---

### **Deep Dive: The ObjectId**

If you don't provide an `_id` field, MongoDB automatically generates one. This isn't just a random number; it’s a **12-byte hexadecimal value** designed for speed and uniqueness across distributed systems.

**The Anatomy of an ObjectId:**

An ObjectId is composed of three distinct parts that tell a story about when and where the document was created:

1. **Timestamp (4 bytes):** The exact second the document was created.

2. **Random Value (5 bytes):** Unique to the machine and process.

3. **Counter (3 bytes):** A starting random value incremented for each new document.

> **Why this matters:** Because the first 4 bytes are a timestamp, you can actually extract the **creation date** of a document directly from its `_id` without needing a separate `created_at` field!

---

### **Quick Knowledge Check**

**Q: Can a single MongoDB document contain an array of other objects?**

*A: Yes! This is called "Embedding" and it is the secret to MongoDB's high performance—you get all the data you need in one single "find" command.*
