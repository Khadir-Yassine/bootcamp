# Mini Project : Users and Posts

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What we will learn**

- Fetch Data from an API

- Display the Data using JSX

---

### **Exercise 1: Fetch Data from an API**

**Instructions**

In this exercise you will fetch data from an API and output the information in your Javascript file. You will use the `state` to store the fetched data.

**Part I : posts**

1. Create a `PostList` Class Component, that will fetch the data from this [POSTS URL](https://jsonplaceholder.typicode.com/posts)

2. In the `PostList` Class Component, create a `constructor` function with props and super props. Declare a state to hold the array of items:
  
  ```javascript
this.state = {
    posts: [],
    errorMsg: ''
}
```

3. Use the `componentDidMount` lifecycle method to call the `fetch` method, and update the `state` when the data has been loaded.

4. In the `render` method:
  
  1. Destructure the properties from the `state` to access them.
  2. If the `posts` array is not empty, render the data (use the `map` function).

5. Import the `PostList` Class Component to the `App.js` file.

**Expected output:**

![image](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%209/Day2/Exercises%20XP/Exercise%201.png)

---

**Part II : users**

1. Create a `UsersList` Class Component, that will fetch the data from this [USERS URL](https://jsonplaceholder.typicode.com/users):
  
  - create a `constructor` function with props and super props
  - declare 2 properties in the `state` object:
  
  - one that holds the array of items that we are going to fetch from the API.
  - the second, a boolean that checks whether or not the items were loaded from the API. (the property is set to `false` by default)

2. Use the `componentDidMount` lifecycle method to call the fetch function, and update the state when the data has been loaded.

3. In the `render` method:
  
  1. Destructure the properties from the state to access them.
  2. If the items are loaded, output the name and email of the users (use the `map` function, and add a key to each `<li>`).
  
  - **Expected output (without the grey border):**
  
  ![image](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%209/Day2/Exercises%20XP/Exercise%202.png)
  3. If the items are NOT loaded, return a `<div>` with a “Loading…” message
  
  - **Expected output:**
  
  ![loading](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%209/Day2/Exercises%20XP/Exercise%202%20loading.png)

---

**Part III: Improving the previous parts**

1. Update the `UsersList` Class Component from Part II, so it will behave like the image below:
  
  - **Expected output:**
  
  ![users](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%209/Day2/Exercises%20XP/Exercise%203%20list%20of%20users.png)

2. Update the `PostList` Class Component from Part I, so it will behave like the image below:
  
  - **Expected output (without the grey border):**
  
  ![posts](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%209/Day2/Exercises%20XP/Exrcise%203%20list%20of%20posts.png)

3. Import the `PostList` Class Component and the `UsersList` Class Component to the `App.js` file.

---

## **Submit your Exercises :**

Don’t forget to push to Github

---

## **More info**

| Duration (approx) |
| --- |
| 45 minutes |

---

One Last Thing: **Good luck!**

## Working solution

[Working solution](solutions.md) — runnable code, explanation, and verification steps.
