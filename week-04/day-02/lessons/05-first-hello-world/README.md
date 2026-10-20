# First Hello World

Course source: [Geeks Institute](https://www.geeks.institute/).
### **Hello World**

Tradition requires, the first thing we are going to do is the classic ‘Hello World’

The fastest and easiest way to run code with Node is by using REPL. To launch the REPL, just run the command `node` in your terminal:

REPL stands for Read-Eval-Print Loop

```javascript
$ node
Welcome to Node.js v16.9.1
Type ".help" for more information
>
```

```javascript
> console.log('Hello World')
Hello World
undefined
```

The REPL allows you to run javascript but you will understand it is very limited. The REPL is used for running small orders or for testing only.

If you want to write a complete program in NodeJS, you will need to create a file and run it.

In your code editor, create and open the `app.js` file, enter the following line:

```javascript
console.log("Hello World");
```

Each file is considered by NodeJS to be a module and can therefore be executed.

To do this, from the terminal enter: `node name_of_file.js`

```javascript
$ node app.js
Hello World
```

There you go, well done you have just created your first NodeJS application!

Whenever you need to run NodeJS code you will need to do so with this command.

We will see, later that there is a way to create a NodeJS server that will allow code to be executed automatically.

---

### **JavaScript Browser vs JavaScript Server**

With Node.js, you can run JavaScript code without a browser, but there are differences compared to browser-based JavaScript:

- A browser application runs on the client’s computer WHEREAS A Node.js application runs on the server.

- With Node.js, there is no browser, so no DOM and no Window object.

- Node.js allows access to the file system.

- The module system in Node.js, called ‘CommonJS’, works differently from the ES6 JavaScript module syntax.

- Node.js includes global objects available throughout your code. Some of these objects are:

- `__dirname` (returns the path of the current folder)

- `__filename` (returns the name of the file being executed)

- `require` (allows you to load modules)

- `module` (returns info on the current module)

- `process` (returns info about the current environment)

---

### **Conclusion**

In conclusion, Node.js emerges as a powerful and versatile tool that extends the capabilities of JavaScript beyond the confines of web browsers. Its server-side prowess empowers developers to create dynamic and scalable web applications with ease. By unifying the language used for both front-end and back-end development, Node.js accelerates the development cycle, fostering efficiency and innovation.

The extensive library of pre-built packages, managed through NPM, further simplifies the development process, allowing developers to leverage existing solutions and streamline their projects. Moreover, Node.js’ distinctive asynchronous programming paradigm introduces efficiency gains by enabling the concurrent execution of tasks, a departure from the traditional synchronous approach.

The installation process, as outlined in this article, ensures that setting up Node.js is accessible and straightforward. The interactive nature of the REPL environment offers a convenient testing ground, while the transition to writing complete applications in Node.js involves creating modules, executing them via the command line, and witnessing the immediate results.

Furthermore, the delineation between JavaScript in the browser and JavaScript in the server (Node.js) underscores the versatility of this language. While browser-based JavaScript caters to client-side interactions, Node.js empowers server-side operations, granting access to the file system and introducing the distinctive CommonJS module system.

As you embark on your journey with Node.js, keep in mind the wealth of possibilities it offers and the array of tools at your disposal. With Node.js, the boundaries of JavaScript extend beyond the confines of the browser, ushering in a new era of dynamic and efficient web application development.
