# Exercises XP Gold

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn:**

- Working with Node.js modules

- Working with the fs module

- Working with the axios module

---

### **Exercise 1 : File Management and Path Manipulation**

**Instructions**

1. Create a directory named `file-management`.

2. Inside the `file-management` directory, open a terminal and run `npm init` to initialize a new Node.js project. Follow the prompts to set up your project.

3. Create a directory named `data` inside the `file-management` directory.

4. Inside the `data` directory, create a file named `example.txt` and add some content to it.

5. Create a file named `file-info.js` inside the `file-management` directory.

6. In `file-info.js`, require the `path` and `fs` modules and implement the following functionality:
  
  - Use the `path.join` function to create a file path to the `example.txt` file within the `data` directory.
  - Use the `fs.existsSync` function to check if the file exists.
  - Use the `fs.statSync` function to get information about the file, such as size and creation time.
  - Display the file’s existence, size, and creation time in the terminal.

7. Create another file named `app.js` in the same directory.

8. In `app.js`, require the `file-info.js` module and call the function you’ve written to display information about the file.

9. Run `app.js` using Node.js and verify that the file’s existence, size, and creation time are displayed in the terminal.

---

### **Exercise 2 : Fetching and Displaying Data with Axios**

**Instructions**

1. Create a directory named `axios-example`.

2. Inside the `axios-example` directory, open a terminal and run `npm init` to initialize a new Node.js project. Follow the prompts to set up your project.

3. Install the `axios` package by running `npm install axios` in the terminal.

4. Create a file named `fetch-data.js` inside the `axios-example` directory.

5. In `fetch-data.js`, require the `axios` package and use it to make an HTTP GET request to a JSON placeholder API (e.g., `https://jsonplaceholder.typicode.com/posts`) and fetch a list of posts.

6. Display the title of each post in the terminal.

7. Create another file named `app.js` in the same directory.

8. In `app.js`, require the `fetch-data.js` module and call the function you’ve written to fetch and display the post titles.

9. Run `app.js` using Node.js and verify that the post titles are displayed in the terminal.

---

### **Exercise 3 : Working with Dates Using the **`date-fns` Module

**Instructions**

1. Create a directory named `date-fns-usage`.

2. Inside the `date-fns-usage` directory, open a terminal and run `npm init` to initialize a new Node.js project. Follow the prompts to set up your project.

3. Install the `date-fns` package by running `npm install date-fns` in the terminal. `date-fns` is a library for working with dates and times.

4. Create a file named `date-operations.js` inside the `date-fns-usage` directory.

5. In `date-operations.js`, require the `date-fns` package and perform the following operations:
  
  - Get the current date and time.
  - Add 5 days to the current date.
  - Format the resulting date as a string.
  - Display the formatted date in the terminal.

6. Create a file named `app.js` in the same directory.

7. In `app.js`, require the `date-operations.js` module and call the function you’ve written to perform and display the date operations.

8. Run `app.js` using Node.js and verify that the formatted date is displayed in the terminal.

---

### **Exercise 4 : Faker Module**

**Instructions**

1. Install the **faker** module, and read the documentation.

2. Create an empty array called `users`. **Tip**: It’s an array of objects

3. Create a function that adds objects to the `users` array. Each user has the properties: name, address street and country. Use faker to populate them with fake data.

4. **Bonus** : Find a node module that allows to prompt the user for his name, address street and country in order to add this information into the `users` array.

---

### **Exercise 5 : Regular Expression #1**

**Instructions**

1. Use the regular expression module to extract numbers from a string

Example

```javascript
returnNumbers('k5k3q2g5z6x9bn') 
// Excepted output : 532569
```

---

### **Exercise 6 : Regular Expression #2**

**Instructions**

1. Ask the user for his full name (example: “John Doe”), and use the regular expression module to check the validity of his answer:
  
  - The name should contain only letters.
  - The name should contain only one space.
  - The first letter of each name should be upper cased.

---

## **Submit your exercises :**

Don’t forget to push to

---

## **More info**

| Duration (approx) |
| --- |
| > 1 hour |

---

One Last Thing: **Good luck!**

## Worked answer

[Reference solution](solutions.md) — source code, explanation, and run instructions.
