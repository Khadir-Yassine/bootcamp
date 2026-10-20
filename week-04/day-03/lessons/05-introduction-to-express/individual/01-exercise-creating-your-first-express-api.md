# Exercise: Creating Your First Express API

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

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
