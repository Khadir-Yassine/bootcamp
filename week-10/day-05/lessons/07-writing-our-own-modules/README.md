# Writing our own Modules

Course source: [Geeks Institute](https://www.geeks.institute/).
### **Table of Contents**

- What you will learn

- Modules

- What is Module?

- Creating module

- Importing an Entire Module

- Importing specific functions

- Using alias

- Installing an external module

- Working with a requirements file

---

### **What you will learn**

- Writing your own modules

---

### **Modules**

One advantage of functions is the way they separate blocks of code from your main program. By using descriptive names for your functions, your main program will be much easier to follow.

---

### **What is a Module?**

You can go a step further by storing your functions in a separate file called a **module** and then **importing** that module into your main program.

An `import` statement tells Python to **make the code in a module available** in the currently running program file.

Storing your functions in a separate file allows you to reuse functions in many different programs. When you reserve your functions in individual files, you can share those files with other programmers without having to share your entire program.

Knowing how to import functions also allows you to use libraries of functions that other programmers have written.

There are several ways to import a module; we will describe them in this chapter. But first, let’s **create our own module**!!

---

### **Creating a module**

A module is just a python file (a file with the *.py* extension).

Let’s create a file called `pizza.py` containing the function `make_pizza()`.

```javascript
def make_pizza(size, *toppings):
    """
    Summarize the pizza we are about to make.
    """    
    print(f"\n Making a {size}-inch pizza with the following toppings:")   
    for topping in toppings:        
        print("- " + topping)
```

We will create another file called `making_pizzas.py` (in the same directory as `pizza.py`).
This file will **import the function** we just created and made two calls to it.

---

### **Importing an Entire Module**

To import an entire module:

- use the `import` statement,

- followed by the name of the module (without the extension).

For example, to import the `pizza.py` file:

```javascript
import pizza
```

When Python reads this file, `import pizza` tells Python to open the file **pizza.py** and copy all the functions from it into this program.

You don’t see code being copied between files because Python copies the code behind the scenes as the program runs.

All you need to know is that any function defined in **pizza.py** will now be **available** in **making_pizzas.py**.

To call a function from an imported module, enter the name of the module you imported, `pizza`, followed by the name of the function, `make_pizza()`, separated by a dot.

```javascript
import pizza

pizza.make_pizza(16, 'pepperoni') 
pizza.make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')
```

---

### **Importing specific functions**

You can also import a specific function from a module. Here’s the general syntax for this approach:

```javascript
from module_name import function_name
```

You can import as many functions as you want from a module by separating each function’s name with a comma:

```javascript
from module_name import function_0, function_1, function_2
```

The `making_pizzas.py` example would look like this if we want to import just the function we’re going to use:

```javascript
from pizza import make_pizza

make_pizza(16, 'pepperoni') 
make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')
```

---

### **Using alias**

You can give a nickname to each module/function you import. This nickname, a short, unique alias (an alternate name similar to a nickname for the function), is defined as` keyword.

```javascript
from pizza import make_pizza as mp
```

The general syntax for a function is

```javascript
from module_name import function_name as alias_name
```

And for a module:

```javascript
import module_name as alias_name
```

---

**Exercise**

Create a file called `operators.py`

Create 2 functions : `addOperator(x,y)` that returns the addition of 2 numbers, and `divideOperator(x,y)` that returns the division of 2 numbers

Create another file called `calculator.py`, and import the operators module. Call the 2 functions and display the results

Do this process 3 times :

- once by importing the whole module

- the second time by importing specific functions

- the third time by using alias

---

### **Installing an external module**

Python has a huge *open source* community, it means a lot of developers put their source code online.

You can download their modules to be able to use their function.

Python has a built-in modules installer, called *pip* (sometimes called *pip3*).

To check your pip installation, enter the following command in a terminal:

- For Linux and Mac OS: `pip3 --version`

- For windows: `python -m pip --version`

Pip has a list of modules that he can download, available on [pypi](https://pypi.org/).

To install one of the modules, check its name on `pypi` and use:

```javascript
$ pip install module_name
```

---

### **Working with a requirements file**

A requirements file is used to make it easier for other developers to install the correct versions of the required Python package to run the Python code we’ve written.

Most python programs come with a text file, usually a `requirements.txt` containing a list of every required module used in your python code and their version.
It is good practice to generate and share a `requirements.txt` file when uploading your code to `Github`
A `requirements.txt` file looks like this:

```javascript
appnope==0.1.0
backcall==0.1.0
beautifulsoup4==4.6.3
bleach==2.1.4
certifi==2018.8.24
chardet==3.0.4
Click==7.0
cycler==0.10.0
decorator==4.3.0
defusedxml==0.5.0
entrypoints==0.2.3
Flask==1.0.2
```

You can install every required module from a `requirements.txt` file with the `pip install -r (filename)` argument within `pip`.

```javascript
pip install -r requirements.txt
```

You can generate a requirements file for your python project with *pipreqs*, install it with:

```javascript
$ pip install pipreqs
```

To generate a requirements file, just run this in your project folder:

```javascript
$ pipreqs .
```

There is also an alternate way to do this using `pip freeze` inside your project folder:

```javascript
$ pip freeze > requirements.txt
```

This command creates the `requirements.txt` in the same way `pipreqs` would write the file.
