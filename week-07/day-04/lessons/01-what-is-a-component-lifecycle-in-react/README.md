# What is a component lifecycle in React

Course source: [Geeks Institute](https://www.geeks.institute/).
Each component in React has a lifecycle with three phases:

- **Mounting**: The creation and insertion of the component into the DOM.

- **Updating**: Update to the component caused by changes to its props or state.

- **Unmounting**: The removal of the component from the DOM.

There’s another phase called error handling. A component enters this phase upon encountering an error.

---

### **Lifecycle methods**

React exposes lifecycle methods that are called at different stages of the three phases.

In the list below, commonly used lifecycle methods are marked with **( <-- ) **. The rest of them exist for relatively rare use cases.

---

**Mounting**

These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

- `constructor()`

- `static getDerivedStateFromProps()`

- `render()` <--

- `componentDidMount()` <--

**Updating**

An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:

- `static getDerivedStateFromProps()`

- `shouldComponentUpdate()`

- `render()` <--

- `getSnapshotBeforeUpdate()`

- `componentDidUpdate()` <--

**Unmounting**

This method is called when a component is being removed from the DOM:

`componentWillUnmount()` <--

**Error Handling**

These methods are called when there is an error occurs during rendering, in a lifecycle method, or in any child component’s constructor.

- `static getDerivedStateFromError()`

- `componentDidCatch()`
