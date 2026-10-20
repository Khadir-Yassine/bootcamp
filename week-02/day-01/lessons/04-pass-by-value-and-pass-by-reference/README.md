# Pass by Value and Pass by Reference

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn**

- The difference between passing by value and passing by reference

---

### **Reference and primitive values: Pass by value, Pass by reference**

- [**Click HERE to see the Mandatory video**](https://www.youtube.com/watch?v=-hBJz2PPIVE)

![Pass By Value](https://github.com/devtlv/studentsGitHub/blob/master/JS/Week%204/Day2/pass%20by%20value.png?raw=true)

**Exercise**

Analyse the code before executing it. What will be the output

```javascript
let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);
```

---

### **Mutability : **[**Copying by reference**](https://javascript.info/object#copying-by-reference)

We saw that object values can be modified

```javascript
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);// 15
console.log(object3.value);// 10
```

The `object1` and `object2` **are the same object**, which is why changing `object1` also changes the value of `object2`.

**They are said to have the same identity**.

The `object3` points to a different object, which initially contains the same properties as `object1` but lives a separate life.

**IMPORTANT**

When you compare objects with JavaScript’s == operator, it **compares by identity**:

- it will produce `true` only if both objects are precisely the same value.

- Comparing different objects will return `false`, even if they have identical properties.

## Worked solutions

[English explanations and runnable implementation](solutions.md).
