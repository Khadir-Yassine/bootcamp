# Exercise: Building a Blog API with Route Parameters and Query Strings

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

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
