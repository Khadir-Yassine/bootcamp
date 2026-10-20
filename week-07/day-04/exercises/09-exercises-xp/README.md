# Exercises XP

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What we will learn**

- React Lifecycle

- Event Handlers

- Error Boundary

---

*NOTE: You will use the same React App for all the Exercises XP*
***Create a React App and start your app***

---

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

### **Exercise 2 : Lifecycle**

---

**Review**

*React Lifecycle:*

Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. The three phases are: **Mounting**, **Updating**, and **Unmounting**.

Today we are going to work on the *Updating* phase:

The next phase in the lifecycle is when a component is updated. A component is updated whenever there is a change in the component’s `state` or `props`.

React has five built-in methods that gets called, in this order, when a component is updated:

1. `getDerivedStateFromProps()`

2. `shouldComponentUpdate()`: in this method you can return a `Boolean` value that specifies whether React should continue with the rendering or not. The default value is `true`.

3. `render()`

4. `getSnapshotBeforeUpdate()`: in this method you have access to the `props` and `state` before the update, meaning that even after the update, you can check what the values were before the update. If the `getSnapshotBeforeUpdate()` method is present, you should also include the `componentDidUpdate()` method, otherwise you will get an error.

5. `componentDidUpdate()`: this method is called after the component is updated in the DOM.

The `render()` method is required and will always be called, the others are optional and will be called if you define them.

---

**First** : Do the exercise xp 4 of yesterday using Class Components

---

**Part I : shouldComponentUpdate**

1. Use the `shouldComponentUpdate()` method and set it to return `true`.

2. If you set the return value of the `shouldComponentUpdate()` method to `false`, you won’t be able to change the value of the **favoriteColor** property to “blue”, (even after clicking on the button)
  
  **Expected output:**
  
  ![red](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%209/Day1/Exercises%20XP/red.png)

---

**Part II: componentDidUpdate**

1. When the component is mounting, it will be rendered with the favorite color “red”.
  
  **Expected output :**
  
  ![red](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%209/Day1/Exercises%20XP%20Gold/red.png)
  
  2. When the component has been mounted, a timer changes the state, and the color becomes “yellow”. You will see :
  
  ![yellow1](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%209/Day1/Exercises%20XP%20Gold/yellow1.png)
  
  3. In the `componentDidUpdate` method, add a `console.log("after update")`. Open the Dev Tools, to see when this message is displayed.

---

**Part III : getSnapshotBeforeUpdate**

1. Use the `getSnapshotBeforeUpdate()` method, add a `console.log("in getSnapshotBeforeUpdate")`. Open the Dev Tools, to see when this message is displayed.

---

### **Exercise 3 : Lifecycle #2**

**Instructions**

**Review**

*React Lifecycle:*

Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. The three phases are: **Mounting**, **Updating**, and **Unmounting**.

Today we are going to work on the *Unmounting* phase:

The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.

React has only one built-in method that gets called when a component is unmounted: `componentWillUnmount()`

The `componentWillUnmount` method is called when the component is about to be removed from the DOM.

---

Using the previous exercise (Exercise 2 : Lifecycle)

1. Add a new property named **show** to the state object. Set the value of this property to `true`.

2. Add a Class component named `Child` to the same file. This new component will render a ‘Hello World!’ message in a header tag.

3. This new component uses the `componentWillUnmount` method to alert an unmounted message.

4. Render the `Child` component in your `App`, only if the value of the **show** property is set to `true`.

5. Create a “Delete” button that when clicked on (ie. `onClick`) will call a function that updates the value of the **show** property to `false`.
  
  **Initial output:**
  
  ![initial](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%209/Day1/Exercises%20XP%20Gold/initial.png)
  
  **Expected output : On Button Click**
  
  ![click](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%209/Day1/Exercises%20XP%20Gold/click.png)
  
  **Expected output: Unmounted**
  
  ![unmounted](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%209/Day1/Exercises%20XP%20Gold/unmounted.png)

---

## **Submit your Exercises :**

Don’t forget to push to Github

---

## **More info**

| Duration (approx) |
| --- |
| 45 minutes |

---

One Last Thing: **Good luck!**

## Working solution

[Working solution](solutions.md) — runnable code, explanation, and verification steps.
