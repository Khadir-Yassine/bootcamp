# What is setState in React?

Course source: [Geeks Institute](https://www.geeks.institute/).
In React, each component can have a state. The **state** could be anything: whether or not the user is logged in, what color to display for a button, etc.

The UI is rendered based on the state. When the state changes, so does the UI.

`setState()` allows you to change state in a React class component.

To change the state of a function component, you use the `useState()` hook.

`setState()` enqueues change to the component state and tell React that this component and its children need to be re-rendered with the updated state. This is the primary method you should use to update the UI.

Note: `setState()` does not always update the component immediately; instead, it may defer the update until later for better performance.

---

### **Syntax**

`setState(updater, [callback])`

- `updater` : A function with the signature: `(state, props) => stateChange`.
state is the current, up-to-date component state, and the function returns the updated state.

- `callback` : An optional callback function that is guaranteed to run after the state has been updated.

```javascript
this.setState((state, props) => {
  return {count: state.count + props.step};
});
```

Alternatively, you can pass an object instead of an `updater` function: `setState(stateChange[, callback])`

```javascript
this.setState({count: 2})
```

However, in this case, you won’t have access to the up-to-date current state.

---

### **Example**

Let’s make the React class component `Counter` with a state called `count`. The component renders two buttons. One button increments the `count` state based on the `step` values passed in its `props`, and the other button resets the value of `count` back to 0.

index.js

```javascript
import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  // Increments count based on props.step
  incrementCount = () => {
    this.setState((state, props) => {
      return { count: state.count + props.step };
    });
  };

  // Resets count back to 0
  resetCount = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <p>The count is {this.state.count}.</p>
        <button onClick={this.incrementCount}>+ {this.props.step}</button>
        <button onClick={this.resetCount}>Reset count</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter step={1} />, document.getElementById("root"));
```
