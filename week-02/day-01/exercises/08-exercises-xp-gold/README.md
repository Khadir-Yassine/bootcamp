# Exercises XP Gold

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What we will learn**

- Advanced functions

---

### **Exercise 1 : Nested functions**

1. Using the code below, and before executing it, predict the outcome and explain how you came to this conclusion.

2. Change the code below to **nested arrow functions**.

```javascript
let landscape = function() {

 let result = "";

 let flat = function(x) {
   for(let count = 0; count<x; count++){
     result = result + "_";
   }
 }

 let mountain = function(x) {
   result = result + "/"
   for(let counter = 0; counter<x; counter++){
     result = result + "'"
   }
   result = result + "\\"
 }

 flat(4);
 mountain(4);
 flat(4)

 return result;
}

landscape()
```

---

### **Exercise 2 : Closure**

**Instructions**

1. Analyse the code below, and before executing it, predict the outcome of the last line.

```javascript
const addTo = x => y => x + y;
const addToTen = addTo(10);
addToTen(3);
```

---

### **Exercise 3 : Currying**

**Instructions**

1. Analyse the code below, and before executing it, predict the outcome of the last line.

```javascript
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
```

---

### **Exercise 4 : Currying**

1. Analyse the code below, and before executing it, predict the outcome of the last line.

```javascript
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
```

---

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

## **More info**

| Duration (approx) |
| --- |
| > 1 hour |

---

One Last Thing: **Good luck!**

---
