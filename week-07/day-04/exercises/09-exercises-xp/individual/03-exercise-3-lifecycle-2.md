# Exercise 3 : Lifecycle #2

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

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
