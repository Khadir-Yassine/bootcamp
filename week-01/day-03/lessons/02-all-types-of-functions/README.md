# All types of functions

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn:**

- ES6 Syntax

- ES6 variables

- Arrow functions

---

### **Functions**

**Function declaration**

*Syntax*

```javascript
function funcName (parameters) {
  // statement to execute
}
funcName(arguments)
```

---

**Function expression**

Functions stored in variables do not need function names. They are always invoked (called) using the variable name.

*Syntax*

```javascript
const funcName = function (parameters) {
  // statement to execute
}
funcName(arguments)
```

---

**ES6 Arrow Function expressions**

An arrow function expression is a syntactically **compact alternative** to a regular function.
The arrow comes after the list of parameters and is followed by the function’s body.
We can express it as: `these inputs (i.e., the parameters) => produce this result (i.e., the body)`.

Arrow functions were added in 2015, mainly to make it possible to write small function expressions in a less verbose way.

```javascript
function myFunc (x, y) {
  return x + y;
}

myFunc(2,9);

const myFunc1 = (x, y) => {
  return x + y;
}

myFunc1(6,7)
```

**Concise way to write functions in JavaScript.**

*Syntax*

```javascript
const funcName = () => {
   // statement to execute
}
```

```javascript
const show = (name, age) => {
    console.log(name, age);
}
show("Sarah",20) 
```

**Implicit return**

Arrow functions allow you to have an implicit `return`, values are returned without having to use the `return` keyword.

- If you use the block `{}` syntax, you need to specify the `return` keyword:

```javascript
const show = (x, y) => {
    return x + y
}
```

- If the arrow function only returns a value, you can omit the `{}` and the `return` keyword.

```javascript
const show = (x, y) => x + y
```

**Single Parameter, No Parameter**

- If an arrow function takes a single parameter, you can omit the parentheses as follows:

```javascript
const show = (x) => x*2
show(3) // 6

//same as
const show = x => x*2
show(3) // 6
```

- If the arrow function has no parameter, you need to use parentheses, like this:

```javascript
const funcName = () => //statement
```

```javascript
let username = "john";
const changeUsername = () => username.toUpperCase(); 
changeUsername() // "JOHN"
```

---

**Exercise**

Using an arrow function, create a calculator that returns the result of the operation based on the given operator: `+`, `-`, `*`, or `/`.

The function should accept two numbers as parameters and return the correct calculation result.

**Bonus:** Modify your function to use a **ternary operator** to handle cases where the operator is not valid, returning `"Invalid operator"` instead of performing a calculation.

---

## **Read these Useful Resources**

- [Explanation of Hoisting](https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-what-is-hoisting-in-javascript-a63c1b2267a1)

- [Arrow Function](https://flaviocopes.com/javascript-arrow-functions/)

- [Primitive Type Symbol](https://dev.to/mildrenben/symbols-in-es6---a-quick-guide-dhm)

- [More explanation on the arrow function](https://javascript.info/arrow-functions-basics)

- [What is a callback function](https://www.programiz.com/javascript/callback)

- [Arrow function expressions and rest parameter](https://levelup.gitconnected.com/how-to-accept-any-number-of-arguments-in-a-javascript-arrow-function-ed9ba66ed53f)

- [Video Synchronous and Asynchronous Javascript](https://www.youtube.com/watch?v=Q-Zmc0E0GYY)


[Worked solutions](solutions.md)
