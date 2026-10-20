# Exercises XP Gold

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What we will learn:**

- Variables, Conditionals, Loops

- Functions

- DOM Manipulation

- Styling with CSS and the DOM

---

### **Exercise 1 : is_Blank**

**Instructions**

Write a program to check whether a string is blank or not.

```javascript
console.log(isBlank('')); --> true
console.log(isBlank('abc')); --> false
```

---

### **Exercise 2 : Abbrev_name**

**Instructions**

Write a JavaScript function to convert a string into an abbreviated form.

```javascript
console.log(abbrevName("Robin Singh")); --> "Robin S."
```

---

### **Exercise 3 : SwapCase**

**Instructions**

Write a JavaScript function which takes a string as an argument and swaps the case of each character.
For example :

```javascript
if you input 'The Quick Brown Fox' 
the output should be 'tHE qUICK bROWN fOX'.
```

---

### **Exercise 4 : Omnipresent value**

**Instructions**

1. Create a function that determines whether an argument is omnipresent for a given array.
A value is omnipresent if it exists in every subarray inside the main array.

To illustrate:

```javascript
[[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// 3 exists in every element inside this array, so is omnipresent.
```

**Examples**

```javascript
isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true
isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false
```

---

### **Exercise 5 : Red table**

**Instructions**

```javascript
<!DOCTYPE HTML>
<html>
<head>
  <style>
    table {
      border-collapse: collapse;
    }
    td {
      border: 1px solid black;
      padding: 3px 5px;
    }
  </style>
</head>

<body>
  <table>
    <tr>
      <td>1:1</td>
      <td>2:1</td>
      <td>3:1</td>
      <td>4:1</td>
      <td>5:1</td>
    </tr>
    <tr>
      <td>1:2</td>
      <td>2:2</td>
      <td>3:2</td>
      <td>4:2</td>
      <td>5:2</td>
    </tr>
    <tr>
      <td>1:3</td>
      <td>2:3</td>
      <td>3:3</td>
      <td>4:3</td>
      <td>5:3</td>
    </tr>
    <tr>
      <td>1:4</td>
      <td>2:4</td>
      <td>3:4</td>
      <td>4:4</td>
      <td>5:4</td>
    </tr>
    <tr>
      <td>1:5</td>
      <td>2:5</td>
      <td>3:5</td>
      <td>4:5</td>
      <td>5:5</td>
    </tr>
  </table>
  <script>
    let table = document.body.firstElementChild;
    // your code
  </script>
</body>
</html>
```

1. Copy the code above and write some Javascript code to color all diagonal table cells in red.

---

## **Submit your exercises :**

Don’t forget to push to Github

---

## **More info**

| Duration (approx) |
| --- |
| > 45 minutes |

---

One Last Thing: **Good luck!**

---


[Worked solutions](solutions.md)
