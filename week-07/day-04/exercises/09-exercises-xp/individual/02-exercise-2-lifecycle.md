# Exercise 2 : Lifecycle

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

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

[Working solution](../solutions.md) · [Source code](../../../../solutions/src/errors.jsx).
