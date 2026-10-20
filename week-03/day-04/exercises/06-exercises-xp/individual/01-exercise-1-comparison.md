# 🌟 Exercise 1 : Comparison

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

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

## Worked solution

[Read the explanation and runnable code](../solutions.md#exercise-1).
