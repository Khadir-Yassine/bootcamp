# Exercises XP Ninja

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What we will learn**

- Fetch Data

- Use Express

---

### **Exercise 1: Get JSON Data from your Express Backend**

You will get JSON Data from your Express Backend and output the result with React JS. Make sure to use the `state` to hold the data used in your app.

1. Create your Backend with Express.
  
  - (OPTIONAL) You can install the [Express Generator package](https://www.npmjs.com/package/express-generator) to create your server in a faster way.

2. Create you backend folder with the command: `express react-backend`

3. cd into your folder and run `npm install`

4. Open the `users.js` file, and delete the send response in the get router. Instead add the below response json object, and save the file.
  
  ```javascript
    res.json([
               {id: 1, username: "somebody"},
               {id: 2, username: "somebody_else"},
            ]);
```

5. cd to `users.js` and run your Backend with `PORT=3001` - `npm start` (React App uses 3000, so we don’t want any conflicts)

6. For windows Users: `run PORT=3001` && `node bin/www`

7. Open `http://localhost:3001/users` in your browser you will see that the json data is in your backend.

8. Create your React app.
  
  - Open your `package.json` file
  - You need to add a proxy key, so add: `"proxy": "http://localhost:3001"` at the end of the object. This will enable our React app to proxy our API requests to the express server.

9. In the `App.js` file:
  
  - Initialize a `state` with an empty array for the users.
  - In the `componentDidMount()` method, fetch the users from the server and add them to the state.
  - In the `render` method, display the array of users as a list (remember to use a key prop for the users).

**Expected output (without the grey border):**

![image](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%209/Day2/Exercises%20XP%20Ninja/Exercise%201.png)

---

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

## **Submit your Exercises :**

Don’t forget to push to Github

---

## **More info**

| Duration (approx) |
| --- |
| > 1 hour |

## Working solution

[Working solution](solutions.md) — runnable code, explanation, and verification steps.
