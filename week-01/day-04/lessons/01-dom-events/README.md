# DOM Events

Course source: [Geeks Institute](https://www.geeks.institute/).
### **Description :**

DOM Events are fired to notify code of “interesting changes” that may affect code execution. These can arise from user interactions such as using a mouse or resizing a window, changes in the state of the underlying environment (e.g., low battery or media events from the operating system), and other causes.

Click, touch, load, drag, change, input, error, resize — the list of possible DOM events is lengthy. Events can be triggered on any part of a document, whether by a user’s interaction or by the browser. They don’t just start and end in one place; they flow through the document, on a life cycle of their own. This life cycle is what makes DOM events so extensible and helpful. As a developer, you should understand how DOM events work so that you can harness their potential and build engaging experiences.

### **I. Two ways of writing Event handlers**

An event handler is a function that runs in case of an event.

**1. Inline Event Handler : set in HTML with an attribute onevent**

```javascript
    <form>
        <input type="button" name="test" value="Click me" onclick="inform()">
    </form>

    <script>
        function inform(){
            alert("You clicked me")
        }
    </script>
```

---

**2. DOM property: set a handler using a DOM property onevent.**

```javascript
    <form>
        <input id="button" type="button" name="test" value="Click me">
    </form>

    <script>
       document.getElementById('button').onclick = function() {
            alert('Click!');
        };
    </script>
```

---

**Some Event Handler**

| Name | Goal |
| --- | --- |
| `onclick()` | invoke JavaScript upon clicking (a link, or form boxes) |
| `onload()` | invoke JavaScript after the page or an image has finished loading. |
| `onmouseover()` | invoke JavaScript if the mouse passes by some link |
| `onmouseout()` | invoke JavaScript if the mouse goes pass some link |
| `onunload()` | invoke JavaScript right after someone leaves this page. |

[More EventHandlers](https://www.javatpoint.com/understanding-html-dom-events)

---

**Exercise 1**

Create a structured HTML file, and add the code below in the body.

In a JS file, write a JavaScript function to add rows to a table. Use the code below as a base

```javascript
<table id="sampleTable" border="1"> 
<tr>
    <td>Row1 cell1</td> 
    <td>Row1 cell2</td>
</tr> 
<tr>
    <td>Row2 cell1</td> 
    <td>Row2 cell2</td>
</tr> 
</table>

<input type="button" onclick="insertRow()" value="Insert row">  
```

---

### **II. this keyword**

The value of `this` inside a handler is the element. The one which has the handler on it.

```javascript
<button onclick="alert(this.innerHTML)">Click me</button>
```

---

### **III. addEventListener(): multiple events on the same element**

The `addEventListener` event listens to DOM events that’s trigger and runs the callback function that you pass into it when the event happens.

`element.addEventListener(DOM events, callback function);`

The callback function has one argument which contains the details of the event that was triggered : the `event object` that we will see soon.

The `removeEventListener()` method removes an event handler that has been attached with the addEventListener() method.

Note: To remove event handlers, the function specified with the `addEventListener()` method must be an external function.

```javascript
<html>
<body>
    <button id="btn">Click me</button>
    <button id="btn1">Hey Hey</button>

    <script>
        let x = document.getElementById("btn")
        let y = document.getElementById("btn1")

        y.addEventListener("click", RespondClick);
        y.addEventListener("mouseover", RespondMouseOver);

        x.addEventListener("click", RespondClick); 
        x.addEventListener("mouseover", RespondMouseOver); 
        x.addEventListener("mouseout", RespondMouseOut); 

        function RespondClick() { 
            alert("Button Clicked")
        } 

        function RespondMouseOver() { 
            alert("My mouse is over the btn")
        } 

        function RespondMouseOut() { 
            alert("My mouse is out of the btn")
        }     

    </script>
</body>
</html>
```

---

### **IV. Event object**

When an event happens, the browser creates an event object, puts details into it and passes it as an argument to the handler.

Event Object properties

| Name | Description |
| --- | --- |
| `e` | The object containing the event properties |
| `type` | The event that occurred (click, focus, blur, etc.) |
| `target` | The element to which the event occurred |

```javascript
<html>
<body>
    <button id="btn">Click me</button>
    <button id="btn1">Hey Hey</button>

    <script>
        let x = document.getElementById("btn")
        let y = document.getElementById("btn1")

        y.addEventListener("mouseover", RespondMouseOver);

        x.addEventListener("mouseover", RespondMouseOver); 

        function RespondMouseOver(e) { 
            console.log("e", e) 
            // all the properties of the event object
            console.log("My mouse is over the btn named" + e.target.innerHTML)
            console.log("e.type: ", e.type)
            // e.type: mouseover
            console.log("e.target: ", e.target)
            // e.target:  <button id=​"btn1">​Hey Hey​</button>​
        } 
    </script>
</body>
</html>
```

---

**Exercise 2**

Add a few event listener to the button. The event listeners should change the style of the button

```javascript
<button id="jsstyle">Style</button> 
```

---

### **V. Event Propagation**

`addEventListener` takes 3 arguments as follows:

1. Name of an event.

2. The callback function to run some code when the specified event is triggered.

3. Optional: the Boolean value of capture. (Set to false by default).

`element.addEventListener(DOM events, callback function, boolean value);`

**Event Propagation** : relates to the order in which event handlers are called when one element is nested inside a second element, and both elements have registered a listener for the same event (a click, for example).

---

**Event Bubbling : the event is first captured and handled by the innermost element and then propagated to outer elements.**

```javascript
<html>
<body>

    <style>
        div { border : 2px solid blue}
        button { border : 2px solid red}
    </style>

    <section id="section">
        <div id="div">
            <button id="btn">Click me</button>
        </div>
    </section>
    <script>
       let x = document.getElementById("btn")
       let y = document.getElementById("div")
       let z = document.getElementById("section")

       x.addEventListener("click", XRespondClick); 
       y.addEventListener("click", YRespondClick); 
       z.addEventListener("click", ZRespondClick); 

       function XRespondClick(e) { 
           alert("BTN is Clicked")
       }    

       function YRespondClick(e) { 
           alert("DIV is Clicked")
       }    

        function ZRespondClick(e) { 
           alert("SECTION is Clicked")
       }  

        //Result if I click on the button
        // Alert : BTN is Clicked
        // Alert : DIV is Clicked
        // Alert : SECTION is Clicked
        // --> The event is triggered from the element that its clicked to the top

    </script>

</body>
</html>
```

---

**Event capturing: the event is first captured by the outermost element and propagated to the inner elements.**

```javascript
<html>
<body>

    <style>
        div { border : 2px solid blue}
        button { border : 2px solid red}
    </style>

    <section id="section">
        <div id="div">
            <button id="btn">Click me</button>
        </div>
    </section>
    <script>
       let x = document.getElementById("btn")
       let y = document.getElementById("div")
       let z = document.getElementById("section")

       x.addEventListener("click", XRespondClick, true); 
       y.addEventListener("click", YRespondClick, true); 
       z.addEventListener("click", ZRespondClick, true); 

       function XRespondClick(e) { 
           alert("BTN is Clicked")
       }    

       function YRespondClick(e) { 
           alert("DIV is Clicked")
       }    

        function ZRespondClick(e) { 
           alert("SECTION is Clicked")
       }  

        //Result if I click on the button
        // Alert : SECTION is Clicked
        // Alert : DIV is Clicked
        // Alert : BTN is Clicked
        // --> The event is triggered from the top to the element that what clicked 

    </script>

</body>
</html>
```

---

**Stop the bubbling event.stopPropagation()**

```javascript
   <html>
<body>

    <style>
        div { border : 2px solid blue}
        button { border : 2px solid red}
    </style>

    <section id="section">
        <div id="div">
            <button id="btn">Click me</button>
        </div>
    </section>
    <script>
       let x = document.getElementById("btn")
       let y = document.getElementById("div")
       let z = document.getElementById("section")

       x.addEventListener("click", XRespondClick); 
       y.addEventListener("click", YRespondClick); 
       z.addEventListener("click", ZRespondClick); 

       function XRespondClick(e) { 
           alert("BTN is Clicked")
           e.stopPropagation()
       }    

       function YRespondClick(e) { 
           alert("DIV is Clicked")
       }    

        function ZRespondClick(e) { 
           alert("SECTION is Clicked")
       }  

        //Result if I click on the button
        // Alert : BTN is Clicked
        // --> The bubbling stopped

    </script>

</body>
</html>
```

---

**Exercise 3**

Add a click event listener to the div

Add a few event listeners to the button. With at least one click event. The event listeners should change the style of the button

Check how the propagation works and try to prevent it

```javascript
<div>
    <button id="jsstyle">Style</button>
</div>
```
