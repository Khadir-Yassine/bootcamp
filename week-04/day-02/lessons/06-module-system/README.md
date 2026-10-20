# Module System

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn**

- NodeJS Module System

- CommonJS vs ES6

---

### **NodeJS Module System**

Module in Node.js is a simple or complex functionality organized in single or multiple JavaScript files which can be reused throughout the Node.js application.
Each module in Node.js has its own context, so it cannot interfere with other modules or pollute global scope.
Also, each module can be placed in a separate `.js` file under a separate folder.

Node.js implements CommonJS modules standard.
CommonJS is a group of volunteers who define JavaScript standards for web server, desktop, and console application.

Writing code in a file is fine, but if your application need a lot of code, your file will quickly become too large.

This is why it is better to separate your code into several modules (file) in order to make the code reusable and much better structured.

Here is an example :

**app.js**

```javascript
const name = "Mike Taylor";

const greeting = function (name) {
  console.log(`Hello ${name}, welcome to NodeJS`);
};

greeting(name);
```

But, we would like to make the greeting module reusable. To do this we will place it in its own file called `greeting.js`

**greeting.js**

```javascript
const greeting = function (name) {
  console.log(`Hello ${name}, welcome to NodeJS`);
};
```

By default NodeJS does not allow to use this function from another module. To do this, you must indicate to the module which elements can be exportable with `module.exports`:

```javascript
const greeting = function (name) {
  console.log(`Hello ${name}, welcome to NodeJS`);
};

module.exports = greeting;
```

Note here the last line `module.exports = greeting`, this function allows the use of the greeting function from another module.

From `app.js` you can now load this module with the `require` function

**app.js**

```javascript
const greeting = require("./greeting.js");

const name = "Mike Taylor";

greeting(name);
```

The `require` function will create a reference with the greeting module and place this reference in the `const greeting` variable (this variable could have been called another name than `greeting`)

Note that the function `require ('./greeting.js')` uses the path `'./'` this allows to indicate to NodeJS that the module is in the same folder as our `app.js` file

---

### **Multiple exports**

It is possible to export several elements with the function `module.exports`. Here is an example: person.js

**person.js**

```javascript
const name = "Mike Taylor";
const car = "Ford Mustang";

module.exports = { name, car };
```

**Multiple exports is therefore done with an object that contains several elements.**

**app.js**

```javascript
const person = require("./person.js");

console.log(person.name, person.car);
```

Note that the `person` variable does not point to the `name` or `car` directly, it points to the object that is exported. So to return its content we have to use `person.name`

---

### **Multiple export (alternative syntax)**

It is possible to export several elements with the function `module.exports`. Here is an example:

**person.js**

```javascript
const name = "Mike Taylor";
const car = "Ford Mustang";

module.exports.name = name;
module.exports.car = car;
```

The usage remains the same:

**app.js**

```javascript
const person = require('./person.js')

console.log(person.name, person.car);
```

It is also possible to use deconstruction

**app.js**

```javascript
const { name, car } = require("./person.js");

console.log(name, car);
```

---

### **The ‘require’ function executes the module**

When executing the require function, the module is executed immediately. Here is an example:

**hello.js**

```javascript
const hello = function () {
  console.log("Hello World");
};

console.log("Hello Node!");

module.exports = hello;
```

**app.js**

```javascript
const hello = require("./hello.js");

hello();
```

If you launched `app.js`, you will see that it will display ‘Hello Node!’ before the ‘Hello World’ because as mentioned, the ‘require’ executes the module.

Take this fact into account when you create your modules in order to avoid unwanted behavior.

**Other example**

**pizza.js**

```javascript
function make_pizza(size, ...toppings) {
    console.log(`\nMaking a ${size}-inch pizza with the following toppings:`)
    for (topping of toppings) {
        console.log("- " + topping)
    }
}

module.exports = {
    make_pizza,
}
```

**script.js**

```javascript
let pizza = require('./pizza.js');

pizza.make_pizza(16, 'pepperoni')
pizza.make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')
```

**In the Terminal**

```javascript
node script.js
```

You get :

```javascript
Making a 16-inch pizza with the following toppings:
- pepperoni

Making a 12-inch pizza with the following toppings:
- mushrooms
- green peppers
- extra cheese
```

---

### **CommonJS vs ES6 modules**

Node.js originally supported the CommonJS module format. However, in recent years, the ES6 module format has become the preferred module format for Node.js.

The main difference between CommonJS and ES6 modules is that **ES6 modules are asynchronous**. This means that the code in an ES6 module will not be executed until the module is fully loaded. This can be helpful for preventing race conditions and improving performance.

If you are writing new code, it is recommended to use the ES6 module format. However, if you are working on an existing project that uses CommonJS modules, you can continue to use CommonJS modules.

To enable the use of ES6 syntax, it is necessary to create a `package.json` file and include the `"type": "module"` field.

```javascript
{
  "type": "module",
  "name": "your-package-name",
  "version": "1.0.0",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  }
}
```

---

### **Examples code with ES6 syntax:**

**Greeting module**

```javascript
export function greeting(name) {
  console.log(`Hello ${name}, welcome to NodeJS`);
}
```

**Multiple exports**

```javascript
export const name = "Mike Taylor";
export const car = "Ford Mustang";
```

**The **`import` in app.js

```javascript
import { greeting } from './greeting.js';

const name = "Mike Taylor";
greeting(name);
```

Another way with the `import` function in app.js

`await import("./greeting.js")`: This line asynchronously imports the *greeting.js* module.
It uses the `await` keyword, which means that the code execution in *app.js* will pause until the import operation is complete. Once the module is loaded, it returns an object with the exported members. In this case, it includes the greeting function.

```javascript
const greeting = await import("./greeting.js");

const name = "Mike Taylor";
greeting(name);
```

---

### **Difference between CommonJS and ES6 in terms of syntax**

Here is the difference between CommonJS and ES6 modules in terms of syntax:

| Feature | CommonJS | ES6 |
| --- | --- | --- |
| Exporting a function | `module.exports = greeting;` | `export function greeting(name) { ... }` |
| Exporting multiple items | `module.exports = { name, car };` | `export const name = 'Mike Taylor';`<br>`export const car = 'Ford Mustang';` |
| Importing a module | `const greeting = require('./greeting.js');` | `import { greeting } from './greeting.js';` |
| The `require()` function | Executes the module immediately | Does not execute the module until it is fully loaded |

---

### **Conclusion**

The Node.js module system is a powerful tool that can help you to organize your code and make it more reusable.
By understanding how the module system works, you can write more efficient and maintainable code.

---

**Exercises**

**Exercise 1: Basic Module Export and Import**

1. Create a file named `math.js`.

2. Inside `math.js`, define a function called `add` that takes two parameters and returns their sum.

3. Export the `add` function using the CommonJS syntax.

4. Create another file named `app.js`.

5. In `app.js`, import the `add` function from the `math.js` module.

6. Use the `add` function to calculate and print the sum of two numbers.

7. Run `app.js` and see if the sum is calculated correctly.

---

**Exercise 2: Basic Module Export and Import**

Do the same as exercise 1 - Basic Module Export and Import using ES6 module syntax

## Worked answer

[Reference solution](solutions.md) — source code, explanation, and run instructions.
