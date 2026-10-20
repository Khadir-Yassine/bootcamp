# Exercise 2: Get JSON Data from your Express Backend #2

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

### **Exercise 2: Get JSON Data from your Express Backend #2**

You will get JSON Data from your Express Backend and display the result with React JS. Make sure to use the `state` to hold the data for the customers.

This is a new exercise, don’t use the code from Exercise 1.

1. Create your backend with Express.
  
  - Create a `server.js` file
  - use a GET method for the `/api/customers/` route. Parse the customer data given below, and add it to a `customers` variable.
  
  ```javascript
[{"id":1,"firstName":"John","lastName":"Doe"},
{"id":2,"firstName":"Jane","lastName":"Doe"},
{"id":3,"firstName":"Ziv","lastName":"Chen"},
{"id":4,"firstName":"Isaac","lastName":"Groisman"},
{"id":5,"firstName":"Avner","lastName":"Maman"},
{"id":6,"firstName":"Megan","lastName":"Dreyfuss"}]
```
  
  
  
  - run the server on a different port from the client. If you go to the `/api/customers/` url you should get the following json in the backend:
  
  ```javascript
[{"id":1,"firstName":"John","lastName":"Doe"},
{"id":2,"firstName":"Jane","lastName":"Doe"},
{"id":3,"firstName":"Ziv","lastName":"Chen"},
{"id":4,"firstName":"Isaac","lastName":"Groisman"},
{"id":5,"firstName":"Avner","lastName":"Maman"},
{"id":6,"firstName":"Megan","lastName":"Dreyfuss"}]
```

2. Create the client side with React. Create a **components** folder, and create a new `customers.js` file. This file contain a `Customers` Class Component.
  
  - Add an empty array to the `state` object, that will store the customers.
  - In the `componentDidMount()` method, fetch your server and display the customers in the `render` method.

3. Style your app

4. (OPTIONAL) If you want to run server and client at the same time, you can install the [concurrently](https://www.npmjs.com/package/concurrently) package, and use:
  
  ```javascript
# Run the client & server with concurrently
npm run dev
```

**Expected output:**

![image](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%209/Day2/Exercises%20XP%20Ninja/Exercise%202.png)

---

[Working solution](../solutions.md) · [Source code](../../../../solutions/src/data.jsx).
