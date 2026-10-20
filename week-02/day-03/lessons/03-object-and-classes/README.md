# Object and Classes

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn:**

- Objects and Classes

---

## **Useful Resources**

- [Classes in Javascript](https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript)

- [Setter and Getter](https://www.youtube.com/watch?v=y4wDanUBNmE)

---

### **Classes**

Classes are a template for creating objects. Such objects are called **instances of the class**
ECMAScript 2015, also known as ES6, introduced JavaScript Classes.

---

**Defining classes**

**Classes** are in fact “special functions”, and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.

---

**A. Class declarations**

One way to define a class is using a class declaration. To declare a class, you use the **class** keyword with the name of the class (“Rectangle” here).

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

---

**B. Class body and method definitions**

The body of a class is the part that is in curly brackets {}. This is where you define class members, such as methods or constructors.

- **Constructor**
The constructor method is a unique method for creating and initializing an object created with a class. The properties are assigned inside a `constructor()` method.

There can only be one special method with the name “constructor” in a class. A *SyntaxError* will be thrown if the class contains more than one occurrence of a constructor method.

- **Methods**

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

//instance of the class Rectangle
const square = new Rectangle(10, 10);

//calling the method
console.log(square.calcArea()); // 100

console.log(square)
//Rectangle {height: 10, width: 10}
//__proto__:
//  constructor: class Rectangle
//  calcArea: ƒ calcArea()
//__proto__: Object
```

The `this` keyword allows us to access the current object’s properties inside the object.

---

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

## Worked solutions

[English explanations and runnable implementation](solutions.md).
