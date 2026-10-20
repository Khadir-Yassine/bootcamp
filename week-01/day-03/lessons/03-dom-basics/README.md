# DOM Basics

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn**

- How to change the content of HTML elements

- How to change the style (CSS) of HTML elements

- How to react to HTML DOM events

- How to add and delete HTML elements

---

### **DOM Basics**

**1. A small reminder**

- **HTML** is the structure of your page, the skeleton

- **CSS** controls the style of the page

- **JavaScript** makes the page dynamic.

- **The browser** is a program that interprets HTML and CSS and renders the structure and style into the page that you see.
It creates a *representation* of the document called **Document Object Model.**
This model allows JavaScript to access the text content and elements of the website document as **objects.**

---

**2. What is the DOM?**

The **Document Object Model** : the **DOM** makes websites interactive.
It allows a programming language, here JS, to manipulate the content, structure, and style.
It represents all page content as **objects** that can be modified.

When you click on *Inspect* and the *Arrow*, you can access the DOM in your browser.

---

**3. The document object**

The `document` object is a built-in object with many properties and methods that we can use to access and modify websites.
Take a look at the document object inside the console.

![document object](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week3/Day1/document%20object.png?raw=true)

![document body](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week3/Day1/document%20body.png?raw=true)

---

**4. The DOM Tree**

![dom tree](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week3/Day1/Example-of-DOM-Node-Tree.png?raw=true)

Every tree node is an **object**.

- Tags are **element nodes** and form the tree structure:

- `<html>` is at the root,

- `<head>` and `<body>` are its children.

- The text inside elements are **text nodes**. A text node contains only a string. It may not have children and is always a leaf of the tree.

Let’s look at the [DOM VIEWER](http://software.hixie.ch/utilities/js/live-dom-viewer/)
