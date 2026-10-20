# Daily Challenge

Course source: [Geeks Institute](https://www.geeks.institute/).
## ⚡ **The Daily Challenge: "EcoMart" Launch**

You have been hired as the Backend Architect for **EcoMart**, a new sustainable e-commerce platform. Your mission is to build the product catalog from scratch.

### 🏗️ **Task 1: Inventory Setup**

Create your `products` collection and stock the shelves with 5 items. Include different categories like "Electronics," "Home," and "Stationery."

**Try to include variety:**

- One item with very high stock (e.g., 100)

- One item with critically low stock (e.g., 3)

---

### 📉 **Task 2: The "Restock Needed" Alert**

Your manager wants a list of items that are running low so they can reorder them.

**Your Mission:** Find all products where the `stock` is **less than 10**.

```javascript
// Write your query here:
db.products.find({ ???: { $lt: ??? } })
```

---

### 📈 **Task 3: The Inflation Adjustment**

Due to rising shipping costs, we need to increase the price of all products in the **"Electronics"** category.

**The Math:**

In MongoDB, you can't easily do a "percentage" calculation directly inside a simple `$set` in one go without an aggregation pipeline, so for this challenge, we will use the `$mul` (multiply) operator.

To increase a price by **10%**, you multiply the current price by **1.1**.

**Your Mission:** Update all "Electronics" to reflect the 10% price hike.

```javascript
db.products.updateMany(
  { category: "Electronics" },
  { $mul: { price: 1.1 } } 
)
```

---

### 🏁 **Final Verification**

Once you’ve completed the tasks, run a query to find your most expensive item:

```javascript
db.products.find().sort({ price: -1 }).limit(1)
```

---

### **Summary Table: Your New Toolkit**

| **If you want to...** | **Use this Operator** |
| --- | --- |
| Change a value entirely | `$set` |
| Add/Subtract from a number | `$inc` |
| Multiply a number (Percentages) | `$mul` |
| Add an item to a list/array | `$push` |

## Worked answer

[Reference solution](solutions.md) — source code, explanation, and run instructions.
