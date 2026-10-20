# Loops

Course source: [Geeks Institute](https://www.geeks.institute/).
### **Loops**

Loops are a fundamental programming concept that allows you to iterate over the items of a list or repeat a given action a defined or even infinite number of times.

When used in conjunction with lists, loops let you access each element successively of said list. We call this process **“iterating”**.

In computer programming, a *loop* is a sequence of instructions that is continually repeated until a specific condition is reached.

There are two main types of loops: `for` loops and `while` loops.

See the official documentation [here](https://docs.python.org/3/tutorial/controlflow.html#for-statements)

---

### **For loops**

For loops are primarily used with lists: you go over each element of the list in order; it stops automatically once it reaches the end of the list.

For loops, start with the keyword `for`. Then comes what we call an “iterator”, a variable whose value will change at each turn of the loop.

We’ll use this variable within the loop as the current value for a given iteration.

First, the syntax:

```javascript
for <variable_name> in <sequence_name>:
    CODE
    CODE
```

Notice the usage of the colon `:` and the indentation of the code.

---

**Example**

```javascript
fruits = ['apple', 'banana', 'kiwi', 'pear']

for fruit in fruits:
  print(fruit)

>> apple
>> banana
>> kiwi
>> pear
```

In the `for` loop above, `fruit` (singular) is our iterator. Its values change at every turn of the loop. It is successively: `'apple'`, `'banana'`, `'kiwi'` and finally `'pear'`.

---

**Another Example**

```javascript
cities = ["London", "San Francisco", "Paris", "Barcelona"]

for city in cities:
    print("I once went to", city)
```

The first line of the loop is:

```javascript
for city in cities:
```

This line tells Python to retrieve the first value from the list `cities` and store it in the variable `city`.

You can choose any name you want for this variable; however, it’s helpful to choose a meaningful name representing a single item from the list.

This first value is ‘London’. Python then reads the next line:

```javascript
    print("I once went to", city)
```

Python prints the value of `I once went to London`. Because the list contains more values, he returns to the first line.

```javascript
for city in cities:
```

Python now retrieves the next element of the list and store it in the variable `city` (his value is over-written).

```javascript
    print("I once went to", city)
```

Now python will print `I once went to San Francisco`.

Python continues like this until he reaches the end of the list.

---

**Ranges**

Ranges let you generate a sequence of numbers from a start value to an end value.

To create a new range, you use the `range` function and pass it a top and bottom value. **The last value is non-inclusive **meaning that if you iterate over a range, that last value will not be included.

---

**Syntax**

```javascript
numbers = range(4, 19)
>> range(4, 19)
```

---

**Iterating Example**

```javascript
numbers = range(4, 19)

for number in numbers:
  print(number)

>> 4
>> 5
>> 6
>> ...
>> 16
>> 17
>> 18
```

To print numbers from 1 to 5, use `range(1,6)`

Although it can be iterated, the **result of **`range` is not a `list`.

To store it in a `list`, you can convert the results of `range()` directly into a `list` using the `list()` function. When you wrap `list()` around a call to the `range()` function, the output will be a list of numbers.

```javascript
numbers = list(range(1,6))
print(numbers)
```

---

**Some built-in functions that use for loops**

Functions like `min`, `max` or `sum` are using for loops behind the scenes; to practice, you can try to program them by yourself.

---

**Avoiding indentation errors**

Python uses indentation to determine when one line of code is connected to the line above it.

In the previous examples, the lines that printed messages on every city were part of the `for` loop because they were indented.

Python’s use of indentation makes code very easy to read.

---

### **Exercise**

Accept a number from the user and print its multiplication table

---

### **While loops**

While loops differ from `for` loops, they have what we call an indefinite iteration cycle. What that means is that the number of times they execute isn’t defined by the length of a given list but by a specific breakpoint that will stop the loop’s execution when it is hit.

A `while` loop is defined somewhat similarly to a conditional statement. The loop will keep running as long as the set condition is `True` and stop when this condition evaluates to `False`.

The `while` loop runs as long as (or while) a certain condition is true.

It will execute all the instructions in the loop, then test the condition, if the condition is still `True`, it will rerun the loop, and again until the condition becomes false.

---

**Example**

```javascript
current_number = 1 
while current_number <= 5:    
    print(current_number)   
    current_number += 1

print("Finished")

>> 1
>> 2
>> 3
>> 4
>> 5
```

In the first line, we start counting from 1 by setting the value of `current_number` to `1`.

The while loop is set to keep running as long as the value of `current_number` is less than or equal to `5`.

The code inside the loop prints the value of `current_number` and then adds `1` to that value with `current_number += 1`. (The `+=` operator is shorthand for `current_number = current_number + 1`.)

Python repeats the loop as long as the condition `current_number <= 5` is `True`. Because `1` is less than `5`, Python prints `1` and then adds `1`, making the `current_number` 2. Because `2` is less than `5`, Python prints `2` and adds `1` again, making the `current_number` 3, and so on.

Once the value of `current_number` is greater than `5`, the loop stops running, and the program ends.

---

**Example**

```javascript
password = ''
while password != 'hello-world-123':
  password = input('What is the top secret password? ')

print('You guessed the right password!')
```

---

### **Exercise**

Print the numbers from 1 to 10 using while loop

---

**Infinite loop**

Some conditions will always be `True`, for example, if we run this code:

```javascript
while 1 == 1:
    print("Looping...")
```

It will never stop because 1 is always equal to 1. We can also use `while 1:` or `while True:`.

---

### **Using a flag**

What about more complicated programs in which many different events could cause the program to stop running?

For a program that should run only as long as many conditions are `True`, you can define one variable that determines whether the entire program is active. This variable, called a *flag*, acts as a signal to the program.

We can write our programs so they run while the flag is set to `True` and stop running when any of several events set the flag’s value to `False`. As a result, our overall `while` statement needs to check only one condition: whether or not the `flag` is currently `True`.

Then, all our other tests (to see if an event has occurred that should set the`flag` to `False`) can be organized neatly in the rest of the program.

---

**Example**

```javascript
active = True

while active: 
    city = input("Please enter the name of a city you have visited (enter 'quit' when you are finished): ")
    if city == 'quit':
        active = False
    elif city == 'leave me alone':
        active = False
    elif city == 'stop':
        active = False
    else:
        print("I'd love to go to", city)

print("Goodbye !")
```

---

### **Break and Continue**

`break` and `continue` are two statements that help us manage the loop flow.

---

**break**

`break` exit the while loop immediately without running any remaining code in the loop, regardless of the results of any conditional.

For example, consider a program that asks the user about places they’ve visited.

We can stop the while loop in this program by calling break as soon as the user enters the ‘quit’ value:

```javascript
while True: 
    city = input("Please enter the name of a city you have visited (enter 'quit'  when you are finished): ")
    if city == 'quit':
        break
    else:
        print("I'd love to go to", city)

print("Goodbye !")
```

A loop that starts with `while True` will run forever unless it reaches a break statement.

The loop in this program asks the user to enter the names of cities they’ve been to until they enter ‘quit’.

When they enter ‘quit’, the break statement runs, causing Python to exit the loop:

```javascript
Please enter the name of a city you have visited: (Enter 'quit' when you are finished.) New York 
I'd love to go to New York! 

Please enter the name of a city you have visited: (Enter 'quit' when you are finished.) San Francisco 
I'd love to go to San Francisco! 

Please enter the name of a city you have visited: (Enter 'quit' when you are finished.) quit
```

---

**Example**

```javascript
secret_number = 4

while True:
  user_number = input('Guess the secret number: ')
  if int(user_number) == secret_number:
    print('Congrats! You win!')
    break
  else:
    print('Wrong guess...')
```

---

**continue:**

Rather than breaking out of a loop entirely without executing the rest of its code, you can use the continue statement to return to the beginning of the loop.

For example, consider a loop that counts from 1 to 10 but prints only the numbers that aren’t between 3 and 7:

```javascript
current_number = 0
while current_number <= 10:
    current_number += 1
    if 3 < current_number < 7: # If the number is between 3 and 7 
        continue                # Go back to the beginning of the loop
    print(current_number)

>> 1
>> 2
>> 3
>> 7
>> 8
>> 9
>> 10
```

Be careful; this can end in an infinite loop.

```javascript
current = 0
while current <= 10:
    print(current)
    if 3 < current < 7:
        continue
    current += 1

// Here the incrementation is after the if statement, therefore as soon as the variable `current` reachers the number 4, the program enters into an infinite loop. 
```
