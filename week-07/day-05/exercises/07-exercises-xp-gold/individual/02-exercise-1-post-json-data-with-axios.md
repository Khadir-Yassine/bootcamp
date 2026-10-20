# Exercise 1: POST JSON Data with Axios

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

### **Exercise 1: POST JSON Data with Axios**

**Instructions**

You will POST JSON Data from a form, fetch with axios and console.log the result from your application with React JS. Create a `constructor` function with `props`, `super props` and use `state` to hold data.

To learn more about Axios go [here](https://alligator.io/react/axios-react/)

1. In a new Class Component, create a form with 3 inputs and a button:
  
  - userId
  - title
  - body
  - submit button

2. Add attributes to your inputs: type, placeholder, name and the values from the state (be sure to destructure first the variables from the state).

3. Use an `onChange` event handler on the inputs, that will change the userId, title and body values in the `state`.

4. When the submit button is clicked on, POST the data with axios to this [API](https://jsonplaceholder.typicode.com/posts). Finally, console log the data you just posted.

5. Import the component to the `App.js` file.

**Expected output:**

![image](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%209/Day2/Exercises%20XP%20Gold/Exercise%202.jpg)

---
