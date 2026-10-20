# Exercise 1 : Bird class

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

### **Exercise 1 : Bird class**

**Instructions**

1. Analyze the code below, what will be the output?

```javascript
class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");
    super();
  }
}

const pet = new Flamingo();
```

---
