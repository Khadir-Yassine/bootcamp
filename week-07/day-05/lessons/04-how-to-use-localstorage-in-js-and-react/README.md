# How to use localStorage in JS and React

Course source: [Geeks Institute](https://www.geeks.institute/).
In this article, we will discuss localStorage in JavaScript and React.js.

In React, the state vanishes when we reload the page. localStorage is the best way to persist data in a static react app if we are not interested in making a backend for our app.

**LocalStorage has four methods:**

1. `localStorage.setItem("data",data)`

2. `localStorage.getItem("data")`

3. `localStorage.removeItem("data")`

4. `localStorage.clear()`

We will be discussing and using `JSON.parse()` and `JSON.stringify()` in this post as well.

---

### **1. **`localStorage.setItem("data",data)`

With `setItem()`, we can set an item to localStorage that will persist even after we reload the page.

Take a look at the example below:

A small use case for this could be when we click on a button, the data will be added to the localStorage.

```javascript
const click = () =>{
localStorage.setItem('data','data')
}
return(
<button onClick = {click}>Click</button>
)
```

We can set an object, string, or even an array to the localStorage.

To know where our localStorage item is located, follow the steps below: *Right-click and click inspect. *Go to the application and you will find the items in the website name you are currently in.

---

### **2. **`localStorage.getItem("data")`

After setting data, we can access the data with localStorage.getItem(“data”). Here, we can get the element as a string directly, or convert it back to an object with JSON.parse() if it was originally stored as a stringified object.

```javascript
const data = JSON.parse(localStorage.getItem('data'))
```

We can then use this data to map out to the frontend or whatever logic you wish.

---

### **3. localStorage.removeItem(“data”)**

With `localStorage.removeItem('data')` we can remove the localStorage item.

Its use case is similar to `setItem()` – when we want to remove an item, we click a button to complete that functionality.

```javascript
const remove = () =>{
localStorage.removeItem('data')
}
return(
<button onClick = {remove}>Click</button>
)
```

---

### **4. localStorage.clear()**

With this function, we can remove all the items in one go:

```javascript

const removeall = () =>{
localStorage.clear()
}
return(
<button onClick = {removeall}>Click</button>
)
```

These are some of the methods and use cases on how we can use localStorage in your projects.

As a frontend developer, localStorage is a lifesaver because backend and database concepts like node.js and MongoDB for using routes (e.g., `GET` or `POST`) in our static app are not required.
