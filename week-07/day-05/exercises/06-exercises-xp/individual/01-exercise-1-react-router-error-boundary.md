# Exercise 1 : React Router Error Boundary

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

### **Exercise 1 : React Router Error Boundary**

**Check the demo **[**here**](http://di-react-router-error-boundary.surge.sh/)

1. In a new Javascript file, create an `ErrorBoundary` Class Component:
  
  - Create a state with a property named `hasError`, set by default to `false`.
  - Use a `componentDidCatch()` method to set the value of the `hasError` property.

2. Install React Router Dom in your app and check out the [NavLink documentation](https://reactrouter.com/en/main/components/nav-link)

3. In the `App.js` file, add this line:
  
  ```javascript
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
```

4. You can also install React Bootstrap in your app. In the `App.js` file, add this line:
  
  ```javascript
import "bootstrap/dist/css/bootstrap.min.css";
```

5. In the `App.js` file, display a Bootstrap navbar, containing three React Router `<NavLink></NavLink>`:
  
  - the first one redirects to `/`
  - the second one redirects to `/profile`
  - the third one redirects to `/shop`

6. In the `App.js` file, create three functional components : `HomeScreen`, `ProfileScreen`, and `ShopScreen`.
  
  - `HomeScreen` and will display a header tag
  
  ![home](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%209/Day3/Exercise%20XP%20Gold/home.png)
  - `ProfileScreen` will display a header tag
  
  ![profile](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%209/Day3/Exercise%20XP%20Gold/profile.png)
  - `ShopScreen` will throw an error
  
  ![shop](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%209/Day3/Exercise%20XP%20Gold/shop.png)

7. Add a `Route` for each of the functional component. Each one has a different `path`.

8. Wrap each of the functional component with the `ErrorBoundary` component.

---

[Working solution](../solutions.md) · [Source code](../../../../solutions/src/data.jsx).
