# Exercises XP NINJA

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What we will learn**

- React Lifecycle

- Event Handlers

- Error Boundary

---

*NOTE: You will use the same React App for all the Exercises XP*
***Create a React App and start your app***

---

### **Exercise 1 : React Clock**

## **Instructions**

You will create a clock in compass format, that shows the current date and time like in the example below.

![image](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%209/Day1/Daily%20Challenge/react-clock.png)

**Check out the demo **[**here**](http://di-react-clock.surge.sh/)

---

1. Use a Class Component to store in the state:
  
  - the current year
  - month
  - day of the week
  - day of the month
  - hour
  - minute
  - second.
  
  Remember to get the current date and time you can use the following:
  
  ```javascript
new Date().getFullYear()      // Get the four digit year (yyyy)
new Date().getMonth()         // Get the month (0-11)
new Date().getDay()           // Get the weekday as a number (0-6)
new Date().getDate()          // Get the day as a number (1-31)
new Date().getHours()         // Get the hour (0-23)
new Date().getMinutes()       // Get the minutes (0-59)
new Date().getSeconds()       // Get the seconds (0-59)
```

2. When your component mounts, create a “setInterval” function that sets every second the state of all the variables.
**Hint** : Check out the `Date` Object

3. Render the current year on the top left and the current month on the bottom right.

4. Create the functionalities to display in rotated format the corresponding info, and display the current date and timing as a linear format on the clock.

5. You can use your own CSS with animation.

---

## **Submit your Exercises :**

Don’t forget to push to Github

---

## **More info**

| Duration (approx) |
| --- |
| 45 minutes |

---

One Last Thing: **Good luck!**
