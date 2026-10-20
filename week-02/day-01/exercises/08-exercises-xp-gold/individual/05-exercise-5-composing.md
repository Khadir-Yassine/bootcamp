# Exercise 5 : Composing

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

### **Exercise 5 : Composing**

1. Analyse the code below, and before executing it, predict the outcome of the last line.

```javascript
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
```

---

Don’t forget to push to Github

---

## Worked solution

[Read the explanation and runnable code](../solutions.md#exercise-5).
