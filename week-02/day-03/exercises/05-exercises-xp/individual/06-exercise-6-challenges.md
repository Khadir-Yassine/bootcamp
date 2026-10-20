# 🌟 Exercise 6 : Challenges

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

### **🌟 Exercise 6 : Challenges**

1. Evaluate these (ie `True` or `False`)
  
  ```javascript
[2] === [2] 
{} === {}
```

2. What is, for each object below, the value of the property `number` and why?
  
  ```javascript
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};
  object1.number = 4;
console.log(object2.number)
console.log(object3.number)
console.log(object4.number)
```

1. Create a class `Animal` with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin etc …

2. Create a class `Mammal` that extends from the `Animal` class. Inside the class, add a method called `sound()`. This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

3. Create a `farmerCow` object that is an instance of the class `Mammal`. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
For example: `Moooo I'm a cow, named Lily and I'm brown and white`
