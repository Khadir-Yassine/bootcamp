# Exercises XP

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What we will learn**

- React state

- Event handlers

- React Router

- Error Boundary

- JSON

---

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

### **Exercise 2 : Display JSON Data in React JS**

```javascript
[ 
    {
        "id": 1,
        "title": "Hello World",
        "content": "Try Reactjs is awesome. Can't wait to learn more",
        "date": "12-04-2017",
        "slug": "hello-world"
    },
    {
        "id": 2,
        "title": "Setup React",
        "content": "Setting up react is easy. Learn more about it!",
        "date": "1-28-2018",
        "slug": "setup-react"
    }
]
```

- Create a json file, and copy/paste this data

- Create a component named `PostList.js` that displays the title and the content of each object from the json file.

- Render the `PostList` component in your `App.js` file.
  
  **Expected output:**
  
  ![image](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day4/Exercises%20XP%20Ninja/Exercise%201-%20Display%20JSON%20Data%20in%20React%20JS/output.png)

---

### **Exercise 3 : Display JSON Data and parse it**

1. Create a json file and copy/paste this [data](https://github.com/devtlv/studentsGitHub/blob/master/JS/Week%208/Day4/Exercises%20XP%20Ninja/Exercise%202-%20Display%20JSON%20Data%20in%20React%20JS/data.json). The file contains complex data with inner arrays up-to first and second level.

2. In a new Javascript file, create a Class Component named `Example1` that displays the **SocialMedias** array data.

3. In a new Javascript file, create a Class Component named `Example2` that displays the **Skills** data.

4. In a new Javascript file, create a Class Component named `Example3` that displays the **Experiences** array data. Add a `key` attribute to every new `<div>`.

5. Import those components to the `App.js` file.

***Expected output***

***Example1 Component***

![image](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day4/Exercises%20XP%20Ninja/Exercise%202-%20Display%20JSON%20Data%20in%20React%20JS/output1.png)

***Example2 Component***

![image](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day4/Exercises%20XP%20Ninja/Exercise%202-%20Display%20JSON%20Data%20in%20React%20JS/output2.png)

***Example3 Component***

![image](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day4/Exercises%20XP%20Ninja/Exercise%202-%20Display%20JSON%20Data%20in%20React%20JS/output3.png)

---

## **Exercise 4 : Post JSON Data with React JS**

1. Go to [webhook](https://webhook.site/) and copy the link of “Your unique URL”.

2. Remember to turn on “Enable CORS” on the webhook website.

3. In the `App.js` file, create an `async await` function to `fetch` the json data from the URL you copied.
  
  - Use a `POST` method and some `headers`.
  - Send this hardcoded `stringified` json data to your body.
  
  ```javascript
key1: 'myusername',
email: 'mymail@gmail.com',
name: 'Isaac',
lastname: 'Doe',
age: 27
```

4. In the `App.js` file, create a button, that when clicked on, displays the response in the console.

**Expected output in the console after the button was clicked:**

![image](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day4/Exercises%20XP%20Ninja/Exercise%203-%20Post%20JSON%20Data%20with%20React%20JS/output%20in%20console.jpg)

5. Finally, open the [webhook](https://webhook.site/) site again, and check the output in the API.

**Expected output in the URL:**

![image](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day4/Exercises%20XP%20Ninja/Exercise%203-%20Post%20JSON%20Data%20with%20React%20JS/output%20in%20url.jpg)

---

## **Submit your Exercises :**

Don’t forget to push to Github

---

## **More info**

| Duration (approx) |
| --- |
| 1h30 |

---

One Last Thing: **Good luck!**
