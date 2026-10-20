# Exercises XP Gold

Course source: [Geeks Institute](https://www.geeks.institute/).
### **What you will learn:**

- Array methods

- Destructuring

---

### **Exercise 1 : Analyzing the map method**

**Instructions**

Analyze this code, what will be the output ?

```javascript
[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
});
```

---

### **Exercise 2: Analyzing the reduce method**

**Instructions**

Analyze this code, what will be the output ?

```javascript
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);
```

---

### **Exercise 3 : Analyze this code**

**Instructions**

Using this code:

```javascript
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})
```

1. What is the value of *i* ?

---

### **Exercise 4 : Nested arrays**

**Instructions**

1. Using a method, take this array `const array = [[1],[2],[3],[[[4]]],[[[5]]]]` and modify it to look like this array: `[1,2,3,[4],[5]]`.
**Bonus** Try to do it on one line.

2. Using a method, take this array `const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];` and modify it to look like this array: `["Hello young grasshopper!","you are","learning fast!"]`.

3. Turn the greeting array into a string: ‘Hello young grasshopper! you are learning fast!’.

4. Turn the trapped number 3 `const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]` into: `[3]`
