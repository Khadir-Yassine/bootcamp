# Exercise 1

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

## **Exercise 1**

Create a structured HTML file linked to a JS file

1. Create these variables and give them values:

- addressNumber

- addressStreet

- country

2. Write a variable named *globalAddress*, and concatenate inside, the variables:

- addressNumber

- addressStreet

- country

In order to create a sentence

3. Display *globalAddress* Example: *globalAddress* should display « I live in 55 av Bosquet, in Paris »

---

**Number**

It can be either whole numbers (4), negative numbers (-3), or decimal numbers (9.3).
You can do mathematical operations in the console of JS: + - / *

```javascript
console.log(5+3) 
// It will display "8"
```

**NaN**

In JavaScript, `NaN` stands for “Not-a-Number.” It is a special value that represents a computational error resulting from an operation that does not produce a valid number.

```javascript
// Invalid number operations
let result1 = 0 / 0;         // NaN
let result2 = Math.sqrt(-1); // NaN
let result3 = "hello" * 5;   // NaN

console.log(result1); // Output: NaN
console.log(result2); // Output: NaN
console.log(result3); // Output: NaN

// Parsing errors: Using parseInt or parseFloat on a string that does not contain a numeric value
let result4 = parseInt("hello"); // NaN
let result5 = parseFloat("abc"); // NaN

console.log(result4); // Output: NaN
console.log(result5); // Output: NaN

// Implicit type coercion
let result6 = undefined + 5; // NaN

console.log(result6); // Output: NaN
```

**Properties of **`NaN`
The type of `NaN` is number.

`console.log(typeof NaN); // Output: "number"`

**Type coercion**

Example

```javascript
"5" * 3 === 15 //true
"5" - 3 === 2 //true
"6"/2 === 3 //true
```

JavaScript performs type coercion when using the operator (-, +, *, /).
If one of the operands is a string and the other is a number, JavaScript attempts to convert the string to a number before performing the mathematic operation.

---

**Number Methods**

- The `isNaN(x)`method: return true or false

```javascript
let op = "me";
isNaN(op);   //returns true because op is Not a Number
```

- The `toString()` method: returns a number as a string.

```javascript
let op = 10;
op.toString();     //returns "10"
```

- The `toFixed()` method: returns a string, with the number written with a specified number of decimals:

```javascript
let op = 10.6789
op.toFixed(0);           // returns 11
op.toFixed(2);           // returns 10.68.
```

---
