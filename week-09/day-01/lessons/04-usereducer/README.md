# useReducer

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Mastering State Management in React with **`useReducer`

State management is a critical aspect of building robust and maintainable applications in React. While the `useState` hook is a great choice for managing individual state variables, React offers a more powerful tool called `useReducer` for handling complex state logic and actions. In this comprehensive guide, we will explore how to utilize `useReducer` for state management in React, complete with examples and exercises to reinforce your understanding.

---

### **Understanding State in React**

Before we dive into `useReducer`, let’s revisit the concept of state in React. State represents data that can change over time and affects the rendering of your components. It can be as simple as a boolean flag or as complex as an array of objects fetched from an API.

In React, we often use the `useState` hook to manage component-level state. While `useState` is suitable for simple cases, more complex state management requires a different approach. This is where `useReducer` comes into play.

---

### **The Role of **`useReducer`

`useReducer` is a React hook that offers a way to manage complex state logic in a more organized and predictable manner. It is especially useful when your application state involves multiple variables that depend on each other or when you need to handle a variety of actions that can modify the state.

**Creating a Reducer**

At the heart of `useReducer` is the concept of a reducer function. A reducer is a pure function that takes the current state and an action and returns a new state. Here’s how you create a reducer:

```javascript
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
```

In this example, the `reducer` function handles two actions: `INCREMENT` and `DECREMENT`, which modify the `count` property of the state.

**Dispatching Actions**

To use a reducer, you need to dispatch actions to it. An action is an object that describes what should happen. Typically, an action has a `type` property that specifies the action type and an optional `payload` property that carries additional data.

```javascript
const incrementAction = { type: "INCREMENT" };
const decrementAction = { type: "DECREMENT" };

// Dispatch actions to the reducer
const newState = reducer(currentState, incrementAction);
```

Here, `incrementAction` and `decrementAction` are dispatched to the `reducer`, which updates the state accordingly.

---

### **Using **`useReducer` for State Management

Now that you understand the basics of `useReducer`, let’s explore how it can be used for state management in React.

**Simple State Management**

`useReducer` is an excellent choice when you have a state that depends on one or more variables and requires complex updates. Let’s build a simple counter component using `useReducer`:

```javascript
import React, { useReducer } from "react";

// Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}
```

In this example, we create a `counterReducer` function to handle increment and decrement actions. The `useReducer` hook initializes the state with an initial count of 0. We then dispatch actions to modify the count, and the component re-renders accordingly.

**Complex State and Actions**

`useReducer` truly shines when managing complex state and actions. Let’s build a todo list component that handles multiple actions, including adding, deleting, and toggling todo items:

```javascript
import React, { useReducer } from "react";

// Reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const handleAddTodo = (text) => {
    dispatch({ type: "ADD_TODO", payload: text });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a new todo"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTodo(e.target.value);
            e.target.value = "";
          }
        }}
      />
    </div>
  );
}
```

In this example, the `todoReducer` handles three actions: `ADD_TODO`, `DELETE_TODO`, and `TOGGLE_TODO`. We use `useReducer` to manage the todo list state and dispatch actions to modify it.

---

### **Advanced Techniques**

`useReducer` can be used in more advanced scenarios to solve complex problems and enhance your components’ capabilities.

**Using Context with **`useReducer`

`useReducer` can be combined with the Context API to share state and dispatch functions across components without prop drilling. This is especially useful for large-scale applications where state needs to be accessible by deeply nested components.

```javascript
import React, { createContext, useContext, useReducer } from "react";

// Create a context for the todo state and dispatch
const TodoContext = createContext();

// Reducer function
function todoReducer(state, action) {
  // ... (same reducer logic as before)
}

function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

function TodoList() {
  const { todos, dispatch } = useContext(TodoContext);

  // ... (same TodoList component as before)
}
```

In this example, we create a `TodoContext` and a `TodoProvider` component that wraps the application with the context provider. Components like `TodoList` can then access the todo state and dispatch function using `useContext`.

**Combining Multiple Reducers**

As your application grows, you may find it beneficial to split your state and logic into multiple reducers. The `useReducer` hook allows you to combine these reducers into a single state object.

```javascript
import React, { useReducer } from "react";

// Reducer functions
function counterReducer(state, action) {
  // ... (same counterReducer logic as before)
}

function todoReducer(state, action) {
  // ... (same todoReducer logic as before)
}

function rootReducer(state, action) {
  return {
    counter: counterReducer(state.counter, action),
    todos: todoReducer(state.todos, action),
  };
}

function App() {
  const [state, dispatch] = useReducer(rootReducer, {
    counter: { count: 0 },
    todos: [],
  });

  return (
    <div>
      <Counter state={state.counter} dispatch={dispatch} />
      <TodoList state={state.todos} dispatch={dispatch} />
    </div>
  );
}
```

In this example, we have separate `counterReducer` and `todoReducer` functions. The `rootReducer` combines them into a single state object. This approach makes it easier to manage complex state structures.

**Middleware for **`useReducer`

You can introduce middleware to enhance the capabilities of `useReducer`. Middleware intercepts actions before they reach the reducer, allowing you to perform additional logic, such as logging or async operations.

```javascript
function middlewareReducer(state, action) {
  // Perform middleware logic here
  console.log(`Action: ${action.type}`);
  return reducer(state, action);
}
```

In this example, `middlewareReducer` logs the action type before passing it to the actual reducer. Middleware can be a powerful tool for debugging and extending the behavior of your state management.

---

### **Exercises**

Let’s reinforce your understanding of `useReducer` with some exercises.

**Exercise 1: Build a Counter**

Create a simple counter component using `useReducer`. The counter should have increment and decrement buttons that modify the count.

```javascript
function Counter() {
  // Your code here
}
```

---

**Exercise 2: Implement a Todo List**

Build a todo list component using `useReducer`. The component should allow users to add new todos, mark todos as completed, and delete todos.

```javascript
function TodoList() {
  // Your code here
}
```

---

**Exercise 3: Create a Shopping Cart**

Develop a shopping cart component using `useReducer`. The cart should display a list of products, allow users to add items to the cart, and display the total price of items in the cart.

```javascript
function ShoppingCart() {
  // Your code here
}
```

---

### **Best Practices and Considerations**

While `useReducer` is a powerful tool for managing complex state, it’s important to use it judiciously and consider the specific requirements of your application.

**When to Use **`useReducer`

- **Complex State Logic:** Use `useReducer` when you have complex state logic that involves multiple variables or actions.

- **Shared State:** `useReducer` is suitable for managing shared state across multiple components.

- **Predictable Updates:** When you need precise control over state updates and actions, `useReducer` is a good choice.

**Testing **`useReducer` Logic

When testing components that use `useReducer`, you can test the reducer functions and the behavior of components based on different actions. Popular testing libraries like Jest and React Testing Library can be helpful in this regard.

---

### **Conclusion**

`useReducer` is a valuable tool in React’s state management arsenal. It empowers you to handle complex state logic, actions, and shared state with ease. By mastering `useReducer`, you can build more maintainable and scalable React applications.

In this guide, you’ve learned how to create reducers, dispatch actions, and use `useReducer` for both simple and complex state management. You’ve also explored advanced techniques, including combining reducers, using context, and implementing middleware.

As you continue to work on React projects, consider the specific needs of your application and choose the state management approach that best fits your requirements, whether it’s `useState`, `useReducer`, or a combination of both. State management is a crucial aspect of building robust and maintainable React applications, and `useReducer` is a powerful tool to have in your toolkit.
