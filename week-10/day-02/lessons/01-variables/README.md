# Variables

Course source: [Geeks Institute](https://www.geeks.institute/).
### **Variables**

Variables are places where we can keep information for a short time. 
A variable is like a small box where we can put any kind of information (text, numbers...).
Every variable has two parts: a **name** and a **value**. The value can be any type of information.
We can use what's inside our box to do things with the stored information.

---

**Why should we use variables?**

Variables make your code able to change and adapt. When programming, you often want to run the same instructions but with different information. This is why variables were created.

---

**Syntax**

To define a variable, we write its name and then use the equal sign to assign it the value we want.

```python
hello = "Hello World."
```

Variables have to be written as a single word, but you can use underscores instead of spaces.

```python
my_age = 23
```

Variable names should always be explicit.

---

**1. Declaring a variable**

Declaring a variable is really easy: `variable_name = "variable value"`, for example:

```python
my_name = "Rick"
my_age  = 43
```

---

**2. Variable names**

Variable names must follow certain rules, which are written in a guide called [PEP 8](https://www.python.org/dev/peps/pep-0008/#function-and-variable-names). This guide sets the standards for how your code should look.

As an example, Variable names should:

- Be composed only of lowercase letters or numbers, with words separated by underscores

- Never start with a number

- Be easy to read and understand

- Not be one of Python's special words [(Keywords)](https://www.programiz.com/python-programming/keywords-identifier)

---

**3. Using variables**

To use a variable, type his name, and python will replace it with its value.

```python
my_age  = "43"

my_name = "Rick"

print("My name is " + my_name + ", and I am " + my_age + " years old.")
"My name is Rick, and I am 43 years old."
```

**Important!!**

You may wonder why `my_age = "43"` is wrapped in quotation marks.
It is important to remember that number values not wrapped in quotation marks will be considered an integer.

```python
my_age = 43
my_age1 = "43"
These two are not the same!
type(my_age) # The 43 value makes this an integer

type(my_age1) # The " " turns the number 43 into a string
```

As we have seen before in the previous lesson, integers can not be concatenated or formatted into sentences with strings, for example, if I were to try to print this:

```python
my_age = 43
print("My name is Rick, and I am " + my_age + " years old.")
```

An error will pop up

```javascript
TypeError: can only concatenate str (not "int") to str
```

This type error explains that integers and strings can not be concatenated, so if this arises, remember to wrap your numbers in quotes.
However, there is a way to get around this error using String formatting; you’ll see examples of this below.

---

**4. Display the value of a variable**

To display a variable’s value, you can use the `print` function. For example:

```python
>>> my_hair_color = "black"

>>> print(my_hair_color)
"black"
```

You can also pass more than one argument to `print`, and they need to be separated by a comma `,`. Python will print all the items separated by a space. For example:

```python
my_hair_color = "black"
print("My hair is", my_hair_color)
"My hair is black"
```

---

**5. Increment a variable**

Incrementing means “Adding one to”, to increment a variable, replace his value by “itself plus one”:

```python
my_number = 5

# Increment it
my_number = my_number + 1

# Now my number is 6
```

We can also write `+=`; this operator means the same as `+`.

```python
my_number = 5
my_number += 5 

# += means "= my_number +"
#In this example the value of "my_number" will be 10
```

This syntax can be used with **every operator**.

---

**6. String formatting**

When working with strings that include multiple variables, formatting them can get complex. Python provides ways to make this easier, and starting with Python 3.6, **f-strings** (formatted string literals) became the preferred method for string formatting due to their simplicity and speed. However, it is still important to understand the older `str.format()` method as you may encounter it in legacy code.

**f-strings (Preferred in Python 3.6+)**

**f-strings** allow you to embed expressions inside string literals, using curly braces `{}`. Here’s how they work:

1. Start the string with an `f` before the opening quotes.

2. Place any variables or expressions inside the curly braces `{}`.

Example:

```python
name = "Frank"
age = 65

print(f"Hello, {name}. You are {age}.")
```

**Output:** `'Hello, Frank. You are 65.'`

f-strings are evaluated at runtime, which means you can embed any valid Python expression inside them, not just variables. For instance:

```python
print(f"The result of 2 * 35 is {2 * 35}")
```

**Output:** `'The result of 2 * 35 is 70'`

This is why f-strings are faster and more readable compared to older formatting methods. It is the most commonly used approach in modern Python code.

**The **`str.format()` Method (Legacy)

Before f-strings, the `str.format()` method was widely used. While it’s less common in Python 3, you might still encounter it in older codebases, so it’s important to understand.

With `str.format()`, replacement fields are marked by curly braces `{}`. Here’s an example:

```python
name = "Frank"
age = 65

print("Hello, {}. You are {}.".format(name, age))
```

**Output:** `'Hello, Frank. You are 65.'`

In this method, the number of curly braces `{}` must match the number of arguments passed to `format()`. You can also reorder or reuse arguments by using their index inside the braces:

```python
print("Hello, {1}. You are {0}.".format(age, name))
```

**Output:** `'Hello, Frank. You are 65.'`

**Example Comparison:**

Here’s an example of formatting a date using both f-strings and `str.format()`:

- **Using **`str.format()`:

```python
birthday_day = 8
birthday_month = 2
birthday_year = 1979

print("I was born the {}/{}/{}".format(birthday_day, birthday_month, birthday_year))
```

**Output:** `"I was born the 8/2/1979"`

- **Using f-strings**:

```python
birthday_day = 8
birthday_month = 2
birthday_year = 1979

print(f"I was born the {birthday_day}/{birthday_month}/{birthday_year}")
```

**Output:** `"I was born the 8/2/1979"`

**Important Notes:**

- **f-strings** are evaluated at runtime, so they can include any Python expression inside the curly braces `{}`, making them highly flexible.

- **str.format()** is still valid but is now considered outdated compared to f-strings. It’s useful to know in case you need to maintain or understand legacy code.

---

**Exercise 1**

You have a friend named Alice, and you want to send her a message with the following details:

Name: Alice

Age: 30

City: New York

Tasks:

Use f-strings to print a message saying:

"Hello, Alice! You are 30 years old and live in New York."

Use `str.format()` to print the same message.

---

**Exercise 2**

Ask the user for their age using the `input()` function and store it in a variable age.

Convert the inputted age into an integer and calculate the number of years until they turn 100.

Display a message: "You will turn 100 in X years", where X is the number of years calculated.

---

---

**7. Taking user input**

The input function lets us ask the user for their input. This function always gives you a `string` in return.

```python
input('Please state your name: ')
```

**Storing user input**

```python
name = input('Please state your name: ')
```

---

**Numeric operations Example**

We can use variables to perform all kinds of operations, including mathematical operations. If used alongside the `input()` function, be careful and remember that `input()` always gives you a string in return - as a result, you need to cast your string as an integer if you wish to perform a mathematical operation with it.

```python
number = input('Multiply me by three: ')
number * 3
>> '444' # incorrect

int(number) * 3
>> 12 # correct
```

---

### **Exercise**

Analyze the code below and predict what the outcome will be. Check the results in your python shell.

```python
age = input("How old are you? ")
print(f"You are {age} years old")
```
