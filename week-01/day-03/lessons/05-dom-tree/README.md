# DOM Tree

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What You Will Learn**

- How to change the content of HTML elements

- How to change the style (CSS) of HTML elements

- How to react to HTML DOM events

- How to add and delete HTML elements

---

### **What is DOM in JavaScript?**

JavaScript can access all the elements in a web page using the Document Object Model (DOM). The web browser creates a DOM of the webpage when the page is loaded. The DOM model is created as a tree of objects like this:

**How to use DOM and Events ?**

Using DOM, JavaScript can perform multiple tasks. It can create new elements and attributes, change the existing features and characteristics and even remove existing elements and attributes. JavaScript can also react to current events and create recent events on the page.

---

### **Accessing DOM nodes**

All elements of an HTML document are **nodes**, including the entire document and all the HTML tags contained within it.
DOM document consists of a hierarchy of nodes. Each node can have a parent and/or children.
`<html>` is a node in the document tree. It has 2 children: `<head>` and `<body>` nodes.

---

**Accessing elements**

`element.children[index]`
`element.firstElementChild`
`element.lastElementChild`
`element.parentNode`
`element.nextElementSibling`
`element.previousElementSibling`
`element.textContent`

---

**Accessing nodes with methods**

`element.getElementById()`
`element.getElementsByClassName()`
`element.getElementsByTagName()`
`element.querySelector()`

---

| Method | Searches by… | Return |
| --- | --- | --- |
| `querySelector` | CSS-selector | Returns the `first` Element within the document that matches the<br>specified selector, or group of selectors. If no matches are found, `null` is returned. |
| `querySelectorAll` | CSS-selector | Returns all elements (a list) matching the given CSS selector. |
| `getElementById` | `id` | Returns the element **with the specific id** |
| `getElementsByTagName` | tag or ‘*’ | Returns an **array of all the items with the same tag name**. |
| `getElementsByClassName` | `class` | Returns an **array of all the items with the same class name**. |

---

**1. getElementById, innerHTML**

`getElementById`: To access elements and attributes whose `id` is set.
`innerHTML`: To access the content of an element.

---

**Example:**

```javascript
<html>
<head>
    <title>DOM!!!</title>
</head>
<body>
  <h1 id="one">Welcome</h1>
  <p>This is the welcome message.</p>
  <h2>Technology</h2>
  <p>This is the technology section.</p>

  <script>
        let text = document.getElementById("one").innerHTML;
        alert("The first heading is " + text); //output : "The first heading is Welcome"
  </script>

</body>
</html>
```

---

**2. getElementsByTagName**

`getElementsByTagName`: To access elements and attributes using tag name.

This method will return an **array of all the items with the same tag name**.

- **elements** is a collection of all the found elements in the order they appear with the given tag name.

- **name** is a string representing the name of the elements. The special string `“*”`represents all elements.

---

**Example:**

```javascript
<html>
<head>
    <title>DOM!!!</title>
</head>
<body>
  <h1>Welcome</h1>
  <p>This is the welcome message.</p>
  <h2>Technology</h2>
  <p id="second">This is the technology section.</p>

  <script>
    let paragraphs = document.getElementsByTagName("p");
    alert("Content in the second paragraph is " + paragraphs[1].innerHTML);
    document.getElementById("second").innerHTML = "The orginal message is changed.";
  </script>

</body>
</html>
```

**Don’t forget the “s” letter!**

The “s” letter is absent in `getElementById`, because it returns a single element. But `getElementsByTagName` returns a collection of elements, so there’s “s” inside.

It returns a collection, not an element!

Another widespread novice mistake is to write:

```javascript
// doesn't work
document.getElementsByTagName('input').value = 5;
```

That won’t work because it takes a collection of inputs and assigns it to it rather than to elements inside it.

We should either iterate over the collection or get an element by its index, and then assign, like this:

```javascript
// should work (if there's an input)
document.getElementsByTagName('input')[0].value = 5;
```

---

### **Creating/Adding/Deleting DOM nodes**

**1. Creating elements: createElement()**

```javascript
  Syntax : document.createElement('tag')
  let newDiv = document.createElement('div')  
```

---

**2. Creating text: createTextNode()**

```javascript
Syntax : document.createTextNode('text')  
let newTextNode = document.createTextNode('Here I am');
```

---

**3. Adding element : appendChild()**

Adding an element as the last child of the node parent

```javascript
Syntax: `element.appendChild`
newDiv.appendChild(newTextNode);
document.body.appendChild(newDiv);
```

---

**4. Accessing / Changing the HTML content of an element: innerHTML**

```javascript
document.getElementById("header").textContent = "Hello World!";
document.getElementsByTagName("div")[0].innerHTML = "<h1>Hello World!</h1>"
```

---

**5. Deleting elements: removeChild()**

```javascript
let parentElem = document.getElementById("main");
let childElem = document.getElementById("hint");
parentElem.removeChild(childElem);
```

---

**Some more examples:**

```javascript
// getElementById('id')
document.getElementById('demo');

// getElementsByClassName('class')
document.getElementsByClassName('demo');

// getElementsByTagName('tag')
document.getElementsByTagName('p');

// querySelector('css selector')
document.querySelector('#demo-query');

// querySelectorAll('css selector')
    let demoQueryAll = document.querySelectorAll('.demo-query-all');

    demoQueryAll.forEach(query => {
      query.style.border = '1px solid green';
    });
```

---

### **Cache selectors**

If you are working several times with one element, you should put it in a variable. For example:

```javascript
document.getElementById("menu").style.background = "red";
document.getElementById("menu").style.display = "block";
```

In the process above, the element is searched twice in the DOM tree. If the DOM is complex, this is a heavy operation.

Therefore, add this element to a variable (cache it):

```javascript
let item = document.getElementById("menu");
item.style.background = "red";
item.style.display = "block";
```

In the process above, the element is searched once in the DOM tree. It’s faster and more efficient.

---

### **Other methods**

**querySelectorAll()**

**querySelectorAll()** examples:

By far, the most versatile method, `elem.querySelectorAll(css)` returns all elements inside elem matching the given CSS selector.
This method is indeed powerful because any CSS selector can be used.

Here we look for all `<li>` elements that are last children:

```javascript
    <ul>
      <li>The</li>
      <li>test</li>
    </ul>
    <ul>
      <li>has</li>
      <li>passed</li>
    </ul>

    <script>
      let elements = document.querySelectorAll('ul > li:last-child');

      for (let elem of elements) {
        alert(elem.innerHTML); // "test", "passed"
      }

    </script>
```

We can use **pseudo-classes** as well.

Pseudo-classes in the CSS selector like `:hover` and `:active` are also supported.
For instance, `document.querySelectorAll(':hover')` will return the collection with elements that the pointer is hovering on now (in nesting order: from the outermost to the most nested one).

---

**matches()**

**matches()** examples:

The `elem.matches(css)` does not look for anything; it only checks if an element matches the given CSS-selector. It returns true or false.
This method comes in handy when we are iterating over elements (like in an array ) and, trying to filter out those that interest us.

```javascript
<a href="http://example.com/file.zip">...</a>
<a href="http://ya.ru">...</a>

<script>
  // can be any collection instead of document.body.children
  for (let elem of document.body.children) {
    if (elem.matches('a[href$="zip"]')) {
      // check if it ends with "zip"
      alert("The archive reference: " + elem.href );
    }
  }

</script>
```

---

**closest()**

**closest** examples:

Ancestors of an element are the parent, grandparent, great grandparent, and so on. The ancestors together form the chain of parents from the component to the top.

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body><! -- The parent of div Grandparent of ul Great-Grandparent of li -->
<div><! -- The Parent of ul Grandparent of li-->
    <ul> <! --The Parent of li -->
        <li>Child</li>
        <li>Child</li>
        <li>Chil</li>
    </ul>
</div>
</body>
</html>
```

The method `elem.closest(css)` looks at the nearest ancestor that matches the CSS-selector. The element itself is also included in the search.

In other words, the method closest goes up from the element and checks each of the parents. If it matches the selector, then the search stops, and the ancestor is returned.

```javascript
    <h1>Contents</h1>

    <div class="contents">
      <ul class="book">
        <li class="chapter">Chapter 1</li>
        <li class="chapter">Chapter 1</li>
      </ul>
    </div>

    <script>
      let chapter = document.querySelector('.chapter'); // LI

      alert(chapter.closest('.book')); // UL
      alert(chapter.closest('.contents')); // DIV

      alert(chapter.closest('h1')); // null (because h1 is not an ancestor)
    </script>
```

---

**Exercise 2**

```javascript
<html>
<body>
  <div id="container">Users:</div>
  <ul class="list">
    <li>John</li>
    <li>Pete</li>
  </ul>
  <ul class="list">
    <li>Sarah</li>
    <li>Dan</li>
  </ul>
</body>
</html>
```

For each of the questions, find **2 WAYS** to access :

1. The *div* node

2. The *ul* nodes, and render all of it's children one by one

3. The first *li* of each *ul*


[Worked solutions](solutions.md)
