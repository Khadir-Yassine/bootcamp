# Exercises XP Gold

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What we will learn:**

- Working with the DOM

- Event Handlers

- Forms

---

### **Exercise 1 : Select a kind of Music**

**Instructions**

```javascript
<select id="genres">
  <option value="rock">Rock</option>
  <option value="blues" selected>Blues</option>
</select>
```

1. Display the value of the selected option.

2. Add an additional option to the `select` tag:
`<option value="classic">Classic</option>`

3. The newly added option should be selected by default.

---

## **Exercise 2: Delete colors**

**Instructions**

```javascript
<form>
    <select id="colorSelect">
        <option>Red</option>
        <option>Green</option>
        <option>White</option>
        <option>Black</option>
    </select>
    <input type="button" value="Select and Remove">
</form>
```

1. Add a `click` event listener to the `<input type="button">`. When clicked on, it should call a function named : `removecolor()` that removes the selected color from the dropdown list.

---

### **Exercise 3 : Create a shopping list**

**Instructions**

For this exercise, you need to work on your js file.
The one and only element on your HTML file should be:

```javascript
<div id="root"></div>
```

1. In your js file:
  
  1. Create an empty array. For example: `let shoppingList=[]`.
  2. Create a form containing : a text input field and an “AddItem” button. Add this form to the DOM.
  3. Type what you need to buy in the text input field, then add the new item to the array as soon as you click on the “AddItem” button (**Hint**: create a function named `addItem()`).
  4. Add a “ClearAll” button to the DOM, that when clicked on, should call the `clearAll()` function (see below).
  5. Create a function named `clearAll()` that should clear out all the items in the shopping list.

---

## **More info**

| Duration (approx) |
| --- |
| > 1 hour |

---

One Last Thing: **Good luck!**

---
