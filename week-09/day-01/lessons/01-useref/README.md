# useRef

Course source: [Geeks Institute](https://www.geeks.institute/).
**Mastering State Management in React with **`useRef`

State management is a fundamental aspect of building robust and interactive applications in React. While `useState` and `useReducer` are the go-to hooks for managing state, React offers another powerful tool called `useRef`. In this comprehensive guide, we will explore how to utilize `useRef` for state management in React, complete with examples and exercises to deepen your understanding.

---

### **Understanding State in React**

Before we dive into `useRef`, it’s essential to grasp the concept of state in React. In React, state represents any data that needs to be stored and potentially displayed in your application. State can be as simple as a counter value or as complex as the data fetched from an API.

State management is crucial in React because it enables components to update and re-render based on changes in data. React provides hooks like `useState` and `useReducer` to manage state. However, these hooks are primarily designed for managing application data, while `useRef` serves a different purpose.

---

### **The Role of **`useRef`

`useRef` is a React hook that primarily deals with references to DOM elements and holds a special place in React’s toolbox. While it’s not intended for managing application state like `useState` or `useReducer`, it plays a significant role in enhancing the functionality and interactivity of your components.

**Creating a **`useRef` Reference

You can create a `useRef` reference using the `useRef` hook:

```javascript
import { useRef } from "react";

const myRef = useRef(initialValue);
```

Here, `initialValue` is an optional argument that can be used to initialize the `ref`. Typically, `useRef` is used without an initial value.

**Accessing DOM Elements**

One of the most common use cases for `useRef` is accessing and interacting with DOM elements in a React component. You can attach a `ref` to a JSX element, allowing you to access the underlying DOM node:

```javascript
import { useRef, useEffect } from "react";

function MyComponent() {
  const myRef = useRef();

  useEffect(() => {
    // Access the DOM node using myRef.current
    myRef.current.focus();
  }, []);

  return <input ref={myRef} />;
}
```

In this example, the `ref` is attached to an `input` element. Within the `useEffect`, we access the DOM node using `myRef.current` and call the `focus()` method to focus the input field when the component mounts.

---

### **Using **`useRef` for State Management

While `useRef` is not designed for managing application state, it can be cleverly used to address specific state-related challenges in React components.

**Managing Form Input State**

One common use case for `useRef` is managing form input state, especially when you want to access the current value of an input element without triggering re-renders. Unlike `useState`, changes to a `ref`‘s `current` property don’t cause component re-renders.

```javascript
import { useRef } from "react";

function InputWithState() {
  const inputRef = useRef();

  const handleButtonClick = () => {
    alert(`Input value: ${inputRef.current.value}`);
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleButtonClick}>Get Input Value</button>
    </>
  );
}
```

In this example, `inputRef` is used to access the current value of the input field without storing it in

the component’s state. When the button is clicked, the input’s value is displayed in an alert.

**Dealing with Side Effects**

React components often need to interact with external libraries or imperative APIs that don’t fit neatly into the declarative React model. This is where `useRef` can shine.

```javascript
import { useRef, useEffect } from "react";

function Timer() {
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      // Perform some action periodically
    }, 1000);

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(timerRef.current);
    };
  }, []);

  return <div>Timer is running...</div>;
}
```

In this example, `timerRef` is used to maintain a reference to the interval ID created by `setInterval`. The interval is cleared when the component unmounts, preventing memory leaks.

---

### **Advanced Techniques**

`useRef` can be used in more advanced scenarios to solve complex problems and enhance your components’ capabilities.

**Scroll Position Tracking**

Tracking scroll positions in React components can be challenging due to the nature of the DOM. `useRef` comes to the rescue by allowing you to persistently store and access scroll positions.

```javascript
import { useRef, useEffect } from "react";

function ScrollTracker() {
  const scrollPosition = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollPosition.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div>Current scroll position: {scrollPosition.current}px</div>;
}
```

In this example, `scrollPosition` is a `useRef` that stores the current scroll position. An event listener attached within `useEffect` updates the `scrollPosition` whenever the user scrolls.

**Caching Expensive Computations**

Some computations in React components can be computationally expensive and slow down your application. `useRef` can be used to cache the result of such computations so that they are only recalculated when necessary.

```javascript
import { useRef } from "react";

function ExpensiveComponent() {
  const result = useRef(null);

  if (!result.current) {
    // Perform an expensive computation and store the result in the ref
    result.current = performExpensiveComputation();
  }

  return <div>Result: {result.current}</div>;
}
```

In this example, the result of the expensive computation is stored in `result.current`. If `result.current` is falsy (indicating that the computation has not been performed), the computation is executed and the result is stored in the `ref`. On subsequent renders, the cached result is used.

**Managing Animations**

Animating elements in React can be challenging, especially when dealing with CSS transitions and animations. `useRef` can help maintain references to elements that need to be animated.

```javascript
import { useRef, useState } from "react";

function AnimatedElement() {
  const elementRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleButtonClick = () => {
    setIsAnimating(true);

    // Trigger CSS animation
    elementRef.current.classList.add("animate");

    // End the animation after a duration
    setTimeout(() => {
      setIsAnimating(false);
      elementRef.current.classList.remove("animate");
    }, 1000);
  };

  return (
    <>
      <div
        ref={elementRef}
        className={`element ${isAnimating ? "animate" : ""}`}
      />
      <button onClick={handleButtonClick}>Animate</button>
    </>
  );
}
```

In this example, `elementRef` is used to reference the `div` element that needs to be animated. When the “Animate” button is clicked, the `isAnimating` state is set to `true`, triggering a CSS animation by adding a class to the element. After the animation completes, `isAnimating` is set to `false`, and the animation class is removed.

---

### **Exercises**

Let’s reinforce your understanding of `useRef` with some exercises.

**Exercise 1: Implement a Character Counter**

Create a component that allows users to input text into a text area. Display a character count below the text area, and use `useRef` to keep track of the input value without re-rendering the component on every keystroke.

```javascript
function CharacterCounter() {
  // Your code here
}
```

---

**Exercise 2: Create a Smooth Scrolling Component**

Build a component that scrolls smoothly to a specific section of a page when a button is clicked. Use `useRef` to maintain references to the target elements and perform the smooth scrolling.

```javascript
function SmoothScroll() {
  // Your code here
}
```

---

**Exercise 3: Optimize Component Rendering**

Develop a component that fetches data from an API and displays it. Use `useRef` to cache the fetched data so that it is only retrieved again when the component is remounted.

```javascript
function DataFetcher() {
  // Your code here
}
```

---

### **Best Practices and Considerations**

While `useRef` is a powerful tool, it should be used judiciously and in the appropriate contexts. Here are some best practices and considerations when working with `useRef`.

**When to Use **`useRef`

- **Accessing DOM Elements:** Use `useRef` when you need to access and interact with DOM elements directly.

- **Caching Values:** Use `useRef` to cache values that don’t trigger re-renders but need to persist between renders.

- **Side Effects:** Employ `useRef` for managing side effects, such as timers and event listeners, especially when cleaning up is necessary.

**Avoiding Abuses**

- **State Management:** While `useRef` can store and access data, it is not intended for managing application state. For managing application state, use `useState` or `useReducer`.

- **Re-renders:** Be cautious when using `useRef` to store values that should trigger re-renders when changed. In most cases, using `useState` is more appropriate.

**Testing with **`useRef`

When testing components that use `useRef`, consider using testing libraries like React Testing Library or Enzyme. You can access the current value of a `useRef` by accessing its `current` property.

---

### **Conclusion**

`useRef` is a versatile and valuable hook in React’s arsenal. While its primary purpose is to interact with the DOM, it can be creatively employed to tackle various state management challenges and enhance the interactivity of your components. By mastering the art of `useRef`, you can optimize your React applications, improve performance, and build more responsive user interfaces.

In this guide, you’ve learned how to create `useRef` references, access DOM elements, and use `useRef` for state management in various scenarios. Additionally, you’ve tackled advanced techniques, including scroll tracking, caching, and animation management. Finally, you’ve put your knowledge to the test with exercises that reinforce your understanding of `useRef` in practical situations.

As you continue to explore React and build applications, remember to consider the specific requirements of your components and choose the appropriate tools, whether it’s `useState`, `useReducer`, or `use`
