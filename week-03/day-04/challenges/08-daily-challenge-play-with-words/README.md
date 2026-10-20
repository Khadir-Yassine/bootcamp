# Daily challenge: Play with words

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What You will learn :**

- Promises

---

## **Instructions**

### **1st daily challenge**

1. Create two functions. Each function **should return a promise**.

2. The first function called `makeAllCaps()`, takes an array of words as an argument
  
  - If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
  - else, reject the promise with a reason.

3. The second function called `sortWords()`, takes an array of words uppercased as an argument
  
  - If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
  - else, reject the promise with a reason.

**Test:**

```javascript
//in this example, the catch method is executed, because the array contains a number
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed, because the array length is not bigger than 4
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))
```

Output:

![output](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%205/Day%203/Daily%20Challenge/ddccdcd.png)

### **2nd daily challenge**

```javascript
const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`
```

1. Create three functions. **The two first functions should return a promise**..

2. The first function is named `toJs()`:
  
  - this function converts the morse *json string* provided above to a morse *javascript object*.
  - if the morse javascript object is empty, throw an error (use reject)
  - else return the morse javascript object (use resolve)

3. The second function called `toMorse(morseJS)`, takes one argument: the new morse javascript object.
  
  - This function asks the user for a word or a sentence.
  - if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
  - else return an array with the morse translation of the user’s word.
  
  ```javascript
if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object
```

4. The third function called `joinWords(morseTranslation)`, takes one argument: the morse translation array
  
  - this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

5. Chain the three functions.

```javascript
Example:
"Hello" gives you
....
.
.-..
.-..
---
```

---

## **More info**

| Duration (approx) | Difficulty |
| --- | --- |
| > 1h15 | ⭐ |

---

## **Submit your Daily Challenge :**

Don’t forget to push to Github

## Worked solutions

[English explanations and runnable implementation](solutions.md).
