# Exercise

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

**Exercise**

Analyse this code before executing it. Write explanatory comments. What will be the output ?

```javascript
let add = (function () {
  let counter = 0;
  function calculus() {
      counter += 1; 
      return counter
  }
  return calculus
})();

add();
add();
add();
```

---

## Worked solution

[Read the explanation and runnable code](../solutions.md#exercise-2).
