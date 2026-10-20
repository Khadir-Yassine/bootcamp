# Route parameters

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn:**

- Routes with Express

---

## **Route parameters**

Routing is a fundamental concept in web development. In this section, we’ll explore how to handle dynamic routes and parameters using Express. You’ll learn how to extract data from URLs, such as IDs and query strings, and use that data to customize your application’s behavior. This knowledge will be crucial for creating dynamic and interactive web pages.

### **Route parameters**

So far we have just seen how to build static routes, but a key part of building servers is dynamic routing using **route parameters**.

Dynamic values to be passed in the URL are called **“URL parameters”** and are stored in the `params` object which exists in the request object given to us in our callback functions.

To specify that a part of a URL will be a “parameter”, we add a colon `:` character and then give our URL parameter a name. This name will be translated into a key in the `request.params.key`.
**It is also important to note that all of our URL parameters are strings.**

For example:

```javascript
Route path: /users/:userId
Request URL: http://localhost:3000/users/34
req.params: { "userId": "34"}
```

You can have several parameters in one route

```javascript
Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }
```

**Example**:

```javascript
const express = require('express');
const app = express();

app.get('/tutorial/:notion', (req, res) => {
    console.log("req.params: ", req.params)
    res.send(`Tutorial about ${req.params.notion}!`)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));
```

Run the server and go to `http://localhost:3000/tutorial/javascript`, you will get:

![route parameters](https://github.com/devtlv/studentsGitHub/blob/master/JS/Week%207/Day2/Lesson/route%20with%20parameters.png?raw=true)

If you console.log `req` in the function, you will get :

```javascript
  Url {
     pathname: '/tutorial/javascript',
     path: '/tutorial/javascript',
     href: '/tutorial/javascript',
     _raw: '/tutorial/javascript' },
  params: { notion: 'javascript' },
  query: {},
 }
```

---

### **JSON data from a data file**

In a real world application, the data will not be send directly in the `res.json()`. The data will be read from some kind of database.

For the following exemples, we will create a text JSON database to help mimic a real world scenario

Create a file name `data.js` and copy/paste this code

```javascript
const products = [
  { id: 1, name: "iPhone", price: 800 },
  { id: 2, name: "iPad", price: 650 },
  { id: 3, name: "iWatch", price: 750 },
];

module.exports = products;
```

Change the `app.get()` to send the products data

```javascript
const express = require("express");
const app = express();
const products = require("./data.js");

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});
```

This code will return all the products content.

Sometime it could be handy to only return part of the products. For example some fields can be confidential.

Here a exemple returning everything except the price

```javascript
app.get("/api/products", (req, res) => {
  const partial_products = products.map((product) => {
    return { id: product.id, name: product.name };
  });
  res.json(partial_products);
});
```

---

What if you want to load only product with id 1. The convention want to route to be something like: `api/products/1`

Espress have a easy way to manage that kind of request

```javascript
app.get("/api/products/:productID", (req, res) => {
  const id = Number(req.params.productID);
  const product = products.find((product) => product.id === id);
  res.json(product);
});
```

Note the `:productID` in the route url. The `:productID` is a wildcard to put the content following the ‘`api/products/`‘ ex: `api/products/1`

The `productID` can be retrieve from your request with the `req.params.productID`

What append if the request containd an id not in the data. ex: ‘`api/products/1080`‘ ? Nothing will be display.

By convention in that situation we send a 404 Not Found status

```javascript
app.get("/api/products/:productID", (req, res) => {
  const id = Number(req.params.productID);
  const product = products.find((product) => product.id === id);

  if (!product) {
    return res.status(404).send("Product not found");
  }
  res.json(product);
});
```

**Review on Status codes**

Status codes are representing the success of the request, here are a few:

- **200 OK** : The request has succeeded. The meaning of a success varies depending on the HTTP method:

- **400 Bad Request** : This response means that server could not understand the request due to invalid syntax.

- **401 Unauthorized** : Although the HTTP standard specifies “unauthorized”, semantically this response means “unauthenticated”. That is, the client must authenticate itself to get the requested response.

- **403 Forbidden** : The client does not have access rights to the content, i.e. they are unauthorized, so server is rejecting to give proper response. Unlike 401, the client’s identity is known to the server.

- **404 Not Found** : The server can not find requested resource. In the browser, this means the URL is not recognized.

- **500 Internal Server Error** : The server has encountered a situation it doesn’t know how to handle.

---

### **Query String**

It is usual for an API to allow user sending search request. For exemple if a user want all the product that the name contain the word phone he can send this request

```javascript
GET api/query/?name=phone
```

Query string is the part of a URL (Uniform Resource Locater) after the question mark (?). It is meant to send small amounts of information to the server via the url. This information is usually used as parameters to query a database, or maybe to filter results.

**Example:**

```javascript
https://website.com/?username=John&lastname=Doe
```

The query *parameters* are the actual key-value pairs. `username` has the value `John` and `lastname` has the value `Doe`.

Like everything else, Express have an easy way to grab the data from the query string. We can use the `req.query` to retrieve the query string.

```javascript
app.get("/api/query", (req, res) => {
  const name = req.query.name.toLowerCase();
  const products_result = products.filter((product) =>
    product.name.toLowerCase().includes(name)
  );

  if (products_result.length < 1) {
    return res.status(200).send("No products matched your search");
  }
  res.json(products_result);
});
```

`const name = req.query.name.toLowerCase()` retrieved the query string named “name” from the URL and convert it to lower case.

Then we only have to filter our products list on that value to get the products_results

---

**Exercise: Building a Blog API with Route Parameters and Query Strings**

In this exercise, you will build a simple blog API using Express that utilizes route parameters and query strings to manage blog posts. You will refactor the code to work with posts instead of items, allowing you to interact with a collection of blog posts.

1. Create a directory named `blog-api`.

2. Inside the `blog-api` directory, create a file named `data.js`. Copy and paste the provided code to define the `posts` data.

```javascript
const posts = [
  {
    id: 1,
    title: "Introduction to Express",
    content: "Express is a web application framework for Node.js.",
  },
  {
    id: 2,
    title: "Getting Started with APIs",
    content: "Learn the basics of building APIs with Express.",
  },
  {
    id: 3,
    title: "Node.js Best Practices",
    content:
      "Explore best practices for writing clean and efficient Node.js code.",
  },
];

module.exports = posts;
```

3. Create a file named `app.js` in the same directory.

4. In the `app.js` file, import the `express` module and create an Express app.

5. Import the `posts` data from the `data.js` file.

6. Set up the app to listen on port 3000 using the `app.listen()` method. Print a message in the console to indicate that the server is running.

7. Define a route at `/api/posts` that sends a JSON response containing all blog posts.

8. Define a route at `/api/posts/:postID` that takes a `postID` parameter from the URL. Use this parameter to find and send a JSON response with the details of the specific post with the given ID. If the post is not found, send a 404 status with a "Post not found" message.

9. Define a route at `/api/search` that uses the query string parameter `title` to filter posts based on their titles. Convert the query parameter to lowercase and use it to filter posts whose titles contain the given text. Send a JSON response with the filtered posts or a message if no matches are found.

10. Run the app using Node.js and test the different routes using your web browser or tools like `curl` and Postman.

11. Run your `app.js` file using Node.js: `node app.js`.

12. Open your web browser or use tools like `curl` and Postman to test the different routes. For example:

- `http://localhost:3000/api/posts` to see all posts.

- `http://localhost:3000/api/posts/2` to see details of the post with ID 2.

- `http://localhost:3000/api/search?title=express` to filter posts by title.

## Worked answer

[Reference solution](solutions.md) — source code, explanation, and run instructions.
