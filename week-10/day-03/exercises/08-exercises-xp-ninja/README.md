# Exercises XP Ninja

Course source: [Geeks Institute](https://www.geeks.institute/).
### **👩‍🏫 👩🏿‍🏫 What You’ll learn**

In these exercises, you will enhance your skills in Python by handling strings, lists, and functions. You will also learn about manipulating data structures and implementing basic algorithms. These exercises will sharpen your problem-solving skills and deepen your understanding of Python’s built-in functions and methods.

---

### **🛠️ What you will create**

You will create Python scripts that manipulate lists and strings, handle optional function parameters, and convert text between English and Morse code. This will include data cleaning, complex list manipulations, and practical use of loops and conditions to solve various problems.

---

### **Exercise 1: Cars**

- Copy the following string into your code: `Volkswagen, Toyota, Ford Motor, Honda, Chevrolet`.

- Convert it into a list using Python (don’t do it by hand!).

- Print out a message saying how many manufacturers/companies are in the list.

- Print the list of manufacturers in reverse/descending order (Z-A).

- Using loops or list comprehension:
  
  - Find out how many `manufacturers’ names` have the letter `o` in them.
  - Find out how many `manufacturers’ names` do not have the letter `i` in them.

**Bonus:**

- There are a few duplicates in this list: `["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]`
  
  - Remove these programmatically. (Hint: you can use a set to help you).
  - Print out the companies without duplicates, in a comma-separated string with no line-breaks (e.g., “Acura, Alfa Romeo, Aston Martin, …”), also print out a message saying how many companies are now in the list.

**Bonus:**

- Print out the list of manufacturers in ascending order (A-Z), but reverse the letters of each manufacturer’s name.

- 

---

### **Exercise 2: What’s your name?**

- Write a function called `get_full_name()` that takes three arguments: 1: `first_name`, 2: `middle_name`, 3: `last_name`.

- `middle_name` should be optional; if it’s omitted by the user, the name returned should only contain the first and the last name.

For example, `get_full_name(first_name="john", middle_name="hooker", last_name="lee")` will return “John Hooker Lee”.
But `get_full_name(first_name="bruce", last_name="lee")` will return “Bruce Lee”.

---

### **Exercise 3: From English to Morse**

- Write a function that converts English text to Morse code and another one that does the opposite.

- **Hint:** Check the internet for a translation table, every letter is separated with a space and every word is separated with a slash /.

## Worked solutions

[English explanations and runnable Python implementation](solutions.md).
