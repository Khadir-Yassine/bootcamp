# Exercise 2 : Analyse Promise.all()

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

### **Exercise 2 : Analyse Promise.all()**

**Instructions**

Analyse the code below - what will be the output ?

```javascript
function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);

Promise.all(promiseArr)
  .then(result => {
    console.log(result);
  });
```

---

## Worked solution

[Read the explanation and runnable code](../solutions.md#exercise-2).
