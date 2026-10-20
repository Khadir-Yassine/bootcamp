# Exercise: Building a CRUD API with Different Data

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

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

[Worked reference answer](../solutions.md) — includes this task in its original exercise order.
