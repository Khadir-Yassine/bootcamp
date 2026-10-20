# DOM - Cheatsheet

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What is DOM (Document Object Model)**

- JavaScript can change all the HTML elements on the page

- JavaScript can change all the HTML attributes on the page

- JavaScript can change all the CSS styles on the page

- JavaScript can remove existing HTML elements and attributes

- JavaScript can add new HTML elements and attributes

- JavaScript can react to all existing HTML events on the page

- JavaScript can create new HTML events on the page

---

## **Ways to Select Elements**

- Finding HTML elements by id

- Finding HTML elements by tag name

- Finding HTML elements by class name

- Finding HTML elements by CSS selectors

- Finding HTML elements by HTML object collections

---

## **Finding HTML Elements**

| Method | Description |
| --- | --- |
| document.getElementById(id) | Find an element by element id |
| document.getElementsByTagName(name) | Find elements by tag name |
| document.getElementsByClassName(name) | Find elements by class name |
| document.querySelector(name) | Find element by id, tag, class, etc. |
| document.querySelectorAll(name) | Find elementS by id, tag, class, |

---

## **Changing HTML Elements**

| Property | Description |
| --- | --- |
| element.innerHTML/innerText = new html content | Change the inner HTML of an element |
| element.attribute = new value | Change the attribute value of an HTML element |
| [element.style.property](http://element.style.property/) = new style | Change the style of an HTML element |
| element.setAttribute(attribute, value) | Change the attribute value of an HTML element |

---

## **Adding and Deleting Elements**

To add an element, you need two steps. You first need to create the new element and give it whatever attributes, text, styling, etc., then append it to the parent element you want it to be inside.

| Method | Description |
| --- | --- |
| document.createElement(element) | Create an HTML element |
| document.removeChild(element) | Remove an HTML element |
| document.appendChild(element) | Add an HTML element |
| document.replaceChild(new, old) | Replace an HTML element |
