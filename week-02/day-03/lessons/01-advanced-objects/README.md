# Advanced Objects

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn:**

- Object methods

- Object destructuring

- Cloning an Object

---

### **I. Methods of the Object constructor**

- `Object.keys(obj)`– returns an array of keys.

- `Object.values(obj)` – returns an array of values.

- `Object.entries(obj)`– returns an array of `[key, value]` pairs.

- `Object.fromEntries(array)`– returns an object of `{key: value}` pairs.

---

**1. Object.keys()**

```javascript
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));
// expected output: ["a", "b", "c"]
```

---

**2. Object.values()**

```javascript
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.values(object1));
// expected output: ["somestring", 42, false]
```

---

**3. Object.entries()**

```javascript
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.entries(object1));
// expected output: 
// [ [ 'a', 'somestring' ], [ 'b', 42 ], [ 'c', false ] ]

for (let [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// a: somestring
// b: 42
// c: false
```

---

**4. Object.fromEntries()**

The `Object.fromEntries()` method allows you to convert a list of key-value pairs into an object quickly.

*Syntax* :
`Object.fromEntries(iterable)`

- it accepts a parameter, more specifically an `iterable` such as Array or Map.

- it returns a new object whose properties are given by the entries of the iterable.

Example:

```javascript
const shopping = [
  ["apple", "$2"],
  ["pear", "$1"],
  ["banana", "$0.77"],
];

const shoppingObject = Object.fromEntries(shopping);
console.log(shoppingObject); // { apple: '$2', pear: '$1', banana: '$0.77' }
```

- [**Tutorial on How to convert objects to arrays and vice versa in javascript**](https://medium.com/better-programming/how-to-convert-objects-to-arrays-and-vice-versa-in-javascript-7776b5843948)

---

**Exercise**

Use the methods above to :

- Count how many keys and values are in the object below

- Display : "The x# key is : --- The x# value is : ---".

```javascript
let myObj = {
    name : "John",
    lastName : "Doe",
    age : 25,
    friends : ["Mark", "Lucie", "Ana"]
}
```

---

### **II. Object Destructuring**

**Destructuring implies breaking down a complex structure into simpler parts.**
In JavaScript, this complex structure is usually an object or an array.

```javascript
const address = {
  street: 'Evergreen Terrace',
  number: '742',
  city: 'Springfield',
  state: 'NT',
  zip: '49007',
};

const { street: s, city: c } = address;
console.log(s) //Evergreen Terrace
console.log(c) //Springfield
```

The key `'street'` has a match in the data `address`. Therefore, the data value `'Evergreen Terrace'` is assigned to the variable `s`.

---

**Property value shorthand:**

```javascript
const address = {
  street: 'Evergreen Terrace',
  number: '742',
  city: 'Springfield',
  state: 'NT',
  zip: '49007',
};

const { street, city } = address;
console.log(street) //Evergreen Terrace
console.log(city) //Springfield

//Other Example
let {e, f} = { e: 10, f: 20 };
console.log('e: ',e); // e: 10
console.log('f: ',f); // f: 20
```

---

**Nested object destructuring**

```javascript
const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63
    }
};

// We define 3 local variables: name, maths, science
// Default value to the variable science, in case the key doesn't exist in the object student
const { name, scores: {maths, science = 50} } = student;

console.log(`${name} scored ${maths} in Maths and ${science} in Elementary Science.`);
// John Doe scored 74 in Maths and 50 in Elementary Science.
```

`scores` are not defined as a variable. Instead, we use **nested destructuring** to extract the `maths` and `science` values from the nested`scores` object.

---

**Object destructuring used as an assignment to a function**

Destructuring can also be applied to function parameters to extract values and assign them to local variables.

```javascript
const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63,
        science: 85
    }
};

// Without Destructuring
function displaySummary(student) {
    console.log('Hello, ' + student.name);
    console.log('Your Maths score is ' + (student.scores.maths || 0));
    console.log('Your English score is ' + (student.scores.english || 0));
    console.log('Your Science score is ' + (student.scores.science || 0));
}

// With Destructuring
function displaySummary({name, scores: { maths = 0, english = 0, science = 0 }}) {
    console.log('Hello, ' + name);
    console.log('Your Maths score is ' + maths);
    console.log('Your English score is ' + english);
    console.log('Your Science score is ' + science);
}

displaySummary(student);
```

---

**Spreading**

```javascript
let obj = {foo: 1, bar: 2};
let newObj = {...obj, baz: 3}
console.log(newObj) //{ foo: 1, bar: 2, baz: 3 }

// If property keys clash, the property that is mentioned last “wins”:
let obj = {foo: 1, bar: 2, baz: 3};
let newObj = {...obj, foo: true}
console.log(newObj) //{ foo: true, bar: 2, baz: 3 }

let newObj =  {foo: true, ...obj}
console.log(newObj) //{ foo: 1, bar: 2, baz: 3 }
```

```javascript
let newObj = {...'abc'}
console.log(newObj) //{ '0': 'a', '1': 'b', '2': 'c' }

let newObj = {...['a', 'b']}
console.log(newObj) //{ '0': 'a', '1': 'b' }
```

---

**Exercise**

Analyse this code before executing it. What will be the output ?

```javascript
const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };
console.log(admin);
```

---

### **III. How to copy an object : **[**Cloning and merging, Object.assign**](https://javascript.info/object#cloning-and-merging-object-assign)

- [**Useful Resources**](https://scotch.io/bar-talk/copying-objects-in-javascript)

- [**Mandatory video to see**](https://www.youtube.com/watch?v=H1NmJIv1A2Y)

```javascript
let myCar = {
  color : 'blue',
  details : {
    plateNumber: 123,
    name : "Ford"
  }
}

let myNewCar = {...myCar}
console.log("myNewCar : ", myNewCar) 
// myNewCar :  
// { 
//      color: 'blue', 
//      details: { plateNumber: 123, name: 'Ford' } 
// }

// SHALLOW COPYING
myCar.color = "red"
console.log("myNewCar.color :", myNewCar.color)
// myNewCar.color : blue -- UNCHANGED
console.log("myCar.color :", myCar.color)
// myCar.color : red -- CHANGED

// DEEP COPYING
myCar.details.plateNumber = 345
console.log("myNewCar.details.plateNumber :", myNewCar.details.plateNumber)
// myNewCar.details.plateNumber : 345 -- CHANGED
console.log("myCar.details.plateNumber :", myCar.details.plateNumber)
// myCar.details.plateNumber : 345 : red -- CHANGED
```
