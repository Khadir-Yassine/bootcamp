# JSX Basics

Course source: [Geeks Institute](https://www.geeks.institute/).
## What is JSX?

- JSX stands for **JavaScript XML**.

- JSX allows us to write **HTML-like code inside JavaScript**.

Example:

```javascript
const element = <h1>Hello React!</h1>;
```

JSX makes it easier to describe the **user interface** of your application.

Instead of using complex JavaScript code to create elements, JSX lets us write code that looks very similar to HTML.

---

## JSX Example

Open the file:

```javascript
src/App.jsx
```

Modify it like this:

```javascript
function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <p>This is my first React application.</p>
    </div>
  );
}

export default App;
```

The code above renders a heading and a paragraph on the page.

---

## JSX and JavaScript Expressions

Inside JSX, we can insert **JavaScript expressions** using curly braces `{ }`.

Example:

```javascript
function App() {
  const name = "Alice";

  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
}
```

Output in the browser:

```javascript
Hello Alice
```

We can also use mathematical expressions:

```javascript
function App() {
  const sum = 5 + 5;

  return (
    <p>React is {sum} times better with JSX</p>
  );
}
```

---

## The Single Parent Rule

JSX requires that all elements be wrapped inside **one parent element**.

**This will cause an error:**

```javascript
return (
  <h1>Hello</h1>
  <p>Welcome</p>
);
```

**Correct version:**

```javascript
return (
  <div>
    <h1>Hello</h1>
    <p>Welcome</p>
  </div>
);
```

Another common solution is using a **React Fragment**:

```javascript
return (
  <>
    <h1>Hello</h1>
    <p>Welcome</p>
  </>
);
```

Fragments allow grouping elements **without adding extra HTML to the page**.

---

## JSX Rules to Remember

When writing JSX:

- Use **one parent element**

- Close all tags

- Use **className instead of class**

Example:

```javascript
<div className="container">
  <input type="text" />
</div>
```

---

## Summary

JSX is the syntax used in React to describe the UI.

Key ideas:

- JSX looks similar to **HTML**

- You can insert **JavaScript using **`{}`

- JSX elements must have **one parent element**
