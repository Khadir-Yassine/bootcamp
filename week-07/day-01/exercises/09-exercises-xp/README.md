# Exercises XP

Course source: [Geeks Institute](https://www.geeks.institute/).
**Note: You will use the same React App for all the Exercises XP.**

---

### **Exercise 1: Working with JSX**

### Instructions

Open the file:

```javascript
src/App.jsx
```

---

### 1. Display a Message

Display the following message inside a paragraph:

```javascript
Hello World!
```

---

### 2. Render JSX from a Variable

Create a constant variable containing JSX:

```javascript
const myElement = <h1>I Love JSX!</h1>;
```

Render this element inside your component.

---

### 3. Render JavaScript Inside JSX

Create a variable:

```javascript
const sum = 5 + 5;
```

Display the following sentence on the page:

```javascript
React is 10 times better with JSX
```

Hint: Use `{}` to render JavaScript inside JSX.

Example:

```javascript
<p>React is {sum} times better with JSX</p>
```

---

### **Exercise 2: Objects and Props**

### Instructions

Use the following object:

```javascript
const user = {
  firstName: "Bob",
  lastName: "Dylan",
  favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
};
```

---

### 1. Display User Information

In **App.jsx**, display the user's:

- first name

- last name

inside two `<h3>` elements.

---

### 2. Create a Component

Create a new file:

```javascript
UserFavoriteAnimals.jsx
```

Create a **Functional Component** called `UserFavoriteAnimals`.

Pass the `favAnimals` array as **props**.

---

### 3. Render the Animals

Inside the component, use the **map()** method to display the animals inside a `<ul>` list.

Each animal should appear inside an `<li>`.

Example structure:

```javascript
<ul>
  <li>Horse</li>
  <li>Turtle</li>
</ul>
```

Remember to add a **key** to each list item.

---

### **Exercise 3: HTML Tags in React**

### Part 1: Create a Component

Create a new file:

```javascript
Exercise3.jsx
```

Create a **Functional Component** called `Exercise`.

Inside this component, add the following HTML elements:

- a heading `<h1>`

- a paragraph

- a link

- a form

- an image

- a list

Import this component into **App.jsx** and render it.

---

### Part 2: Inline Styling

Create the following JavaScript object:

```javascript
const styleHeader = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};
```

Apply this style to the `<h1>` element using the `style` attribute.

Example:

```javascript
<h1 style={styleHeader}>Styled Header</h1>
```

---

### Part 3: Styling with CSS

Create a CSS file:

```javascript
Exercise.css
```

Import it into your component.

Add the following CSS:

```javascript
.para {
  background-color: #282c34;
  color: white;
  padding: 40px;
  font-family: Arial;
  text-align: center;
}
```

Apply this class to the paragraph element.

---

### Expected Result

Your page should display:

- several HTML elements

- styled components

- a list generated using `map()`
