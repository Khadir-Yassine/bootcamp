# Advanced Javascript

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Description**

JavaScript is a complex language. If you’re a JavaScript developer at any level, it’s essential to understand its advanced concepts.

You will learn how to use **Arrow functions**: one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions.

You will learn how to use **Array methods**: methods that execute a callback function for every element of the array.

## **What you will learn**

- Scope in Javascript

- Ternary Operator

- Template string

---

### **I. Scope in JavaScript**

Scope defines the lifetime and visibility of a variable.

**Variables are not visible outside the scope in which they are declared.**

---

**A. Function Scope**

Function scope means that parameters and variables defined in a function are visible everywhere **within the function** but are not visible outside of the function.

Consider the next function:

```javascript
function autoexecute() {
    let x = 1;
};
console.log(x);
//Uncaught ReferenceError: x is not defined
```

---

**1. Access before declaration**

Variables declared with `var` keyword are hoisted to the top of their scope. This way they can be accessed before being declared. Take a look at the code below:

```javascript
function doSomething(){
  console.log(x); //undefined
  var x = 1;
  console.log("x: ", x); //x: 1
}
doSomething();
```

This does not happen for the `let` keyword. A variable declared with `let` can be accessed only after its definition.

```javascript
function doSomething(){
  console.log(x);
  let x = 1;
}
doSomething();
//Uncaught ReferenceError: x is not defined
```

---

**2. Re-declaration of variables**

A variable declared with `var` can be re-declared multiple times in the same scope. The following code is just fine:

```javascript
function doSomething(){
  var x = 1
  var x = 2;
  console.log("x: ",x); //x: 2
}
doSomething();
```

Variables declared with `let` or `const` **cannot be re-declared in the same scope**

```javascript
function doSomething(){
  let x = 1
  let x = 2;
}
doSomething()
//Uncaught SyntaxError: Identifier 'x' has already been declared
```

Maybe we don’t even have to care about this, as the keyword `var` has started to become obsolete.

---

**Exercise**

Analyse the code before executing it. What will be the output

```javascript
var num = 8;
var num = 10;

console.log(num);
```

---

**B. Block Scope**

Block scope is defined with curly braces. It is separated by `{` and `}`.

Variables declared with `let` and `const` keywords can have block scope. **They can only be accessed in the block in which they are defined.**

Consider the next code that emphasizes `let` block scope:

```javascript
let x = 1;
{
  let x = 2;
}
console.log("x : ", x); //x: 1
```

In contrast, the `var` declaration has no block scope:

```javascript
var x = 1;
{
  var x = 2;
}
console.log("x: ", x); //x: 2
```

---

**Exercise**

Analyse the code before executing it. What will be the output

```javascript
function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you're too young.";
  } else {
    const message = "Yay! You're old enough!";
  }

  return message;
}

console.log(checkAge(21));
```

---

**Exercise**

Change the code so the variable **i **will be undefined outside of the **for loop**

```javascript
function numbers() {
  for (var i = 0; i < 5; i += 1) {
    console.log(i);
  }
    console.log(i);
}
numbers();
```

---

### **II. Functions in JavaScript**

**Default parameters**

Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

```javascript
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2));
//expected output: 10

console.log(multiply(5));
//expected output: 5
```

---

### **III. Conditional in JavaScript**

**A. Conditional (ternary) operator**

The ternary operator is the only JavaScript operator that takes three operands:

- a condition followed by a question mark (?),

- an expression to execute if the condition is true, followed by a colon (:),

- and finally, the expression to execute if the condition is false.

`<condition> ? <expression> : <expression>`

This operator is frequently used as a **shortcut** for the if statement.

```javascript
function getFee(isMember) {
  return (isMember ? "$2.00" : "$10.00");
}

console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(1));
// expected output: "$2.00"
// because Boolean(1) is true
```

[**More about Boolean values here**](https://www.w3schools.com/js/js_booleans.asp)

---

**Exercise 1**

Create a function to check the year given by the user

If the year is after 2000, you should display "You are in the 21st century", else you should display "You live in the Middle Age"

---

### **IV. Strings in JavaScript**

**Template strings**

Template literals are string literals allowing embedded expressions.

Template literals are enclosed by the back-tick (**``**) (grave accent) character instead of double or single quotes. Template literals can contain placeholders. The dollar sign indicates these and curly braces **${expression}**

*Syntax*

```javascript
'string text'

`string text line 1
 string text line 2`

`string text ${expression} string text`
```

---

**Multi-line strings**

Any newline characters inserted in the source are part of the template literal. Using normal strings, you would have to use the following syntax to get multi-line strings:

```javascript
console.log('string text line 1\n' +
'string text line 2');
// "string text line 1
// string text line 2"
```

To get the same effect using template literals, you can now write:

```javascript
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

---

**Expression interpolation**

In order to embed expressions within normal strings, you would use the following syntax:

```javascript
var a = 5;
var b = 10;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
// "Fifteen is 15 and
// not 20."
```

Now, with template literals, you are able to make use of the syntactic sugar making substitutions like this more readable:

```javascript
var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```

## Worked solutions

[English explanations and runnable implementation](solutions.md).
