# Exercise : Creating a Simple HTTP Server

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

**Exercise : Creating a Simple HTTP Server**

In this exercise, you will practice creating a simple HTTP server using Node.js and the HTTP module.

1. Open a text editor and create a file named `simple-server.js`.

2. In the `simple-server.js` file, import the `http` module and create an HTTP server that listens on port 3000. Respond to all incoming requests with a basic message, such as "Hello, this is your server!".

3. Start the server and test it by opening a web browser and navigating to `http://localhost:3000`. You should see your message displayed in the browser.

4. Modify the server code to include an HTML structure in the response. Update the response to display an `h1` heading with the text "Welcome to My Server".

5. Add an HTTP header to the response that sets the `Content-Type` to `'text/html'`.

6. Restart the server and test it again by refreshing your web browser. Verify that the header and HTML content are displayed correctly.

7. Run your `simple-server.js` file using Node.js: `node simple-server.js`.

8. Open your web browser and navigate to `http://localhost:3000` to see your server's response.

Congratulations! You've successfully created a basic HTTP server using Node.js and the HTTP module. This exercise introduces you to the fundamental concepts of handling HTTP requests and sending responses.

---

[Worked reference answer](../solutions.md) — includes this task in its original exercise order.
