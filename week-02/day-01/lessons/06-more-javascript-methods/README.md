# More Javascript methods

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn**

- How to use relevant advanced javascript methods depending on the situation

- includes(), replace(), padStart(), padEnd(), trimStart(), trimEnd(), flat()

---

### **Some more Javascript methods**

**includes() method (Array method)**

The JavaScript array `includes()` method checks whether the given array contains the specified element. It returns true if an array has the element, otherwise false.

[Example and Explanation here](https://www.w3schools.com/jsref/jsref_includes_array.asp)

---

**includes() method (String method)**

The `includes()` method determines whether a string contains the characters of a specified string. This method returns `true` if the string contains the characters and `false` if not.

[Example and Explanation here](https://www.w3schools.com/jsref/jsref_includes.asp#:~:text=The%20includes()%20method%20determines,()%20method%20is%20case%20sensitive.)

---

**replace() method**

String values have a replace method that can be used to replace part of the string with another string. This method does not change the calling String object. It returns a new string.

```javascript
console.log("bottle".replace("t", "z")); // → boztle
```

[Example and Explanation here](https://www.w3schools.com/jsref/jsref_replace.asp)

The first argument can also be a regular expression, in which case the first match of the regular expression is replaced.

When a `g` option (for global) is added to the regular expression, all matches in the string will be replaced, not just the first.

```javascript
Replacing all the "t" by "z"
console.log("bottle".replace(/[t]/g, "z")); // → bozzle

Replacing the first vowel by "x"
console.log("Computer".replace(/[aeiou]/, "x")); // → Cxmputer

Replacing all the vowels by "x"
console.log("Computer".replace(/[aeiou]/g, "x")); // → Cxmpxtxr
```

---

**padStart() method**

The **padStart()** method in JavaScript is used to pad a string with another string until it reaches the given length. The padding is applied from the **left end** of the string.

[Example and Explanation here](https://flaviocopes.com/javascript-string-padstart/)

---

**padEnd() method**

The **padEnd()** method in JavaScript is used to pad a string with another string until it reaches the given length. The padding is applied from the **right end** of the string.

[Example and Explanation here](https://flaviocopes.com/javascript-string-padend/)

---

**trimStart() method**

The **trimStart()** method in JavaScript is used to remove white-space **from the beginning of a string**. The value of the string is not modified in any manner, including any white-space present after the string.

[Example and Explanation here](https://www.javascripttutorial.net/es-next/javascript-string-trimstart/)

---

**trimEnd() method**

The **trimEnd()** method in JavaScript is used to remove white-space **from the end of a string**. The value of the string is not modified in any manner, including any white-space present before the string.

[Example and Explanation here](https://www.javascripttutorial.net/es-next/javascript-string-trimend/)

---

**flat() method**

The JavaScript `flat()` method is used to flatten an array recursively up to a specified depth. It doesn’t manipulate the original array but creates a new flattened array.

```javascript
let arr = ["blue", ["red", "yellow"], "green"];
let flattened = arr.flat();
console.log(flattened) // → ["blue", "red", "yellow", "green"]
```

The `flat()` method takes an optional parameter:

- `depth` - Integer specifying how deep a nested array should be flattened. Its default value is 1.

```javascript
let arr = ["blue", ["red", ["a","b"], "yellow"], "green"];
let flattened = arr.flat();
console.log(flattened) // → ["blue", "red", ["a","b"], "yellow", "green"]

let arr = ["blue", ["red", ["a","b"], "yellow"], "green"];
let flattened = arr.flat(2);
console.log(flattened)// →  ["blue", "red", "a", "b", "yellow", "green"]
```

[Example and Explanation here JavaScript Array flat()](https://www.javascripttutorial.net/es-next/javascript-array-flat/)

[Another tutorial here](https://www.programiz.com/javascript/library/array/flat)

[flat() and flatMap() tutorial](https://www.digitalocean.com/community/tutorials/js-flat-flatmap)
