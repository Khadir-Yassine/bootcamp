# Exceptions

Course source: [Geeks Institute](https://www.geeks.institute/).
### **Table of Contents**

- What you will learn
  
  - Syntax errors
  - Exceptions
  
  - Handling an exception
  - The else statement
  - The finally statement
  - Raising an exception

---

## **What you will learn**

- How to handle exceptions

---

Until now, error messages have only been mentioned, but you have probably seen some if you have tried out the examples. There are (at least) two different kinds of errors: syntax errors and exceptions.

---

### **Syntax errors**

Syntax errors happen when there is an incorrect statement.
An incorrect statement can be something as simple as an extra set of parentheses. A simple syntax error is something like this:

```javascript
print("Hello World"))

#When you run this code, you'll see something like this,
#SyntaxError: unmatched ')'
```

In this example, there was one bracket too many. Remove it and rerun your code, and the syntax error will be removed. Syntax errors usually have a clear-cut solution, and the error message usually points directly to the problem. Exceptions, however, typically have more complex error explanations.

---

### **Exceptions**

![exceptions](https://github.com/devtlv/studentsGitHub/assets/30896388/cf7ae6be-4d2d-4a67-ad07-d96e1e4e0980)

Even if a statement or expression is syntactically correct, it may cause an error when an attempt is made to execute it for example,

```javascript
print(1/0)
#Traceback (most recent call last):
  #File "/pyblog/app.py", line 1, in <module>
    #print(1/0)
#ZeroDivisionError: division by zero

#Process finished with exit code 1
```

This here is an exception error. This type of error occurs when the Python code is syntactically correct. The last line of the error message indicates what happened. In this case, the error above reads `ZeroDivisionError`. Exceptions come in different types, and the type is printed as part of the message.

---

**Handling an exception**

The try-except block

try-except helps protect a block of code from crashing. If the code inside the try block crashes, then the program will continue to the except block instead of stopping.

*Syntax:*

```javascript
try:
    PROBLEMATIC CODE
    ADDITIONAL CODE
except:
    EMERGENCY CODE
    </code> if the program crashes on PROBLEMATIC CODE, then ADDITIONAL CODE won't be reached
```

```javascript
def age():
    user_age = input("How old are you?\n>>> ")
    #######
    try:
        user_age = int(user_age)
        print("I AM AFTER USER_AGE")
    except:
        print("Your age is not a real age")
        user_age = 0
    #######
    print(f"Next year, you will be {user_age+1} years old")

age()

How old are you?
>>> 3weqf
Your age is not a real age
Next year, you will be 1 year old
```

```javascript
valid_flag = False
while not valid_flag:
    userage = input("How old are you?")
    try:
        userage = int(userage)
        valid_flag = True
    except:
        print("Please enter a real age")

print("Next year, your age will be",userage+1)
```

```javascript
valid_flag = False
while not valid_flag:
    userage = input("How old are you?")
    try:
        userage    = int(userage)
        valid_flag = True
    except:
        pass

print("Next year, your age will be",userage+1)
```

---

**Exercise**

Given a list of numbers, write a function that returns the sum of every number. BUT you can have a malicious string inside the list.

```javascript
my_list = [2,3,1,2,"four",42,1,5,3,"imanumber"]
```

---

**The else statement**

```javascript
valid_flag = False
while not valid_flag:
    userage = input("How old are you?")
    try:    # TRY THIS
        userage    = int(userage)
    except: # IF YOU GOT AN ERROR
        print("Wrong age!")
    else:   # ELSE
        valid_flag = True

print("Next year, your age will be",userage+1)
>>How old are you?3
Next year, your age will be 4
```

---

**The finally statement**

```javascript
valid_flag = False
while not valid_flag:
    userage = input("How old are you?")
    try:    # TRY THIS
        userage    = int(userage)
    except: # IF YOU GOT AN ERROR
        print("Wrong age!")
    else:   # ELSE
        valid_flag = True
    finally:
        print('There may or may not have been an exception.')

print("Next year, your age will be",userage+1)
```

---

**Raising an exception**

The raise statement allows the programmer to force a specified exception to occur. If you want to throw an error when a specific condition occurs using raise, you could go about it like this:

```javascript
x = 10
if x > 5:
    raise Exception(f"x should not exceed 5. The value of x was {x}")
#The error that will appear is your own custom error
#Traceback (most recent call last):
  #File "pyblog/app.py", line 52, in <module>
    #raise Exception(f"x should not exceed 5. The value of x was {x}")
#Exception: x should not exceed 5. The value of x was 10'

#Process finished with exit code 1
```

The program, at this point, comes to a halt and prints our custom exception to the screen, offering clues about what went wrong.

If we would like to continue our program while printing an error we can use an Assertion error.

`Assertion errors` are another way to raise an exception but are helpful if we are looking for a specific error while intending to keep our program in motion.

```javascript
z = 9
try:
    assert 1 == z
except AssertionError:
    print("Error: Those are not equals")
```

## Worked solutions

[English explanations and runnable Python implementation](solutions.md).
