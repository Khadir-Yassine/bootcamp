# React Components

Course source: [Geeks Institute](https://www.geeks.institute/).
## What is a Component?

A **component** is a reusable piece of the user interface.

Examples of components:

- Navbar

- Button

- Card

- Form

- Footer

Instead of building one large page, React applications are built using **many small components**.

Example structure:

```javascript
App
 ├─ Navbar
 ├─ Card
 ├─ Card
 └─ Footer
```

Each component handles **one part of the interface**.

---

## Creating a Component

Create a new file inside the **src** folder:

```javascript
Car.jsx
```

Add the following code:

```javascript
const Car = () => {
  return <h2>I am a Car!</h2>;
};

export default Car;
```

This is a **functional component**.

It behaves like a JavaScript function that returns JSX.

---

## Using a Component

Now open:

```javascript
src/App.jsx
```

Import the component:

```javascript
import Car from "./Car";
```

Use the component inside your JSX:

```javascript
function App() {
  return (
    <div>
      <h1>My React App</h1>
      <Car />
    </div>
  );
}

export default App;
```

The `<Car />` component will render its content inside the page.

---

## Reusing Components

One advantage of components is **reusability**.

You can use the same component multiple times:

```javascript
function App() {
  return (
    <div>
      <h1>My Cars</h1>

      <Car />
      <Car />
      <Car />
    </div>
  );
}
```

Each `<Car />` renders the same component.

Later we will learn how to customize components using **props**.

---

## Component Naming Rules

React components must follow these rules:

- The name must start with a **capital letter**

- A component must **return JSX**

Example:

```javascript
const Button = () => {
  return <button>Click me</button>;
};
```

---

## Summary

Components are the **building blocks of React applications**.

Key ideas:

- Components are **reusable UI elements**

- They are usually written as **functions**

- Components return **JSX**
