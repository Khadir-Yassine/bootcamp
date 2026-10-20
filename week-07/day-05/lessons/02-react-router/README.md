# React Router

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn:**

- Use `react-router` to build navigation for single page applications. Check out the [documentation](https://reactrouter.com/en/main/start/overview)

---

### **Introduction To Single Page Applications**

So far all of our React applications have been composed of a few components. As our applications grow, we will need to change the components on the page. Often the changes happen because of a link that was clicked or because of data that has been submitted.

Any client-side (JavaScript) application that transitions between pages without refreshing the page or rendering a new HTML file from the server is called a **Single-Page Application**. On a well-designed SPA, the user should feel like the page still functions just like a standard server-based web app.

You’ve already been utilizing SPA concepts already! By adding `e.preventDefault()` to your React forms, you are preventing the old-school behavior of HTML forms, which traditionally want to change pages on submission. In a SPA on the other hand, we keep the user on the same page and update the views dynamically with JavaScript and AJAX.

---

### **Getting Started with React Router**

Some frameworks like Angular and Ember come with a router, but since React is a much smaller library, it does not have its own router. To use client side routing with React, we’re going to install a popular router called `react-router`. React Router has three separate packages:

- `react-router` (base dependency package, not installed directly)

- `react-router-dom` (this package is used for web development)

- `react-router-native` (this package is used for mobile development).

*Note:* We won’t be installing `react-router` directly. It will be installed as a dependency of `react-router-dom`.

In your terminal type the following:

```javascript
npm install react-router-dom
```

---

**Using React Router**

First, go to to the `src/index.js` file inside of your project. We are going to wrap the `App` component with a router. The code should look like this:

**index.js**

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
```

- We used `</React.StrictMode>` that highlights potential problems in an application. Check out the [documentation](https://reactjs.org/docs/strict-mode.html)

- First, we imported a router called `BrowserRouter`. The `BrowserRouter`, as the name implies, is a router designed for building single page applications in the browser.

- Second, notice that our `App` component is now a child of `BrowserRouter`. It is important to take note that the router component we import from React Router expects exactly one child. Therefore whenever you use React Router, you will need to wrap your application in a router just like in the example above.

---

**Adding Routes**

Let’s make things more interesting by adding some routes. Edit `src/App.js` to have the following structure.

**App.js**

```javascript
import React from 'react';
import { Route, Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>HomePage</h1>
    <img
      src="https://cdn.pixabay.com/photo/2018/05/18/15/30/webdesign-3411373_1280.jpg"
      alt="Homepage"
      width="40%" />
  </div>
);

const About = () => (
  <div>
    <h1>About me : My Hobbies</h1>
    <img
      src="https://cdn.pixabay.com/photo/2017/06/16/18/03/classical-2409809_1280.png"
      alt="About"
      width="40%" />
    <p>I love playing the guitar!</p>
  </div>
);

const MyProjects = () => (
  <div>
    <h1>Here is a list of projects</h1>
    <img
      src=" https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_1280.png"
      alt="About"
      width="30%" />
  </div>
);

const App = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Me</Link>
      </li>
      <li>
        <Link to="/projects">My Projects</Link>
      </li>
    </ul>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<MyProjects />} />
    </Routes>
  </div>
);

export default App;
```

Run the server and you will get:

- **When you click on the Home link**

![Home](https://github.com/devtlv/studentsGitHub/blob/master/JS/Week%209/Day1/Lesson/React%20Router/Home.png?raw=true)

- **When you click on the About Me link**

![About](https://github.com/devtlv/studentsGitHub/blob/master/JS/Week%209/Day1/Lesson/React%20Router/About.png?raw=true)

- **When you click on the My Projects link**

![Projects](https://github.com/devtlv/studentsGitHub/blob/master/JS/Week%209/Day1/Lesson/React%20Router/Projects.png?raw=true)

---

**Explanation**

In his example we use three new components from React Router: Routes, Route and Link

Route matcher:

**Route**

- **Route** - The Route component is perhaps the most important component in React Router. Its most basic responsibility is to render some UI when its `path` matches the current URL.
The **Route** Element typically with a shape of `<Route path element>`.

Parameters

1. **path**: The path is a path pattern. When the path pattern matches the current URL, the element will be rendered.

2. **element** : A React component to render only when the location matches. It will be rendered with route props.
Syntax: `element={<ComponentName />}`

---

**Link**

- **Link** - this component is used as a replacement for the built-in anchor tag. If we’re building a single-page application, anchor tags can’t really be used, since they cause the page to reload. So when you’re using React Router, you should be using `<Link>` instead of `<a>` to control links on the page.

**How does this work?** Whenever you click on a `Link` component, react uses `window.history` to change the url in the address bar. The `Route` component renders the component specified in the `element` attribute whenever the current url path matches the path attribute.

---

### **URL Parameters**

Parameters are placeholders in the URL that begin with a colon `:`.

**App.js**

We add some `Link`s and a `Route` in the `App Component`.

```javascript
import { Routes, Route, Link, useParams, useLocation } from "react-router-dom";

const App = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Me</Link>
      </li>
      <li>
        <Link to="/projects">My Projects</Link>
      </li>
      <li>
        <Link to="/project/javascript">My Javascript Project</Link>
      </li>
      <li>
        <Link to="/project/React">My React Project</Link>
      </li>
    </ul>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project/:name" element={<Project />} />
    </Routes>
  </div>
);

export default App;
```

We create a new component `Project`

```javascript
const Project = () => {
  let { name } = useParams();
  let params = useParams();
  let location = useLocation();
  console.log("name", name)
  return (
    <div>
      <hr></hr>
      <h3>The Project name is : <span style={{ color: "red" }}>{name}</span></h3>
      <h4>
        What's in params? <pre>{JSON.stringify(params, null, 4)}</pre>
      </h4>
      <h4>
        What's in location? <pre>{JSON.stringify(location, null, 4)}</pre>
      </h4>
    </div>
  );
};
```

- **useParams()** : URL Params returns an object with a parameter name as the key. It contains information about how a `<Route path>` matched the URL

- **useLocation()**: returns an object that represent where the app is now, where you want it to go, or even where it was.

---

Look at the result that we get:

- **When you click on the My Javascript Project link**
  
  ![My JS Project](https://github.com/devtlv/studentsGitHub/blob/master/JS/Week%209/Day1/Lesson/React%20Router/js%20project.png?raw=true)

- **When you click on the My React Project link**
  
  ![My React Project](https://github.com/devtlv/studentsGitHub/blob/master/JS/Week%209/Day1/Lesson/React%20Router/react%20project.png?raw=true)

---

**Passing information as props to a route**

What if we want our components to have access to other props as well, not just those coming from the router?
You just pass a prop to the component as you normally would.

**App.js**

```javascript
import React from 'react';
import { Routes, Route, Link} from "react-router-dom";

const Home = () => (
  <div>
    <hr></hr>
    <h1>Home</h1>
    <img
      src="https://cdn.pixabay.com/photo/2018/05/18/15/30/webdesign-3411373_1280.jpg"
      alt="Homepage"
      width="20%" />
  </div>
);

//new code
const About = ({ hobby }) => (
  <div>
    <hr></hr>
    <p>I love {hobby}</p>
    <img
      src="https://cdn.pixabay.com/photo/2014/04/03/10/26/turntable-310450_1280.png"
      alt="About"
      width="20%" />
  </div>
);

const App = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Me</Link>
      </li>
    </ul>
    <Routes>
      <Route path="/" element={<Home />} />

      //new code
      <Route path="/about" element={<About hobby="music" />} />
    </Routes>
  </div>
);

export default App;
```
