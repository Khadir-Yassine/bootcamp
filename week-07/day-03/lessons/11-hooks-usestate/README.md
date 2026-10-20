# Hooks & useState

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn**

- Hooks

- `useState`

---

### **What is a Hook?**

*Hooks* are a new addition in React 16.8. They let you use state and other React features without writing a class

Hooks are functions that let you “hook into” React state and lifecycle features from function components.

⚠️ **Hooks don’t work inside classes — they let you use React without classes**. You can use Hooks instead of writing classes.

[**Documentation HERE**](https://reactjs.org/docs/hooks-intro.html)

**When would I use a Hook?**

If you write a function component and realize you need to add some state to it, previously you had to convert it to a class.

Now you can use a Hook inside the existing function component.

---

### **UseState**

There is a utility function called `useState` that we take from `React` for managing state. The `useState` function is called a **hook**.

We call it inside a function component to add some local state to it.

You will understand better with a demonstration. Let’s compare our previous code, with our new code.

---

**Previous code - using setState.**

**src/App.js**

```javascript
import Car from './Car';

const App = () => (
  <div>
    <h1>In the App.js</h1>
    <Car />
  </div>
);

export default App;
```

**src/Car.js**

```javascript
import React from 'react';

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "red",
        };
    }

    //we change the value of the attribute
    changeColor = () => {
        this.setState({ color: "blue" });
    }

    render() {
        return (
            <div>
                <h1>My car is {this.state.color}</h1>

                {/* button calls the changeColor method */}
                <button
                    type="button"
                    onClick={this.changeColor}
                > Change color</button>

            </div>
        );
    }
}

export default Car;
```

---

**New code - using useState.**

**Note**: the **App.js** file stays the same

**src/Car.js**

```javascript
import React, { useState } from 'react';

const Car = () => {
    // Declare a new state variable, which we'll call "color"
    const [color, setColor] = useState("red");

    const changeColor = () => {
        setColor("blue");
    }

    return (
        <div>
            <h1>My car is {color}</h1>
            <button
                type="button"
                onClick={changeColor}
            > Change color</button>

        </div>
    )
}

export default Car;
```

---

**Explanations**

---

**1) Start by importing the useState Hook from React:**

```javascript
import React, { useState } from 'react';
```

---

**2) Declaring a State Variable**

Previously

**src/Car.js**

```javascript
class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "red",
        };
    }
```

Now

**src/Car.js**

```javascript
import React, { useState } from 'react';

function Car() {
  // Declare a new state variable, which we'll call "color"
  const [color, setColor] = useState("red");
}
```

---

**Review on array destructuring**

Array destructuring is just a shorthand version of accessing each item one by one. If you express it without the array destructuring in React, it becomes less readable:

```javascript
// basic array definition
const list = ['a', 'b'];

// no array destructuring
let itemOne = list[0];
let itemTwo = list[1];

// array destructuring
let [itemOne, itemTwo] = list;
```

In the case of React, the React `useState` hook is a function which returns an array.

Example:

```javascript
function getAlphabet() {
  return ['a', 'b'];
}

// no array destructuring
let itemOne = getAlphabet()[0];
let itemTwo = getAlphabet()[1];

// array destructuring
const [itemOne, itemTwo] = getAlphabet();
```

---

**Understanding useState**

```javascript
const [color, setColor] = useState("red");
```

- **Argument passed to **`useState` : The only argument to the `useState()` Hook is the initial state (here “red”). Unlike with classes, the state doesn’t have to be an object.

- **What does **`useState` return?

It returns a pair of values:

- the current state : `color` - similar to `this.state.color`

- a function that updates it. `setColor` - similar to `this.setState`

If we console.log `color` and `setColor`, we get:

```javascript
color: Ford
setColor: ƒ dispatchAction(fiber, queue, action) {...}
```

- **Values returned by **`useState`

- `color`: The first value represents the *current state*;

- `setColor` : The second value is a *function to update this state*

---

**3) Reading State**

Previously

When we want to display the current color in a class, we read `this.state.color`

**src/Car.js**

```javascript
render() {
        return (
            <div>
                <h1>My car is {this.state.color}</h1>
            </div>
        );
    }
```

Now

**src/Car.js**

```javascript
return (
        <div>
            <h1>My car is {color}</h1>
        </div>
    )
```

---

**4) Updating State**

Previously

In a class, we need to call `this.setState()` to update the `color` state

```javascript
changeColor = () => {
        this.setState({ color: "blue" });
    }

    render() {
        return (
            <div>
                <h1>My car is {this.state.color}</h1>
                <button
                    type="button"
                    onClick={this.changeColor}
                > Change color</button>

            </div>
        );
    }
```

Now

In a function, we already have `setColor` and `color` as variables so we don’t need `this`

**src/Car.js**

```javascript
    const changeColor = () => {
        //here
        setColor("blue");
    }

    return (
        <div>
            <h1>My car is {color}</h1>
            <button
                type="button"
                onClick={changeColor}
            > Change color</button>

        </div>
    )
}
```

---

**5) Using Multiple State Variables**

Previously

**src/App.js**

```javascript
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
```

Now

**src/App.js**

```javascript
const Car = () => {
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [color, setColor] = useState("red");
    const [year, setYear] = useState(1964);
}
```
