# Error boundaries vs. try...catch

Course source: [Geeks Institute](https://www.geeks.institute/).
Whenever we are making an application, be it using React or any other framework, it is imperative to deal with errors. Otherwise, the application could crash or perform unexpectedly. React allows you to deal with errors to make an application fluid. Below, we will discuss the two techniques of error handling:

---

### **Error Boundaries**

Error boundaries are React components capable of catching JavaScript errors anywhere in **their child component tree**. They log those errors and display a fallback UI instead of the component tree that crashed.

Error boundaries capture errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

Before employing error boundaries, it is important that we realize where we can not use error boundaries:

1. Event handlers

2. Asynchronous code (e.g., `setTimeout` or `requestAnimationFrame` callbacks)

3. Server side rendering

4. Errors thrown in the error boundary itself rather than in its children

A class component becomes an error boundary if it defines either (or both) of the lifecycle methods, i.e., `static getDerivedStateFromError()` or `componentDidCatch()`.

- `static getDerivedStateFromError()` is used to render a fallback UI after an error has been thrown.

- `componentDidCatch()` is used to log error information. Let’s look at how the above-mentioned methods can be used.

```javascript
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

In the code snippet above, we have a class named `ErrorBoundary` that has the state attribute, `this.state`.

When `render()` is called and there is an error thrown, `static getDerivedStateFromError()` catches this error and makes the attribute `this.state` true. This attribute can then be used to trigger fallback UI.

Moreover, `componentDidCatch()` catches this error and logs the exact error.

***NOTE***: Error boundaries only catch errors in the components below them in the tree.

---

### **Error boundaries vs. try…catch?**

Try…catch is used in specific code blocks where you program the functionality of the application.

Try…catch deals with imperative code while error boundaries deal with declarative code. Imperative programming is how you do something and declarative programming is what you do.

With error boundary, if there is an error, you can trigger a fallback UI; whereas, with try…catch, you can catch errors in your code.

For example, if your method `showButton()` throws an error, you can deal with it accordingly in the catch() block:

`` try { showButton(); } catch (error) { // ... }`
