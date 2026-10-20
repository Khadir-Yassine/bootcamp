# Modules

Course source: [Geeks Institute](https://www.geeks.institute/).
### **Table of Contents**

- What we will learn:
  
  - Modules
  
  - 1. import
  - 2. form
  - 3. as
  - 4. pip
  - 5. some modules examples

---

## **What we will learn:**

- How to work with modules and import them

---

### **Modules**

Modules are single python files that can be imported and used inside another file.

**1. import**

We use `import` statement to import a python file into another python file; it will run when the module is imported.
Inside the other python file, all the modules’ functions and classes can be accessed by `module_name.function_name`.

For example, import a file called `my_program.py`, write `import my_program` in your code.

```javascript
# math module
import math

print(math.e) # Euler's number
# >> 2.718281828459045
```

Convention says you should write all your import statements on the top of the page.

---

**2. from**

We can import specific functions from a module with the `from` statement.

There is no need to call `module_name.function_name` when using the importing `from`; you need only call the function regularly since it has been directly imported to your application.

Example:

`from mymodule import myfunction`

```javascript
from math import floor

print(floor(9.8923))
# >> 9

# Instead of
import math

print(math.floor(9.8923))
# >> 9
```

---

**3. as**

We can use aliases to change the name of the module inside the program.

Example:
`import mymodule as mod`

```javascript
# Calculus of the square root of a number.
# alias called 'm'
import math as m

print(m.sqrt(121))
print(m.sqrt(729))

# >> 11
# >> 27

print(m)
# >> <module 'math' from '/usr/local/lib/python3.8/lib-dynload/math.cpython-38-x86_64-linux-gnu.so'>

print(dir(m))
# >> ['__doc__', '__file__', '__loader__', '__name__', '__package__', '__spec__', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atan2', 'atanh', 'ceil', 'comb', 'copysign', 'cos', 'cosh', 'degrees', 'dist', 'e', 'erf', 'erfc', 'exp', 'expm1', 'fabs', 'factorial', 'floor', 'fmod', 'frexp', 'fsum', 'gamma', 'gcd', 'hypot', 'inf', 'isclose', 'isfinite', 'isinf', 'isnan', 'isqrt', 'ldexp', 'lgamma', 'log', 'log10', 'log1p', 'log2', 'modf', 'nan', 'perm', 'pi', 'pow', 'prod', 'radians', 'remainder', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'tau', 'trunc']
```

---

**4. pip**

Pip is a python packages manager; it can download and install packages alone; it takes them automatically from `pypi.org` and installs a downloaded package. You can use it from the terminal.

- Package

A package is made up of multiple python files and can even include libraries in C or C++; it’s an entier folder.

- `__init__.py`

When looking at the structure of the packages, you’ll see a file called `__init__.py`, this is the old syntax to create python packages, it’s not necessary today, but most of the packages are built like this. This file is executed when the package is loaded.
Every module in the package can be loaded alone by using `from my_package import my_module`

---

**5. Some modules examples**

- time

- random

- requests

- os

---

**6. Example using the modules **`Faker` and `tabulate`

*Main Function*

`if __name__ == "__main__":`

*Create fake data using faker*

From the terminal, install the Faker package with the command: `pip install Faker`

In your Python program, import Faker and have it create a file of fake dates

```javascript
    from faker import Faker
    fake = Faker()
print(fake.date())
```

Write these to two different files.

**Create a fake Date**

```javascript
from faker import Faker
fake = Faker()

def create_file(num):
    f = open("datefile" + num + ".txt", "w")
    for _ in range(100):
        f.write(f"{fake.date()}\n")
    f.close()
print(fake.date())

create_file('1')
create_file('2')
```

---

**Finds the median between two dates.**

```javascript
import sys
import typing

from tabulate import tabulate

def main(file1, file2):
    file1_contents = extract_file_contents(file1)
    file2_contents = extract_file_contents(file2)

    display_files(file1_contents, file2_contents)

    dates = sorted(set(file1_contents).union(file2_contents))
    print(dates[len(dates) // 2])

def display_files(file1_contents, file2_contents):
    table = {
        'file1': file1_contents,
        'file2': file2_contents
    }
    print(tabulate(table))

def extract_file_contents(file_path: str) -> typing.List[str]:
    """ 
    Extract file contents and strip whitespaces from each row.
    : param file_path: The path to the file to extract
    : return: A list of date data rows
    """ 

    with open(file_path, 'r') as f:
        file_contents = f.readlines()
    new_file_contents = []
    for date_data_record in file_contents:
        date_data_record = date_data_record.strip()
        if date_data_record:
            new_file_contents.append(date_data_record)
    return new_file_contents

if __name__ == '__main__':
    args = sys.argv[1:]
    if len(args) != 2:
        print(f"Expected two arguments as files. Got {len(args)} instead.")
        sys.exit(1)
    main(*args)
```
