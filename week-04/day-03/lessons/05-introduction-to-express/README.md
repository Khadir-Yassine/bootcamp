# Introduction to Express

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn:**

- Install Express

- Create your first API

- Hnadle request and reponses

---

## **Useful Resources**

- [Express Documentation](https://expressjs.com/en/starter/installing.html)

- [NPM Express Documentation](https://www.npmjs.com/package/express)

---

### **NodeJS + Express: Introduction**

Express is a powerful and popular web application framework for Node.js. In this section, you’ll dive into Express and learn how it simplifies the process of building web applications. We’ll cover middleware, routing, and basic application structure. By the end, you’ll have a solid grasp of Express and be ready to create more complex applications.

---

### **What is ExpressJS**

EspressJS is a NodeJS framework that makes it easier to create web applications. Indeed, why re-invent the wheel? With ExpressJS you have access to several functions that will facilitate and reduce the development time of your web application. Creating an HTTP server with Express is very easy.

---

### **Creating a new application**

To fully demonstrate the potential of ExpressJS and fully understand all the concepts, we are going to build a complete new web application.

First create a folder to host your application

```javascript
$ mkdir demo-express
$ cd demo-express
```

The first step is to create the package.json file.

```javascript
$ npm init
```

Then install the ExpressJS package and nodemon

```javascript
$ npm install express
$ npm install -g nodemon
```

Note that as you learn in the NodeJS series, the nodemon package allows you to reload the server each time our code is modified.

---

### **API vs SSR**

Express can be used to create JSON API or a website with server side rendering. Today, we are going to create an API, it is by far the type of application most created with Express.

---

### **What is an API?**

API stands for Application Programming Interface.

In short, it is a program that can be used by another program, in order to allow applications to communicate with each other.

An API allows the server and the client to communicate with each other and exchange information.

For example, a customer requests a specific customer page on the server: [www.example.com/customers/3814](http://www.example.com/customers/3814).

Can the server know how to handle this request? He can’t. He won’t know what to do with the request. That’s why we need to create an API. This is a server application that will determine how to respond to various requests for a specific resource. In this case, return the customer information.

The API that you created can find record 3814 in the customer database, convert that information to JSON (structured text) format, and return this response to the customer.

Note that all requests to servers are made through HTTP actions.

---

### **HTTP requests**

The action you want to take on the specified resource. Although nouns are also encountered, these methods are often referred to as HTTP verbs.

---

**Here are the most commonly used HTTP verbs / actions**

**GET**: GET requests are only used to retrieve data.

**POST**: GET requests are used to send new data.

**PUT**: PUT requests are used to modify data.

**PATCH**: PATCH requests are used to partially modify data.

**DELETE**: DELETE requests deletes the specified data.

---

### **REST architecture**

When the client and the server are talking to each other, it can quickly get out of hand.

For example, the customer can make a request like this: `http://www.example/send-me-customer-3804-file` or a delete request like this: `http://www.example.com/delete-customer=3815`

How can the server understand these different requests? To have successful communication, we need standards and conventions.

This is the role of the REST architecture. REST is a set of standards for creating an API that both client and server will use.

The important thing is to know that the way we build our API is not based on personal tastes or opinions, but on the REST architecture standard.

**REST** stands for **RE**presentational **S**tate **T**ransfer. REST is web standards based architecture and uses HTTP Protocol.
A REST Server simply provides access to resources and REST client accesses and modifies the resources using HTTP protocol. REST uses various representation to represent a resource like text, JSON, XML but JSON is the most popular one.

4 HTTP methods are commonly used in REST based architecture :

- `GET` − used to provide a read only access to a resource.

- `PUT` − used to update an existing resource or create a new resource.

- `DELETE` − used to remove a resource.

- `POST` − used to update an existing resource or create a new resource.

**Note** : The difference between `PUT` and `POST` is that `PUT` is idempotent: calling it once or several times successively has the same effect (that is no side effect), whereas successive identical `POST` may have additional effects, like passing an order several times.

Web services based on REST Architecture are known as RESTful web services. These webservices uses HTTP methods to implement the concept of REST architecture.

![restful apis](https://github.com/devtlv/studentsGitHub/assets/30896388/92a39239-57af-4f1d-8d8e-ce7aeb687472)

---

### **CRUD routes conventions**

One of those REST conventions is how routes are defined. There are standards for each CRUD course of action.

CRUD stands for Create, Read, Update, and Delete.

When we are dealing with an API resource. For example Customer. Each Client resource has its own CRUD routes.

Here is an example of these REST CRUD routes:

**Create**: POST `http://www.example.com/customers`

**Read**: GET `http://www.example.com/customers/3814`

**Update**: PUT `http://www.example.com/customers/3814`

**Destroy**: DELETE `http://www.example.com/customer/3814`

So now you have a more precise idea of what an API is.

On the server, the API will expose all of these routes and features. On the front-end, the client web application will ask these APIs to get the desired data.

Maybe for now the concept is still a bit hazy but things will become clearer when we build our own API.

---

### **Your first API with Express**

Create the `app.js` file and add the following code.

```javascript
const express = require('express')
const app = express()

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})

app.get('/api/products', (req, res) => {
    res.json([
        { name: 'iPhone', price: 800 },
        { name: 'iPad', price: 650 },
        { name: 'iWatch', price: 750 }
    ])
});
```

In this code, the `app.listen()` will create an HTTP server and read incoming requests

The `app.get()` defines a URL path that returns a JSON product list.

You can test this app with

```javascript
$ npx nodemon app.js
```

Navigate to `localhost:5000/api/products`, you should see a JSON representation of the product list

```javascript
[
   {
     "name": "iPhone",
     "price": 800
   },
   {
     "name": "iPad",
     "price": 650
   },
   {
     "name": "iWatch",
     "price": 750
   }
]
```

**Explanations**

Routing determine the way in which an application responds to a client request to a particular endpoint.

*Syntax*

```javascript
app.METHOD(PATH, HANDLER)
```

- `app` is an instance of the express module

- `METHOD` is an HTTP request method (GET, POST, PUT or DELETE)

- `PATH` is a path on the server.

- `HANDLER` is the function executed when the route is matched.

In our example above :

1. The `METHOD` is a `GET` request

2. The `PATH` is `/api/products`

3. The app responds with a JSON representation of the product list for requests to the URL (`/api/products`) or route.

---

**Examples with different paths**

```javascript
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/aboutme', (req, res) => res.send('I love coding!'))
app.get('/tutorial', (req, res) => res.send('Tutorial about express!'))

app.listen(5000)
```

Congratulations, you have just created your first API with NodeJS + Express

---

**Exercises**

**Exercise: Creating Your First Express API**

In this exercise, you will create your first API using Node.js and Express. This exercise will introduce you to the fundamental concepts of setting up an Express application and defining routes for different HTTP methods.

1. Open a text editor and create a file named `first-express-api.js`.

2. In the `first-express-api.js` file, require the `express` module and create an Express app.

3. Set up the app to listen on port 3000 using the `app.listen()` method. Print a message in the console to indicate that the server is running.

4. Define a GET route at `/api/greetings`. In the route handler, send a JSON response with a simple greeting message.

5. Run the app using Node.js and test the route by opening a web browser or using a tool like `curl` to make a GET request to `http://localhost:3000/api/greetings`.

6. Run your `first-express-api.js` file using Node.js: `node first-express-api.js`.

7. Open your web browser or use a tool like `curl` to make a GET request to `http://localhost:3000/api/greetings`. You should see the JSON response with the greeting message.

This exercise helps you get hands-on experience with building a basic Express API, defining routes, and responding to HTTP requests. It's a great starting point for learning more about the power of Express and creating more complex APIs in the future.
