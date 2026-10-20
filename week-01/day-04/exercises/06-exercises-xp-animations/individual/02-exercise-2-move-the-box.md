# 🌟 Exercise 2 : Move the box

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

## **🌟 Exercise 2 : Move the box**

**Instructions**

```javascript
<!DOCTYPE html>
    <html>
    <head>
        <style>
        #container {
          width: 400px;
          height: 400px;
          position: relative;
          background: yellow;
        }
        #animate {
          width: 50px;
          height: 50px;
          position: absolute;
          background-color: red;
        }
        </style>
    </head>
    <body>
        <p><button onclick="myMove()">Click Me</button></p>
        <div id="container">
          <div id="animate"></div>
        </div>
    </body>
    </html>
```

1. Copy the code above, to a structured HTML file.

2. In your Javascript file, use `setInterval` to move the `<div id="animate">` to the right side of the `<div id="container">`, when the button is clicked on.

The `<div id="animate">` should move `1px` to the right every milisecond, until it reaches the end of the `<div id="container">`.
*Hint* : use `clearInterval` as soon as the box reaches the right end side of the container
*Hint* : check out the demonstration in the Course Noted named *JS Functions*

![Exercise2](https://github.com/devtlv/studentsGitHub/blob/master/Images%20cours%20%C3%A0%20h%C3%A9berger%20-%2006.03.2024/Week%206%20-%20Javascript%20&%20DOM/W6D2/168036336-8580c062-5450-46b6-b738-91243276f7b5.gif?raw=true)
