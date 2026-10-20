# Form Properties

Course source: [Geeks Institute](https://www.geeks.institute/).
### **Navigation: form and elements**

Document forms are members of the unique collection `document.forms`.

That’s a so-called “named collection”: it’s both named and ordered.
We can use both the name or the number in the document to get the form.

`document.forms.my - the form with name="my"`
`document.forms[0] - the first form in the document`

HTML

```javascript
<form name="personform">
  <input name="age" value="25">
  <input name="height" value="167">
</form>

<form name="dogform">
  <input name="petname" value="Rex">
  <input name="petage" value="2">
</form>
```

Javascript

```javascript
// get the form
let theForm = document.forms.dogform; 
console.log(theForm);
// <form name="dogform">
//   <input name="petname" value="Rex">
//   <input name="petage" value="2">
// </form>

let theFormAgain  = document.forms[1]; // the second form on the page
// <form name="dogform">
//   <input name="petname" value="Rex">
//   <input name="petage" value="2">
// </form>
```

---

**1. Returning a form**

| Properties | Meaning |
| --- | --- |
| `document.forms` | returns the collection of all `<form>` elements in a HTML document |
| `document.forms.attributeValue` | returns a specific form depending on its attribute value<br>Example : `document.forms.dogform` |
| `document.forms[index]` | returns a specific form depending on its index on the HTML document<br>Example : `document.forms[1]` |
| `document.forms[index].attribute` | returns the value of the attribute of a specific form<br>Example : `document.forms[1].name` |

---

**2. Returning an element of a form**

| Properties | Meaning |
| --- | --- |
| `document.forms[index].elements.attributeValue` | returns a specific element from a form depending on its attribute value<br>Example : `document.forms[1].elements.petname` |
| `document.forms[index].elements[index]` | returns a specific element from a form depending on its index<br>Example : `document.forms[1].elements[1]` |

---

HTML

```javascript
<form name="personform">
  <input name="age" value="25">
  <input name="height" value="167">
</form>

<form name="dogform">
  <input name="petname" value="Rex">
  <input name="petage" value="2">
</form>
```

Javascript

```javascript
// get the form
let theForm = document.forms.personform; 
// <form name="personform">
//   <input name="age" value="25">
//   <input name="height" value="167">
// </form>

// OR
let theForm = document.forms[0]; // the first form on the page

console.log(theForm.name) // "personform"

//  get the number of forms on the page
let numberForms = document.forms.length

// get the element
let elem = theForm.elements.age; // <input name="age" value="25">
// OR
let elem = theForm.elements[0]; // <input name="age" value="25">
```

---

**3. Accessing/Modifying a value of a form element**

We can access the value of an input as `input.value` (string) or `input.checked` (boolean) for checkboxes.

HTML

```javascript
<form name="personform">
  <input name="age" value="25">
  <input name="height" value="167">
</form>
```

Javascript

```javascript
// get the form
let theForm = document.forms.personform; 
let firstElement = theForm.elements.age;

console.log(firstElement.value); // "25"
firstElement.value = '45' 
console.log(firstElement.value); // "45"
```

---

**4. Fieldsets as “subforms”**

A form may have one or many `<fieldset>` elements inside it.
They also have elements property that lists form controls inside them.

HTML

```javascript
<form id="user">
    <fieldset name="userFields">
      <legend>info</legend>
      <input name="login" type="text">
    </fieldset>
</form>
```

Javascript

```javascript
let userForm = document.forms[0]
console.log(userForm.elements.login); // <input name="login" type="text">
let formFieldset = userForm.elements.userFields;
console.log(formFieldset);
// <fieldset name="userFields">
//   <legend>info</legend>
//   <input name="login" type="text">
// </fieldset>

// we can get the input by name both from the form and from the fieldset
console.log(formFieldset.elements.login == userForm.elements.login); // true
```

---

**5. Backreference: element.form**

For any element, the form is available as `element.form`.
So a form references all elements, and elements reference the form.

HTML

```javascript
<form id="frm">
  <input type="text" name="login">
  <input type="text" name="name">
</form>
```

Javascript

```javascript
// form -> element
let inputLogin = document.forms[0].login;
console.log(inputLogin) // <input type="text" name="login">

// element -> form
console.log(inputLogin.form); 
// <form id="frm">
//   <input type="text" name="login">
//   <input type="text" name="name">
// </form>
```

---

---

**6. FormData**

FormData is the object to represent HTML form data.

The constructor is:

`let formData = new FormData([form]);`

If an HTML form element is provided, it automatically captures its fields.

```javascript
<form id="myform">
      <input type="text" name="name" value="John">
      <input type="text" name="surname" value="Smith">
      <input type="submit">
</form>

<script>
    document.getElementById('myform').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve form data
        let formData = new FormData(event.target);

        // Iterate over form data and log each value
        formData.forEach(function(value, key) {
            console.log(`${key}: ${value}`);
        });
    });
</script>
```

---

### **Textarea and Radio Buttons**

**1. Radio buttons**

There may be multiple elements with the same name, that’s often the case with radio buttons.
In that case `form.elements[name]` is a collection, for instance:

HTML

```javascript
<form>
  <label for="age">Age 10</label>
  <input type="radio" name="age" value="10">
  <label for="age">Age 20</label>
  <input type="radio" name="age" value="20">
</form>
```

Javascript

```javascript
let form = document.forms[0];
let ageElems = form.elements.age;
console.log(ageElems)
// RadioNodeList(2)
//  0: input
//  1: input
//  length: 2
console.log(ageElems[0].value); // "10"
```

---

| Property | Meaning |
| --- | --- |
| `input.checked` | Check if the input is checked : return a boolean |

---

HTML

```javascript
<table id="tableperson">
  <tr>
    <td>Your age:</td>

    <td>
      <label>
        <input type="radio" name="age" value="young" checked> less than 18
      </label>
      <label>
        <input type="radio" name="age" value="mature"> from 18 to 50
      </label>
      <label>
        <input type="radio" name="age" value="senior"> more than 60
      </label>
    </td>
  </tr>
</table>
```

Javascript

```javascript
let inputs = tableperson.getElementsByTagName('input');

for (let input of inputs) {
    alert( input.value + ': ' + input.checked );
}
```

---

**2. Textarea**

```javascript
<form id="frm">
  <input type="text" name="firstname">
  <input type="text" name="lastname">
  <textarea name="comments" rows="8" cols="80">heyy here is a text</textarea>
</form>
```

```javascript
let textArea = document.forms[0].comments;
console.log(textArea.value) // "heyy here is a text"
```

Use `textarea.value`, not `textarea.innerHTML`

Please note that even though `<textarea>...</textarea>` holds its value as nested HTML,
we should never use `textarea.innerHTML` to access it.

It stores only the HTML that was initially on the page, not the current value.

---

---

### **Select and Option**

A `<select>` element has 3 important properties:

- `select.options` – the collection of `<option>` subelements,

- `select.value` – the value of the currently selected `<option>`,

- `select.selectedIndex` – the number of the currently selected `<option>`.

They provide three different ways of setting a value for a `<select>`:

Find the corresponding `<option>` element (e.g. among `select.options`) and set its `option.selected` to true.

- If we know a new value: set `select.value` to the new value.

- If we know the new option number: set `select.selectedIndex` to that number.

Please note: options start from zero, so index 2 means the 3rd option.

Here is an example of all three methods:

HTML

```javascript
<select id="fruits">
  <option value="apple">Apple</option>
  <option value="pear">Pear</option>
  <option value="banana">Banana</option>
</select>
```

Javascript

```javascript
//get the select form
let dropdown = document.getElementById('fruits')

// all three lines do the same thing
dropdown.options[2].selected = true; //Banana selected
// OR
dropdown.value = 'banana'; //Banana selected
// OR
dropdown.selectedIndex = 2; //Banana selected

// To check which option is selected
console.log(dropdown.selectedIndex) // "2"
console.log(dropdown.value) // "Banana"
```

[More on HTML DOM Select Object](https://www.w3schools.com/jsref/dom_obj_select.asp)

Unlike most other controls, `<select>` allows selecting multiple options at once if it has `multiple` attributes available.
This attribute is rarely used, though.
Use the first way of setting values for multiple selected values: add/remove the desired property from `<option>` subelements.

Here’s an example of how to get selected values from a multi-select:

HTML

```javascript
<select id="musicgenre" multiple>
  <option value="blues" selected>Blues</option>
  <option value="rock" selected>Rock</option>
  <option value="classic">Classic</option>
</select>
```

Javascript

```javascript
let dropdown = document.getElementById('musicgenre')
// get all selected values from multi-select
let selected = Array.from(dropdown.options)
.filter(option => option.selected)
.map(option => option.value);

console.log(selected); // ["blues", "rock"]
```

---

**new Option**

In the specification there’s a nice short syntax to create an `<option>` element:

`option = new Option(text, value, defaultSelected, selected);`

This syntax is optional. We can use `document.createElement('option')` and set attributes manually.

Still, it may be shorter, so here are the parameters:

- `text` – the text inside the option,

- `value` – the option value,

- `defaultSelected` – if true, then selected HTML-attribute is created,

- `selected` – if true, then the option is selected.

The difference between `defaultSelected` and `selected` is that `defaultSelected` sets the HTML-attribute (that we can get using `option.getAttribute('selected')`), while `selected` sets whether the option is selected or not.

In practice, we usually should set both values to true or false (or omit, that’s the same as false).

For instance, here’s a new “unselected” option:

```javascript
let option = new Option("Text", "value");
// creates <option value="value">Text</option>

// The same option, but selected:
let option = new Option("Text", "value", true, true);
```

Full Example

HTML

```javascript
<select id="musicgenre" multiple>
    <option value="blues" selected>Blues</option>
    <option value="rock" selected>Rock</option>
    <option value="classic">Classic</option>
</select>
```

Javascript

```javascript
//get the select form
let dropdown = document.getElementById('musicgenre')

// get all selected values from multi-select
let selected = Array.from(dropdown.options)
.filter(option => option.selected)
.map(option => option.value);
console.log(selected); //["blues","rock"]

//add new option to the option list, set it as selected

let option = new Option('newoption','newoption',true,true)
select.add(option)

// get all selected values from multi-select

selected = Array.from(dropdown.options)
.filter(option => option.selected)
.map(option => option.value);
console.log(selected); //["blues","rock","newoption"]
```

---

**Exercise**

Create a structured HTML file, and add the code below in the body.

In a JS file, write a JavaScript function to :

1. Get the value of the 2nd Option

2. Add a new option with the value 'Work' at the end of the select form

3. Add a new option with the value 'Primary School' at the beginning of the select form

4. Change 'College' as *selected*. Use the 3 properties we learned above

5. Add a button that alert the choice selected

```javascript
<select id="school-type"> 
    <option value="middleschool">Middle School</option>
    <option value="university">University</option>
    <option value="college">College</option>
</select>
```

---

### **Some CSS properties**

| Property | Meaning | More Details |
| --- | --- | --- |
| `input:valid` | Selects all input elements with a valid value | [:valid](https://www.w3schools.com/cssref/sel_valid.asp) |
| `input:optional` | Selects input elements with no “required” attribute | [:optional](https://www.w3schools.com/cssref/sel_optional.asp) |
| `input:invalid` | Selects all input elements with an invalid value | [:invalid](https://www.w3schools.com/cssref/sel_invalid.asp) |


[Worked solutions](solutions.md)
