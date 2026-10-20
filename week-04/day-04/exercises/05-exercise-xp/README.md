# Exercise XP

Course source: [Geeks Institute](https://www.geeks.institute/).
## 🎓 **Hands-On Lab: The Global Tech Academy**

Now it’s your turn to be the Lead Database Administrator! Follow these challenges to build and manage your student registry.

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

### 🔍 **Exercise 2: Data Intelligence**

**Goal:** Use your query powers to filter and update the academy records.

**Task A: The "Young Pros" Filter**

The academy is hosting a networking event for students between **18 and 25 years old**. Write a query to find them.

> **Hint:** Use the `$gte` and `$lte` operators we learned earlier!

**Task B: The Relocation**

Student **"Yassine"** just moved from **Rabat** to **Casablanca** for an internship. Update his record to reflect his new city.

> **Hint:** Use `updateOne` and the `$set` operator.

**Task C: The Graduation**

**"Sophia"** has successfully graduated and is leaving the registry. Delete her document from the collection.

---

## 🏆 **Boss Level Challenge (Optional)**

If you finished the tasks above quickly, try this:

**The Scenario:** The "AI" major is being renamed to "Generative AI." Can you update **all** students who have a major of "AI" to "Generative AI" in one single command?

---

### **How to check your work:**

After every exercise, run this command to see the current state of your "Academy":

```javascript
db.students.find().pretty()
```
