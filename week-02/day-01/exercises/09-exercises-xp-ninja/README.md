# Exercises XP Ninja

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What we will learn**

- Advanced functions

---

### **Exercise 1 : Merge Words**

**Instructions**

1. Create a function such as `mergeWords('Hello')()` that returns the following string: `'Hello'`

2. When the function is called without any arguments return a string where all words have been merged into a sentence.
  
  ```javascript
For example
mergeWords('There')('is')('no')('spoon.')();
should return 'There is no spoon.'
```

3. Below is a verbose JavaScript solution, turn this into a currying function.
  
  ```javascript
function mergeWords(string) {
 return function(nextString) {
   if (nextString === undefined) {
     return string;
   } else {
     return mergeWords(string + ' ' + nextString);
   }
 }
}
```

---

Don’t forget to push to Github

---

## **More info**

| Duration (approx) |
| --- |
| > 40 minutes |

---

One Last Thing: **Good luck!**

---
