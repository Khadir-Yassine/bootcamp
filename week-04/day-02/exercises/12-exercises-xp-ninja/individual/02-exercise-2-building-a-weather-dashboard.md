# Exercise 2: Building a Weather Dashboard

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

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

[Worked reference answer](../solutions.md) — includes this task in its original exercise order.
