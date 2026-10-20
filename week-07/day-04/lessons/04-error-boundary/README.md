# Error Boundary

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn**

- Error Boundaries in React

- Conditional Rendering

---

## **Useful Resources**

- [Must See Tutorial Video](https://www.youtube.com/watch?v=DNYXgtZBRPE)

- [Another Tutorial Video](https://www.youtube.com/watch?v=gWlEUcUZ3kI)

---

**According to React Documentation:**

In the past, JavaScript errors inside components used to corrupt React’s internal state and cause it to [emit](https://github.com/facebook/react/issues/4026) [cryptic](https://github.com/facebook/react/issues/6895) [errors](https://github.com/facebook/react/issues/8579) on next renders. These errors were always caused by an earlier error in the application code, but React did not provide a way to handle them gracefully in components, and could not recover from them.

A JavaScript error in a part of the UI shouldn’t break the whole app. To solve this problem for React users, React 16 introduces a new concept of an “error boundary”.

Error boundaries are React components that **catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI** instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

---

### **Error Boundary**

It’s the usage of 2 methods that are available in React components.

Code from the Documentation:

```javascript
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
```

---

**What are these 2 lifecycle methods?**

- `static getDerivedStateFromError` is a lifecycle method that allows the Error Boundary a chance to update the state and thus triggering a last `render()`. In the above code snippet, the state is used to reveal a human-friendly error message instead of the broken component (eg.: `this.props.children`).

- `componentDidCatch` is a lifecycle method designed for triggering side-effects.

**So what is an Error Boundary?** Any React Component is considered an Error Boundary when it employs at least one of these lifecycle methods.

---

### **Use Error Boundary**

To catch errors in React, we create a new file called `ErrorBoundary.js`

**ErrorBoundary.js**

- The `componentDidCatch` method will change the state of the `error` and `errorInfo` attributes.

- If the attribute `hasError` is `true`, we return a special error message.

---

```javascript
import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: "", errorInfo: "" };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div>
                    <img src="link_image" />
                    <p>Something went wrong...</p><br></br>
                    <p><u>The error is</u> {this.state.error.toString()} </p><br></br>
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
```

---

**App.js**

We can use the `ErrorBoundary` Component as regular component.

We import the `ErrorBoundary` Component and we add it in the HTML where we want to include the error boundary. In this example, we are adding an error boundary around a `Car` component.

We pass the `listCars` to the `Car` component. We can see below, that two objects have the same **id**, which is an issue when rendering a list using the **key** attribute.

```javascript
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Car from './Car';

const listCars = [
  {
    id: 1,
    brand: "ford",
    name: "ford torino",
    year: "1970-01-01",
    origin: "USA"
  },
  {
    id: 2,
    brand: "ford",
    name: "ford galaxie 500",
    year: "1970-01-01",
    origin: "USA"
  },
  {
    id: 2,
    brand: "chevrolet",
    name: "chevrolet vega 2300",
    year: "1971-01-01",
    origin: "USA"
  },
]

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="box" >
        <ErrorBoundary>
          <Car listCars={listCars} />
        </ErrorBoundary>
      </div>
    )
  }
}

export default App;
```

---

**Car.js**

We will throw an error if duplicate ids exist in the `listCar`. It will trigger the `ErrorBoundary` Component.

```javascript
const Car = (props) => {
    let { listCars } = props;

    //checking for duplicates
    let valueArr = listCars.map(function (item) { return item.id });
    let isDuplicate = valueArr.some(function (item, idx) {
        return valueArr.indexOf(item) != idx
    });

    //conditional rendering
    if (isDuplicate) {
        throw new Error('Duplicate Keys');
    }
    //else
    return (
        <div>
            {
                listCars.map(item => (
                    <ul key={item.id}>
                        <li>Brand : {item.brand}</li>
                        <li>Name : {item.name}</li>
                        <li>Year of creation : {item.year}</li>
                        <li>Origin : {item.origin}</li>
                    </ul>
                ))
            }
        </div>
    )
}

export default Car;
```

---

Therefore, if the error occurs, the user will see this:

![error_userside](https://github.com/devtlv/studentsGitHub/blob/master/JS/Week%208/Day4/Lesson/err_userside.png?raw=true)

Instead of this:

![error_dvpside](https://github.com/devtlv/studentsGitHub/blob/master/JS/Week%208/Day4/Lesson/err_dvpside.png?raw=true)

---

**Exercise**

- Create a MathOperarion component with one method that does a division operation.

- This method takes two parameters, and will be called with an onClick Event.

- If you try to divide a number by zero throw an Error. It will trigger the ErrorBoundary Component
