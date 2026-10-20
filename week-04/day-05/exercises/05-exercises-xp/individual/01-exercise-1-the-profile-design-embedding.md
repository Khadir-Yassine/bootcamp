# Exercise 1: The "Profile" Design (Embedding)

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

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

[Worked reference answer](../solutions.md) — includes this task in its original exercise order.
