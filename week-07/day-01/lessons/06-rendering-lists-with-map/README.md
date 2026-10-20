# Rendering Lists with map()

Course source: [Geeks Institute](https://www.geeks.institute/).
## Rendering Arrays

In many applications, data comes in the form of **arrays**.

Example:

```javascript
const planets = [
  "Mars",
  "Venus",
  "Earth",
  "Jupiter",
];
```

We can display these values using **JavaScript's **`map()` method.

---

## Using `map()` in React

The `map()` method allows us to **loop through an array** and return JSX for each item.

Example:

```javascript
function App() {

  const planets = [
    "Mars",
    "Venus",
    "Earth",
    "Jupiter",
  ];

  return (
    <div>
      <h1>Planets</h1>

      <ul>
        {planets.map((planet) => (
          <li>{planet}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
```

This will render a list of planets.

---

## The `key` Attribute

When rendering lists in React, each element must have a **key**.

The key helps React identify which items have changed, been added, or removed.

Example:

```javascript
<ul>
  {planets.map((planet, index) => (
    <li key={index}>{planet}</li>
  ))}
</ul>
```

The `key` should be **unique for each item**.

In real applications, developers usually use **IDs from a database**.

Example:

```javascript
<li key={planet.id}>{planet.name}</li>
```

---

## Rendering Components from Lists

Instead of rendering `<li>` elements, we can also render **components**.

Example:

```javascript
{cars.map((car) => (
  <Car key={car.id} brand={car.brand} name={car.name} />
))}
```

This is a common pattern in React applications.

---

## Summary

The `map()` method allows us to **render lists dynamically**.

Key ideas:

- `map()` loops through arrays

- JSX can be returned inside `map()`

- Each element needs a **key**

- `map()` is often used to render **components**
