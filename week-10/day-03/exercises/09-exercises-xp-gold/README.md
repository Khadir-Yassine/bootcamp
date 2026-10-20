# Exercises XP Gold

Course source: [Geeks Institute](https://www.geeks.institute/).
### **👩‍🏫 👩🏿‍🏫 What You’ll learn**

In these exercises, you will learn how to use basic Python data structures like dictionaries and lists, handle user input, and implement functions to perform various tasks including random number generation and iterative calculations. This hands-on practice will help reinforce your understanding of Python programming fundamentals.

---

### **🛠️ What you will create**

By the end of these exercises, you will have created a small Python application that can look up birthdays, calculate a specific numeric sequence, and simulate dice throws. You’ll practice using loops, conditionals, functions, and more to solve problems and generate specific outputs.

---

### **Exercise 1: Birthday Look-up**

- Create a variable called `birthdays`. Its value should be a dictionary.

- Initialize this variable with the birthdays of 5 people of your choice. For each entry in the dictionary, the key should be the person’s name, and the value should be their birthday. Tip: Use the format `"YYYY/MM/DD"`.

- Print a welcome message for the user. Then tell them: “You can look up the birthdays of the people in the list!”
  
  - Ask the user to give you a `person's name` and store the answer in a variable.
  - Get the `birthday` of the name provided by the user.
  - Print out the `birthday` with a nicely-formatted message.

---

### **Exercise 2: Birthdays Advanced**

- Before asking the user to input a `person's name`, print out all of the names in the dictionary.

- If the person that the user types is not found in the dictionary, print an error message (“Sorry, we don’t have the birthday information for `person's name`”).

---

### **Exercise 3: Sum**

- Write a function that accepts one parameter (an int: X) and returns the value of X+XX+XXX+XXXX.

Example:

If X=3, the output when calling our function should be `3702 (3 + 33 + 333 + 3333)`

**Hint:** Treating our number as an int or a str at different points in our code may be helpful.

---

### **Exercise 4: Double Dice**

1. Create a function that will simulate the rolling of a dice. Call it `throw_dice`. It should return an integer between 1 and 6.

2. Create a function called `throw_until_doubles`.
It should keep throwing 2 dice (using your `throw_dice` function) until they both land on the same number, i.e., until we reach doubles.
For example: (1, 2), (3, 1), (5, 5) → then stop throwing, because doubles were reached.
This function should return the number of times it threw the dice in total. In the example above, it should return 3.

3. Create a main function. It should throw doubles 100 times (i.e., call your `throw_until_doubles` function 100 times), and store the results of those function calls (in other words, how many throws it took until doubles were thrown, each time) in a collection. (What kind of collection? Read below to understand what we will need the data for, and this should help you decide which data structure to use).

4. After the 100 doubles are thrown, print out a message telling the user how many throws it took in total to reach 100 doubles.

5. Also print out a message telling the user the average amount of throws it took to reach doubles. Round this off to 2 decimal places.

**For example:**

If the results of the throws were as follows (your code would do 100 doubles, not just 3):

```javascript
(1, 2), (3, 1), (5, 5)
(3, 3)
(2, 4), (1, 2), (3, 4), (2, 2)
```

Then my output would show something like this:

```javascript
Total throws: 8
Average throws to reach doubles: 2.67.
```
