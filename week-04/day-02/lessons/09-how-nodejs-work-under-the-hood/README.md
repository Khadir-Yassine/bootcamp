# How NodeJS work under the hood

Course source: [Geeks Institute](https://www.geeks.institute/).
### **How NodeJS Work Under the Hood**

In this section we will do a little theory and find out how NodeJS executes its JavaScript code.

As you know, NodeJS allows to execute asynchronous code. This concept may seem simple but in the background it is a bit more complicated.

What determines what code is executed? What determines the order of execution?

Understanding these concepts is essential for developing with NodeJS. No need to become an expert on the subject but at least understand the basics.

Note that some concepts have been simplified in order to better explain them.

---

### **The architecture of NodeJS**

NodeJS is composed of two main parts the V8 machine and the libuv library

![NodeJS Architecture](https://github.com/devtlv/studentsGitHub/assets/30896388/51cd5509-1b9b-443d-af7c-3e0cc59b497a)

**The V8 Engine**

Take care of converting JavaScript code into machine code. Once the code has been converted into machine code, the execution will be managed by the libuv library

**libuv**

Is an open-source library, written in C ++ which specializes in asynchronous i/o execution (ex. File system, Networking and more)

libuv implements two very important features of NodeJS: the Event Loop and the Thread Pool

An important point to understand is that NodeJS works in single thread mode.

That is, it can only perform one task at a time. If a task requires too much time/resource then it will block/prevent other tasks from running.

Imagine, for example, if there were 100,000 users on the site at the same time requesting access to the database, the response time would quickly become unacceptable. This is why NodeJS needs efficient management of asynchronous code execution ....

**That’s the job of the Event Loop**

The Event Loop is used to manage asynchronous code such as callbacks, network promises and requests which require little resource. And when a task takes too long to execute, so as not to block the thread, the Event Loop will delegate this work to the Thread Pool.

The Thread Pool can run tasks in parallel and therefore takes care of more cumbersome tasks such as access to the file system and very demanding processes such as for example video conversions or cryptography.

---

### **Execution order of a NodeJS application**

When running a NodeJS application, the initialization code, ‘requires’ and top level code are executed immediately one after the other.

The callbacks encountered in our code are not executed immediately because potentially blocking, it would block the application to other tasks and other users. These callbacks are therefore registered with the Event Loop

Once the “top level” code has been executed, NodeJS will give control to the Event Loop so that it can execute the tasks it contains.

The Event Loop decides, according to pre-defined criteria, which execution order must be respected. The Event Loop can also decide to delegate a really long task to the Thread Pool. (eg access to the file system).

The Thread Pool can execute several tasks at the same time (multi-thread) and will return the result to the Event Loop

As long as there are tasks to be performed, the Event Loop will keep the application active.

Once all the tasks of the Event Loop are finished, control is given back to the main Thread of your application which will terminate the program.

---

### **NodeJS as an example**

The theory is fine, but let’s review it all this time with a concrete example

```javascript
const fs = require("fs");

console.log("First task started");

fs.readFile("./data/products.json", "utf8", (err, data) => {
  console.log(data);
  console.log("First task ended");
});

console.log("Second task started");
```

Result

```javascript
First task started
Second task started
{
     "name": "iPhone 12",
     "price": 900
}

First task ended
```

Based on the logic explained earlier, NodeJS will execute the code in the following order:

```javascript
→ const fs = require (fs)

→ console.log('First task started')

→ registering the readFile callback with the Event Loop

→ console.log('Second task started')

→ High level tasks completed, the hand is therefore passed to the Event Loop

→ readFile callback → Delegate to the Thread Pool

  → When the readFile is finished

      → console.log(data)

      → console.log('First task ended')

   → If no other pending task then ends the Event Loop

   → End of the program
```

---

### **Exemple with SetTimeout Zero**

```javascript
console.log("First");

setTimeout(() => {
  console.log("Second");
}, 0);

console.log("Thrid");
```

Result

```javascript
First
Third
Second
```

You would have thought that with a setTimeOut of 0 it would be executed immediately? But no, as seen previously, NodeJS sends the callbacks to the Event Loop and executes the top level code first.

Based on this logic, the NodeJS will execute the code in the following order:

```javascript

→ console.log('First')

→ register setTimeout callback with the Event Loop

→ console.log('Third')

→ Hand over to the Event Loop

→ callback setTimeout

     → console.log('Second')

 → If no other task then ends the Event Loop

 → End of the program
```

---

### **Server example**

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>Home page</h1>");
  } else if (req.url === "/about") {
    res.end("<h1>About page</h1>");

    let i = 0;
    do {
      i++;
    } while (i < 10000000000);
  } else {
    res.end("page not found");
  }
});

server.listen(5000, "localhost", () => {
  console.log("Server is listening at localhost on port 5000");
});
```

There are two lessons to be learned from this example.

- First, the NodeJS app is never going to stop. The Event Loop is endless since it waits for events from the server. The ‘listen’ function keeps the Event Loop active.

- Finally, when a user visits the about page, Node will execute the ‘do while’ and since it is not asynchronous code access to the website will be temporarily blocked for all users until the do while end. This is a good example of how NodeJS is single threaded and you have to be careful how you code your application.

- For example, in this case, it would be better to place the do while inside an async function so as not to block the thread.

---

### **Conclusion**

Understanding how NodeJS operates under the hood, including the Event Loop, Thread Pool, and execution order, is crucial for developing efficient and responsive applications. While NodeJS is single-threaded, its architecture enables asynchronous handling of tasks, optimizing performance and scalability.

By grasping these concepts, you’ll be better equipped to create well-structured and responsive NodeJS applications that make the most of its asynchronous capabilities.
