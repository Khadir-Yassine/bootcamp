# Exercises XP GOLD

Course source: [Geeks Institute](https://www.geeks.institute/).
### **Exercise : Form**

**Instructions**

**Part I:**

1. Create a new Functional Component named `Forms` and import if in the `App` component.

2. In the `return` of the `Forms` component, create a form that allows the user to enter their name. Remember to add the `name` attribute to the input field.
  
  **Expected output :**
  
  ![1](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day3/Exercises%20XP%20Gold/1.png)

3. Use the `useState` Hook to create the variable `username` and set it to an empty string.

4. Create a function that will set the value of the variable `username` to the input value. Use the `onChange` Event Handler.

5. Render the value of the variable `username` in a header tag.
  
  **Expected output:**
  
  ![2](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day3/Exercises%20XP%20Gold/2.png)

---

**Part II : Conditional Rendering**

1. We will display the header element, only after the user inputs a value.
  
  - In the component create an empty variable, call it `header`.
  - Add an if statement to insert content to the `header` variable, only after the user inputs a value.
  - Render the `header` variable above the input form.

2. The output should be the same as before, only this time the complete header will render after the user inputs his name.

---

**Part III : Submitting Forms**

You can control the submit action by adding an event handler in the `onSubmit` attribute.

1. Add an `onSubmit` event handler to the form, that calls the function named `mySubmitHandler`. And add a submit button to the form.

2. When the user clicks on the button, the function will alert the value of the input text (ie. the username)
  
  **Expected output:**
  
  ![4](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day3/Exercises%20XP%20Gold/4.jpg)

---

**Part IV : Multiple Input Fields**

1. Add another variable to the `state`, named `age` and set it to `null`.

2. In the form, add an age input field. Remember to add the `name` attribute to both the input fields.

3. When the user inputs a new value (ie. a new username or a new age), the value of the state variable should be updated.

4. The name and age of the user should be displayed in a header tag **after** the user inputs the values.
  
  **Expected output:**
  
  ![5](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day3/Exercises%20XP%20Gold/5.png)

---

**Part V : Validating Form Input**

You can validate a form input when the user is typing or you can wait until the form gets submitted.

1. Using the previous form, this time when the user fills in its age, he will get an alert if the age field is not numeric.
  
  **Expected output:**
  
  ![6](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day3/Exercises%20XP%20Gold/6.jpg)

2. Error messages in alert boxes can be annoying, instead we can display error messages when the user inputs anything invalid. Add another variable to the `state` named `errormessage` set it to an empty string.

3. When the user fills in the age as not numeric, an error message will be displayed
  
  **Expected output:**
  
  ![8](https://github.com/devtlv/studentsGitHub/blob/master/JS/Week%208/Day3/Exercises%20XP%20Gold/8.png?raw=true)

---

**Part VI : Textarea**

The textarea element in React is slightly different from ordinary HTML. In HTML the value of a textarea was the text between the start tag `<textarea>` and the end tag `</textarea>`, in React the `value` of a textarea is placed in a `value` attribute.

1. Create a simple textarea with some content initialized with a `state` variable.
  
  **Expected output:**

![9](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day3/Exercises%20XP%20Gold/9.png)

---

**Part VII : Select**

A drop down list, or a select box, in React is also a bit different from HTML. In HTML, the selected value in the drop down list was defined with the `selected` attribute. In React, the selected value is defined with a `value` attribute on the `select` tag.

1. Create a simple select box for car brands, where the selected value “Volvo” is initialized in a state variable.
  
  **Expected output :**
  
  ![10](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day3/Exercises%20XP%20Gold/10.jpg)

2. Add an `onChange` event handler, that will change the value of the selected car in the state.

## Working solution

[Working solution](solutions.md) — runnable code, explanation, and verification steps.
