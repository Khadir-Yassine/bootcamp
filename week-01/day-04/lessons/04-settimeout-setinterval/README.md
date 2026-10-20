# setTimeout & setInterval

Course source: [Geeks Institute](https://www.geeks.institute/).
### **What you will learn:**

- setTimeout(), setInterval()

- How to use these functions to create JS animations

---

## **Useful Resources:**

- [Video Tutorial on timer function and CSS animation](https://www.khanacademy.org/computing/computer-programming/html-css-js/html-js-dom-animation/pt/animating-dom-with-setinterval)

- [Exercise example on setInterval](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/js/tryit.asp-filename=tryjs_dom_animate_3.html)

- [Video Tutorial on setInterval with blocks](https://www.youtube.com/watch?v=YXZX_6RfHjk)

- [Demo Drag and Drop](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondrag_all)

---

### **JS Functions**

---

**setTimeout()**

Allows us to run a function **ONCE** after the interval of time.

```javascript
function sayHi(phrase, who) {
  alert( phrase + ', ' + who );
}

setTimeout(sayHi, 1000, "Hello", "John"); //  calls sayHi() after one second --> Hello, John
```

---

**clearTimeout() to prevent the function to run**

Because calling a timer function schedules an action, that **action can also be cancelled before it gets executed**.
A call to `setTimeout` returns a timer “ID” and you can use that timer ID with a `clearTimeout` call to cancel that timer.

---

**Exercise 1**

Create a new HTML file

Create a banner saying "The sales end in 10min ! " . Style the banner and make it visible to the user after 5 sec.

---

**setInterval()**

Allows us to run a function **REPEATEDLY**, starting after the interval of time, then repeating continuously at that interval.

```javascript
setInterval(function() {
      // Do something every 5 seconds
}, 5000);
```

---

**clearInterval()**

Because calling a timer function schedules an action, that action can also be cancelled before it gets executed.
A call to `setInterval` returns a timer “ID” and you can use that timer ID with a clearTimeout call to cancel that timer.

```javascript
<p id="demo"></p>

<button onclick="myStopFunction()">Stop time</button>

<script>
let timer = setInterval(myTimer, 1000);

function myTimer() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  // date.toLocaleTimeString() returns a string with a language sensitive representation of the time portion of this date
  document.getElementById("demo").innerHTML = time;
}

function myStopFunction() {
  clearInterval(timer);
}
</script>
```

[**timer functions to create animations - Codepen Here**](https://codepen.io/avnermaman/pen/xxGNZeV?editors=1111)

### **Using the timer functions to create animations**

### [**timer functions to create animations - Codepen Here**](https://codepen.io/avnermaman/pen/RwPyyEj)


[Worked solutions](solutions.md)
