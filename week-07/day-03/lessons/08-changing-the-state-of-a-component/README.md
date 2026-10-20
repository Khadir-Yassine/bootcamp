# Changing the state of a component

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn:**

- Change the value of the state attributes

---

## **Useful Resources:**

- [Must see Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

---

### **Changing the state of a component**

React provides its own method `setState()`.

`setState()` method takes a single parameter and expects an object which should contain the set of values to be updated.

Once the update is done the method implicitly calls the `render()` method to repaint the page.

*Syntax*:

```javascript
this.setState({attribute: "new-value"});
```

---

Example:

When a value in the state object changes, the component will re-render, meaning that the output will change according to the new value(s).

Add a button with an `onClick` event that will change the color property:

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

  //we change the value of the attribute
  changeColor = () => {
    this.setState({color: "blue"});
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

         {/* button calls the changeColor method */}
        <button
          type="button"
          onClick={this.changeColor}
        > Change color</button>

      </div>
    );
  }
}
```

---

**Example**

Change randomly the color of the car, and update the background color:

`src/App.js`

```javascript
import Car from './Car';

const App = () => {

  const carColors = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown"
  ]

  return (
    <div className="box">
      <h1>In the App.js</h1>
      <Car colors={carColors} />
    </div>
  )
}

export default App;
```

`src/Car.js`

```javascript
import React from 'react';

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            carColor: "red",
            year: 1964,
        };
    }

    //we change the value of the attribute
    changeColor = () => {
        let { colors } = this.props
        //get random color
        let randomColor = colors[Math.floor(Math.random() * colors.length)]
        this.setState({ carColor: randomColor });
    }

    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p style={{ backgroundColor: this.state.carColor }}>
                    It is a {this.state.carColor} {this.state.model} from {this.state.year}.
                </p>

                {/* button calls the changeColor method */}
                <button
                    type="button"
                    onClick={this.changeColor}> 
                    Change color
                 </button>
            </div>
        );
    }
}
```

---

**Exercise**

- Use the Actor component from the React State lesson

- In the Actor component, add a form with the inputs : firstName, lastName, image (a url) and a submit button

- Retrieve the data from the form, as soon as the "Submit" button is clicked.

- Change the value of the state attributes, depending on the data fetched

## Working solution

[Working solution](solutions.md) — runnable code, explanation, and verification steps.
