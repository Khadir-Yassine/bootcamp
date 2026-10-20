# Create a React App

Course source: [Geeks Institute](https://www.geeks.institute/).
To start working with React, we first need to create a React project.

Today, the most common way to create a React application is using **Vite**.

> **Vite **is a modern development tool that creates React projects quickly and runs them with a fast development server.

---

**Create a React Project with Vite**

If you already have **Node.js and npm** installed, you can create a React application using the following command:

```javascript
npm create vite@latest my-react-app
```

You will then be asked to choose a framework, select `React`

And then choose the variant `JavaScript` or `TypeScript`

---

After the project is created, move into the project directory:

```javascript
cd my-react-app
```

---

**Install the Dependencies**

Run the following command to install the required packages:

```javascript
npm install
```

---

**Run the React Application**

Start the development server with:

```javascript
npm run dev
```

You will see a local address such as:

```javascript
http://localhost:5173
```

Open this address in your browser to see your React application running.

---

### Understanding the Project Structure

When you open the project in your editor, you will see several files and folders.

The most important ones are:

`src/` : This folder contains the main React code for your application.

`public/` : This folder contains static files such as images.

`index.html` : This is the main HTML file of the application. It contains the `<div>` where the React app will be displayed.

`src/main.jsx` : This file is the entry point of the React application. It renders the main React component inside the HTML page.

`src/App.jsx`** **: This file contains the main React component that you will modify to build your application.

---

### Where React Renders the Application

Inside **index.html**, you will find this line:

```javascript
<div id="root"></div>
```

This `<div>` is where the React application will be displayed.

---

### Rendering the React App

In `src/main.jsx` React renders the application inside the `root` element.

Example:

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

This code tells React to render the `<App />` component inside the `<div id="root">` element in `index.html`.

---

### What Happens Next

The `<App />` component comes from the file:

```javascript
src/App.jsx
```

This is where you will start writing your React components and building your application.
