# Exercises XP

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn:**

- Use Express to build an API

- Use Node,js modules

---

### **🌟 Exercise 1: Building a RESTful API**

**Instructions**

You’re tasked with building a RESTful API for a blog platform.
Users should be able to create, read, update, and delete blog posts using different endpoints.

1. Create a directory named `blog-api`.

2. Inside the `blog-api` directory, open a terminal and run `npm init` to initialize a new Node.js project. Follow the prompts to set up your project.

3. Install the `express` package by running `npm install express` in the terminal.

4. Create a file named `server.js`.

5. In `server.js`, require the `express` package and set up an Express app.

6. Create a `data` array to simulate a database. Each item in the array should represent a blog post with properties like `id`, `title`, and `content`.

7. Implement the following routes using Express:

8. **GET /posts**: Return a list of all blog posts.

9. **GET /posts/:id**: Return a specific blog post based on its `id`.

10. **POST /posts**: Create a new blog post.

11. **PUT /posts/:id**: Update an existing blog post.

12. **DELETE /posts/:id**: Delete a blog post.

13. Implement error handling for invalid routes and server errors.

14. Start the Express app and listen on a specified port (e.g., 3000).

---

### **🌟 Exercise 2: Building a Basic CRUD API with Express.js**

**Instructions**

In this exercise, you’ll build a basic CRUD (Create, Read, Update, Delete) API using Express.js. Your task is to create routes to manage a collection of books.

1. Create a new directory named `book-api`.

2. Inside the `book-api` directory, initialize a new Node.js project and install the `express` package.

3. Create a new file named `app.js` in the `book-api` directory.

4. In `app.js`, import the `express` module and create an instance of an Express app.

5. Define a basic data array containing a few book objects. Each book object should have properties like `id`, `title`, `author`, and `publishedYear`.

6. Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.

7. Implement the “Read all” route by defining a route at `GET /api/books`. Send a JSON response with the `books` array.

8. Implement the “Read” route by defining a route at `GET /api/books/:bookId`. Extract the `bookId` parameter from the URL and use it to find the corresponding book in the `books` array. If the book is found, send a JSON response with the book details and a status code of 200 (OK). If the book is not found, send a 404 status with a “Book not found” message.

9. Implement the “Create” route at `POST /api/books`. Use the `express.json()` middleware to parse JSON body content. Inside the route handler, create a new book object with an incremented ID and the data from the request body. Add the new book to the `books` array and return a JSON response with the new book and a status code of 201 (Created).

---

### **🌟 Exercise 3: Building a Basic CRUD API with Express and Axios using a Data Module**

**Instructions**

In this exercise, you’ll build a basic CRUD (Create, Read, Update, Delete) API using Express.js and Axios to retrieve data from the JSONPlaceholder API and respond with that data in your own API. You’ll also create a separate module to handle data retrieval using Axios.

**Part 1: Setting Up the Express Server**

1. Create a new directory named `crud-api`.

2. Inside the `crud-api` directory, initialize a new Node.js project and install the `express` and `axios` packages.

3. Create a new file named `app.js` in the `crud-api` directory.

4. In `app.js`, import the `express` module and create an instance of an Express app.

5. Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.

**Part 2: Creating a Data Module for Axios**

1. Inside the `crud-api` directory, create a new directory named `data`.

2. Inside the `data` directory, create a new file named `dataService.js`.

3. In `dataService.js`, import the `axios` module and create a function named `fetchPosts` that makes a GET request to the JSONPlaceholder API to fetch data for all posts.

4. Export the `fetchPosts` function.

**Part 3: Using the Data Module in the Express App**

1. Inside `app.js`, import the `dataService` module you created.

2. Create an endpoint in your Express app that uses the `fetchPosts` function from the `dataService` module to retrieve data from the JSONPlaceholder API.

3. Respond with the fetched data from the JSONPlaceholder API. `https://jsonplaceholder.typicode.com/posts`

4. Print a message in the console to indicate that the data has been successfully retrieved and sent as a response.

---

## **Submit your exercises :**

Don’t forget to push to Github

---

## **More info**

| Duration (approx) |
| --- |
| > 1h30 |

---

One Last Thing: **Good luck!**
