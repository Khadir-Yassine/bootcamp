# Performance, Indexing & Optimization

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Module 21: Performance, Indexing, and Optimization**

### **1. Advanced Indexing Strategies**

We’ve touched on basic indexing, but in production, you need to be strategic. Indexes are stored in your server's **RAM**. If your indexes are too large to fit in memory, your performance will tank.

- **Single Field Index:** Great for common lookups (e.g., `email`).

- **Compound Index:** Great for queries that filter by multiple fields at once (e.g., finding a product by `category` AND `price`).

**Code Example:**

JavaScript

```javascript
// High-speed search for products within a category sorted by price
productSchema.index({ category: 1, price: -1 }); 
```

---

### **2. The Power of **`.lean()`

By default, every time you run a query, Mongoose takes the "raw" data from MongoDB and wraps it in a heavy **Mongoose Document**. This document comes with extra "baggage" like `.save()`, `.populate()`, and internal state tracking.

If you only need to **read** the data and send it to the frontend, use `.lean()`.

**The Performance Impact:**

- **Without **`.lean()`: Returns a complex Mongoose object (Slower, uses more memory).

- **With **`.lean()`: Returns a plain, lightweight JavaScript object (Up to **5x faster**).

JavaScript

```javascript
// Perfect for high-traffic GET routes
const products = await Product.find().lean();
```

---

### **3. Select Only What You Need**

Sending unnecessary data across the network is a major performance killer. If you only need a user's `name` and `email` for a list view, don't fetch their `bio`, `address`, and `avatar`.

**Code Example:**

```javascript
// Only fetch name and email, exclude the _id
const users = await User.find().select("name email -_id").lean();
```

---

### **4. Optimization Checklist**

| **Technique** | **When to Use** | **Why?** |
| --- | --- | --- |
| **Indexing** | Fields in `.find()` or `.sort()` | Prevents slow collection scans. |
| `.lean()` | Read-only operations | Reduces CPU and RAM overhead. |
| `.select()` | Every query | Reduces network payload size. |
| **Pagination** | Any list with >50 items | Prevents server/browser crashes. |

---

### **🎓 Course Summary: The Path Forward**

You have now traveled from the basics of NoSQL documents to the advanced architectural patterns used by professional engineers. You are ready to build production-ready, secure, and high-performance backends.
