# 🛠 Exercise 1: The Enrollment Phase

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

### 🛠 **Exercise 1: The Enrollment Phase**

**Goal:** Initialize your database and populate it with a diverse group of learners.

1. Create a collection named `students`.

2. Insert **5 students** with the following fields: `name`, `age`, `city`, and `major`.

**Challenge Command:**

```javascript
db.students.insertMany([
  { name: "Yassine", age: 19, city: "Rabat", major: "AI" },
  { name: "Sophia", age: 26, city: "Paris", major: "Cybersecurity" },
  { name: "Kaito", age: 22, city: "Tokyo", major: "Web Dev" },
  { name: "Elena", age: 31, city: "Madrid", major: "Data Science" },
  { name: "Marcus", age: 24, city: "New York", major: "AI" }
])
```

---

[Worked reference answer](../solutions.md) — includes this task in its original exercise order.
