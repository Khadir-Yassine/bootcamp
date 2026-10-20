# 🌟 Exercise 1: Building a RESTful API

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

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
