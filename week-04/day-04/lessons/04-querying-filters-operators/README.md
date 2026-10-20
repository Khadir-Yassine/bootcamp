# Querying, Filters & Operators

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Module 4: Querying Data and Using Operators**

In MongoDB, we don't use strings like `SELECT * FROM`. Instead, we use **Query Documents**. These documents use specific **Operators** (starting with a `$`) to perform logic, comparisons, and filtering.

### **1. Comparison Operators**

Comparison operators allow you to find documents within specific numerical or alphabetical ranges.

| **Operator** | **Meaning** | **Example** |
| --- | --- | --- |
| `$gt` | Greater Than | `age: { $gt: 25 }` |
| `$gte` | Greater Than or Equal | `age: { $gte: 25 }` |
| `$lt` | Less Than | `age: { $lt: 25 }` |
| `$lte` | Less Than or Equal | `age: { $lte: 25 }` |
| `$ne` | Not Equal | `city: { $ne: "Rabat" }` |
| `$in` | Matches any in an array | `status: { $in: ["Active", "Pending"] }` |

**Practical Example: Finding Young Adults**

To find users who are between 18 and 30 years old (inclusive):

JavaScript

```javascript
db.users.find({ 
  age: { $gte: 18, $lte: 30 } 
})
```

---

### **2. Logical Operators**

Logical operators allow you to combine multiple conditions into a single query.

- `$and`: Returns documents that satisfy **all** conditions. (Note: MongoDB uses an implicit "AND" by default when you list multiple fields).

- `$or`: Returns documents that satisfy **at least one** condition.

- `$not`: Inverts the effect of a query expression.

**Practical Example: Flexible Search**

Find users who are either under 20 years old **OR** live in "Rabat":

JavaScript

```javascript
db.users.find({
  $or: [
    { age: { $lt: 20 } }, 
    { city: "Rabat" }
  ]
})
```

---

### **3. Element and Evaluation Operators**

Sometimes you need to find data based on the *structure* of the document, not just the value.

- `$exists`: Matches documents that have a specific field.

- `$type`: Selects documents if a field is of a specific BSON type (e.g., String, Number).

**Example: Finding users with a listed phone number**

JavaScript

```javascript
db.users.find({ phone: { $exists: true } })
```

---

### **Summary Table**

> **Tip:** Think of the query as a filter. The database looks at every document and asks: *"Does this document pass the test defined by these operators?"* Only the winners are returned to the user.
