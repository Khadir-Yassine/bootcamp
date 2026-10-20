# Exercise 1 : React Error Boundary Simulation

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

### **Exercise 1 : React Error Boundary Simulation**

**Review**

Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.
We will catch JavaScript errors anywhere in child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

**Check the demo **[**here**](http://di-react-error-boundary.surge.sh/)

---

**Instructions**

1. In the `App.js` file create a class component named `BuggyCounter`.

2. This component :
  
  - will hold a `counter` property in the state. The counter value starts at 0.
  - will render the counter. Every time the users clicks on it, the function `handleClick()` will be called, and add +1 to the counter property.

3. If the counter reaches 5, you will throw an error ‘I crashed!’

4. In another Javascript file, create the `ErrorBoundary` class component, it will hold an `error` property in the state. The error value is set to `null`.
  
  - Use the `componentDidCatch` lifecycle to set the value of the `error` property.
  - Render an error message with some details. (We will use this component to wrap the `BuggyCounter` component in our below simulations)

Use this below code to show the Error

```javascript
<details style={{ whiteSpace: 'pre-wrap' }}>
    {this.state.error && this.state.error.toString()}
    <br />
    {this.state.errorInfo.componentStack}
</details>
```

---

**Simulation 1:**

1. In our first simulation we will wrap up two `BuggyCounter` components with one `ErrorBoundary` component
*Note* : Because both of them are in the same error boundary. If one crashes, the error boundary will replace both of them.
  
  **Expected output:**

![1](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%209/Day3/Exercise%20XP/1.png)

---

**Simulation 2:**

1. In our second simulation we will have two `BuggyCounter` components, and each one of them will be wrapped up with one `ErrorBoundary` component
*Note* : This time, each `BuggyCounter` component is in its own error boundary. So if one crashes, the other is not affected
  
  **Expected output:**
  
  ![2](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%209/Day3/Exercise%20XP/2.png)

---

**Simulation 3:**

1. In our third simulation we have only one `BuggyCounter` component, and its not beeing wrapped up by `ErrorBoundary` component
*Note* : This time, because the `BuggyCounter` component is not wrapped up in an error boundary, when it crashes, all the other components will be deleted and a blank page with errors will be displayed.
  
  **Expected output:**
  
  ![3](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%209/Day3/Exercise%20XP/3.png)

---
