# Exercises XP

Course source: [Geeks Institute](https://www.geeks.institute/).
## 🏗️ **Lab: Designing a Scalable System**

In this lab, you will act as a Database Architect. You need to decide how to handle **Personal Data** (which is fixed) versus **Transactional Data** (which grows over time).

---

### **Exercise 1: The "Profile" Design (Embedding)**

**Goal:** Master the use of **Nested Objects** for data that belongs strictly to one parent.

**The Scenario:** You are building a User Profile page. Whenever the profile loads, the app needs the user's name, email, and their full address. We will use **Embedding** to get all this in **one single database read**.

- **Task:** Create a `users` collection.

- **Action:** Insert a document for "Yasmine" that includes a nested `address` object.

```javascript
db.users.insertOne({
  name: "Yasmine",
  email: "yasmine@tech.ma",
  address: {
    city: "Casablanca",
    country: "Morocco",
    postalCode: "20000"
  }
})
```

**✅ Success Criteria:** Run `db.users.find()` in Compass. You should see a small arrow next to the `address` field that allows you to expand/collapse the city and country details.

---

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

### 🧠 **Reflective Questions for Students**

1. **Why embed the address?** (Answer: Because it's small and always needed with the user).

2. **Why reference the order?** (Answer: Because orders grow indefinitely and would eventually hit the 16MB document limit).

---

### **Quick Pro-Tip for Compass Users**

> If you are using **MongoDB Compass**, you can click on the `ObjectId` in the `orders` collection, and it will actually give you an option to "View Document," taking you straight to Yasmine's profile in the other collection!
