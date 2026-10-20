# 🌟 Exercise 2: Building a Basic CRUD API with Express.js

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

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

[Worked reference answer](../solutions.md) — includes this task in its original exercise order.
