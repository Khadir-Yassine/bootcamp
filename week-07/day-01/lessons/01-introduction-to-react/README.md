# Introduction to React

Course source: [Geeks Institute](https://www.geeks.institute/).
## What is React?

**React** is a JavaScript library used to build **user interfaces (UI)**.

It allows developers to create **interactive web applications** where parts of the page can update **without reloading the entire page**.

Examples of websites built with React include:

- Facebook

- Instagram

- Netflix

- Airbnb

React focuses only on the **user interface** (what the user sees and interacts with).

---

## Why Developers Use React

React became popular because it helps developers build **large applications more easily**.

Some of its main advantages are:

- **Reusable components**

- **Fast updates to the page**

- **Clear structure for complex interfaces**

Instead of writing long pages of HTML and JavaScript, React allows developers to break the interface into **small reusable pieces**.

---

## The Component Concept

In React, the interface is built using **components**.

A component is a **reusable piece of the user interface**.

Examples of components:

- Navbar

- Button

- Card

- Form

- List

- Footer

Instead of building one large page, React applications are built by **combining many small components**.

Example idea:

```javascript
App
 ├─ Navbar
 ├─ Hero Section
 ├─ Card
 ├─ Card
 └─ Footer
```

Each component is responsible for rendering a **small part of the interface**.

This makes applications **easier to maintain and scale**.

---

## How React Updates the Page

Normally, when something changes on a website, the browser updates the **DOM (Document Object Model)**.

Updating the DOM can be slow if the page is large.

React solves this problem using something called the **Virtual DOM**.

---

## The Virtual DOM

The **Virtual DOM** is a lightweight copy of the real DOM.

When something changes in a React application:

1. React updates the **Virtual DOM**

2. React compares it with the previous version

3. React updates **only the parts that changed**

This process makes React applications **fast and efficient**.

---

## Summary

React is a library used to build **modern web interfaces**.

Key ideas:

- React applications are built using **components**

- Components make code **reusable**

- React uses a **Virtual DOM** to update the page efficiently
