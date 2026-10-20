# Introduction to JavaScript

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Introduction to JavaScript**

---

## **What you will learn**

- You will learn programming fundamentals and basic object-oriented concepts using the latest JavaScript syntax. The concepts covered in these lessons lay the foundation for using JavaScript in any environment

Javascript Types

- Number

- String

- Boolean

- Undefined

- Null

---

## **Useful resources :**

- [Nice Tutorial: JS for cats](http://jsforcats.com/)

---

### **What is Javascript?**

*JavaScript* is a **scripting language** used to create and control dynamic website content, for example:

- autocomplete text suggestions

- interactive forms

You can type Javascript directly into an HTML document, and web browsers will understand them.
Using JavaScript doesn’t require downloading any additional programs or compilers.

---

### **Important to know**

- Be careful; JavaScript and Java are two different languages

- JavaScript accepts both double `“` and single quotes `'`

- JavaScript is case-sensitive: A ≠ a

- Only put sensitive data in the server side - not in the client side (it is not safe)

- Insert a comment: `//` at the beginning of a line OR `/* entire code */`

---

### **How to integrate JS code**

There are two possibilities: you can either write your JS code directly in your HTML file or write it in a new JS file that you link to your HTML file (it’s an external JS file like we have been doing with CSS files).

1. **First option: Inside your HTML file**

Insert the tag

```javascript
<script> write your JS code here </script>
```

Or At the end of your HTML file, just before the closing tag `</body>`.

Placing scripts at the bottom of the element improves the display speed because script compilation slows down the display.

```javascript
        <html>
            <head>
            </head>
            <body>
                ...html code…
                <script>
                ...JS code..
                </script>
            </body>
        </html>
```

1. **Second Option: Create a new JS file (This solution is better).**

Just as you create a CSS file for your project, you create a JS file where you write your code.
Save your file inside a JS folder within your project folder: `Project > JS > script.js`

Then do not forget to link this file to your HTML file! Place this line at the end of your HTML file, just before the closing tag `</body>`.

```javascript
<script src="script.js"></script>
```

The benefits of using a separate JavaScript file :

- Cleaner code

- Easier maintenance

- Pages load faster

- Can run the same JavaScript on several pages on a web site

---

### **The inspect element and the console.log command**

To open the console on your webpage, go on your webpage, and **Right-click > Inspect.**

If you write your JS code in a file, write `console.log(content to display);` to display it in the JavaScript console.

You can also write JS code directly in the console. It is helpful to test code, and the result will not appear on your website.

---

### **Javascript Variables**

In a programming language, variables are used to **store data values**.
JavaScript uses the `let` keyword to declare variables.
An `equal` sign is used to **assign values to variables**.

```javascript
let x = 3
```

---

**Naming**

All JavaScript variables must be identified with **unique names**.
These unique names are called **identifiers**.

The general rules for constructing names for variables (unique identifiers) are:

- Names can contain letters, digits, underscores, and dollar signs.

  - You **cannot** use any other characters, including spaces, symbols, and punctuation marks.

- Names must begin with a letter

- Names can also begin with $ and _

- Names are case sensitive (y and Y are different variables)

- You cannot use one of JavaScript’s *reserved words* as a variable name. All programming languages have a supply of words that are used internally by the language and that can’t be used for variable names because doing so would cause confusion

  - [JavaScript’s keywords](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords)
  - [JavaScript’s reserved words](https://flaviocopes.com/javascript-reserved-words/)

- Make your names descriptive.

When the name contains multiple words, **camelCase** is commonly used. That is: words go one after another, each word except first starting with a capital letter: `myVeryLongName`.

Examples of valid names:

```javascript
let userName;
let test123;
```

Examples of incorrect variable names:

```javascript
let 1a; // cannot start with a digit
let my-name; // hyphens '-' aren't allowed in the name
```

---

**Keywords**

The `let` keyword tells the browser to create variables:

```javascript
let x, y;
x = 5 + 6;
y = x * 10;
```

---

**Comments**

Code after double slashes `//` or between `/*` and `*/`is treated as a comment.
Comments are ignored, and will not be executed:

```javascript
let x = 5;   // I will be executed
// let x = 6;   I will NOT be executed
```

---

**Undefined**

Undefined is when a variable is declared but not assigned to anything.
`let a;`
You have created the variable `a`, but it has no assignment and is undefined.

---

### **Javascript Primitive data types**

---

**String**

This is the text that we put inside quotes: `"Hello world"`

Strings may have single quotes (`'`), double quotes (`"`), or backticks (```) which are read equally, but they must have the exact, consistent quotes at beginning and end.

To use an apostrophe within a string, either uses double quotes around the string or escape the apostrophe with a backslash immediately before it. Like so: `'Jimmy\'s Car'`

When you add two strings (or even a string and a number), JS will perform string concatenation and return the two strings together:

```javascript
    let a = "Hello";
    let b = "World";
    let c = a+b;
    console.log(c);
```

The console would show: `"HelloWorld"`.

Anything inside the quotes is considered a string, even numbers: “43” (string) ≠ 43 (number).

---

**Long literal strings**

Rather than having lines that go on endlessly, you can specifically break the string into multiple lines in
the source code without affecting the actual string contents.

**The **`+` operator

```javascript
let longString = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
                 "otherwise, my code is unreadable.";
```

---

**The backslash character **`\`

At the end of each line to indicate that the string will continue on the next line.
Make sure there is no space or any other character after the backslash.

```javascript
let longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

---

**String Properties**

- Built-in `length` property:

```javascript
let lengthTxt = longString.length 
```

---

**String Methods**

- The `indexOf()` method: returns the **index of (the position of) the first occurrence** of a specified text in a string:
Return -1 if the text is not found

```javascript
let str = "Hello Everyone, please say hello to the class";
let posUppercaseHello = str.indexOf("Hello"); // case sensitive
let posLowercaseHello = str.indexOf("hello");
console.log(posUppercaseHello) // 0
console.log(posLowercaseHello) // 27

let secondstr = "hello Everyone, please say hello to the class";
let secondStrPosHello = secondstr.indexOf("hello"); 
console.log(secondStrPosHello) // 0
```

---

- The `substring(startIndex, endIndex)` methods:
Returns the characters in a string that begins at “startIndex” and ends at the “endIndex”.
“endIndex” is optional, and if omitted, up to the end of the string is assumed.
“endIndex” is not included.

```javascript
let str = "Hello Everyone, please say hello to the class ";
str.substring(0,4) //returns "Hell" --> the index 4 isn't included
str.substring(2,4) //returns "ll"
str.substring(15) //returns "please say hello to the class"
```

---

- The `toLowerCase()` method: Returns the string with all of its characters converted to lowercase.

```javascript
let myStr = "Hello Everyone, Please say hello to the class ";
myStr.toLowerCase() //returns "hello everyone, please say hello to the class "
```

---

**More String Methods**

- `replace()`

- `concat()`

- `toUpperCase()`

- `trim()`

- `charAt()`

---

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

## **Exercise 2**

1. Store your birth year in a variable.

2. Store a future year in a variable.

3. Calculate your possible ages for that year based on the stored values.

4. Display : "I will be NN in YYYY", substituting the values.

---

**Boolean**

JavaScript has a Boolean data type. It can only take the values `true` or `false`

They are interpreted as a number: `1` or `0`

- The Boolean() method: to find out if an expression (or a variable) is true

```javascript
let op = Boolean(10 > 9)   // op returns true
```

---

**Null**

The special null value does not belong to any of the types described above.

It forms a separate type of its own which contains only the null value


[Worked solutions](solutions.md)
