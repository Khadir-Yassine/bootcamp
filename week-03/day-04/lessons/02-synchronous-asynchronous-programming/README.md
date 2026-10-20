# Synchronous & Asynchronous programming

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn :**

- Call Stack in Javascript

- Synchronous and Asynchronous Programming

- Callback Queue, Event Loop

---

## **Useful Resources**

- [Tutorial on JS call stack](https://felixgerschau.com/javascript-event-loop-call-stack/)

- [JavaScript Visualized: Event Loop](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif)

- [JS Visualizer 9000](https://www.jsv9000.app/)

---

![Illustration](https://miro.medium.com/v2/resize:fit:1400/1*AcLc2DIM6CX0fslWJ96BNQ.png)

### **Javascript Call Stack**

JavaScript can do one single thing at a time because it has only one call stack.

The call stack is a mechanism that helps the JavaScript interpreter to keep track of the functions that a script calls.

Every time a script calls a function, it’s added to the top of the call stack.
Every time the function exits, the interpreter removes it from the call stack.

---

**Process**

When you call a function, the engine pushes that function to the top of the stack, then creates an execution context.

As each function runs, the call-stack pops it off and moves on to the following function until it is empty and all functions have been run. This sequence is known as **LIFO** - **Last In First Out**.

```javascript
function thirdFunc() {
  console.log("Greetings from thirdFunc()");
}

function secondFunc() {
  thirdFunc();
  console.log("Greetings from secondFunc()");
}

function firstFunc() {
  secondFunc();
  console.log("Greetings from firstFunc()");
}

firstFunc();

// Greetings from thirdFunc()
// Greetings from secondFunc()
// Greetings from firstFunc()
```

![call stack #2](https://github.com/devtlv/studentsGitHub/blob/master/JS/Week%205/Day%202/Lessons/call%20stack%232.jpg?raw=true)

Adding to the stack

1. The file loads, and the `firstFunc()` function is being called and is added to the top of the call stack.

2. `firstFunc()` calls `secondFunc()`, which again is added to the call stack.

3. `secondFunc()` calls `thirdFunc()`, added to the call stack.

---

Removing from the stack

1. `thirdFunc()` doesn’t call any other functions. It displays `"Greetings from thirdFunc()"` and exits. When it exits, it is removed from the call stack.

2. With the result of `thirdFunc()`, `secondFunc()` displays `"Greetings from secondFunc()"`, exits and is being removed from the call stack.

3. With the result of `secondFunc()`, `firstFunc()` displays `"Greetings from firstFunc()"`, exits and is being removed from the call stack.

---

### **Synchronous Programming**

The nature of the call-stack reflects that JavaScript is essentially **single threaded**, and Javascript can run only one execution context at a time.
This means that while a function is being executed, the engine cannot run another context simultaneously.

**Synchronous**: Each event blocks the other until it had finished running.
It means that when a function is called - perhaps one making a request to a server for an image - nothing else could happen on the page till Javascript loaded that image.
For example, if you click a link before the image is loaded, Javascript would not handle the event until after the image was loaded.

```javascript
function secondFunc() {
  let result = 0;
  for(let i = 0; i < 1000000000; i++) {
    result += i;
  }
  console.log("Greetings from secondFunc()");
}

function firstFunc() {
  secondFunc();
  console.log("Greetings from firstFunc()");
}

firstFunc();

// Greetings from secondFunc()
// Greetings from firstFunc()
```

In the example above, the line `console.log("Greetings from firstFunc()");` will be executed only after the `secondFunc()` function finishes executing. If for some reason, the `secondFunc()` takes some time to finish executing, the `firstFunc()` will wait.

---

### **Asynchronous Programming**

JavaScript is a single-threaded programming language which means only one thing can happen at a time.
But you can still do things concurrently in the browser, this is what we call Asynchronous programming.

Asynchronous programming allows multiple things to happen at the same time. When you start an action, your program continues to run. When the action finishes, the program is informed and gets access to the result.

In Javascript we can program asynchronously through Web APIs that browsers provide.

**Web API**: application programming interface for the Web. The Web API has methods and properties that can extend the functionality of the browser. See the list of a few Web APIs [here](https://www.w3schools.com/jsref/api_web.asp).

For example, the global `setTimeout()` method is a Web API. It sets a timer which executes a function or specified piece of code once the timer expires. `setTimeout()` is an asynchronous function, meaning that the timer function will not pause execution of other functions in the functions stack.

```javascript
console.log("Start of script");

setTimeout(function() {
  console.log("First timeout completed");
}, 2000);

console.log("End of script");
```

In this example, the `setTimeout` method executes a function after a specified time. The function passed to `setTimeout` will be executed asynchronously, which means that the program will continue to execute the next line of code without waiting for the timeout to complete.

The execution will be

```javascript
Start of script
End of script
First timeout completed
```

The `console.log("First timeout completed")` will be executed after 2 seconds. Meanwhile, the script continues to execute the next code statement `console.log("End of script")` and doesn’t cause any “blocking” behaviour.

---

**Callback functions**

One approach to asynchronous programming is to make functions that perform a slow action take an extra argument, a callback function. The action is started, and when it finishes, the callback function is called with the result.

**A callback function is a function passed into another function as an argument**

```javascript
setTimeout(function() {
  console.log("First timeout completed");
}, 2000);
```

In the example above, the `function() {console.log("First timeout completed");}` is passed to the `setTimeout` function, as an argument.
The `setTimeout` starts, and finishes after 2000 ms, then the callback function is called with the result.

---

**Call stack and Callback queue**

![javascript-event-loop](https://github.com/devtlv/studentsGitHub/blob/master/Images%20cours%20%C3%A0%20h%C3%A9berger%20-%2006.03.2024/Week%207%20-%20Adv%20&%20Asynchronous%20Javascript/W7D3/225322717-8572f427-6401-41c5-a96e-741d65ce0613.png?raw=true)

```javascript
console.log("Start of script");

setTimeout(function() {
  console.log("First timeout completed");
}, 2000);

console.log("End of script");
```

Let’s analyse the example above,

1. The `console.log("Start of script");` is added to the call stack and is executed

2. The `setTimeout(function() {}, 2000)` is added to the call stack and triggers the execution of the Web API

3. While we wait 2000 ms, `console.log("End of script")` is added to the call stack and is executed

4. After 2 seconds, the callback function `function() {console.log("First timeout completed");}` of the `setTimeout` method, is added to the callback queue. The event loop then takes the callback from the queue and adds it to the call stack as soon as the call stack is empty, and executes the function.

This is why we receive this result:

```javascript
Start of script
End of script
First timeout completed
```

Unlike the call stack, the callback queue follows the *FIFO* order (First In, First Out), meaning that the calls are processed in the same order they’ve been added to the queue.

---

**Event Loop**

The JavaScript event loop takes the first call in the callback queue and adds it to the call stack as soon as it’s empty. Meaning that if the call stack is currently executing some code, the event loop is blocked and won’t add any calls from the queue until the stack is empty again.

That’s why it’s important not to block the call stack by running computation-intensive tasks.

Take a look at this example:

```javascript
setTimeout(() => {
    return "Hey"
}, 1000);
```

1. Web APIs
  
  ![webApi](https://github.com/devtlv/studentsGitHub/blob/master/Images%20cours%20%C3%A0%20h%C3%A9berger%20-%2006.03.2024/Week%207%20-%20Adv%20&%20Asynchronous%20Javascript/W7D3/225326875-5e9b11d5-0a7e-4fba-a3b4-612a1a7f857d.gif?raw=true)

2. Callback Queue
In the Web API, a timer runs for 1000 ms. After 1000 ms, the callback function doesn’t immediately get added to the call stack, instead it’s passed to the callback queue.
  
  ![callback-queue](https://github.com/devtlv/studentsGitHub/blob/master/Images%20cours%20%C3%A0%20h%C3%A9berger%20-%2006.03.2024/Week%207%20-%20Adv%20&%20Asynchronous%20Javascript/W7D3/225327406-a552f4e1-424f-4ffe-92d0-76c85f44fd91.gif?raw=true)

3. Event Loop
The event loop connects the queue with the call stack.
  
  - If the call stack is empty, so if all previously invoked functions have returned their values and have been popped off the stack, the first item in the queue gets added to the call stack.
  
  ![event loop](https://github.com/devtlv/studentsGitHub/blob/master/Images%20cours%20%C3%A0%20h%C3%A9berger%20-%2006.03.2024/Week%207%20-%20Adv%20&%20Asynchronous%20Javascript/W7D3/225325026-cb43b9b4-fd5c-42a8-b15c-0ccf3a4c5797.gif?raw=true)

Take a look at this example:

```javascript
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 500);
const baz = () => console.log("Third");

bar();
foo();
baz();
```

![globalex](https://github.com/devtlv/studentsGitHub/blob/master/Images%20cours%20%C3%A0%20h%C3%A9berger%20-%2006.03.2024/Week%207%20-%20Adv%20&%20Asynchronous%20Javascript/W7D3/225324919-a63a590f-82a0-40b9-be97-86ff88153d9e.gif?raw=true)
