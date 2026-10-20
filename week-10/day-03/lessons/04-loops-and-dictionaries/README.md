# Loops and Dictionaries

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Loops and Dictionaries**

---

### **Introduction**

This lesson combines the power of loops with the flexibility of dictionaries, enabling you to efficiently process and manipulate key-value pairs in Python. By understanding these fundamental programming constructs, you can handle complex data structures and implement dynamic solutions to common problems.

---

### **👩‍🏫 👩🏿‍🏫 What You’ll learn**

- Iterating over dictionaries using various loop techniques.

- Utilizing loop control statements like `break`, `continue`, and `pass`.

- Integrating `for` and `while` loops with `else` clauses.

- Employing Python’s built-in functions like `range`, `enumerate`, and `zip` to enhance loop functionality.

---

### **💼 Prerequisites**

- Basic knowledge of Python syntax and operations.

- Familiarity with Python’s data structures, particularly dictionaries.

- Understanding of basic loop constructs in Python.

---

### **📖 Useful Resources**

- [for Loop with Dictionaries in Python](https://www.youtube.com/watch?v=BW0zsogh6oU)

- [for Loop with else in Python](https://www.youtube.com/watch?v=WUF3ZQoyb8Y)

---

### **For Loops and dictionaries**

We can iterate over both the keys and the values of a dictionary.

```javascript
my_books = {
  "title": "Harry Potter",
  "author": "JK Rowling",
}

for x, y in my_books.items():
    print("the" + x + "is" + y)

>> the title is Harry Potter
the author is JK Rowling
```

---

### **Loops Operator**

- range(start, stop[, step]) : iterator in loops.

```javascript
print(list(range(1, 10, 2)))

>> [1, 3, 5, 7, 9]
```

- enumerate(iterable) : enumerate each item in the iterable

```javascript
for item in enumerate('abcd'):
    print(item)

>>   
(0, 'a') # Syntax : (index , value)
(1, 'b')
(2, 'c')
(3, 'd')

for (index_count, letter) in enumerate('abcd'):
    print('At index {} the letter is {}'.format(index_count, letter))

>> 
At index 0 the letter is a
At index 1 the letter is b
At index 2 the letter is c
At index 3 the letter is d
```

- zip(iterable,..) : concat [iterables, …] in a tuple.

```javascript
list1 = [1,2,3]
list2 = ['a','b','c']
list3 = [1.1, 2.2, 3.3, 4.4, 5.5]

for item in zip(list1, list2, list3): # only go as far it is possible
    print(item)

>>
(1, 'a', 1.1)
(2, 'b', 2.2)
(3, 'c', 3.3)
```

---

### **For Else**

The else part is optional. When included, it is always executed once after the for loop is over unless a break statement is encountered.

```javascript
for i in range(1, 3):
    print(i)
else:
    print('The for loop is over')

>> 
1
2
The for loop is over
```

---

### **While Else**

while some_condition:
# do something
else:
# do another thing

```javascript
x = 0
while x < 2:
    print(f'x is {x}')
    x += 1
else:
    print('x is bigger than 2')
>>
x is 0
x is 1
x is bigger than 2
```

---

### **Break, Continue, Pass**

- break: break the loop (stop the execution of a looping statement)
if you break out of a for or while loop, any corresponding loop else block is not executed.

```javascript
for letter in 'Leonardo':
    if letter == 'a':
        break
    print(letter, end='') # end='' renders each letter next to the other

>> Leon
```

```javascript
while True:
    s = input('Enter something : ')
    if s == 'quit':
        break
    print('Length of the string is', len(s))
print('Done')
```

- continue: return to the top of the loop (continue to the next iteration of the loop)

```javascript
for letter in 'Leonardo':
    if letter == 'o':
        continue
    print(letter, end='') # dont execute for 'o' letter
>> Lenard
```

```javascript
while True:
    s = input('Enter something : ')
    if s == 'quit':
        break
    if len(s) < 3:
        print('Too small')
        continue
    print('Input is of sufficient length')
```

- pass: do nothing

```javascript
for item in [1,2,3]:
    # comment
    pass # to avoid the error

print('Finish the script')
>> Finish the script
```

---

**🚀 Challenge**

Implement a loop that asks for user input to add dictionary entries until 'quit' is entered. Display the final dictionary.

---

### **Conclusion**

Through this lesson, you’ve learned how to effectively combine loops with dictionaries to manage and manipulate data dynamically. These skills will help you build more robust and interactive Python applications that efficiently handle various data operations.
