# Exercise 2: The "Transaction" Design (Referencing)

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

### **Exercise 2: The "Transaction" Design (Referencing)**

**Goal:** Connect two different collections using the **ObjectId** to ensure the database stays fast as it grows.

**The Scenario:** Yasmine just bought a laptop. Since one user can have hundreds of orders over many years, we **cannot** embed them (it would make the user document too big). Instead, we will store the order in its own collection and "link" it to Yasmine using her ID.

- **Task A:** Copy Yasmine’s `_id` from the output of Exercise 1.

- **Task B:** Create an `orders` collection and link it to her ID.

```javascript
// Replace 'PASTE_ID_HERE' with the actual ObjectId from your users collection
db.orders.insertOne({
  orderNumber: "ORD-99X",
  total: 1500,
  currency: "MAD",
  status: "Processing",
  userId: ObjectId("PASTE_ID_HERE") 
})
```

**✅ Success Criteria:** Run `db.orders.find()`. You should see the `userId` field highlighted in a different color, indicating it is a valid **ObjectId** reference.

---
