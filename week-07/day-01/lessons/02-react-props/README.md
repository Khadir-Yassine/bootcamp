# React Props

Course source: [Geeks Institute](https://www.geeks.institute/).
## What are Props?

In React, **props** (short for *properties*) are used to **pass data from one component to another**.

Props allow components to be **reusable and dynamic**.

Data flows in **one direction**:

```javascript
Parent Component → Child Component
```

The parent sends data, and the child receives it.

---

## Passing Props to a Component

Let’s start with our `Car` component.

### Car.jsx

```javascript
const Car = (props) => {
  return <h2>I am a {props.brand} car!</h2>;
};

export default Car;
```

The component receives **props as an object**.

---

### App.jsx

Now pass data from the parent component.

```javascript
import Car from "./Car";

function App() {

  const brand = "Ford";

  return (
    <div>
      <h1>My Garage</h1>

      <Car brand={brand} />
    </div>
  );
}

export default App;
```

Output in the browser:

```javascript
I am a Ford car!
```

---

## Passing Multiple Props

You can pass more than one prop.

```javascript
<Car brand="Ford" name="Mustang" />
```

Then access them inside the component.

### Car.jsx

```javascript
const Car = (props) => {
  return (
    <h2>
      I am a {props.brand} called {props.name}
    </h2>
  );
};
```

---

## Using Destructuring

A cleaner way to use props is **destructuring**.

**Instead of writing:**

```javascript
props.brand
props.name
```

**You can write:**

```javascript
const Car = ({ brand, name }) => {
  return (
    <h2>
      I am a {brand} called {name}
    </h2>
  );
};
```

This makes the code **shorter and easier to read**.

---

## Important Rule About Props

1. Props are **read-only**.

2. This means a child component **should not modify props**.

3. Props should only be **used to display data**.

---

## Summary

Props allow components to **receive data from their parent component**.

Key ideas:

- Props are used to **pass data**

- Data flows **from parent → child**

- Props are **read-only**

- You can use **destructuring** to simplify code
