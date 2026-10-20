# Final Project (Capstone)

Course source: [Geeks Institute](https://www.geeks.institute/).
## 🏗️ Capstone Project: "NexusMarket" Backend

Your mission is to architect the data layer for a modern e-commerce platform. You must balance **data integrity** (making sure orders don't get lost) with **performance** (making sure the shop loads fast).

### **1. The Schema Architectures**

For this project, you will implement a **Hybrid Relationship Model**:

- **Users & Products:** Referenced (One User can own many Products).

- **Orders & Products:** **Embedded (Snapshot Pattern).** * *Why?* If a product's price changes next week, the customer's old receipt (Order) must still show the price they actually paid.

---

### **2. Required Schemas**

**A. The User Model**

- **Fields:** `name`, `email` (unique), `password` (hidden), `role` (enum).

- **Must include:** `timestamps` and a `pre-save` hook for password hashing.

**B. The Product Model**

- **Fields:** `title`, `description`, `price` (min: 0), `stock` (min: 0), `owner` (ref to User).

- **Optimization:** Add an index on `price`.

**C. The Order Model**

- **Fields:** `buyer` (ref to User), `items` (Array of objects), `totalAmount`.

- **The "Snapshot" Logic:** The `items` array should contain the product name and price *at the time of purchase*.

---

### **3. Implementation Blueprint**

Here is a structural guide for your `models/` directory:

```javascript
// models/Order.js example
const orderSchema = new mongoose.Schema({
  buyer: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    title: String,
    priceAtPurchase: Number,
    quantity: { type: Number, default: 1 }
  }],
  status: { 
    type: String, 
    enum: ['pending', 'shipped', 'delivered'], 
    default: 'pending' 
  }
}, { timestamps: true });
```

---

### **4. Final Project Checklist (Success Criteria)**

To "pass" this project, your code must demonstrate:

1. **Security:** Passwords are never stored as plain text (use `bcrypt`).

2. **Referencing:** You can use `.populate('buyer')` to see who placed an order.

3. **Validation:** You cannot create a product with a negative price.

4. **Performance:** Read-only queries use `.lean()` and `.select()` to stay lightweight.

5. **Organization:** Your code is split into a professional folder structure (`/models`, `/config`).

---

### **🎓 Graduation Step**

Once you have defined these models, try to write a single "Purchase" script that:

1. Finds a Product.

2. Creates an Order.

3. **Decrements** the Product `stock` using `findByIdAndUpdate` with the `$inc` operator.
