# Exercises XP Gold

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What You Will Learn**

- Object methods

- Objects destructuring

- Classes

---

### **Exercise 1 : print Full Name**

**Instructions**

1. Create a function called `printFullName`.

2. The function should return a string like the example below
  
  ```javascript
printFullName({first: 'Elie', last:'Schoppik'}) 
// 'Your full name is Elie Schoppik`
```

***Destructure this object directly from the parameters (ie. Look at the Advanced Object lesson - Part II : Object destructuring used as an assignment to a function)***

The output of the `printFullName` function should be the exact same as the `displayStudentInfo` function. (Exercise XP)

---

### **Exercise 2 : keys and values**

**Instructions**

1. Create a function that takes an object and returns the keys and values as separate arrays.

2. Return the keys sorted alphabetically, and their corresponding values in the same order.

```javascript
Examples
keysAndValues({ a: 1, b: 2, c: 3 })
➞ [["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

keysAndValues({ key1: true, key2: false, key3: undefined })
➞ [["key1", "key2", "key3"], [true, false, undefined]]
```

---

### **Exercise 3 : Counter class**

**Instructions**

1. Analyze the code below, what will be the output?

```javascript
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);
```

---

## **More info**

| Duration (approx) |
| --- |
| 1 hour |

## Worked solutions

[English explanations and runnable implementation](solutions.md).
