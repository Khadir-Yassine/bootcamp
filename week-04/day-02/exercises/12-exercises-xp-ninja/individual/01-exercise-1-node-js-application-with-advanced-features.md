# Exercise 1: Node.js Application with Advanced Features

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

### **Exercise 1: Node.js Application with Advanced Features**

**Instructions**

Imagine you’re building a command-line utility that performs various tasks using Node.js, npm modules, and the module system. Your utility will have different commands that users can execute.

1. Create a directory named `ninja-utility`.

2. Inside the `ninja-utility` directory, open a terminal and run `npm init` to initialize a new Node.js project. Follow the prompts to set up your project.

3. Install the `axios` package by running `npm install axios` in the terminal.

4. Create a directory named `commands` inside the `ninja-utility` directory.

5. Inside the `commands` directory, create three files: `greet.js`, `fetch.js`, and `read.js`.

6. In each command file, implement the following functionality:
  
  - **greet.js**: Use the `chalk` package to create a colorful greeting message and display it in the terminal.
  - **fetch.js**: Use the `axios` package to make an HTTP GET request to a public API (e.g., weather data or news data) and display the fetched data in the terminal.
  - **read.js**: Use the `fs` module to read and display the content of a specified file in the terminal.

7. Create a file named `index.js` in the `ninja-utility` directory.

8. In `index.js`, implement the command-line utility using the `commander` package:

9. Use the `commander` package to define different commands (e.g., `greet`, `fetch`, `read`).

10. Map each command to its respective module in the `commands` directory.

11. Parse command-line arguments and execute the appropriate command.

12. Run your utility using Node.js and verify that you can execute different commands from the command line.

---
