# Exercise XP GOLD

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What we will learn**

- Error Boundary

---

*NOTE: You will use the same React App for all the Exercises XP Gold*
***Create a React App and start your app***

---

### **Exercise 1 : Creating a React Modal Component with Error Handling**

**Objective:** In this exercise, you will create a React App that renders a button. When the button is clicked, it will display a modal with an error message. You will achieve this by creating a Modal class component and an ErrorBoundary class component within the React application. The Modal component displays a simple modal window with provided styles, and the ErrorBoundary component handles errors that may occur when the button is clicked.

**Check the demo **[**here**](http://di-react-modal-error-boundary.surge.sh/)

1. You will create a React App that renders a button
  
  ![button](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%209/Day3/Exercise%20XP%20Ninja/button.png)
  
  2. When the button is clicked it will display a modal with an error message. Like this:
  
  ![modal](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%209/Day3/Exercise%20XP%20Ninja/modal.png)

---

**Instructions**

1. Create a new JavaScript file called `Modal.js`.

2. Define a `Modal` class component that renders a modal with the following styles:
  
  - The modal should have a transparent background overlay with a darkened effect.
  - Center the modal on the screen both vertically and horizontally.
  - Use the provided CSS styles:
  
  ```javascript
  .modal-background {
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
  }
    .modal-body {
    padding: 10px;
    background: white;
    border: radius 5px; 
  }
```

3. Implement a button inside the modal to allow users to close it.

4. Create a new JavaScript file called `ErrorBoundary.js`

5. Create an `ErrorBoundary` class component. Set an initial state property named `hasError` to `false`.

6. Implement a method named `occurError` inside the `ErrorBoundary` component. This method should change the value of `hasError` to `true` when called.

7. Import the above components to `App.js`. You can hold the details of the error in a property in the state object named **errorInfo** set by default to `null`.
*Tip* : Remember to use the `componentDidCatch()` method

---

## **Submit your Exercises :**

Don’t forget to push to Github

---

## **More info**

| Duration (approx) |
| --- |
| 1 hour |

---

One Last Thing: **Good luck!**
