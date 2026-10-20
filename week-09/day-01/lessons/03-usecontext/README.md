# useContext

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Comprehensive Guide to State Management with React **`useContext`

React, one of the most popular JavaScript libraries for building user interfaces, provides several tools for managing state within your applications. Among these tools, the `useContext` hook stands out as an elegant solution for handling global state. In this comprehensive guide, we will explore the ins and outs of using `useContext` for state management in React. We’ll provide numerous examples and exercises to help you master this powerful technique.

---

### **Understanding State in React**

Before we delve into the specifics of `useContext`, it’s crucial to establish a clear understanding of what state means in the context of React. In React, state represents any data that your application needs to store and potentially display. This data could be user input, application settings, or any information that changes over time.

React provides built-in state management through the `useState` hook, which is ideal for managing local component state. However, when it comes to managing global state, you need a different approach.

---

### **The Role of React Context**

React Context is an advanced feature that simplifies the process of passing data through the component tree without manually passing props down the hierarchy. It’s especially useful for sharing global data, such as user authentication status, theme preferences, or any other information that multiple components need access to.

**Creating a Context**

To begin using React Context, you must first create a context. A context acts as a container for your shared state. You can create a context using the `React.createContext` function:

```javascript
// MyContext.js
import { createContext } from "react";

const MyContext = createContext();

export default MyContext;
```

In this example, we’ve created a context named `MyContext`.

**Providing the Context**

To make the context accessible to components in your application, you must wrap your component tree with a `Provider` component. This `Provider` component is responsible for passing the context’s value to all child components:

```javascript
// App.js
import React from "react";
import MyContext from "./MyContext";

function App() {
  const sharedState = {
    data: "This is shared data",
  };

  return (
    <MyContext.Provider value={sharedState}>
      {/* Your component tree goes here */}
    </MyContext.Provider>
  );
}

export default App;
```

In this example, we’ve provided a shared state object to the `MyContext.Provider`. Any component nested within this `Provider` can access this shared state.

---

### **Using **`useContext`

Now that you’ve set up your context, you can use the `useContext` hook in any component that needs access to the shared state.

**Importing the Context**

In the component where you want to access the shared state, begin by importing the context you created earlier:

```javascript
import React, { useContext } from "react";
import MyContext from "./MyContext";
```

**Accessing Shared State**

Inside your component, utilize the `useContext` hook to access the shared state. `useContext` takes the context object as its argument and returns the current context value:

```javascript
function MyComponent() {
  const sharedState = useContext(MyContext);

  return (
    <div>
      <p>{sharedState.data}</p>
    </div>
  );
}
```

In this example, the `sharedState` variable contains the data provided in the `MyContext.Provider` component in the `App` component.

**Rendering Components**

To make use of the component where you’ve applied `useContext`, ensure that you render it within your component tree:

```javascript
function App() {
  // ...

  return (
    <MyContext.Provider value={sharedState}>
      <MyComponent />
      {/* Other components */}
    </MyContext.Provider>
  );
}
```

By rendering `MyComponent` within the `MyContext.Provider`, it gains access to and can utilize the shared state.

---

### **Advanced State Management with **`useContext`

Having covered the basics of using `useContext`, let’s explore advanced state management techniques to enhance your mastery of this concept.

**Nested Contexts**

You can nest contexts within each other to gain more granular control over your application’s state. For instance, you might have a global app context and a more specific user context for user-related data:

```javascript
// UserContext.js
import { createContext } from "react";

const UserContext = createContext();

export default UserContext;
```

```javascript
// App.js
import React from "react";
import UserContext from "./UserContext";

function App() {
  const userState = {
    name: "John Doe",
    email: "john@example.com",
  };

  return (
    <UserContext.Provider value={userState}>
      {/* Your component tree goes here */}
    </UserContext.Provider>
  );
}

export default App;
```

In this example, we’ve created a nested `UserContext` within the primary `App` context. Components can now access both contexts separately.

**Dynamic Context Values**

Context values don’t have to be static; they can change over time. To achieve dynamic context values, combine state and context:

```javascript
import React, { createContext, useContext, useState } from "react";

const DynamicContext = createContext();

function DynamicContextProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <DynamicContext.Provider value={{ count, increment }}>
      {children}
    </DynamicContext.Provider>
  );
}

export { DynamicContext, DynamicContextProvider };
```

In this example, we’ve created a context called `DynamicContext` with a provider that manages a dynamic `count` value. Components can access this value and the `increment` function.

**Context with Reducers**

When your state logic becomes more complex, you can combine context with reducers. A reducer is a pure function

that takes the current state and an action and returns a new state:

```javascript
import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  count: 0,
};

const ActionTypes = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

function reducer(state, action) {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { count: state.count + 1 };
    case ActionTypes.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const ReducerContext = createContext();

function ReducerContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
      {children}
    </ReducerContext.Provider>
  );
}

export { ReducerContext, ReducerContextProvider, ActionTypes };
```

In this example, we’ve created a context with a reducer to manage a count value. Components can access the state and dispatch actions to modify it.

---

### **Exercises**

Now that you’ve learned about React `useContext` and state management, let’s reinforce your understanding with some exercises.

**Exercise 1: Create a Counter**

1. Set up a new React application.

2. Create a context for managing a counter.

3. Implement a counter component that uses the context to display the current count and buttons to increment and decrement the count.

```javascript
function Counter() {
  // Use useContext and the counter context
  // Display the current count and buttons to increment and decrement it
  return (
    // Your JSX code here
  );
}
```

---

**Exercise 2: Implement a Theme Switcher**

1. Create a context for managing the theme (light/dark mode) of your application.

2. Implement a theme switcher component that toggles between light and dark themes when clicked.

```javascript
function ThemeSwitcher() {
  // Use useContext and the theme context
  // Implement a button that toggles between light and dark themes
  return (
    // Your JSX code here
  );
}
```

---

**Exercise 3: User Authentication**

1. Create a context for managing user authentication status.

2. Simulate user authentication by providing a `user` object (with properties like `name` and `email`) when the user is authenticated or `null` when they are not.

3. Create a component that displays a welcome message when the user is authenticated and a login button when they are not.

```javascript
function AuthStatus() {
  // Use useContext and the authentication context
  // Display a welcome message if the user is authenticated
  // Otherwise, display a login button
  return (
    // Your JSX code here
  );
}
```

---

### **Best Practices and Considerations**

As you delve deeper into state management with `useContext`, keep these best practices and considerations in mind.

**When to Use **`useContext`

`useContext` is an excellent choice for managing global state when:

- Multiple components need access to the same state.

- You want to avoid prop drilling (passing props through several components).

- The state doesn’t change frequently or is not highly complex.

However, for more complex state management needs or when performance optimization is crucial, consider using libraries like Redux or combining `useContext` with `useReducer` for better structure and control.

**Performance Considerations**

While `useContext` is efficient, excessive re-renders can be a concern if you have a deeply nested component tree with many contexts. To mitigate this, use the `React.memo` higher-order component to prevent unnecessary re-renders of components that consume context values.

**Testing with **`useContext`

When writing tests for components that use `useContext`, consider using libraries like `react-testing-library` or `enzyme` to mock context providers and values. This allows you to test components in isolation without the need for a full context setup.

---

### **Conclusion**

React `useContext` is a powerful tool for managing state in your applications, both at the local and global levels. By creating contexts and utilizing the `useContext` hook, you can easily share and access data across different parts of your component tree without the need for extensive prop passing.

In this guide, you’ve learned the fundamentals of using `useContext` for state management, including how to create and provide contexts, as well as how to consume them in your components. You’ve also explored advanced techniques such as nested contexts, dynamic context values, and using reducers with context.

With the knowledge and exercises provided here, you are well-equipped to master state management in React using `useContext`. Remember to apply these concepts to real-world projects and continue exploring the rich ecosystem of React libraries and tools to enhance your state management capabilities.
