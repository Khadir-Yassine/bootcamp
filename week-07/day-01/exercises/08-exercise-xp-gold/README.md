# Exercise XP Gold

Course source: [Geeks Institute](https://www.geeks.institute/).
**Note: You will use the same React App for all the Exercises XP**

---

### **Exercise 1 : Celebrity Cards**

### Instructions

Create a reusable React component that displays information about a celebrity.

---

### 1. Create a Functional Component

Create a component called **CelebrityCard**.

This component should display:

- an image

- a title

- a description

- a button linking to Wikipedia

Use **Tailwind CSS** to style the card.

Example structure:

```javascript
<div className="max-w-md bg-white shadow rounded p-4">
  <img src="" alt="" className="rounded mb-3" />

  <h2 className="text-xl font-bold mb-2">
    Card title
  </h2>

  <p className="text-gray-600 mb-3">
    Description text
  </p>

  <a className="bg-blue-500 text-white px-4 py-2 rounded">
    Go somewhere
  </a>
</div>
```

---

### 2. Use the Following Data

In **App.jsx**, create the following array:

```javascript
const celebrities = [
  {
    title: "Bob Dylan",
    imageUrl:
      "https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg",
    buttonLabel: "Go to Wikipedia",
    buttonUrl: "https://en.wikipedia.org/wiki/Bob_Dylan",
    description:
      "Bob Dylan is an American singer, songwriter and cultural icon who has influenced music for more than five decades.",
  },
  {
    title: "Paul McCartney",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg",
    buttonLabel: "Go to Wikipedia",
    buttonUrl: "https://en.wikipedia.org/wiki/Paul_McCartney",
    description:
      "Paul McCartney is an English singer, songwriter, and musician best known as a member of the Beatles.",
  },
];
```

---

### 3. Pass Props

Pass the data from **App.jsx** to the **CelebrityCard** component using props.

Example:

```javascript
<CelebrityCard
  title={celebrity.title}
  imageUrl={celebrity.imageUrl}
  description={celebrity.description}
  buttonLabel={celebrity.buttonLabel}
  buttonUrl={celebrity.buttonUrl}
/>
```

---

### 4. Render the Cards

Render the **CelebrityCard** component **twice**, once for each celebrity.

Bonus challenge: use **map()** to render the cards automatically.

---

### Expected Result

![Illustration](https://screendy-cdn.fra1.cdn.digitaloceanspaces.com/platfrom-v2/_files/file_1773315255826_fun3.png)

You should see **two styled cards**, one for:

- Bob Dylan

- Paul McCartney

Each card should include:

- an image

- a title

- a description

- a button linking to Wikipedia

---

### **Exercise 2 : Planets List**

### Instructions

Using the following array:

```javascript
const planets = [
  "Mars",
  "Venus",
  "Jupiter",
  "Earth",
  "Saturn",
  "Neptune",
];
```

---

### 1. Display the Planets

Use the **map() method** to display the planets on the page.

---

### 2. Render Them Inside a List

Display the planets inside a `<ul>` element.

![Illustration](https://screendy-cdn.fra1.cdn.digitaloceanspaces.com/platfrom-v2/_files/file_1773315320561_arr4.png)

---

### 3. Style with Tailwind

Style the list items using Tailwind.

Example:

```javascript
<ul className="max-w-md mx-auto mt-6">
  <li className="border p-3 mb-2 rounded bg-gray-100">
    Mars
  </li>
</ul>
```

## Working solution

[Working solution](solutions.md) — runnable code, explanation, and verification steps.
