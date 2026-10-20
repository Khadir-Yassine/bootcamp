# Exercises XP

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What we will learn:**

- Working with the DOM

- Event Handlers

- Forms

---

### **🌟 Exercise 1 : Change the article**

**Instructions**

Copy the code below, into a structured HTML file:

```javascript
<article>
    <h1> Some Facts </h1>
    <h2> The Chocolate </h2>
    <h3> History of the chocolate </h3>
    <p> Chocolate is made from tropical Theobroma cacao tree seeds. 
    Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
    <p> After the European discovery of the Americas, chocolate became 
    very popular in the wider world, and its demand exploded. </p>
    <p> Chocolate has since become a popular food product that millions enjoy every day, 
    thanks to its unique, rich, and sweet taste.</p> 
    <p> But what effect does eating chocolate have on our health?</p> 
</article>
```

1. Using a DOM property, retrieve the `h1` and console.log it.

2. Using DOM methods, remove the last paragraph in the `<article>` tag.

3. Add a event listener which will change the background color of the `h2` to red, when it’s clicked on.

4. Add an event listener which will hide the `h3` when it’s clicked on (use the *display:none* property).

5. Add a `<button>` to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

6. **BONUS** : When you hover on the `h1`, set the font size to a random pixel size between 0 to 100.(Check out this [documentation](https://www.w3schools.com/js/js_random.asp))

7. **BONUS** : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

---

### **🌟 Exercise 2 : Work with forms**

**Instructions**

Copy the code below, into a structured HTML file:

```javascript
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="firstname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lastname"><br><br>
  <input type="submit" value="Submit" id="submit">
</form> 
<ul class="usersAnswer"></ul>
```

1. Retrieve the form and console.log it.

2. Retrieve the inputs by their id and console.log them.

3. Retrieve the inputs by their `name` attribute and console.log them.

4. When the user submits the form (ie. `submit` event listener)
  
  - use `event.preventDefault()`, why ?
  - get the values of the input tags,
  - make sure that they are not empty,
  - create an `li` per input value,
  - then append them to a the `<ul class="usersAnswer"></ul>`, below the `form`.

The output should be :

```javascript
<ul class="usersAnswer">
    <li>first name of the user</li>
    <li>last name of the user</li>
</ul>
```

---

### **🌟 Exercise 3 : Transform the sentence**

**Instructions**

Add this sentence to your HTML file then follow the steps :

```javascript
<p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
<strong>end</strong> you <strong>will</strong> be great Developers!
<strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>
```

In the JS file:

1. Declare a global variable named `allBoldItems`.

2. Create a function called `getBoldItems()` that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the `allBoldItems` variable.

3. Create a function called `highlight()` that changes the color of all the bold text to blue.

4. Create a function called `returnItemsToDefault()` that changes the color of all the bold text back to black.

5. Call the function `highlight()` on **mouseover** (ie. when the mouse pointer is moved onto the paragraph), and the function `returnItemsToDefault()` on **mouseout** (ie. when the mouse pointer is moved out of the paragraph). Look at [this example](http://www.java2s.com/example/javascript/dom-event/addeventlistenermouseover-mouseover.html)

---

### **🌟 Exercise 4 : Volume of a sphere**

**Instructions**

1. Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:

```javascript
<!doctype html> 
<html lang="en"> 
    <head> 
        <meta charset="utf-8"> 
        <title>Volume of a Sphere</title> 
        <style>  
            body {
                padding-top:30px;
            } 

            label,input {
                display:block;
            }  
        </style> 
    </head> 
    <body> 
        <p>Input radius value and get the volume of a sphere.</p> 
        <form  id="MyForm"> 
            <label for="radius">Radius</label><input type="text" name="radius" id="radius" required> 
            <label for="volume">Volume</label><input type="text" name="volume" id="volume"> 
            <input type="submit" value="Calculate" id="submit">    
        </form> 
    </body> 
</html> 
```
