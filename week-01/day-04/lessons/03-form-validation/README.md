# Form Validation

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn**

- Form Validation

---

### **Useful Resources**

- [Article on Form Validation](https://css-tricks.com/form-validation-part-1-constraint-validation-html/)

- [Article on Form Validation Javascript](https://www.elated.com/form-validation-with-javascript/)

- [Documentation Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)

- [Video Client Side Form Validation](https://www.youtube.com/watch?v=rsd4FNGTRBw)

---

### **What is form validation?**

1. “This field is required” (You can’t leave this field blank).

2. “Please enter your phone number in the format xxx-xxxx” (A specific data format is required for it to be considered valid).

3. “Please enter a valid email address” (the data you entered is not in the proper format).

4. “Your password needs to be between 8 and 30 characters long and contain one uppercase letter, one symbol, and a number.” (A particular data format is required for your data).

---

### **Why do we need form validation?**

We want to get the correct data in the proper format. Our applications won’t work correctly if our users’ data is stored in the wrong format, incorrect, or omitted altogether.

We want to protect our users’ data. Forcing our users to enter secure passwords makes it easier to protect their account information.

We want to protect ourselves. There are many ways that malicious users can misuse unprotected forms to damage the application (see Website security).

---

### **Different types of client/server-side validation**

- Built-in form validation uses **HTML5 form validation features**.
This validation generally doesn’t require much JavaScript.
Built-in form validation has better performance than JavaScript, but it is not as customizable as JavaScript validation.

| Attribute | Description |
| --- | --- |
| disabled | Specifies that the input element should be disabled |
| max | Specifies the maximum value of an input element |
| min | Specifies the minimum value of an input element |
| pattern | Specifies the value pattern of an input element |
| required | Specifies that the input field requires an element |
| type | Specifies the type of an input element |

*Example*

- `required`

- `pattern example` : pattern=”[Bb]anana|[Cc]herry”

- `text` - minlength and maxlength

- `number` - min and max

```javascript
Your Name: <input type="text" name="name" required size="40">
Age: <input type="number" name="age" min="18" max="99" value="21"><br>
Happiness: <input type="range" name="satisfaction" min="1" max="5" value="3">
```

- **JavaScript validation** is coded using JavaScript. This validation is completely customizable, but you need to create it all (or use a library).
`validation` - js validation - built-in validation

```javascript
    <form>
      <label for="mail">I would like you to provide me with an e-mail address:</label>
      <input type="email" id="mail" name="mail">
      <label for="name">Your name:
      <input type="text" id="name" name="name" required>
      <p>
          <label>Enter your phone number in the format (123)456-7890
           <input name="tel1" type="tel" pattern="[0-9]{3}" placeholder="###" size="2"/>-
           <input name="tel2" type="tel" pattern="[0-9]{3}" placeholder="###" size="2"/> -
           <input name="tel3" type="tel" pattern="[0-9]{4}" placeholder="####" size="3"/>
         </label>
        </p>
      <button>Submit</button>
    </form>

    <script>
      const form  = document.getElementsByTagName('form')[0];
      const email = document.getElementById("mail");
      const name = document.getElementById("name");

      email.addEventListener("input", function (event) {
        if (email.validity.typeMismatch) {
          email.setCustomValidity("I am expecting an e-mail address!");
        } else {
          email.setCustomValidity("");
        }
      });

      form.addEventListener("submit", function (event) {
        if(!email.validity.valid) {
            email.setCustomValidity("I am expecting an e-mail address!");
        } else {
            email.setCustomValidity("");
        }
      });
    </script>
```

[**Documentation Constraint Validation DOM Methods**](https://www.w3schools.com/js/js_validation_api.asp)
