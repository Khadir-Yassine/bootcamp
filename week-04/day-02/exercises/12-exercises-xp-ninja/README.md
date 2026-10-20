# Exercises XP Ninja

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn:**

- Working with Node.js modules

---

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

### **Exercise 2: Building a Weather Dashboard**

**Instructions**

Imagine you’re creating a weather dashboard that allows users to get weather information for different cities. You’ll use Node.js, npm modules, and external APIs to achieve this.

1. Create a directory named `weather-dashboard`.

2. Inside the `weather-dashboard` directory, open a terminal and run `npm init` to initialize a new Node.js project. Follow the prompts to set up your project.

3. Install the `axios` and `chalk` packages by running `npm install axios chalk` in the terminal.

4. Create a file named `weather.js`.

5. In `weather.js`, define a function that takes a city name as a parameter and uses the `axios` package to make a request to a weather API (e.g., OpenWeatherMap).

6. Parse the response to extract weather information (e.g., temperature, description) for the given city.

7. Format and display the weather information in the terminal using the `chalk` package to add colors.

8. Create a file named `dashboard.js`.

9. In `dashboard.js`, define a function that prompts the user to enter a city name.

10. Use the `readline` module to get user input and pass the city name to the `weather.js` module to fetch and display weather information.

11. Create a file named `index.js`.

12. In `index.js`, require the `dashboard.js` module and call the function to start the weather dashboard.

13. Run `index.js` using Node.js and test your weather dashboard by entering different city names.

---

## **Submit your exercises :**

Don’t forget to push to

---

## **More info**

| Duration (approx) |
| --- |
| > 1hour |

---

One Last Thing: **Good luck!**
