# CRUD API

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn:**

- Create a RESTful API using Express

---

Building a complete CRUD (Create, Read, Update, Delete) API is a key skill for any web developer. In this section, we’ll guide you through the process of creating a RESTful API using Express. You’ll learn how to handle requests to create, read, update, and delete resources, and how to manage the associated data in a database. By the end, you’ll have a fully functional API that can perform all CRUD operations.

## **CRUD API**

Now that we know the basics concept, it’s time to build real CRUD API (create, read, update, delete)

We will build all those CRUD routes:

- Create: POST `/api/products`

- Read all: GET `/api/product`s

- Read: GET `/api/product/1`

- Update: PUT `/api/products/1`

- Delete: DELETE `/api/products/1`

---

### **Return Status**

With a CRUD API you can return data but also status code.

Here is a list of some status code and there meaning

```javascript
res.status(200) // Ok
res.status(201) // Created
res.status(204) // No content
res.status(400) // Bad request
res.status(401) // Unauthorized
res.status(403) // Forbidden
res.status(404) // Not found
res.status(500) // Server error
```

---

### **Step By Step Example**

***Create a file name data.js and copy/paste this code***

```javascript
const products = [
  { id: 1, name: "iPhone", price: 800 },
  { id: 2, name: "iPad", price: 650 },
  { id: 3, name: "iWatch", price: 750 },
];

module.exports = products;
```

---

### ***Load data and start the server***

```javascript
const express = require("express");
const app = express();
const products = require("./data.js");

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
```

---

### ***Create: POST ***`/api/products`

```javascript
app.use(express.json()); // parse json body content

app.post("/api/products", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});
```

The `app.use(express.json)` is a middleware that take JSON content and create related `req.body` properties. (ex. `req.body.name` and `req.body.price`)

The `res.status(201).json(newProduct)` set the return response status to 201 (created) and also return the newProduct data in JSON format.

---

### ***Read all: GET ***`/api/products`

```javascript
app.get("/api/products", (req, res) => {
  res.json(products);
});
```

---

### ***Read: GET /api/product/1***

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

As seen in part 2, first we retrieved the productID from the route parameter.

Then we check if this product exist and send a response accordingly.

`res.json(product)` send the product in JSON format with a 200 ok status code.

---

### ***Update: PUT /api/products/1***

```javascript
app.use(express.json()); // parse json body content

app.put("/api/products/:productID", (req, res) => {
  const id = Number(req.params.productID);
  const index = products.findIndex((product) => product.id === id);
  if (index === -1) {
    return res.status(404).send("Product not found");
  }
  const updatedProduct = {
    id: products[index].id,
    name: req.body.name,
    price: req.body.price,
  };
  products[index] = updatedProduct;
  res.status(200).json("Product updated");
});
```

---

### ***Delete: DELETE /api/products/1***

```javascript
app.use(express.json()); // parse json body content

app.delete("/api/products/:productID", (req, res) => {
  const id = Number(req.params.productID);
  const index = products.findIndex((product) => product.id === id);
  if (index === -1) {
    return res.status(404).send("Product not found");
  }
  products.splice(index, 1);
  res.status(200).json("Product deleted");
});
```

---

**Exercise: Building a CRUD API with Different Data**

In this exercise, you will build a CRUD API using Express that provides endpoints to perform basic CRUD operations on a collection of posts. You will implement the routes for creating, reading, updating, and deleting posts.

1. Create a directory named `crud-api`.

2. Inside the `crud-api` directory, create a file named `data.js`. Copy and paste the following code to define the `posts` data:

```javascript
const posts = [
  {
    id: 1,
    title: "Introduction to Express",
    content: "Express is a web application framework for Node.js.",
  },
  {
    id: 2,
    title: "Creating Routes in Express",
    content: "You can define routes using the express.Router() method.",
  },
  {
    id: 3,
    title: "Handling Requests and Responses",
    content:
      "Express provides methods to handle incoming requests and send responses.",
  },
];

module.exports = posts;
```

3. Create a file named `app.js` in the same directory.

4. In the `app.js` file, import the `express` module and create an Express app.

5. Import the `posts` data from the `data.js` file.

6. Set up the app to listen on port 5000 using the `app.listen()` method. Print a message in the console to indicate that the server is running.

7. Implement the "Create" route by defining a route at `POST /api/posts`. Use the `express.json()` middleware to parse JSON body content. Inside the route handler, create a new post object with an incremented ID and the data from the request body. Add the new post to the `posts` array and return a JSON response with the new post and a status code of 201 (Created).

8. Implement the "Read all" route by defining a route at `GET /api/posts`. Send a JSON response with the `posts` array.

9. Implement the "Read" route by defining a route at `GET /api/posts/:postID`. Extract the `postID` parameter from the URL and use it to find the corresponding post in the `posts` array. If the post is found, send a JSON response with the post details and a status code of 200 (OK). If the post is not found, send a 404 status with a "Post not found" message.

10. Implement the "Update" route by defining a route at `PUT /api/posts/:postID`. Use the `express.json()` middleware to parse JSON body content. Extract the `postID` parameter from the URL and use it to find the index of the post in the `posts` array. If the post is found, create an updated post object with the data from the request body and update the post in the array. Send a JSON response with a "Post updated" message and a status code of 200 (OK). If the post is not found, send a 404 status with a "Post not found" message.

11. Implement the "Delete" route by defining a route at `DELETE /api/posts/:postID`. Extract the `postID` parameter from the URL and use it to find the index of the post in the `posts` array. If the post is found, use the `splice()` method to remove the post from the array. Send a JSON response with a "Post deleted" message and a status code of 200 (OK). If the post is not found, send a 404 status with a "Post not found" message.

12. Run the app using Node.js and test the CRUD operations using tools like `curl` or Postman.

13. Run your `app.js` file using Node.js: `node app.js`.

14. Use tools like `curl` or Postman to test the CRUD operations on the `/api/posts` endpoints, similar to the previous exercise.
