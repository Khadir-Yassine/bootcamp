# Objects

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn**

- Object Manipulation

---

### **Objects and properties**

**1. Creating an empty object**

An empty object (“empty cabinet”) can be created using one of two syntaxes:

```javascript
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax
```

---

**2. Accessing the object values :**

A JavaScript object has properties associated with it.

- A property of an object can be explained as a variable attached to the object. Object properties are the same as ordinary JavaScript variables, except for the attachment to objects. The properties of an object define the characteristics of the object. You access the properties of an object with a simple dot-notation:

---

**dot-notation : objectName.propertyName**

Like all JavaScript variables, both the object name (which could be a standard variable) and property name are **case sensitive**. You can define a property by assigning it a value.

For example, let’s create an object named `myCar` and give it properties named make, model, and year as follows:

```javascript
let myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
```

**Unassigned properties of an object are undefined (and not null).**

```javascript
console.log(myCar.color); // undefined
```

---

**bracket-notation : objectName[“propertyName”]**

Properties of JavaScript objects can also be accessed or set using a bracket notation.

Objects are sometimes called **associative arrays**, since each property is associated with a string value used to access it.

So, for example, you could access the properties of the `myCar` object as follows:

```javascript
myCar['make'] = 'Ford';
myCar['model'] = 'Mustang';
myCar['year'] = 1969;
```

An object property name can be any valid JavaScript string, or anything that can be converted to a string, including the empty string.

However, any property name that is not a valid JavaScript identifier (for example, a property name with a space or a hyphen, or that starts with a number) **can only be accessed using the square bracket notation**.

This notation is also instrumental when property names are to be dynamically determined (when the property name is not determined until runtime).

```javascript
// four variables are created and assigned in a single go,
// separated by commas
let myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();

myObj.type              = 'Dot syntax';
myObj['date created']   = 'String with space';
myObj[str]              = 'String value';
myObj[rand]             = 'Random Number';
myObj[obj]              = 'Object';
myObj['']               = 'Even an empty string';

console.log(myObj)
// output
{ type: 'Dot syntax',
  'date created': 'String with space',
  myString: 'String value',
  '0.6039956548449055': 'Random Number',
  '[object Object]': 'Object',
  '': 'Even an empty string' }
```

Note: all keys in the square bracket notation are converted to string unless they’re Symbols since JavaScript object property names (keys) can only be strings or Symbols.

**Square brackets are much more potent than the dot notation. They allow any property names and variables**.

---

**3. Computed properties**

You can also access properties by using a string value that is stored in a variable:

```javascript
let myCar = new Object()

let propertyName = 'make';
myCar[propertyName] = 'Ford';

propertyName = 'model';
myCar[propertyName] = 'Mustang';

console.log(myCar)

//output
{ make: 'Ford', model: 'Mustang' }
```

---

**4. Property value shorthand**

Used when properties have the same names as variables

```javascript
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
alert(user.name); // John

// The same as
function makeUser(name, age) {
  return {
    name, // same as name: name
    age,  // same as age: age
    // ...
  };
}
```

---

**5. Looping through an object : **`for .. in`

**Example:**

```javascript
function showProps(obj, objName) {
  let result = '';
  for (let i in obj) {
    // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  return result;
}

showProps(myCar, "myCar")
```

```javascript
myCar.make = Ford
myCar.model = Mustang
myCar.year = 1969
```

---

**Exercise**

Analyse the code before executing it. What will be the output

```javascript
const person = {
  name: 'Lydia',
  age: 21,
};

for (const item in person) {
  console.log(item);
}
```
