# Exercise 1 : File Management and Path Manipulation

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

### **Exercise 1 : File Management and Path Manipulation**

**Instructions**

1. Create a directory named `file-management`.

2. Inside the `file-management` directory, open a terminal and run `npm init` to initialize a new Node.js project. Follow the prompts to set up your project.

3. Create a directory named `data` inside the `file-management` directory.

4. Inside the `data` directory, create a file named `example.txt` and add some content to it.

5. Create a file named `file-info.js` inside the `file-management` directory.

6. In `file-info.js`, require the `path` and `fs` modules and implement the following functionality:
  
  - Use the `path.join` function to create a file path to the `example.txt` file within the `data` directory.
  - Use the `fs.existsSync` function to check if the file exists.
  - Use the `fs.statSync` function to get information about the file, such as size and creation time.
  - Display the file’s existence, size, and creation time in the terminal.

7. Create another file named `app.js` in the same directory.

8. In `app.js`, require the `file-info.js` module and call the function you’ve written to display information about the file.

9. Run `app.js` using Node.js and verify that the file’s existence, size, and creation time are displayed in the terminal.

---

[Worked reference answer](../solutions.md) — includes this task in its original exercise order.
