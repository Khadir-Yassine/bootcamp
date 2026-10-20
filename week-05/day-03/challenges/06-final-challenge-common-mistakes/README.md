# Final Challenge & Common Mistakes

Course source: [Geeks Institute](https://www.geeks.institute/).
## 🛠️ The Final Polish: Avoiding "Junior" Mistakes

Even experienced developers fall into these traps. Review your **NexusMarket** project against these four critical pillars.

### **1. The "16MB Trap" (Over-Embedding)**

One of the most common mistakes is embedding data that grows indefinitely.

- **Bad Design:** Embedding every single `Order` inside the `User` document. If a user buys 1,000 items, the user document will eventually hit the 16MB limit and crash.

- **Good Design:** Reference the `User` inside the `Order` document. This allows for unlimited orders.

---

### **2. Indexing: The Goldilocks Rule**

- **Too few indexes:** Your app feels slow as the database grows (Collection Scans).

- **Too many indexes:** Your "Write" operations (saving/updating) become slow, and you waste expensive RAM.

- **Pro-Tip:** Index only the fields you use in `.find()` or `.sort()` filters.

---

### **3. Silent Failures (Error Handling)**

Never assume the database is always available.

- **The Mistake:** Writing code that assumes `User.findById(id)` will always return a user.

- **The Fix:** Always check if the result is `null` and return a clear `404 Not Found` message to the frontend.

---

## 🚀 The Final Challenge: Performance Boost

To graduate with "Senior-Level" honors, apply these two optimizations to your Final Project:

### **Task A: Optimize the "Product Search"**

Imagine your shop has 50,000 products. Users will frequently filter by **Category** and sort by **Price**. Create a **Compound Index** to make this search instantaneous.

```javascript
// Add this to your Product Model file
productSchema.index({ category: 1, price: -1 });
```

### **Task B: Implement "Infinite Scroll" Pagination**

Don't let your `/api/products` endpoint return every product at once. Add pagination logic to your controller.

```javascript
const getProducts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 12; // 12 products per page

  const products = await Product.find()
    .select('title price image') // Only fetch what's needed for the card
    .skip((page - 1) * limit)
    .limit(limit)
    .lean(); // Faster performance

  res.json(products);
};
```

---

## 📝 The "Design Defense"

In your project’s `README.md` or as comments in your code, justify your choices. A senior dev should be able to answer:

1. "Why did you embed the items in the Order model instead of referencing them?"

2. "Why did you choose `select: false` for the user password?"

---

### **💡 Final Project Reflection**

> **"Data is the most valuable asset of any company."** You are now equipped to build systems that protect that data (Validation/Auth), organize it (Relationships), and serve it at lightning speed (Indexing/Lean).
