# Regular Expressions (Advanced)

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What will you learn?**

- How to use Regular Expressions - RegEx

---

## **Useful Resources**

- [Video](https://www.youtube.com/watch?v=sXQxhojSdZM])

- [W3School tutorial](https://www.w3schools.com/jsref/jsref_obj_regexp.asp)

- [RegExp Assertions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)

- [RegExp Character classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)

- [Test Your RegExp](https://regex101.com/)

- [Learn More Video](https://www.youtube.com/watch?v=909NfO1St0A)

---

### **About RegEx:**

A regular expression is an object that describes a pattern of characters.
Expressions are used to perform pattern-matching and “search-and-replace” functions on text.

---

**Documents about Regular Expression: PDF to download**

- [Explanation about Regular Expression](../../../../references/javascript-regular-expressions.md)

- [RegExp CheatSheet](../../../../references/regular-expressions-cheat-sheet.md)

---

**Example with RegEx:**

```javascript
let str = "Happy BirthDay";
let patt = /birthday/i;
let result = str.match(patt);
console.log(result); //returns true

if (result){
    console.log('Yes')
} else{
    console.log('No');
}
```

---

**Example explained:**

`/birthday/i` is a regular expression.

- `birthday` is a pattern (to be used in a search).

- `i` is a modifier (modifies the search to be case-insensitive).

---

**RegEx Example 2: Test To Match an Email:**

```javascript
let regex = /^.+@.+\..+$/;
console.log(regex.test('johndoe@gmail.com')); //returns true
```
