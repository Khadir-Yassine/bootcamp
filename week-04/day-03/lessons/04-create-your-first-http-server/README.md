# Create your first HTTP Server

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn:**

- How to create a basic HTTP server using Node.js

- Handle requests, and send responses

---

## **Useful Resources:**

- [Documentation HTTP module](https://nodejs.dev/learn/the-nodejs-http-module)

- [Documentation - response.end](https://nodejs.org/api/http.html#http_response_end_data_encoding_callback)

- [Documentation - response.statusCode](https://nodejs.org/api/http.html#http_response_statuscode)

- [Documentation- response.write](https://nodejs.org/api/http.html#http_response_write_chunk_encoding_callback)

- [Documentation - response.writeHead](https://nodejs.org/api/http.html#http_response_writehead_statuscode_statusmessage_headers)

---

In this introductory section, we’ll start by understanding the core concepts of web servers and how they work. You’ll learn how to create a basic HTTP server using Node.js, handle requests, and send responses. By the end of this section, you’ll have a clear understanding of how the web server operates and be able to serve your web pages locally.

---

### **The HTTP Module**

The HTTP module is a set of functions that allow you to create and manage your own web server.

### **Reminder: What is a Web Server?**

A web server is a set of hardware and software that allow access to hosted files, web page and database stored on a computer.

The web server also consists of an HTTP server. HTTP server is software that understands / receives URLs and requests via the HTTP protocol (the protocol used by the browser to display web pages).

At the simplest level, whenever a browser needs a file or other hosted on a web server, the browser makes the request to the server (it is said to send an HTTP request). When the request reaches the server, the HTTP server processes it and returns the response.

![Web Server](https://github.com/devtlv/studentsGitHub/assets/30896388/ddd254ce-dd31-49f1-a4b5-387202d99645)

In summary, the bottom line is that although an HTTP server may seem complicated, in fact it is just a succession of requests and responses. You will see here below that NodeJS allows you very easily to create an HTTP server and that it is very easy to read a request and send a response.

---

### **Creating an HTTP Server with NodeJS**

Here is an example of creating an HTTP server

```javascript
const http = require('http')

const server = http.createServer((req, res) => {
    // Send response
    res.end('Hello World from the server')
})

server.listen(5000, 'localhost', () => {
    console.log('Server is listening at localhost on port 5000')
})
```

Let’s see line by line the different steps for creating a server

Load the HTTP module:

```javascript
const http = require('http')
```

Server creation with a callback function. Note that there are two parameters that are passed to the function: `req` and `res`.

- `req`: will contain info on the incoming request

- `res`: will be used to define the outgoing response

```javascript
const server = http.createServer((req, res) => {
    // send the response
    res.end('Hello World from the server')
})
```

`res.end()` tells the server that the response is complete and can now be sent

Starting the server. The server will wait and read the requests that arrive on port 5000.

```javascript
server.listen(5000, 'localhost', () => {
    console.log('Server is listening at localhost on port 5000')
})
```

This is an endless loop. Each time a request will be sent to our server at port 5000 (ex: `localhost:5000`), the server will execute the callback (see previous code block) and therefore in this case send the response ‘Hello World from the server’

If you want to test this server, launch the application

```javascript
$ node app.js
Server is listening at localhost on port 5000
```

Open your browser and visit `localhost:5000`

The message ‘Hello World from the server’ should display in your browser

In fact if you visit any page ex: `localhost:5000/about` the same message will always be displayed.

It is possible to read the url path of the request ex: `/about` or `/home` etc. and return a different response depending on the path.

The path information is included in the request.

To read information about the request we will use the `req` object. which as you know contains all the information of the request.

Specifically, the url path is in the `req.url` property

Here is an example of a small HTTP server which, depending on the url received, displays a different page

```javascript
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>Home page</h1>')
    } else if (req.url === '/about') {
        res.end('<h1>About page</h1>')
    } else {
        res.end('page not found')
    }    
})

server.listen(5000, 'localhost', () => {
    console.log('Server is listening at localhost on port 5000')
})
```

---

### **HTTP Headers**

HTTP Headers allow the client and the server to pass additional information along with the request or response.

For example, the Header of a request could contain the format of its content ex. HTML or JSON and / or related information for user authentication.

---

### **Response Header example**

To add a header to the response, we need to add a function before the `res.end()` function

```javascript
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>Home page</h1>')
    } else if (req.url === '/about') {
        res.end('<h1>About page</h1>')
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html'
        })
        res.end('<h1>Page not found</h1>')
    }    
})

server.listen(5000, 'localhost', () => {
    console.log('Server is listening at localhost on port 5000')
})
```

**Explanations:**

1. The `writeHead` function allows you to specify the content type of the message, here ‘text/html’

2. The `statusCode` method sets the HTTP status code.
  
  - 200 translates to OK.
  - 404 translates to Not Found.

3. `HTTP headers` let the client and the server pass additional information with an HTTP request or response. We use the **Content-Type** header and set it to **text/html**.

4. When running the `res.end()` function NodeJS will include the Header to the response. The server now knows that the message is complete. This method must be called on each response.
  
  - We pass the data `'<h1>Page not found</h1>'` as the only parameter

---

### **Example**

The `http.createServer()` method includes request and response parameters which are supplied by Node.js

The **request** object can be used to get information about the current HTTP request (e.g. URL, request header, and data).

The **response** object can be used to send a response for a current HTTP request.

```javascript
const http = require('http'); 
const server = http.createServer((req, res) => {
    //1.
    res.statusCode = 200;
    //2.
    res.setHeader('Content-Type', 'text/html');
    //3
    res.end('Hello World');
});

server.listen(5000); 
console.log('Node.js web server at port 5000 is running..')
```

- `response.end([data[, encoding]][, callback])` : This method signals to the server that all of the response headers and body have been sent; that server should consider this message complete.

- The method, `response.end([data[, encoding]][, callback])`, MUST be called on each response.
[response.end() documentation](https://nodejs.org/api/http.html#http_response_end_data_encoding_callback)

Now, run your file and go to **localhost:5000** in your browser.
Open the **Network** tab and inspect the **Header** and **Response** tab.

![http server](https://github.com/devtlv/studentsGitHub/blob/master/JS/Week%207/Day2/Lesson/request%20http.png?raw=true)

---

### **Sending JSON**

The response we return from a web server can take a variety of formats : JSON, HTML, XML, CSV, PDFs, zipped files, audio, and video.

Here we want to send data in JSON format.

*Steps*:

1. Set the **Content-Type** header in our HTTP responses with the appropriate value.

2. Ensure that `res.end()` gets the data in the right format

We create a server that sends a JSON response

```javascript
const http = require('http'); 
const server = http.createServer((req, res) => {  
    //check the URL of the current request
    //check if the request URL is equal to /welcome.
    if (req.url == '/welcome') { 
        // 1. inform the client that we send a JSON response in the header with the appropriate content type.
        res.setHeader("Content-Type", "application/json");
        //2. 
        res.writeHead(200);
        res.end(JSON.stringify({ message: "Welcome New User"}));
        // OR
        // res.write(JSON.stringify({ message: "Welcome New User"}));  
        //res.end();  
    } else {
         res.end("Another page");  
    }
});
server.listen(5000);
console.log('Node.js web server at port 5000 is running..')
```

**Explanations:**

1. The **Content-Type** header is used to indicate the format of the data, also known as media type, that’s being sent with the request or response. In this case our `Content-Type` is `application/json`.

2. We tell the user that their request was successful by returning a status code of 200. In the `response.end()` call, our string argument contains valid JSON.

Check the Response tab in **localhost:5000**, you get :

```javascript
{"message":"Welcome New User"}
```

![http response](https://github.com/devtlv/studentsGitHub/blob/master/JS/Week%207/Day2/Lesson/json%20server.jpg?raw=true)

- [Documentation- response.write](https://nodejs.org/api/http.html#http_response_write_chunk_encoding_callback)

- [Documentation - response.writeHead](https://nodejs.org/api/http.html#http_response_writehead_statuscode_statusmessage_headers)

---

### **Your First HTTP Server**

Congratulations, you have created your first HTTP server. Although this is a very basic server for the moment, remember that an HTTP server is simply a succession of requests and responses.

So, in its simplest form, your web application will do just that. That is to say, process requests and return responses.

---

### **Introduction to ExpressJS**

Although NodeJS allows us to create our own HTTP server, to create a real web application we would have to code hundreds or even thousands of lines of code in order to handle all the possibilities and all the exceptions.

Fortunately for us there are several NodeJS libraries / frameworks that do this job for us.

The most popular of all is ExpressJS. ExpressJS is a framework (set of libraries) designed with NodeJS in order to greatly simplify web application development.

So we will see in detail later how to use ExpressJS in our NodeJS applications.

---

**Exercises**

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

**Exercise : Experiment further with your Server**

Experiment further by adding more routes or handling different paths as shown in the provided content. You can modify the code to respond differently based on the URL path requested by the client.

---

**Exercise : JSON response**

Create a server with the below JSON object as the response

```javascript
const json =
{
    "menu": {
        "firstCourse": "Vegetable Soup",
        "mainCourse": "Hamburger",
        "dessert": "Fruit salad"
    }
}
```
