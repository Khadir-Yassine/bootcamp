# Functions

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Functions**

---

## **What you will learn**

- Functions

- Default parameters

- Keyword arguments

- Return values

---

## **Useful resources :**

- [See the official documentation here.](https://docs.python.org/3/tutorial/controlflow.html?#defining-functions)

---

### **Functions**

A function is a reusable block of code that runs when you “call” it. Think of `functions` as a variable that stores functionality in the form of an executable block of code instead of storing data; `functions`.

Functions are named blocks of code that are designed to do one specific job.

When you want to perform a particular task that you’ve defined in a function, you call the name of the function responsible for it.

If you need to perform that task multiple times throughout your program, you don’t need to type all the code for the same task again and again; you call the function dedicated to handling that task, and the call tells Python to run the code inside the function.

Functions allow you to break your programs into small parts, each of which does one specific job.

Using functions, you’ll be able to write more efficient code that’s easier to troubleshoot and maintain, and that can be reused in many different programs.

---

**Syntax**

**Example of a simple function that says hello**

```javascript
def say_hello():
    """A function that says hello"""
    print("Hello!") 

say_hello()
```

This example shows the simplest structure of a function.

---

**Definition**

The first line uses the keyword `def` to inform Python that you’re defining a function.

This is the function definition, which tells Python the *name* of the function.

The parentheses hold some information about parameters; we’ll see this very soon. In this case, the name of the function is `say_hello()`, and it needs no parameters, so its parentheses are empty (Even so, the parentheses are required.)

Finally, the definition ends with a colon, and all the code included in the function needs to be *indented*.

---

### **Code**

Any indented lines that follow `def say_hello():` make up the function’s body.

The text on the second line is a comment called a *docstring*, which describes what the function does. *Docstrings* are enclosed in triple quotes, which Python looks for when it generates documentation for the functions in your programs.

The line `print("Hello!")` is the only line of actual code in the body of this function, so `say_hello()` has just one job: print “Hello!”.

---

**1. Function call**

When you want to use this function, you *call* it.

A function *call* tells Python to execute the code in the function. To *call* a function, you write the function’s name, followed by any necessary parameters in parentheses, as shown on the last line. Because no information is needed here, calling our function is as simple as entering `say_hello()`. As expected, it prints `Hello!`.

---

**2. Passing information to a function**

Powerful feature of functions is *arguments*, or *parameters*.

There are values in the functions that can be changed each time we call it. For example, the `say_hello` function should say hello to someone, like “Hello Rick!”, but because we want to be able to change this name (and print hello to “Morty” as well), we don’t hard-code the name in the function.

Instead of this, we declare a *parameter* `username` and we pass an *argument* for it.

```javascript
def say_hello(username):
    print("Hello "+username)

say_hello("Rick") # "Rick" is an argument
# output "Hello Rick"

say_hello("Morty") # "Morty" is an argument
# output "Hello Morty"
```

- In the function **definition**, we add the **parameter** that will accept a value.

```javascript
def say_hello(username):
    print("Hello "+username)
```

- In the function **call**, we pass the value (ie. an argument).

```javascript
say_hello("Rick") # "Rick" is an argument
# output "Hello Rick"
```

Here the function will execute the same code but with a different value for `username`.

```javascript
say_hello("Rick") # "Rick" is an argument
# output "Hello Rick"

say_hello("Morty") # "Morty" is an argument
# output "Hello Morty"
```

**Be careful!:** If the function expects one argument, you can pass only one argument; less or more will throw an error.

---

**Example of a function that accept more than one argument**

```javascript
def say_hello(username, language):
    if language == "EN":
        print("Hello "+username)
    elif language == "FR":
        print("Bonjour "+username)
    else:
        print("This language is not supported: " + language)

say_hello("Rick", "FR")
```

This function accepts two arguments:

- The first one, `username`, is used to store the value of the username that we need to greet.

- The second one, `language`, is used to store the language of the greeting.

When *calling* the function, we pass two arguments in the right order (first the `username` and then the `language`).

Arguments matched up this way (by order) are called *positional arguments.*

**Careful:** You can get unexpected results if you mix up the order of the arguments in a function call when using positional arguments.

If you get weird results, check to make sure the order of the arguments in your function call matches the order of the parameters in the function’s definition.

---

**3. Keyword arguments**

A *keyword argument* is a name-value pair that you pass to a function. You directly associate the name and the value within the argument, so when you pass the argument to the function, there’s no confusion.

Keyword arguments free you from having to worry about correctly ordering your arguments in the function call, and they clarify the role of each value in the function call.

Let’s rewrite the `say_hello` function call using *keyword arguments*.

```javascript
def say_hello(username, language):
    if language == "EN":
        print("Hello "+username)
    elif language == "FR":
        print("Bonjour "+username)
    else:
        print("This language is not supported: " + language)

say_hello(username="Rick", language="FR")
```

**Careful:** When you use keyword arguments, be sure to use the exact names of the parameters in the function’s definition

The function `say_hello` hasn’t changed. But when we call the function, we explicitly tell Python which parameter each argument should be matched with.

When Python reads the function call, it knows to store the argument ‘Rick’ in the parameter username and the argument ‘FR’ in language.

The order of keyword arguments doesn’t matter because Python knows where each value should go. The following two function calls are equivalent:

```javascript
say_hello(username="Rick", language="FR")
say_hello(language="FR", username="Rick")
```

You can use both *keyword* and *positional* arguments in the same function call, but you need to place every *positional* argument before the *keyword* ones.

For example, this will work:

```javascript
say_hello("Rick", language="FR")
```

But this wont:

```javascript
say_hello(username="Rick", "FR")
```

---

**4. Default values**

When writing a function, you can define a default value for each parameter.

If an argument for a parameter is provided in the function call, Python uses the argument value. If not, it uses the parameter’s default value.

So when you define a default value for a parameter, you can exclude the corresponding argument you’d usually write in the function call.

Using default values can simplify your function calls and clarify how your functions are typically used.

For example, if you notice that most of the calls to `say_hello()` are being used to prompt greetings in English, you can set the default value of `language` to “EN”. Now anyone calling `say_hello` in English can omit that information:

```javascript
def say_hello(username, language="EN"):
    if language == "EN":
        print("Hello "+username)
    elif language == "FR":
        print("Bonjour "+username)
    else:
        print("This language is not supported: " + language)

say_hello("Rick")
# OR
say_hello(username="Rick")
```

We changed the definition of `say_hello` to include a default value, “EN”, for `language`.

When the function is called with no `language` specified, Python knows to use the value “EN” for this parameter.

To use a language other than english, you could use a function call like this:

```javascript
say_hello("Rick", "FR")
# OR
say_hello(username="Rick", language="FR")
```

Because an explicit argument for `language` is provided, Python will ignore the parameter’s default value.

When you use default values, any parameter with a default value must be listed after all the parameters that don’t have default values. This allows Python to continue interpreting positional arguments correctly.

---

**5. Avoiding argument errors**

When you start to use functions, don’t be surprised if you encounter errors about unmatched arguments. Unmatched arguments occur when you provide fewer or more arguments than a function needs to do its work.

For example, here’s what happens if we try to call `say_hello()` with no arguments:

```javascript
Traceback (most recent call last): 
    File "app.py", line 6, in <module> say_hello()
TypeError: say_hello() missing 2 required positional arguments: 'username' and 'language'
```

The first line of the traceback tells us the location of the problem, allowing us to look back and see that something went wrong in our function call.

On the second one, the offending function call is written out for us to see.

Then on the third, the traceback tells us the call is missing two arguments and reports the names of the missing arguments.

Python is helpful in that it reads the function’s code for us and tells us the names of the arguments we need to provide. This is another motivation for giving your variables and functions descriptive names. If you do, Python’s error messages will be more beneficial to you and anyone else who might use your code.

If you provide too many arguments, you should get a similar traceback that can help you correctly match your function call to the function definition.

---

**6. Local and Global scope**

**Local scope**

```javascript
def number_by_three(name, day):
  sentence = f'Hello {name}! Today is {day}.'
  print(sentence)

print(day)

>> NameError: name 'day' is not defined
```

---

**Global scope**

```javascript
name = 'Jack'

def say_hi():
  print(name)

say_hi()

>> 'Jack'
```

---

**7 . Return values**

A function doesn’t always have to display its output directly. Instead, it can process some data and then return a value or set of values.

The value the function returns is called a return value.

The return statement takes a value from inside a function and sends it back to the line that called the function.

Return values allow you to move much of your program’s grunt work into functions, which can simplify the body of your program.

---

**Returning a simple value**

Let’s look at a function that takes a first and last name, and returns a neatly formatted full name:

```javascript
def get_formatted_name(first_name, last_name):
    """Return a full name, neatly formatted."""
    full_name = first_name + ' ' + last_name
    return full_name.title()

musician = get_formatted_name('jimi', 'hendrix') 
print(musician)
```

```javascript
Jimi Hendrix
```

The definition of `get_formatted_name()` takes as parameters a first and last name.

The function combines these two names, adds a space between them, and stores the result in `full_name`.

The value of `full_name` is converted to `title` case and then returned to the calling line.

When you call a function that returns a value, you need to provide a variable where the return value can be stored.

In this case, the returned value is stored in the variable `musician`. The output shows a neatly formatted name made up of the parts of a person’s name:

**Example**:

```javascript
def divide_by_three(number):
  return number / 3

first_number = 12
first_number_computed = divide_by_three(first_number)
print(first_number_computed)
>> 4.0

second_number = 27
second_number_computed = divide_by_three(second_number)
print(second_number_computed)
>> 9.0
```

---

**Returning more than one value with a tuple**

We already saw that a tuple can be unpacked:

```javascript
my_tuple = ("jimi", "hendrix")
first_name, last_name = my_tuple
print("First name is: " + first_name)
print("Last name is: " + last_name)
```

```javascript
First name is jimi
Last name is hendrix
```

If so, we can return a tuple at the end of the function, and unpack it when we *call* it:

```javascript
def format_name(first_name, last_name):
    return (first_name.title(), last_name.title())

first, last = format_name("RICk", "mORTY")
print(first)
print(last)
```

```javascript
Rick
Morty
```

The function receives a `first_name` and a `last_name`, then formats them and returns them as a tuple.

On the function call, the tuple is unpacked into two variables, `first` and `last`.

---

### **Exercise**

Write a function `calculation()` such that it can accept two variables and calculate the addition and subtraction of it. And also it must return both addition and subtraction in a single return call

```javascript
For example:

def calculation(a, b):
    # Your Code

res = calculation(40, 10)
print(res)
```
