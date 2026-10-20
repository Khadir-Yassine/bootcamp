# React and Tailwind CSS

Course source: [Geeks Institute](https://www.geeks.institute/).
### Styling with Tailwind CSS

What you will learn

- What is **Tailwind CSS**

- How to **install Tailwind CSS (v4)** in a React + Vite project

- How to use **Tailwind utility classes**

- To learn more about Tailwind, visit the official documentation: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

---

### What is Tailwind CSS?

**Tailwind CSS** is a utility-first CSS framework.

Instead of writing CSS in separate files like this:

```javascript
.button {
  background-color: blue;
  padding: 10px;
  border-radius: 5px;
}
```

Tailwind allows you to style elements **directly inside your JSX** using utility classes.

Example:

```javascript
<button className="bg-blue-500 p-2 rounded text-white">
  Click Me
</button>
```

Each class applies a small style:

- `bg-blue-500` → background color

- `p-2` → padding

- `rounded` → rounded corners

- `text-white` → text color

This often removes the need to create many CSS files.

---

### Installing Tailwind CSS (Tailwind v4)

To use Tailwind in your React project, install it first.

Open your project folder in the terminal and run:

```javascript
npm install tailwindcss @tailwindcss/vite
```

---

### Configure Vite

Open the file:

```javascript
vite.config.js
```

Add the Tailwind plugin:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

---

### Import Tailwind

Open the file:

```javascript
src/index.css
```

Add this line:

```javascript
@import "tailwindcss";
```

This imports all Tailwind utilities into your project.

---

### Start the Development Server

Run the project again:

```javascript
npm run dev
```

Tailwind is now ready to use.

---

### Testing Tailwind

You can test it by adding some Tailwind classes.

Example:

```javascript
const App = () => {
  return (
    <h1 className="text-3xl font-bold text-blue-600">
      Tailwind is working!
    </h1>
  )
}

export default App
```

If the text appears **large, bold, and blue**, Tailwind is installed correctly.

---

### Example Component with Tailwind

```javascript
const Card = () => {
  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-2">
        React + Tailwind
      </h2>

      <p className="text-gray-600">
        Tailwind makes styling fast and simple.
      </p>
    </div>
  )
}

export default Card
```

---

### Tailwind Cheat Sheet

| Purpose | Tailwind Class | Result |
| --- | --- | --- |
| Padding | `p-4` | Adds padding |
| Margin | `m-4` | Adds margin |
| Background color | `bg-blue-500` | Blue background |
| Text color | `text-white` | White text |
| Font size | `text-xl` | Large text |
| Font weight | `font-bold` | Bold text |
| Border radius | `rounded` | Rounded corners |
| Shadow | `shadow` | Adds shadow |
| Flex layout | `flex` | Enables flexbox |
| Align items | `items-center` | Vertical alignment |
| Justify content | `justify-center` | Horizontal alignment |
| Center text | `text-center` | Centers text |
