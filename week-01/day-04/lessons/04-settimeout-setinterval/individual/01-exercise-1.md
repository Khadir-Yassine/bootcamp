# Exercise 1

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

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
