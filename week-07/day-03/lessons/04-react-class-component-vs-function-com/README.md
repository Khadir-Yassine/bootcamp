# React class component vs. function com

Course source: [Geeks Institute](https://www.geeks.institute/).
There are two types of components in React:

- Class components

- Function components

Writing class components used to be the typical way to create components in React. However, after introducing React hooks in React 16.8, function components have replaced class components as the standard.

In this article, we will see how these two types of components differ.

### **Differences**

Here’s an example of the class component `Welcome`:

```javascript
class Welcome extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: "World!"
    }
  }

  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

A class component

The same class component rewritten as a function component:

```javascript
function Welcome(props) {

  const [name, setName] = React.useState("World!");

  return <h1>Hello, {name}</h1>;
}
```

A function component

---

### **Syntax**

Let’s start with the syntax.

Class components use the ES6 class syntax. Each component inherits from the `React.Component` class and has a `render` method that returns the React element. You can define a constructor to access the `props`.

Function components, on the other hand, are simple JavaScript functions that accept a `props` object and return a React element.

Both components, from React’s point of view, are equivalent. However, as you can see, function components allow you to create the same component with considerably less code.

---

### **State and lifecycle methods**

Before React 16.8, function components were stateless. However, with React 16.8, you can use the `useState` and `setState` hooks to have stateful function components (just like class components).

Similarly, with lifecycle methods, you can use the `useEffect` hook with function components to achieve the same effect as you would with lifecycle methods (like `componentDidMount()` in class components).
