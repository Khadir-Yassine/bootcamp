# Advanced Array methods

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn**

- Array methods: map, filter, reduce

---

## **Useful Resources**

- [Cheat Sheet For Cloning Arrays In JavaScript](https://medium.com/javascript-in-plain-english/cheat-sheet-for-cloning-arrays-in-javascript-1058ce3c351c)

---

### **Array map : Transforming**

The `map()` method **creates a new array** by calling a provided function on **every element in the calling array.**

The `map()` method transforms an array by applying a function to all of its elements and building a new array from the returned values.

*What is happening behind the curtain ?*

```javascript
function map(array, transform) { //pass an array as an argument, and the way of transforming the array
    let mapped = []; //creates a new array
    for (let element of array) {
        mapped.push(transform(element)); //push the transformed element of the initial array into the new array
    }
    return mapped;//return the new array
}
```

*Syntax*

```javascript
let newArr = oldArr.map((val, index, arr) => {
  // return element to new Array
});
```

- `newArr` — the new array that is returned

- `oldArr` — the array to run the map function on

- `val` — the current value being processed

- `index` — the current index of the value being processed

- `arr` — the original array

---

**Example:**

```javascript
const firstArr = [1, 4, 9, 16];

// pass a function to map
const secondArr = firstArr.map((value, index) => value * 2);
// array passed : firstArr
// transformation passed : value * 2

console.log(secondArr);
// expected output: [2, 8, 18, 32]
```

```javascript
const firstArr = [1, 4, 9, 16];

const secondArr = firstArr.map((value, index, arr) => {
    console.log(value); // each element
    console.log(index); // each index
    console.log(arr); // the firstArr (logged 4 times)
    return value * index;
});

console.log(secondArr);
//expected output : [ 0, 4, 18, 48 ]
```

---

**Exercise**

Anayse this code before executing it. What will be the output ?

```javascript
myArr = [10,20,30,40];

let newArr = myArr.map((val, i, arr) => {
  return {
    value: val,
    index: i
  };
});
```

---

### **Array filter : Filtering**

The `filter()` method **creates a new array** with all elements that passed the test implemented by the provided function.

Rather than deleting elements from the existing array, it builds up a new array **with only the elements that pass the test.**

*What is happening behind the curtain ?*

```javascript
function filter(array, test) { //pass an array as an argument, and the test (ie. the condition)
    let passed = []; //creates a new array
    for (let element of array) { 
        if (test(element)) { 
            passed.push(element); //push the elements inside the new array if the condition is true
        } 
    } 
    return passed; //return the new array
}
```

*Syntax*

```javascript
let newArr = oldArr.filter(callback);
```

- `newArr` — the new array that is returned

- `oldArr` — the array to run the filter function on

- `callback` — the function used to test each element of the `oldArr`.

Our `callback` function can take three arguments:

- `element` — the current element of the array

- `index` — the current index of the value being processed

- `arr` — the original array

---

**Example:**

```javascript
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);
// array passed : words
// test passed : word.length > 6

console.log(result);
// expected output: ["exuberant", "destruction", "present"]
```

---

### **Array reduce**

The `reduce()` method executes a reducer function (that you provide) on each array element, resulting in a single output value.

It builds a value by **repeatedly taking a single element** from the array and **combining it with the current value**

*What is happening behind the curtain ?*

```javascript
function reduce(array, combine, start) { //pass the array, pass the way of combining each element of the array with the current value
    let current = start;
    for (let element of array) {
        current = combine(current, element); 
    }
    return current; // return the value
}
```

*Syntax*

```javascript
let result = arr.reduce(callback);
// Optionally, you can specify an initial value
let result = arr.reduce(callback, initValue);
```

- `result` — the single value that is returned.

- `arr` — the array to run the reduce function on.

- `callback` — the function to execute on each element in the array.

- `initValue` — an optionally supplied initial value. If this value is not supplied, the `0th` element is used as the initial value.

Our `callback` function can take four arguments. You will recognize three of the arguments from the `map()` and `filter()` methods. The new argument is the `accumulator`.

- `accumulator` — the accumulator accumulates all of the callbacks returned values.

- `val` — the current value being processed

- `index` — the current index of the value being processed

- `arr` — the original array

**Explanation**

```javascript
const arr = [1, 4, 9, 16];

let sum = arr.reduce((acc, val) => {
  console.log(`acc: ${acc}`)
  console.log(`val: ${val}`)
  console.log(`acc + val: ${acc + val}`);
  return acc + val;
});

console.log(sum)

// expected output
acc: 1
val: 4
acc + val: 5
acc: 5
val: 9
acc + val: 14
acc: 14
val: 16
acc + val: 30
```

---

**Example:**

```javascript
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
let sum = array1.reduce(reducer);
// expected output: 10

// 5 + 1 + 2 + 3 + 4
// the number 5 is the starting point
let sum1 = array1.reduce(reducer, 5);
// expected output: 15
```

---

**Exercise**

Use the reduce() method to sum up all the calories of every desert, except Apple Pie.

The output should be 85

```javascript
let party = [
  {
    desert: 'Chocolate Mousse',
    calories: 30,
  },
  {
    desert: 'Apple Pie',
    calories: 15,
  },
  {
    desert: 'Croissant',
    calories: 50,
  },
  {
    desert: 'Strawberry Icecream',
    calories: 5,
  },
]
```

---

### **Destructuring assignment**

The destructuring assignment syntax is a JavaScript expression that makes it possible to **unpack values from arrays, or properties from objects**, into distinct variables.

---

**Destructuring**

```javascript
let a, b, rest;
[a, b] = [10, 20];
rest = [30,40,50]

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

console.log(rest);
// expected output: [30,40,50]
```

---

**Spread Operator**

The *spread operator* consists of three dots (`...`) followed by an expression.
The spread operator unpacks elements elements of an array.

```javascript
let a = 10;
let b = 20
let rest = [30,40,50]

const iterable = [a, b, ...rest] 
console.log(iterable);
// expected output: [10, 20, 30, 40, 50];
```

---

**Rest Operator**

The *rest operator* consists of three dots (`...`) followed by an expression.
The rest operator packs elements into an array.

```javascript
let [c, d, ...rest] = [10, 20, 30, 40, 50];
console.log('c: ',c); // c: 10
console.log('d: ',d); // d: 20
console.log('rest: ',rest); // [30, 40, 50]
```

---

### **Cloning Arrays**

In JavaScript, arrays are **reference types**; therefore, they are assigned by reference instead of copied.

```javascript
const rainbow = ['red', 'orange', 'yellow'];
const rainbowClone = rainbow;

// Both rainbow and rainbowClone point to the same
// array reference in memory, hence it logs (true)
console.log(rainbow === rainbowClone); // true

rainbow.push("violet");
console.log(rainbow); //['red', 'orange', 'yellow', 'violet']
console.log(rainbowClone); // ['red', 'orange', 'yellow', 'violet']
```

```javascript
const rainbow = ['red', 'orange', 'yellow'];

// Cloning with array destructuring and spread operator
const [...rainbowClone] = rainbow;

console.log(rainbow === rainbowClone); // false
console.log(rainbowClone); // ['red', 'orange', 'yellow']

rainbow.push("violet");
console.log(rainbow); //['red', 'orange', 'yellow', 'violet']
console.log(rainbowClone); // ['red', 'orange', 'yellow']
```

---

**Exercise**

Anayse this code before executing it. What will be the output ?

```javascript
let prices = [12, 20, 18];
let newPriceArray = [...prices];
console.log(newPriceArray);
```

```javascript
let alphabets = ["A", ..."BCD", "E"];
console.log(alphabets);
```
