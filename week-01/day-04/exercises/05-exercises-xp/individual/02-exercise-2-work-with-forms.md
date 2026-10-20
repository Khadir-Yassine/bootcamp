# 🌟 Exercise 2 : Work with forms

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

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


[Worked solutions](../solutions.md)
