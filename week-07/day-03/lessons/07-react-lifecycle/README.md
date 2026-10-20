# React Lifecycle

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn:**

- `componentDidMount()` method

---

## **Useful Resources**

- [React Documentation on React Lifecycle](https://reactjs.org/docs/react-component.html#componentdidmount)

---

### **componentDidMount() method**

This method is called after all the elements of the page are rendered correctly.

**According to the React Documentation:**

- `componentDidMount()` is invoked immediately after a component is **mounted** (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

- You **may call **`setState()` immediately in `componentDidMount()`. It will trigger an extra rendering, but it will happen before the browser updates the screen. This guarantees that even though the `render()` will be called twice in this case, the user won’t see the intermediate state. Use this pattern with caution because it often causes performance issues.

---

For example:

- we are going to fetch any data from an API

- then, the API call should be placed in the `componentDidMount()` method (ie. lifecycle method)

- then, we get the response and we can call the **setState()** method

- finally, we render the element with updated data.

`src/App.js`

```javascript
import Sunrise from './Sunrise';

const App = () => {

  return (
    <div className="box">
      <h1>In the App.js</h1>
      <Sunrise />
    </div>
  )
}

export default App;
```

`src/Sunrise.js`

```javascript
import React from 'react';

class Sunrise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country: "France",
            city: "Paris",
        };
    }

    componentDidMount() {
        fetch("https://api.sunrise-sunset.org/json?lat=32.0853&lng=34.7818")
            .then((resp) => resp.json()) //return a promise
            .then((resp) =>
                this.setState({ hourSunrise: resp.results.sunrise }) //add a new attribute to the state
            )
            .catch(function (error) {
                console.log(`We got the error ${error}`)
            });
    }

    render() {
        let { country, city, hourSunrise } = this.state
        return (
            <div>
                <h1>In {country}</h1>
                <p>
                    The hour of the sunrise in {city} is {hourSunrise}
                </p>
            </div>
        );
    }
}

export default Sunrise;
```

**Exercise**

- Looking at the example above, try to recreate it with another API

- Use an API that retrieves a list (Star Wars API, Robot API or else)

- Display the list using Javascript array methods
