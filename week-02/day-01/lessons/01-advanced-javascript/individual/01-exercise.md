# Exercise

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

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
