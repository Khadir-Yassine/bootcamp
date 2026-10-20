# Exercise 2

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

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
