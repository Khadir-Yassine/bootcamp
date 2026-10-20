# Exercises XP

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn:**

- Promises

---

### **🌟 Exercise 1 : Comparison**

**Instructions**

1. Create a function called `compareToTen(num)` that takes a number as an argument.

2. The function should return a Promise:
  
  - the promise resolves if the argument is less than or equal to 10
  - the promise rejects if argument is greater than 10.

**Test:**

```javascript
//In the example, the promise should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))
```

---

### **🌟 Exercise 2 : Promises**

**Instructions**

1. Create a promise that resolves itself in 4 seconds and returns a “success” string.

---

### **🌟 Exercise 3 : Resolve & Reject**

**Instructions**

1. Use `Promise.resolve(value)` to create a promise that will resolve itself with a value of 3.

2. Use `Promise.reject(error)` to create a promise that will reject itself with the string “Boo!”

---

### **Exercise 4: quizz - not mandatory**

Follow [this tutorial](https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript) and do the quizz until the page called “a few tricks with promises”.

---

## **Submit your exercises :**

Don’t forget to push to

---

## **More info**

| Duration (approx) |
| --- |
| 45 minutes |

---

One Last Thing: **Good luck!**
