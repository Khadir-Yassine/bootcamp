# Exercises XP

Course source: [Geeks Institute](https://www.geeks.institute/).
***NOTE: You will use the same React App for all the Exercises XP***

---

**Exercise 1 : Car and components**

**Instructions**

**Part I : A Car Component**

1. In `App.js` create an object `const carinfo = {name: "Ford", model: "Mustang"};`

2. In your React app create a new folder in the **src** path, name it **Components**. It should contain a Functional Component named `Car.js`.

3. In the `Car.js` component render a header with the `carInfo` model, for example `This car is <model>`.

4. Import the `Car.js` component to the `App.js`.

**Part II : useState Hook**

1. Use the `state` hook in the `Car` component to add a `color` variable to the `state`.

2. Return the color property, for example `This car is <color> <model>`.

**Part III : Garage**

1. Create another Functional Component inside your `Components` folder, called `Garage.js`.

2. Use an attribute to pass a `size` to the `Garage` component, `<Garage size="small" />`.

3. Use the `Garage` component inside the `Car` component and pass the size ‘small’. The `Garage` component should render `Who lives in my <size> Garage?`

---

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

### **Exercise 3 : Phone and components**

**Instructions**

**Part I : Phone**

1. Create a new Functional Component named `Phone`. Use the `state` hook to create the following state variables:
  
  ```javascript
brand: "Samsung"
model: "Galaxy S20"
color: "black"
year: 2020
```

2. In the `return` of the `Phone` component, display the values of the state variables.

3. Import the `Phone` component and display it in your `App.js`.
  
  **Expected output:**
  
  ![ninja8](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day2/Exercises%20XP%20Ninja/ninja8.png)

**Part II : Change the Phone**

1. In the `Phone` component create a function named `changeColor` that updates the state variable to ‘blue’

2. In the `return`, add a button with an `onClick` event that will call the `changeColor` function to change the `color` state variable.
  
  **Expected output: (when you click the button)**
  
  ![ninja9](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day2/Exercises%20XP%20Ninja/ninja9.png)

---

### **Exercise 4 : useEffect hook**

**Instructions**

1. Create a new Functional Component named `Color`, with a state variable `favoriteColor` which value is “red”.

2. Output the value in a header tag.
  
  **Expected output:**
  
  ![red](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%209/Day1/Exercises%20XP/red.png)

3. **Note** : The `useEffect()` hook is called after the component is rendered.
In the `useEffect()`, alert “useEffect reached”
  
  **Expected output:**
  
  ![yellow](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%209/Day1/Exercises%20XP/yellow.png)

4. **Note**: The `return` is called when a component gets updated. It re-renders the DOM, with the new changes.
Create a button that when clicked on, calls a function that changes the value of the `favoriteColor` property to “blue”.
  
  **Expected output :**
  
  ![blue](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%209/Day1/Exercises%20XP/blue.png)

## Working solution

[Working solution](solutions.md) — runnable code, explanation, and verification steps.
