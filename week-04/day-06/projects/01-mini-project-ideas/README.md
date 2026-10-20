# MINI PROJECT IDEAS

Course source: [Geeks Institute](https://www.geeks.institute/).
## 🏗️ Weekend Mini-Project Blueprints

### **Option 1: The Todo Manager (Complexity: 🟢 Easy)**

**Focus:** Mastering the "CRUD" cycle and simple state management.

- **The "Think" Step:** Should a Todo be a reference or embedded?

- **The Choice:** Use **Referencing**. While a Todo is small, a power user might have 5,000 todos. Embedding them in the User document would eventually cause performance issues.

**Pro-Challenge:** Add a `category` field (e.g., 'Work', 'Personal') and create an **index** on it to allow users to filter their tasks instantly.

---

### **Option 2: The Blog Platform (Complexity: 🟡 Medium)**

**Focus:** Mastering **Population** and hybrid relationships.

- **The "Think" Step:** How do we handle comments?

- **The Choice:** **Embed** the comments inside the Post document. Why? Because you almost never load a comment without the post it belongs to. It saves you from doing multiple database queries.

**Pro-Challenge:** Use a **Pre-Save Hook** to automatically create a "slug" (a URL-friendly version of the title) before the post is saved.

---

### **Option 3: Simple E-Commerce (Complexity: 🔴 Advanced)**

**Focus:** Financial data integrity and **Snapshotting**.

- **The "Think" Step:** If a product price changes, what happens to old orders?

- **The Choice:** **Reference** the User (Buyer), but **Embed** the Product details inside the Order. This creates a "Historical Snapshot"—if the price of a laptop goes up tomorrow, the customer's order from today still reflects what they paid.

**Pro-Challenge:** Create a **Compound Index** on `{ category: 1, price: 1 }` to optimize the "Shop by Category" page.

---

## 📝 Required Logic Checklist

Whichever project you choose, ensure your code includes these **professional standards**:

1. **Strict Validation:** Use `required`, `min/max`, and `enum` for status fields (e.g., `['pending', 'completed']`).

2. **Date Tracking:** Use `{ timestamps: true }` in your schemas.

3. **Efficiency:** Use `.lean()` in your "Find All" queries to save memory.

4. **Privacy:** Set `select: false` on user passwords so they are never accidentally leaked.

---

## 🧪 How to test your project

Once you finish your models, try to answer these questions by running queries in your terminal:

- **Todo:** "Can I find all 'completed' tasks for User X?"

- **Blog:** "Can I see the username of the person who wrote the 3rd comment on Post Y?"

- **E-Commerce:** "If I delete a Product, does it stay safely inside the Order history?"

## Worked answer

[Reference solution](solutions.md) — source code, explanation, and run instructions.
