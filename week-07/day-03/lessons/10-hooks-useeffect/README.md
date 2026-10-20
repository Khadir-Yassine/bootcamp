# Hooks & useEffect

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn**

- Hooks

- useEffect

---

### **Using Classes**

In React class components, the `render` method itself shouldn’t cause side effects. It would be too early — we typically want to perform our effects *after* React has updated the DOM.

This is why in React classes, we put side effects into `componentDidMount` and `componentDidUpdate`.

Look at our project. We want to fetch the **api.sunrise-sunset** before and after a button was clicked (ie. before and after the `state` has changed)

---

**Here is the code:**

**src/App.js**

```javascript
import Sunrise from './Sunrise';

const App = () => {

  return (
    <div>
      <Sunrise />
    </div>
  )
}

export default App;
```

**src/Sunrise.js**

```javascript
import React from 'react';

class Sunrise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "London",
            lat: 51.5074,
            lng: 0.1278,
        };
    }

    changeCity = (event) => {
        let cityName = event.target.name
        if (cityName == "new york") {
            this.setState({ city: "New York", lat: 40.730610, lng: -73.935242 });
        } else if (cityName == "paris") {
            this.setState({ city: "Paris", lat: 48.864716, lng: 2.349014 });
        }
    }

    componentDidMount() {

        fetch("https://api.sunrise-sunset.org/json?lat=" + this.state.lat + "&lng=" + this.state.lng)
            .then((resp) => resp.json()) //return a promise
            .then((resp) =>
                this.setState({ hourSunrise: resp.results.sunrise }) //add a new attribute to the state
            )
            .catch(function (error) {
                console.log(`We got the error ${error}`)
            });

    }

    componentDidUpdate(prevState, prevProps) {

        if (this.state.city !== prevProps.city) { //required, or the componentDidUpdate will run indefinitely

            fetch("https://api.sunrise-sunset.org/json?lat=" + this.state.lat + "&lng=" + this.state.lng)
                .then((resp) => resp.json()) //return a promise
                .then((resp) =>
                    this.setState({ hourSunrise: resp.results.sunrise })
                )
                .catch(function (error) {
                    console.log(`We got the error ${error}`)
                });

        }
    }

    render() {
        return (
            <div>
                <p>
                    The hour of the sunrise in {this.state.city} is {this.state.hourSunrise}
                </p>
                <button
                    type="button"
                    name="new york"
                    onClick={this.changeCity}
                > Get the hour of the sunrise in New York</button>
                <button
                    type="button"
                    name="paris"
                    onClick={this.changeCity}
                > Get the hour of the sunrise in Paris</button>
            </div>
        );
    }
}

export default Sunrise;
```

---

**Problem:**

In many cases we want to perform the same side effect regardless of whether the component just mounted, or if it has been updated. Conceptually, we want it to happen after every render — but React class components don’t have a method like this.

**We could extract a separate method but we would still have to call it in two places.**

This is what we have in the code above, the method `componentDidMount` and `componentDidUpdate` have exactly the same code.

---

### **UseEffect**

You’ve likely performed data fetching, subscriptions, or manually changing the DOM from React components before. We call these operations “side effects” (or “effects” for short) because they can affect other components and can’t be done during rendering.

⚠️The Effect Hook, `useEffect`, adds the ability to perform side effects from a function component. It serves the same purpose as

- `componentDidMount`

- `componentDidUpdate`,

- and `componentWillUnmount` in React classes,

BUT **unified into a single API**.

The primary *syntax* of the `useEffect()` hook looks like this.

```javascript
useEffect(() => {
    // Make HTTP call or other code
});
```

---

**What does useEffect do?**

By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed, and call it later after performing the DOM updates.

---

**Why is useEffect called inside a component?**

Placing `useEffect` inside the component lets us access the state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.

---

**Does useEffect run after every render?**

Yes! By default, **it runs both after the first render *and* after every update**.

Instead of thinking in terms of “mounting” and “updating”, you might find it easier to think that effects happen “after render”. React guarantees the DOM has been updated by the time it runs the effects.

**Note**:

Unlike `componentDidMount` or `componentDidUpdate`, effects scheduled with `useEffect` don’t block the browser from updating the screen. This makes your app feel more responsive.

---

### **UseEffect Syntax**

`useEffect()` hook accepts 2 arguments:

```javascript
useEffect(callback[, dependencies]);
```

- `callback` is the callback function containing side-effect logic. `useEffect()` executes the callback function after React has committed the changes to the screen.

- `dependencies` is an optional array of dependencies. `useEffect()` executes `callback` only if the dependencies have changed between renderings.

Put your side-effect logic into the `callback` function, then use the `dependencies` argument to control when you want the side-effect to run. That’s the sole purpose of `useEffect()`.

---

**The dependencies of useEffect()**

`dependencies` argument of `useEffect(callback, dependencies)` lets you control when the side-effect runs. When dependencies are:

**1) Not provided: the side-effect runs after every rendering.**

```javascript
import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Runs after EVERY rendering
  });}
```

---

**2) An empty array []: the side-effect runs once after the initial rendering.**

```javascript
import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Runs ONCE after initial rendering
  }, []);}
```

---

**3) Has props or state values [prop1, prop2, …, state1, state2]: the side-effect runs only when any dependency value changes.**

```javascript
import { useEffect, useState } from 'react';

function MyComponent({ prop }) {
  const [state, setState] = useState('');
  useEffect(() => {
    // Runs ONCE after initial rendering
    // and after every rendering ONLY IF `prop` or `state` changes
  }, [prop, state]);}
```

---

### **Use useState and useEffect**

**New Code:**

**Note**: The **App.js** file stays the same

**src/Sunrise.js**

1. We import `useState`and `useEffect`

2. We use `useState`to state the attribute of the state and to change them if necessary (see lesson on `useState`)

3. We use `useEffect` without dependencies, therefore it will run after EVERY rendering

**Note**: We added below some new lines of code to make the result more user friendly. You will recognize those lines with the comment `//**`

```javascript
//1.
import React, { useState, useEffect } from 'react';

const Sunrise = () => {
    //2.
    const [city, setCity] = useState("London");
    const [lat, setLat] = useState(51.5074);
    const [lng, setLng] = useState(0.1278);
    const [hourSunrise, setHourSunrise] = useState("");

    const changeCity = (event) => {
        let cityName = event.target.name
        if (cityName == "new york") {
            //2.
            setCity("New York");
            setLat(40.730610);
            setLng(-73.935242);
        } else if (cityName == "paris") {
            //2.
            setCity("Paris");
            setLat(48.864716);
            setLng(2.349014);
        }
    }

    //3. 
    useEffect(() => {
        let paragraph = document.getElementsByClassName("description")[0]

        fetch("https://api.sunrise-sunset.org/json?lat=" + lat + "&lng=" + lng)
            .then((resp) => resp.json())
            .then(function (resp) {
                setHourSunrise(resp.results.sunrise)
                //**
                return resp.results.sunrise
            })
            .then(function (result) {
                //**
                if (hourSunrise == result) {
                    //change the text content of the paragraph
                    //**
                    paragraph.textContent = `The hour of the sunrise in ${city} is ${hourSunrise}`
                }
            })
            .catch(function (error) {
                console.log(`We got the error ${error}`)
            })

    });

    return (
        <div>
            <div>
                <!-- //** -->
                <p className="description"></p>
                <button
                    type="button"
                    name="new york"
                    onClick={changeCity}
                > Get the hour of the sunrise in New York</button>
                <button
                    type="button"
                    name="paris"
                    onClick={changeCity}
                > Get the hour of the sunrise in Paris</button>
            </div>
        </div>
    )

}

export default Sunrise;
```
