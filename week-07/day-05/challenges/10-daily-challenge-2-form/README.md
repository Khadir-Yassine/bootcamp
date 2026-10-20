# Daily challenge #2: Form

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What You will learn :**

- React Form

- React Events

---

## **Instructions : React Autocomplete Search**

![Illustration](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day4/Daily%20Challenge/dailychallenge.png)

**Here is the **[**demo**](http://di-react-search.surge.sh/)

1. Import and use the following [file](https://github.com/devtlv/Countries-JSBOOTCAMP-W9) that contains the countries that you will use for the suggestions

2. Create a new Javascript file, containing an `AutoCompletedText` Class Component. Add the code below to the state
  
  ```javascript
this.state = {
    suggestions: [],
    text: ''
}
```
  
  3. In the `render` method, add a text input with an `onChange` attribute. When the user enters a new letter, a function will be called. The function filters out the suggested countries (from the `countries.js` file) and update the state.
  4. Display the filtered countries in an unordered list.
  5. When you select a country, an `onClick` event handler will be fired, calling a function to set the state of the `text` property.
  
  - display the value of the `text` property in the input.
  - empty out the suggestions
  
  ![output](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day4/Daily%20Challenge/selected.png)

---

## **More info**

| Duration (approx) | Difficulty |
| --- | --- |
| > 1 hour | ⭐ |

---

## **Submit your Daily Challenge :**

Don’t forget to push to Github
