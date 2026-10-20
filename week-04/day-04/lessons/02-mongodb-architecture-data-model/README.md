# MongoDB Architecture & Data Model

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Module 2: MongoDB Architecture & Data Modeling**

MongoDB’s architecture is designed to map directly to the objects you use in your code. Instead of flattening your data into rows, you store it in a way that makes sense for your application.

### **The Data Hierarchy**

Data in MongoDB follows a clear, nested path:

1. **Database:** The top-level container (e.g., `ShopDB`).

2. **Collection:** A grouping of documents, similar to a "Table" (e.g., `Users` or `Products`).

3. **Document:** The individual record. This is where the actual data lives.

---

### **The Anatomy of a Document**

MongoDB documents are stored as **BSON** (Binary JSON). This allows for rich data types and, most importantly, **nested structures**.

- **Key-Value Pairs:** Data is stored in simple `field: value` pairs.

- **Embedded Objects:** You can store an object *inside* another object (like an address inside a user).

- **Arrays:** You can store lists of data (like tags or skills) directly in the record.

**Example Document Structure**

JSON

```javascript
{
  "_id": ObjectId("65c2b..."),
  "name": "Lina",
  "email": "lina@email.com",
  "address": {
    "city": "Rabat",
    "country": "Morocco"
  },
  "skills": ["Node.js", "MongoDB", "Python"]
}
```

---

### **The Power of the **`_id` (Primary Key)

In a relational database, you have to manually define a primary key. In MongoDB, if you don't provide one, the system does it for you.

- **Automatic Generation:** Every document receives a unique `_id` field.

- **The ObjectId:** This is a 12-byte identifier that includes a **timestamp**, a **machine ID**, and a **counter**.

- **Indexing:** The `_id` is automatically indexed, ensuring that looking up a document by its ID is lightning-fast.

---

### **Key Architectural Benefit: The Document Model**

> **Pro-Tip:** In SQL, to get a user’s address and skills, you might need to "Join" three different tables. In MongoDB, you can fetch everything in **one single read operation** because the data is "colocated" (stored together).
