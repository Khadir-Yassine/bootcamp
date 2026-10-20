# Get started with Python

Course source: [Geeks Institute](https://www.geeks.institute/).
### **Introduction**

This first day helps you start using Python, which is a very popular and useful programming language. You will first install Python on your computer. Then you will learn the basic rules of how to write Python code and how to work with different types of information. During the lessons, you will understand the key parts of Python: variables (containers that store data), conditionals (instructions that run only when certain conditions are true), loops (code that repeats), and ways to organize data such as lists, tuples, and sets (different ways to store multiple pieces of information together).

---

### **What is Python?**

![python-logo](https://github.com/devtlv/studentsGitHub/blob/master/Images%20cours%20%C3%A0%20h%C3%A9berger%20-%2006.03.2024/Week%202%20-%20Python%20and%20Web%20Programming/W2D1/python-logo-200x200-1.png?raw=true)

Python was originally created in **1991** by Guido van Rossum.

Python is an **interpreted**, object-oriented, high-level **programming language** with dynamic semantics.

It has built-in data structures, combined with dynamic typing and dynamic binding, making it very attractive for rapid application development, scripting, or as a glue language to connect existing components together.

**Main uses of Python:**

- Server-side web development

- Software development

- System scripting

- Machine learning

---

### **What You will be learning**

**Lesson 1: Starting with Python**

- Putting Python on your computer.

- Learning how to use the Python talking screen (interactive shell).

- Writing and running Python instructions.

- Working with basic types of information: text (strings), whole numbers (integers), numbers with decimal points (floats), and yes/no values (booleans).

- Using math symbols and comparing values.

- Changing one type of information to another and fixing problems when types don't match.

**Lesson 2: Python Variables and Conditionals**

- Making and using containers for information (variables).

- Creating decision-making code with if, elif, and else statements.

- Learning why spaces at the start of lines (indentation) matter in Python.

- Better ways to format and show text.

**Lesson 3: Sequences, Lists, Sets, and Tuples**

- Using Python's ready-made ways to store many items: lists, tuples, and sets.

- Learning what each storage type can do and how to use them.

- Changing stored items by finding their position, taking parts out, adding new items, or removing items.

**Lesson 4: Loops**

- Learning how to make code repeat with 'for' and 'while' loops.

- Going through each item in your data one by one.

- Stopping loops early with 'break' or skipping parts with 'continue'.

- Using loops to solve real problems in your code.

---

### **Prerequisites**

- You don't need to know programming before, but you should know how to use a computer for basic tasks.

- You need a computer with internet to download Python and find learning materials.

- A code editor VS Code is recommended, install from the [Official Download Page](https://code.visualstudio.com/download)

---

### **Installing Python**

To install Python, follow these steps:

1. Navigate to the Python downloads page: [Python Official Downloads Page](https://www.python.org/downloads)

2. Click on the button to download Python lastest version.

3. Follow the installation instructions (leave all defaults as-is).
**>>>> For Windows users, be sure to check Add python.exe to PATH (environment variable) <<<<**

4. Open your terminal, and type the command python –-version. The Python interpreter should respond with the version number. Then you are good to go!

---

### **Python interpreter**

Python comes with a built-in interpreter. You see it when you type python at the command line: `python` in your terminal
For example for a mac :

```python
(base) John@john-MacBook-Air ~ % python

Python 3.9.12 (main, Apr  5 2022, 01:53:17) 
[Clang 12.0.0 ] :: Anaconda, Inc. on darwin
Type "help", "copyright", "credits" or "license" for more information.

>>> 
```

That last thing you see, >>> is the “Python prompt”.
This is where you type code.

For example,

```python
>>> print("hello world!")
hello world!

>>> 4 + 5
9

>>> 2 ** 8 - 1
255

>>> print ("one string" + " plus another")
one string plus another
```

To exit, the python interpreter, you can type `>>> quit()`.

---

### **How to run a python file**

A python file is called a “module” or “script”
It should be named with the `.py` extension: **file_name.py**

To run it, you have to call python on the command line, and pass in your module name:

```python
python the_name_of_the_script.py
```

---

**🚀 Challenge**

With the IDE of your choice (Notepad (windows), TextEdit (Mac), Kate(Linux), or Sublime, Vscode, Pycharm that you can download), create a new python file that prints your first name. (a IDE is Integrated Development Environment) is a software application that provides tools and features to make programming easier and more efficient. It is like a one-stop shop for coding, debugging, and managing your projects.)

---

### **Basic Value types**

In Python, every value belongs to a type. To figure out the type of an object, use the type() function. The type() function returns the type of the object placed in between the parentheses, for example,
For example,

```python
type(42) # the type of the object will be displayed as <class 'int'>

a = 42
type(a) #Type : <class 'int'>

#Let's try to type a decimal

type(3.14) #Type : <class 'float'>

b = 3.14
type(b)   #Type : <class 'float'>

# If you were to type a bit of text

type("Hello World") #The result will be <class 'str'>

hello = "Hello World"
type(hello) #Type : <class 'str'>
```

The type of an object determines what it can do.

**a) Strings**

Strings are chains of characters we use to represent text. See the official documentation [here](https://docs.python.org/3/library/string.html).

Writing strings is easy; you use single or double quotes, then add your text and close the quotes.

```python
"hello world"
'hello world'
```

We can manipulate strings using built-in functions.

You can capitalize a string (1st letter uppercase)

```python
'hello'.capitalize()
>> 'Hello'
```

Uppercase a string

```python
'hello'.upper()
>> 'HELLO'
```

Lowercase a string

```python
'HELLO'.lower()
>> 'hello'
```

Replace content inside of a string

```python
'goodnight moon'.replace('goodnight', 'hello')
>> 'hello moon'
```

**b) Number**

There are two types of numbers in Python: Integers and Floats. Integers are whole numbers such as 1, 14, and so on. Floats are point numbers such as 3.6, 103.98…
See the official documentation [here](https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex).

Integers

```javascript
1
45
6590
```

Floats

```javascript
4.3
12.56
123.908
```

You can perform all sorts of mathematical operations using numbers: additions, subtractions, division, multiplications…

```python
#Additions

3 + 18
>> 21

#Subtractions

67 - 18
>> 49

#Multiplications

3 * 9
>> 27

#Divisions

12 / 5
>> 2.4

#Double Divisions

12 // 5
>> 2
```

| Operator | Meaning | Example |
| --- | --- | --- |
| + | Add two operands | x + y |
| - | Subtract right operand from the left | x - y |
| * | Multiply two operands | x * y |
| / | Divide left operand by the right one | x / y |
| % | Modulus - remainder of the division of left operand by the right | x % y (remainder of x/y) |

---

**🚀 Challenge**

In the python shell, Create a variable called my_age, use python to know how old you will be in 24 years

---

**c) Type Casting**

In Python ‘12’ is not the same as 12. The first is a string (pay attention to quotation marks), and the second is an integer.
You can transform the string ‘12’ into an integer through a process called type casting.
We are replacing the type of our value and, converting it into another type. In this case, a string str to an integerint. To do so, we use the int() function.

For example,

```python
"Hello world"  #is a valid string

Hello world #is not a valid string 

>>> '12' * 2
'1212' # not the expected result

>>> int('12') * 2
24 # expected result

>>> str(30) # To convert the number 30 into a string
"30"

>>> int("30") # To convert the string 30 into an integer
30
```

**d) Adding data types together**

You can add a string with a string and a number with a number, but not a number with a string.

```python
Example

>>> "Hello" + "World"
"HelloWorld"

>>> "Hello "*4
"Hello Hello Hello Hello "

>>> "Hello" + " " + "World"
"Hello World"

>>> ("Hello" + "World" + " ")*2
"HelloWorld HelloWorld "

# Trying to add a string with a number will throw an error:

>>> "My favorite number is " + 8
Traceback (most recent call last): File "<stdin>", line 1, in <module> 
TypeError: unsupported operand type(s) for +: 'int' and 'str'  
```

Notice that the error has a type TypeError and a clear explanation Unsupported operand type(s) for +: ‘int’ and ‘str’

**e) Booleans and Comparison operators**

Booleans are binary operators; they are either True or False. 
They let you define an action based on the “truthiness” or “falseness” of a given statement. 
We tend to use them with comparison operators such as greater than, lower than, equal to…
See the official documentation [here](https://docs.python.org/3/library/stdtypes.html).
Booleans in Python are spelled with their first letter capitalized: True and False.

Comparison operators enable us to define a statement and test whether the said statement is true or not.

```python
#Greater

# Greater than
3 > 4
>> False

# Greater than or equal to
4 >= 4
>> True

# Lower than
3 < 4
>> True

# Lower than or equal to
4 <= 4
>> True

# Equal to
'hello' == 'hello'
>> True

# Not equal to
'hello' != 'hello'
>> False

# and

True and False
>> False

3 < 4 and 2 > 1
>> True

'b' == 'a' and 'c' == 'c'
>> False

# or

True or False
>> True

3 < 4 or 2 > 1
>> True

'b' == 'a' or 'c' == 'c'
>> True
```

| Operator | Meaning | Example |
| --- | --- | --- |
| > | Greater than - True if left operand is greater than the right | x > y |
| < | Less than - True if left operand is less than the right | x < y |
| == | Equal to - True if both operands are equal | x == y |
| != | Not equal to - True if operands are not equal | x != y |
| >= | Greater than or equal to - True if left operand is greater than or equal to the right | x >= y |
| <= | Less than or equal to - True if left operand is less than or equal to the right | x <= y |
| and | Logical AND - True if both conditions are True | x > 5 and y < 10 |
| or | Logical OR - True if at least one condition is True | x > 5 or y < 10 |

---

## Keep in mind

Each lesson builds on what you learned before. This helps you learn step by step and gives you a good basic understanding of Python programming by the end of the day.
