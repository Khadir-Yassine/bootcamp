# DOM attributes

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn :**

1. DOM Selectors
  
  - getAttribute
  - setAttribute

2. Changing Styles
  
  - style.{property}
  - className
  - classList
  - classList.add
  - classList.remove
  - classList.toggle

3. Using `className` and `classList` is a better method to add or remove style to the element.

---

## **Useful Resources**

- [Using DOM attributes with CSS](https://css-tricks.com/working-with-attributes-on-dom-elements/)

---

### **HTML Attributes**

**1. Accessing and changing a value of an attribute**

| Method | Goal |
| --- | --- |
| `elem.hasAttribute(name)` | checks for existence. |
| `elem.getAttribute(name)` | gets the value of an attribute.<br>If the attribute does not exist, an empty string is returned |
| `elem.setAttribute(name, value)` | modifies dynamically the value of an element’s attribute.<br>The method takes two parameters- the name of the attribute to set, and its new value |
| `elem.removeAttribute(name)` | remove the entire HTML attribute from an element |

---

**Example:**

```javascript
<body>
  <div id="elem" about="Elephant" style=""></div>

  <script>
    let newDiv = document.getElementById("elem")

    //getAttribute('name attribute')
    newDiv.getAttribute('about'); // return 'Elephant'

    //setAttribute(name attribute, value attribute)
    newDiv.setAttribute('style', "color:blue;");  

    //you get --> <div id="elem" about="Elephant" style="color:blue" ></div>

    //loop through the attributes of an element
    for (let attr of newDiv.attributes) { // Lists all attributes
      alert(attr.name + '=' + attr.value);
    }
  </script>
</body>
```

---

** Other Examples:**

Add a link to the src attribute of the first image in the HTML file.

```javascript
document.getElementsByTagName("img")[0].src = "test.jpg"; // set the attribute src of the image with test.jpg
```

```javascript
<input type="text" id="elem" value="Write your name">

<script>
  let newInput= document.getElementById("elem")
  elem.type; // "text"
  elem.id; // "elem"
  elem.value // "Write your name"
</script>
```

---

**Exercise 1**

```javascript
<html>
<body> 
    <p>
        <a id="geeks" type="text/html" hreflang="en-us" rel="nofollow" target="_self" href="https://google.com/">Google</a>
    </p> 
</body>
</html> 
```

Write variables to get the value of the attributes of the specified link :

- href

- hreflang

- rel

- target

- type

---

**2. Changing the style of a element : **[**elem.style.property**](http://elem.style.property/)

```javascript
<div id="elem">
  <div id="elem-content">Element</div>
</div>

<script>
  // get the element
  let elem = document.getElementById('elem');

  // make its background red
  elem.style.background = 'red';
</script>
```

---

**3. DOM className Property**

`className` property is used to set or return the value of an element’s class attribute.

- returns the `className` property

```javascript
Syntax : element.className;
```

- sets the `className` property and overwrite the previous class if there was one

```javascript
Syntax : element.className = 'newClassName';
```

---

**4. DOM classList Property**

`classList` property is used to access an element’s list of classes

| Method | Goal |
| --- | --- |
| `elem.classList.add(nameOfClass)` | Add a new class to the element |
| `elem.classList.remove(nameOfClass)` | Remove the class from the element |
| `elem.classList.add(nameOfClass, otherClass, etc...)` | Add a several new classes to the element |
| `elem.classList.remove(nameOfClass, otherClass, etc...)` | Remove several classes from the element |
| `elem.classList.replace(oldClass, newClass)` | Replace the former class by the new one |
| `elem.classList.contains(nameOfClass)` | Boolean : check if the attribute contains the class |
| `elem.classList.toggle(nameOfClass, true/false)` | Toggles between adding and removing the class<br><br><br>The first parameter removes the specified class from an element, and returns false. If the class does not exist, it is added to the element, and the return value is true.<br>The optional second parameter is a Boolean value that forces the class to be added or removed, regardless of whether or not it already existed |

---

**Example:**

```javascript
<body>
  <div id="elem" about="Elephant" class="foo"></div>

  <script>
    let div = document.getElementById("elem")

    // remove class : remove('name of class')
    div.classList.remove("foo");

    // add class : add ('name of class')
    div.classList.add("anotherclass");
    //<div id="elem" about="Elephant" class="anotherclass"></div>

    // add or remove multiple classes
    div.classList.add("foo", "bar", "baz");
    div.classList.remove("foo", "bar", "baz");

    // replace class "foo" with class "bar"
    div.classList.replace("foo", "bar");

    // check if the attribute class contains foo : return True or False
    div.classList.contains("foo");

    // if visible is set remove it, otherwise add it
    div.classList.toggle("visible");

    // add/remove visible, depending on test conditional, i less than 10
    div.classList.toggle("visible", i < 10 );   

  </script>
</body>
```

**Read this article : **[**Explanation of classList**](https://alligator.io/js/classlist/)

---

**toggle property examples**

- [1st example](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_classlist_toggle)

- [2nd example](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick_dropdown)

---

**Exercise 2**

```javascript
<html>
<body> 
    <p id ='text'>DOM Attributes! Yeahhh !!</p>  
</body> 
</html> 
```

Modify the style of the paragraph text (such as fontSize, fontFamily, color, etc. )through javascript code.
