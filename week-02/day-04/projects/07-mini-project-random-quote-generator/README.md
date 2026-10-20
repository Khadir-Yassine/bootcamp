# Mini project - Random Quote Generator

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn**

- Conditionals, and ternary operator

- Loops

- Arrow Functions

- Array methods

- Objects

---

## **What you will create**

Create a Random Quote Generator game in Javascript.

![random quote generator](https://github.com/devtlv/studentsGitHub/blob/master/Javascript%20-%20Part%20Time/Week6/Day5/random-quote-javascript-project.png?raw=true)

**Instructions**

**Part 1 : Quote generator**

1. Create an HTML file, that contains a section (for now the section is empty), and a button “Generate Quote”.

2. In the Javascript file, create an array of objects. Each object has 3 keys : id, author and quote. The id must start at 0, and is incremented for every new quote. So the first quote will have the id 0, the second quote the id 1, the third quote the id 2 ect…

3. Populate the array with a few quotes that you like.

4. When the “Generate Quote” button is pressed, retrieve randomly a quote (ie. an object), and display it in the DOM - like the image above.
**Important**: When clicking on the button, make sure you don’t display the same quote twice in a row.

---

**Part 2 : Add buttons**

1. In the HTML file, create a form with the inputs “Quote” and “Author” and a button. So when you click on the button, you can add a new quote to the array of object.
**Important**: Don’t forget to set the id of the new quotes

2. In the HTML file, under the displayed quote, create a few more buttons:
  
  - A button that gives the number of character inside each quote (space included)
  - A button that gives the number of character inside each quote (space NOT included)
  - A button that gives the number of words in each quote
  - A button “Like” for the user to like a quote. **Hint** : add a new key to each object that will represent the number of “likes”.

---

**Part 3 : Filter form**

1. Create a form, that will filter the quotes depending on the name of the author. When the button of the form is clicked, display all the quotes from this specific author.

2. Instead of showing all the quotes of the specific author. Show only one quote, and add a button “Previous” and a button “Next” that will display the next or previous quote.
