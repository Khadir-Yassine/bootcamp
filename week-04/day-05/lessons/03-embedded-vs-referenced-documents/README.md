# Embedded vs Referenced Documents

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Module 6: Data Modeling – Embedding vs. Referencing**

In MongoDB, there are two primary ways to connect data. Choosing the right one determines how fast your application will run and how easy it will be to write code.

### **1. Embedded Documents (The "One-to-Few" Approach)**

Embedding stores related data **inside** a single document. This is the "MongoDB Way."

- **Best for:** Relationships where the data "belongs" to the parent (e.g., items in a shopping cart, or a list of addresses for a user).

- **Pros:** * **Speed:** You get all the data in one single query (no "joins").
  
  - **Consistency:** You can update the whole document in one atomic operation.

- **Cons:** Documents have a **16MB size limit**. If the list grows forever (like comments on a viral post), embedding will eventually fail.

**Example:**

```javascript
{
  "order_id": "ORD-99",
  "customer": "Lina",
  "items": [
    { "product": "Keyboard", "price": 45 },
    { "product": "Mouse", "price": 25 }
  ]
}
```

---

### **2. Referenced Documents (The "One-to-Many/Many-to-Many" Approach)**

Referencing stores data in **separate collections** and connects them using the `_id`. This is similar to how Foreign Keys work in SQL.

- **Best for:** Data that is reused in many places (e.g., a "Product" description used by thousands of "Orders") or data that grows infinitely.

- **Pros:** * **Flexibility:** Prevents data duplication.
  
  - **Scaling:** Documents stay small and manageable.

- **Cons:** Requires **two queries** (or a `$lookup` join) to get all the info, which is slower.

**Example:**

```javascript
// Collection: Orders
{
  "order_id": "ORD-99",
  "user_id": ObjectId("64a123..."), // Reference to Users Collection
  "product_ids": [ObjectId("91b456..."), ObjectId("91b789...")] // Reference to Products
}
```

---

### **Which one should you choose?**

| **Rule of Thumb** | **Choose Embedding if...** | **Choose Referencing if...** |
| --- | --- | --- |
| **Data Growth** | The data is small and won't grow much. | The data grows constantly (e.g., Logs). |
| **Access Pattern** | You always need the data together. | The data is often viewed separately. |
| **Relationship** | "Contains" (A car *has* an engine). | "Related to" (A teacher *has* students). |

---

### **💡 Summary**

> **"Work for the Read":** In MongoDB, we design our schema based on how the application will **read** the data. If the app always shows the items with the order, keep them together!
