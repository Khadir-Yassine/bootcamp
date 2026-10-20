# Conditionals

Course source: [Geeks Institute](https://www.geeks.institute/).
### **Conditions**

Conditional statements are a universal programming paradigm to take specific actions based on data comparison. It’s our way of communicating to the computer; if something is true, then perform such action, otherwise perform another action.

See the official documentation [here](https://docs.python.org/3/tutorial/controlflow.html#if-statements)

---

Conditions are expressions that compare two elements.

Python support the following logical conditions:

- Equals: `a == b`

- Not Equals: `a != b`

- Less than: `a < b`

- Less than or equal to: `a <= b`

- Greater than: `a > b`

- Greater than or equal to: `a >= b`

Those expressions return True or False.

```javascript
>>> 33 > 20
True
>>> 130 > 190
False
```

---

### **if statements**

The primary keyword to create a condition is `if` followed by the condition we want to implement and a colon. After that comes the block of code to execute if the condition is `True`.

`if` statement tests a condition and executes a code if the condition is True.

**Make sure you indent correctly**.

Here is the syntax:

```javascript
...
if <condition>:
    CODE
    CODE
...   
```

Notice that python relies on indentation (whitespace at the beginning of a line) to define the scope in the code.

```javascript
a = 33
b = 200
if a > b:
    print("a is greater than b")

print("Finished")
```

Test this code with some other values!

---

**Exercise**

1. ask the user to enter his/her name

2. use the `len()` function to check the lenght of the name. if it is less than 5 letter `print('You have a short name :)')`

---

### **elif statement**

The `elif` keyword is python’s way of saying, “if the previous conditions were not true, then try this condition”.

```javascript
a = 33
b = 200

if a > b:
    print("a is greater than b")
elif a == b:
    print("a is equal to b")

print("Finished")
```

---

### **else statement**

The `else` keyword catches anything which isn’t caught by the preceding conditions.

If our condition is `False`, we can set a default behavior using `else`. Any block of code that follows our `else` statement will execute, provided that the conditions of the `if` statement are `False`.

```javascript
a = 33
b = 200

if a > b:
    print("a is greater than b")
elif a == b:
    print("a is equal to b")
else:
    print("b is greater than a")

print("Finished")
```

---

### **Examples**

```javascript
# Example 1
if 3 > 4:
  print('something is fishy...')
elif 3 <= 4:
  print('3 is not equal to 4, but it is lower than 4')
else:
  print('4 is actually greater than 3')

# Example 2
name = input('Please state your name: ')

if name == 'Frank':
  print('You are Frank Sinatra')
elif name == 'Miles':
  print('You are Miles Davis')
elif name == 'Tony':
  print('You are Tony Benett')
else:
  print('I do not know who you are!')
```

---

### **AND & OR statements**

They are both used to combine conditional statements.

`and` statement will be activated if both conditions are true.

```javascript
a = 200
b = 33
c = 500
if a > b and c > a:
  print("Both conditions are True")
```

`or` statement will be activated if only one of the conditions are true.

```javascript
a = 200
b = 33
c = 500
if a > b or a > c:
  print("At least one of the conditions is True")
```

---

### **in keyword**

`in` keyword can be used to check if a value is in a sequence.

The expression `my_var in my_list` is a boolean; it will be replaced by `True` or `False`

```javascript
>>> "A" in "ABCD"
True
```

```javascript
my_hobbies = "sport, code, food, icecreams, netflix"
if "code" in my_hobbies:
    print("Hello world")
```

---

### **not keyword**

The `not` keyword will return `True` if the condition is False.

---

### **Exercise**

Ask the user for a number between 1 and 100

If the number is a multiple of three, print `Fizz`

If the number is a multiple of five, print `Buzz`.

If the number is a multiple is a multiples of both three and five, print `FizzBuzz` instead.
