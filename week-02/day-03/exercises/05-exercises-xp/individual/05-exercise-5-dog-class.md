# 🌟 Exercise 5 : Dog class

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

### **🌟 Exercise 5 : Dog class**

**Instructions**

Using the `Dog` class below:

```javascript
class Dog {
  constructor(name) {
    this.name = name;
  }
};
```

1. Analyze the options below. Which constructor will successfully extend the `Dog` class?

```javascript
  // 1
class Labrador extends Dog {
  constructor(name, size) {
    this.size = size;
  }
};
```

```javascript
  // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};
```

```javascript
  // 3
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
};
```

```javascript
  // 4
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
};
```

---

## Worked solution

[Read the explanation and runnable code](../solutions.md#exercise-5).
