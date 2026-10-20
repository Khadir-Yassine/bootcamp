# Exercise 1 : Promise.all()

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

### **Exercise 1 : Promise.all()**

**Instructions**

1. Use the `Promise.all` that will accept the 3 promises below.
The method should accept an array of promises and return an array of resolved values.
If any of the promises are rejected, the function should catch them.

Explain in a comment how `Promise.all` work and why you receive this output.

```javascript
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});
// expected output: Array [3, 42, "foo"]
```

---

## Worked solution

[Read the explanation and runnable code](../solutions.md#exercise-1).
