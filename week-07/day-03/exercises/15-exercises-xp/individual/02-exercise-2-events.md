# Exercise 2 : Events

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

### **Exercise 2 : Events**

**Instructions**

**Part I:**

1. Create a new Functional component named `Events`.

2. Create an arrow function called `clickMe`. It should alert the string ‘I was clicked’.

3. In the `return`, create a button that when clicked on, calls the `clickMe` function. Use the `onClick` event handler.
  
  **Expected output:**
  
  ![events7](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day3/Exercises%20XP/images/events7.jpg)

**Part II:**

1. In the `Events` Functional component, in the `return`, create an input tag that has an `onKeyDown` event handler, that listens to a function called `handleKeyDown`.
  
  ![keyEnter](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day3/Exercises%20XP/images/keyEnter.png)

2. When you type something in the input field and press the ‘Enter key’, the `handleKeyDown` function will check if the ‘Enter key’ was pressed and will alert a message with the input text value:
  
  ![keyEnter2](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day3/Exercises%20XP/images/keyEnter2.png)
  
  ![events8](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day3/Exercises%20XP/images/events8.jpg)

**Part III:**

1. In the `Events` Functional component, using the `state` hook, declare a state variable named `isToggleOn` and set it to `true`.

2. In the `return`, create a button that has an `onClick` event that will switch the state variable between ‘ON’ and ‘OFF’

3. Create a function that will be called by the `onClick` event handler. In the function you should toggle the value of the `isToggleOn` state variable.
  
  **Output for ‘ON’:**
  
  ![on](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day3/Exercises%20XP/images/on.png)
  
  **Output for ‘OFF’:**
  
  ![off](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day3/Exercises%20XP/images/off.png)

---
