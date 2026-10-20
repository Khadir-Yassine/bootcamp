# How to manage state in React

Course source: [Geeks Institute](https://www.geeks.institute/).
Every React component has a built-in **state**. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components.

The built-in way that React provides for setting component states is by using `setState()` and adding “local state” to a class. There are several other ways to manage state​s in React, including the use of:

- Hooks

- React Context API

- Apollo Link State

We will, however, focus on the use of the setState() method.

---

### **Using **`setState()`

The built-in `setState()` method updates a variable’s value in the classes’ local store. This local store allows the updated variable values to be accessed by any function that may require these values.

`setState()` tells React that this component and its children (sometimes delayed and grouped into a single batch) should be re-rendered with the most updated state; this re-render is often based on user-triggered events.

---

### **Sample React App using **`setState()`

Have a look at the updated React app given below:

- Line 5-7: Maintains a local state with useful variables.

- Line 11-13: Every time the `stateChange` method is invoked, it extracts `value` from the passed target argument and uses the `setState()` method to update local values.

Warning: You should never update the state directly (i.e., `this.state.var = updatedVar`). Although this does work, it does not cause components to re-render nor does it cause the values to be updated across all components.

The `Greeting` class uses the values of variables from the local state instead of using them directly from local variables. This allows other components to also use these values and automatically update them when any value is updated.

index.js

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';

ReactDOM.render(<Greeting />, document.getElementById('root'));
```

Greeting.js

```javascript
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Greeting extends Component {
  state = {
    fullname: '',
  }

  stateChange = (f) => {
    const {name, value} = f.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="text-center">
        <label htmlFor="fullname"> Full Name: </label>
        <input type="text" name="fullname" onChange={this.stateChange} />
        <div className="border border-primary py-3">
            <h4> Greetings, {this.state.fullname}!</h4>
        </div>
      </div>
    );
  }
}

export default Greeting;
```
