# Objects

Course source: [Geeks Institute](https://www.geeks.institute/).
### **Objects**

In JavaScript, the `object` type is unique.

All other types are called “primitive” because their values represent a single item (such as a string or a number). In contrast, objects are used to store collections of data and more complex entities.

An object is an unordered collection of related data in the form of `key: value` pairs. The keys are strings (or symbols), and their associated values can be any valid JavaScript value — including functions. If a property’s value is a function, it is referred to as a **method**.

**Example:** A lamp object might have properties like `height`, `width`, and `brightness`, and methods like `shine()` to represent its behavior.

*Syntax*

```javascript
Empty object :
let objName = {};

let x = {
  property: value,
  property: value,    
  method: function(){}
  ...
};
```

```javascript
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
```

---

**1. Accessing Object properties**

*Syntax*

```javascript
objectName.propertyName
```

Or:

```javascript
objectName["propertyName"]
```

```javascript
let person = {
  firstName: "John",
  lastName: "Doe",
};

console.log(person.firstName) // John
// or
console.log(person["firstName"]) // John
```

---

**2. Adding/ Changing Object properties**

```javascript
let person = {
  firstName: "John",
  lastName: "Doe",
};

person.firstName = "Sarah"
person.eyeColor = "blue"

console.log(person) // will output:

// {
//   firstName: "Sarah",
//   lastName: "Doe",
//   eyeColor: "blue"
// };
```

---

**3. Deleting Object properties**

```javascript
let person = {
  firstName: "John",
  lastName: "Doe",
};

delete person.firstName

console.log(person)

// {
//   lastName: "Doe",
// };
```

---

**Exercise 1**

Create a stuctured html file linked to a JS file

1. Create an object that has properties "username" and "password". Fill those values in with strings.

2. Create an array which contains the object you have made above and name the array "database".

3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
