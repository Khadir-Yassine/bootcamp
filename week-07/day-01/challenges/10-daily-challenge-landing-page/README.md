# Daily challenge: Landing Page

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Mini Project : Build a Responsive Landing Page with React**

### Objective

In this mini-project, you will build a **responsive landing page** using React components.

---

![Illustration](https://screendy-cdn.fra1.cdn.digitaloceanspaces.com/platfrom-v2/_files/file_1773315822770_ChatGPTImageMar12202611_43_14AM.png)

---

### Project Requirements

Your landing page should include the following sections:

- A **Header (navigation bar)**

- Three **feature cards**

- A **Contact section**

---

### Step 1: Create the Components

Create the following reusable components:

**Header component**

Displays the navigation bar at the top of the page.

Example links:

- Home

- Features

- Contact

---

**Card component**

This component will represent a feature of your product or service.

Each card should display:

- an icon

- a title

- a short description

You will use **three Card components** on the page.

---

**Contact component**

This section should display:

- a title (Contact Us)

- a short message

- a simple contact form or button

---

### Step 2: Organize Your Components

Your project structure could look like this:

```javascript
src
 ├── components
 │    ├── Header.jsx
 │    ├── Card.jsx
 │    └── Contact.jsx
 │
 ├── App.jsx
 └── main.jsx
```

Import your components into **App.jsx**.

Example:

```javascript
import Header from "./components/Header"
import Card from "./components/Card"
import Contact from "./components/Contact"
```

---

### Step 3: Create the Feature Cards

Create **three cards** under the header section.

Example topics:

- Fast performance

- Easy to use

- Modern design

You can reuse the **Card component** and pass different props.

---

### Step 4: Make the Page Responsive

Your page should look good on:

- desktop

- tablet

- mobile

Use **Tailwind CSS utilities** such as:

- `flex`

- `grid`

- `md:grid-cols-3`

- `p-6`

- `text-center`

---

### Step 5: Add Icons

Use **Font Awesome** or another icon library for the card icons.

Example icons:

- rocket

- lightning

- mobile

---

### Expected Result

Your landing page should include:

- a top navigation bar

- three feature cards

- a contact section

- responsive layout

- icons

---

### Bonus Challenge (Optional)

Try adding a **Hero section**

## Working solution

[Working solution](solutions.md) — runnable code, explanation, and verification steps.
