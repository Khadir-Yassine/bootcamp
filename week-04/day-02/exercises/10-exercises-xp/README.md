# Exercises XP

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn:**

- Working with Node.js modules

- Working with the fs module

---

## **Documentation to help you :**

- [File System documentation](https://nodejs.org/docs/latest/api/fs.html)

- [lodash documentation](https://www.npmjs.com/package/lodash)

- [lodash documentation](https://lodash.com/)

- [chalk documentation](https://www.npmjs.com/package/chalk)

---

### **🌟 Exercise 1: Multiple Exports and Import using CommonJS syntax**

**Instructions**

1. Create a file named `products.js`.

2. Inside `products.js`, create an array of objects, each representing a product with properties like `name`, `price`, and `category`.

3. Export this array using the Common JS syntax.

4. Create another file named `shop.js`.

5. In `shop.js`, `require` the product objects from the `products.js` module.

6. Create a function that takes a product name as a parameter and searches for the corresponding product object.

7. Call this function with different product names and print the details of the products.

8. Run `shop.js` and verify that the correct product details are displayed.

---

### **🌟 Exercise 2: Advanced Module Usage using ES6 module syntax**

**Instructions**

1. Create a file named `data.js`.

2. Inside `data.js`, define an array of objects, each representing a person with properties like `name`, `age`, and `location`.

3. Export the array using the ES6 module syntax.

4. Create another file named `app.js`.

5. In `app.js`, import the array of person objects from the `data.js` module.

6. Write a function that calculates and prints the average age of all the persons in the array.

7. Use the imported array and the average age function in `app.js`.

8. Run `app.js` and confirm that the average age is correctly calculated and displayed.

---

### **🌟 Exercise 3: File Management using CommonJS syntax**

**Instructions**

1. Create a file named `fileManager.js`.

2. Inside `fileManager.js`, define a module that exports functions for reading and writing files.
  
  - Export functions named `readFile` and `writeFile`.
  - Implement the `readFile` function to read the content of a specified file using the `fs` module.
  - Implement the `writeFile` function to write content to a specified file using the `fs` module.

3. Create a file “Hello World.txt” containing the sentence “Hello World !! “

4. Create a file “Bye World.txt” containing the sentence “Bye World !! “

5. Create another file named `app.js`.

6. In `app.js`, import the functions from the `fileManager.js` module.

7. Use the imported functions to read the content of the “Hello World.txt” text file and then write to the “Bye World.txt” with the content “Writing to the file”.

8. Run `app.js` and verify that the file reading and writing operations are successful.

---

### **🌟 Exercise 4: Todo List using ES6 module syntax**

**Instructions**

1. Create a directory named `todoApp`.

2. Inside the `todoApp` directory, create two files: `todo.js` and `app.js`.

3. In `todo.js`, define an ES6 module that exports a `TodoList` class.

4. The `TodoList` class should have methods to add tasks, mark tasks as complete, and list all tasks.

5. Export the `TodoList` class.

6. In `app.js`, import the `TodoList` class from the `todo.js` module.

7. Create an instance of the `TodoList` class.

8. Add a few tasks, mark some as complete, and list all tasks.

9. Run `app.js` and verify that the todo list operations are working correctly.

---

### **🌟 Exercise 5: Creating and Using a Custom Module**

**Instructions**

1. Create a directory named `math-app`.

2. Inside the `math-app` directory, open a terminal and run `npm init` to initialize a new Node.js project. Follow the prompts to set up your project.

3. Install the `lodash` package, a utility library, by running `npm install lodash` in the terminal.

4. Create a file named `math.js` inside the `math-app` directory.

5. In `math.js`, define a simple custom module that exports functions for addition and multiplication.

6. Create a file named `app.js` in the same directory.

7. In `app.js`, require the `lodash` package and the custom `math` module.

8. Use the exported functions from the `math` module and the utility functions from the `lodash` package to perform calculations.

9. Run `app.js` using Node.js and verify that the calculations are correct.

---

### **🌟 Exercise 6: Simple NPM Package Usage**

**Instructions**

1. Create a directory named `npm-beginner`.

2. Inside the `npm-beginner` directory, open a terminal and run `npm init` to initialize a new Node.js project. Follow the prompts to set up your project.

3. Install the `chalk` package, which provides easy coloring for terminal output, by running `npm install chalk` in the terminal.

4. Create a file named `app.js` inside the `npm-beginner` directory.

5. In `app.js`, require the `chalk` package and use it to color and style text in the terminal.

6. Write a simple script that uses `chalk` to print a colorful message.

7. Run `app.js` using Node.js and observe the colorful output in the terminal.

---

### **🌟 Exercise 7: Reading and Copying Files**

**Instructions**

1. Create a directory named `file-explorer`.

2. Inside the `file-explorer` directory, create a file named `copy-file.js`.

3. In `copy-file.js`, use the `fs` module to read the content from a file named `source.txt` and then write the same content to a new file named `destination.txt`.

4. Create another file named `read-directory.js`.

5. In `read-directory.js`, use the `fs` module to read the list of files in a specified directory and display their names in the terminal.

6. Open a terminal in the `file-explorer` directory.

7. Run `node copy-file.js` to copy the content from `source.txt` to `destination.txt`.

8. Run `node read-directory.js` to list the files in the directory.

---

## **Submit your exercises :**

Don’t forget to push to

---

## **More info**

| Duration (approx) |
| --- |
| > 2h30 |

---

One Last Thing: **Good luck!**

## Worked answer

[Reference solution](solutions.md) — source code, explanation, and run instructions.
