# Exercises XP

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Exercises XP**

**Submit**

---

### **👩‍🏫 👩🏿‍🏫 What You’ll learn**

- How to manipulate lists and dictionaries in Python.

- Implementing basic conditional logic.

- Creating, accessing, and modifying data in dictionaries.

- Using Python’s built-in functions like `zip`, `map`, `filter`, and `reduce` to work with collections.

- Handling user inputs and validating data.

---

### **🛠️ What you will create**

- A set of Python scripts that convert lists to dictionaries, handle conditional pricing logic, manage and modify dictionary data, and utilize user input to interactively retrieve and display data.

---

### **🌟 Exercise 1 : Convert lists into dictionaries**

Convert the two following lists, into dictionaries.
Hint: Use the zip method

```javascript
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
```

Expected output:

```javascript
{'Ten': 10, 'Twenty': 20, 'Thirty': 30}
```

---

### **🌟 Exercise 2 : Cinemax #2**

A movie theater charges different ticket prices depending on a person’s age.

- if a person is under the age of 3, the ticket is free.

- if they are between 3 and 12, the ticket is $10.

- if they are over the age of 12, the ticket is $15.

Given the following object:

```javascript
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
```

1. How much does each family member have to pay ?

2. Print out the family’s total cost for the movies.

3. **Bonus:** Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).

---

### **🌟 Exercise 3: Zara**

Here is some information about a brand :

```javascript
name: Zara 
creation_date: 1975 
creator_name: Amancio Ortega Gaona 
type_of_clothes: men, women, children, home 
international_competitors: Gap, H&M, Benetton 
number_stores: 7000 
major_color: 
    France: blue, 
    Spain: red, 
    US: pink, green
```

1. Create a dictionary called `brand` which value is the information from part one (turn the info into keys and values).
The values `type_of_clothes` and `international_competitors` should be a list. The value of `major_color` should be a dictionary.
2. Change the number of stores to 2.
3. Use the key [type_of_clothes] to print a sentence that explains who Zaras clients are.
4. Add a key called `country_creation` with a value of Spain.
5. Check if the key `international_competitors` is in the dictionary. If it is, add the store Desigual.
6. Delete the information about the date of creation.
7. Print the last international competitor.
8. Print the major clothes colors in the US.
9. Print the amount of key value pairs (ie. length of the dictionary).
10. Print the keys of the dictionary.
11. Create another dictionary called `more_on_zara` with the following details:
- creation_date: 1975
- number_stores: 10 000
12. Use a method to add the information from the dictionary `more_on_zara` to the dictionary `brand`.
13. Print the value of the key `number_stores`. What just happened ?

---

### **🌟 Exercise 4 : Some Geography**

1. Write a function called `describe_city()` that accepts the name of a `city` and its `country` as parameters.

2. The function should print a simple sentence, such as “`city` is in `country`”.
(For example `Reykjavik is in Iceland`)

3. Give the country parameter a default value.

4. Call your function.

---

### **🌟 Exercise 5 : Random**

- Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100. Use the `random` module.

- Compare the two numbers, if it’s the same number, display a `success message`, otherwise show a `fail message` and `display both numbers`.

---

### **🌟 Exercise 6 : Let’s create some personalized shirts !**

1. Write a function called `make_shirt()` that accepts a `size` and the `text` of a message that should be printed on the `shirt`.

2. The function should print a sentence summarizing the size of the shirt and the message printed on it, such as “The size of the shirt is `size` and the text is `text`“
Call the function `make_shirt()`.

3. Modify the `make_shirt()` function so that shirts are large by default with a message that reads “I love Python” by default.

4. Call the function, in order to make a large shirt with the default message

5. Make medium shirt with the default message

6. Make a shirt of any size with a different message.

7. **Bonus:** Call the function `make_shirt()` using keyword arguments.

---

### **🌟 Exercise 7 : Temperature Advice**

**Instructions**

1. Create a function called `get_random_temp()`.
  
  1. This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
  2. Test your function to make sure it generates expected results.

2. Create a function called `main()`.
  
  1. Inside this function, call `get_random_temp()` to get a temperature, and store its value in a variable.
  2. Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”

3. Let’s add more functionality to the `main()` function. Write some friendly advice relating to the temperature:
  
  1. below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
  2. between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
  3. between 16 and 23
  4. between 24 and 32
  5. between 32 and 40

4. Change the `get_random_temp()` function:
  
  1. Add a parameter to the function, named ‘season’.
  2. Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
  3. Now that we’ve changed `get_random_temp()`, let’s change the `main()` function:
  
  1. Before calling `get_random_temp()`, we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
  2. Use the season as an argument when calling `get_random_temp()`.

5. **Bonus**: Give the temperature as a floating-point number instead of an integer.

6. **Bonus**: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.

---

### **🌟 Exercise 8 : Star Wars Quiz**

**Instructions**

This project allows users to take a quiz to test their Star Wars knowledge.
The number of correct/incorrect answers are tracked and the user receives different messages depending on how well they did on the quiz.

Here is an array of dictionaries, containing those questions and answers

```javascript
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]
```

1. Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers

2. Create a function that informs the user of his number of correct/incorrect answers.

3. **Bonus** : display to the user the questions he answered wrong, his answer, and the correct answer.
If he had more then 3 wrong answers, ask him to play again.
