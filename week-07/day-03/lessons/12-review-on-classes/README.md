# Review on classes

Course source: [Geeks Institute](https://www.geeks.institute/).
# **Review on classes**

---

## **Constructor function**

The constructor function in a Class (Review from Week4)

Example

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

The body of a class is the part that is in curly brackets `{}`. This is where you define class members, such as methods or constructor.

- **Constructor**
The constructor method is a special method for creating and initializing an object created with a class. The properties are assigned inside a `constructor()` method.

There can only be one special method with the name “constructor” in a class. A *SyntaxError* will be thrown if the class contains more than one occurrence of a constructor method.

---

## **Extends keyword**

The **extends** keyword is used in class declarations or class expressions to create a class as a child of another class.

---

**What is the super method ?**

The `super` keyword refers to the parent class.

By calling the `super()` method in the constructor method, we call the parent’s constructor method and gets access to the parent’s properties and methods:

A constructor can use the **super** keyword to call the constructor of the **super class**.

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
    super(name); 
     // call the super class constructor and pass in the name parameter
     // Add a new property : noise
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
