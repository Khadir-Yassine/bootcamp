# Form manipulation

Course source: [Geeks Institute](https://www.geeks.institute/).
### **onchange Event**

The `onchange` event triggers when the element has finished changing.
For text inputs that means that the event occurs when it loses focus.

```javascript
<input type="text" onchange="alert(this.value)">
```

---

### **oninput Event**

The input event triggers every time after a value is modified by the user.

```javascript
<input type="text" id="myinput">
<span id="result"></span>

<script>
  let input = document.getElementById('myinput');
  let result = document.getElementById('result');

  input.oninput = function() {
    result.innerHTML = input.value;
  };
</script>
```

See and run the demonstration below:

```javascript
 <body>
      <label>ON CHANGE</label>
      <input type="text" id="input1" />
       <span
        id="result1"
        style="border: 1px solid blue; padding: 2px 8px; margin-left: 10px"
      ></span>

      <br /><br />

      <label>ON INPUT</label>
      <input type="text" id="input2" />
      <span
        id="result2"
        style="border: 1px solid red; padding: 2px 8px; margin-left: 10px"
      ></span>

     <script>
        //On Change : event triggers when the element <u>has finished changing</u>.

        let newInput1 = document.getElementById("input1");

        newInput1.addEventListener("change", changeInput);

        function changeInput(event) {
          document.getElementById("result1").textContent = event.target.value;
        }

        // OTHER POSSIBILITY
        // let newInput1 =  document.getElementById('input1')
        //   newInput1.onchange = function() {
        //   document.getElementById('result1').innerHTML = this.value;
        //   };

        // --------------------------------

        //On Input : event triggers every time after a value is modified by the user.

        let newInput2 = document.getElementById("input2");
        newInput2.addEventListener("input", changeInput2);

        function changeInput2(event) {
          document.getElementById("result2").textContent = event.target.value;
        }

        //OTHER POSSIBILITY

        // let newInput2 =  document.getElementById('input2')
        //   newInput2.oninput = function() {
        //    document.getElementById('result2').innerHTML = this.value;
        // };
      </script>
    </body>
```

[**Event onchange VS oninput - Codepen Here**](https://codepen.io/avnermaman/pen/gOpzPaR?editors=1010)

---

### **onsubmit Event**

The `onsubmit` event is triggered :

- when you click on an input of `type=submit`

- when you press `Enter` on the input

The `submit` event triggers when the form is submitted, it is usually used to validate the form before sending it to the server or abort the submission and process it in JavaScript.

```javascript
    <form onsubmit="alert('submit!');">
      First: Enter in the input field <input type="text" value="text"><br>
      Second: Click "submit": <input type="submit" value="Submit">
    </form>
```

```javascript
<!--The best is to use addEventListener-->

<form name="my">
  <label for="usercomment">Enter some text</label>
  <input id="usercomment" type="text" value="text"><br>
  <input type="submit" value="Submit">
</form>

    <script>
            let form = document.forms.my;

            form.addEventListener("submit", getUserComments)

            function getUserComments(){
              alert('submit !')
            }
    </script>
```

---

### **event.preventDefault()**

Many browser events have a “default action”.
When you click on a “Submit” button, the default action is to submit the form data to the server (specified in the form’s “action” attribute using the HTTP method specified in the “method” attribute –> we will see more about it in the upcoming days)

This default behavior can be overridden or modified using JavaScript. You can prevent the default form submission action using JavaScript to implement custom actions such as form validation before the form data is sent to the server. This is often done using the `event.preventDefault()` method.

```javascript
<!--Did you see what happened on the example above ? After the form was submitted, the page was automatically refreshed. 
To prevent this from happening, use the event object method e.preventDefault()-->

<form name="my">
  <label for="usercomment">Enter some text</label>
  <input id="usercomment" type="text" value="text"><br>
  <input type="submit" value="Submit">
</form>

    <script>
            let form = document.forms.my;

            form.addEventListener("submit", getUserComments)

            function getUserComments(e){
              e.preventDefault()
              alert('submit ! ')
            }
    </script>
```
