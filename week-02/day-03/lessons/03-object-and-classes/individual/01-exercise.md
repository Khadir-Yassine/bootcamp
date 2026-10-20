# Exercise

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

**Exercise**

Analyse the code below. Display the type of each rabbit and make them speak

```javascript
class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
```

---

**C. Built-in methods: Getters and Setters**

JavaScript classes can have getter and setter functions.

- Getters, as the name suggests, is a method that lets us get some data from a class.

- Setters are methods that give us the ability to set some fields of the class.

We denote getter functions with the `get` keyword and setters with the `set` keyword.

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;

  }
  // Getter
  get area() {
    return this.height * this.width;
  }

  // Setter
  set area(factor) {
    this.width = this.height*factor
  }
}

const square = new Rectangle(10, 10);
square.area = 2
square.area //200
```

---

**D. Sub classing with **`extends`

The **extends** keyword is used in class declarations or class expressions to create a class as a child of another class.

A constructor can use the **super** keyword to call the **super class** constructor.

```javascript
class Animal { 
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name,noise) {
    super(name); // call the super class constructor and pass in the name parameter
    // Add a new property
    this.noise = noise;
  }

  speak() {
    console.log(`${this.name} barks.It says ${this.noise}`);
  }
}

let d = new Dog('Mitzie', "Wouaf");
console.log(d.name) // Mitzie
d.speak(); // Mitzie barks.It says Wouaf
console.log(d)
//Dog {name: "Mitzie", noise: "Wouaf"}
//__proto__: Animal
//  constructor: class Dog
//  speak: ƒ speak()
//__proto__: Object
```
