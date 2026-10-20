# Exercises XP : Animations

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What we will learn:**

- DOM Manipulation

- Animation with the DOM

---

### **🌟 Exercise 1: Timer**

**Instructions**

Using this HTML code:

```javascript
<!DOCTYPE html>
    <html>
    <head>
        <style>
        p {
          background: yellow;
          color: red;
        }
        </style>
    </head>
    <body>
        <div id="container"></div>
        <button id="clear">Clear Interval</button>
    </body>
    </html>
```

**Part I**

1. In your Javascript file, using `setTimeout`, call a function after 2 seconds.

2. The function will alert “Hello World”.

**Part II**

1. In your Javascript file, using `setTimeout`, call a function after 2 seconds.

2. The function will add a new paragraph `<p>Hello World</p>` to the `<div id="container">`.

**Part III**

1. In your Javascript file, using `setInterval`, call a function every 2 seconds.

2. The function will add a new paragraph `<p>Hello World</p>` to the `<div id="container">`.

3. The interval will be cleared (ie. `clearInterval`), when the user will click on the button.

4. Instead of clicking on the button, the interval will be cleared (ie. `clearInterval`) as soon as there will be 5 paragraphs inside the `<div id="container">`.

---

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


[Worked solutions](solutions.md)
