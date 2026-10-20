# React State

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn:**

- React State

---

### **Constructor function in a React Class Component**

The `constructor()` function in your component will be called when the component gets initiated.

The constructor function is also where you honor the inheritance of the parent component by including the `super()` statement, which executes the parent component’s constructor function, and your component has access to all the functions of the parent component (`React.Component`).

---

### **React State**

**What is the state of a component ?**

**React Props** are used to pass information down the component tree.

**React state** is used to make applications interactive. We’ll be able to change the application’s appearance by interacting with it.

---

**State and Constructor function :**

The constructor function is where you initiate the component’s properties.

In React, component properties should be kept in an object called `state`.

Our state is a JavaScript object containing data that can be binded to the output of the render function. Whenever a state property is updated, React re-renders the component accordingly.

---

Example
Create a `constructor()` function in the `Car` component, and add a **color** property:

**According to the React Documentation:**

- Note how we pass `props` to the base constructor. Class components should always call the base constructor with `props`.

```javascript
import React from 'react';

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: "red"};
  }
  render() {
    return <h2>I am a Car!</h2>;
  }
}
```

---

Use the color property in the `render()` function:

Example

```javascript
import React from 'react';

class Car extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>I am a {this.state.color} Car!</h2>;
  }
}
```

---

The `state` object can contain as many properties as you like:

Example:

```javascript
import React from 'react';

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
    }
    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color} 
                    {this.state.model} 
                    from {this.state.year}.
                </p>
            </div>
        )
    }
}
```

![Constructor React Diagram](https://github.com/devtlv/studentsGitHub/blob/master/JS/Week%208/Day2/Lesson/class%20component.png?raw=true)

---

**Exercise**

- Use the Actor component from yesterday

- Add three attributes in the Component State : firstName, lastName and image (a url).

- In the Actor Component render the state attributes

- Call the Actor component in the App Component

## Working solution

[Working solution](solutions.md) — runnable code, explanation, and verification steps.
