# Advanced List, Dictionaries and Loops

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Advanced List, Dictionaries and Loops**

---

## **What you will learn:**

- For/Else

- While/Else

- Break/Continue/Pass

- List Comprehension

---

## **Useful Resources**

- [Article on List Methods](https://medium.com/better-programming/how-to-replace-your-python-for-loops-with-map-filter-and-reduce-c1b5fa96f43a)

---

### **I. For Loops**

---

**A. For Loops and dictionaries**

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

**B. Loops Operator**

---

**range(start, stop[, step]) : iterator in loops.**

```javascript
print(list(range(1, 10, 2)))

>> [1, 3, 5, 7, 9]
```

---

**enumerate(iterable) : enumerate each item in the *iterable***

```javascript
for item in enumerate('abcd'):
    print(item)

>>   
(0, 'a') # Syntax : (index , value)
(1, 'b')
(2, 'c')
(3, 'd')
```

```javascript
for (index_count, letter) in enumerate('abcd'):
    print('At index {} the letter is {}'.format(index_count, letter))

>> 
At index 0 the letter is a
At index 1 the letter is b
At index 2 the letter is c
At index 3 the letter is d
```

---

**zip(iterable,..) : concat [iterables, …] in a tuple.**

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

**C. For Else**

The `else` part is optional. When included, it is always executed once after the `for` loop is over unless a `break` statement is encountered.

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

**D. While Else**

```javascript
while some_condition:
    # do something
else:
    # do another thing
```

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

**E. Break, Continue, Pass**

- `break`: break the loop (stop the execution of a looping statement)

if you *break* out of a `for` or `while` loop, any corresponding loop `else` block is **not** executed.

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

- `continue`: return to the top of the loop (*continue* to the next iteration of the loop)

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

- `pass`: do nothing

```javascript
for item in [1,2,3]:
    # comment
    pass # to avoid the error

print('Finish the script')
>> Finish the script
```

---

### **II. List Comprehension: quickly way to creating a list**

Many objects in Python are “iterable”, meaning we can iterate over every element in the object.

List Comprehensions are a unique way of quickly creating a list with Python.

---

**A. The basic way of appending an element into a list**

```javascript
my_number = '1234'
my_list = []

for num in my_number:
    my_list.append(num)
print(my_list)

>> ['1', '2', '3', '4']
```

---

**B. The list comprehension way**

```javascript
my_number = '1234'
my_list = []

my_list = [num for num in my_number]
print(my_list)

>> ['1', '2', '3', '4']
```

---

**Examples with the range method**

```javascript
my_list = [x for x in range(0,6)]
print(my_list)

>> [0, 1, 2, 3, 4, 5]

my_list = [x**2 for x in range(0,6)] # square
print(my_list)

>> [0, 1, 4, 9, 16, 25]

my_list = [x for x in range(0,11) if x%2 == 0] # only even
print(my_list)

>> [0, 2, 4, 6, 8, 10]
```

---

**C. The basic way of appending an element into a list with Nested Loop**

```javascript
my_list = []

for i in [2, 3, 4]:
    for j in [100, 200, 300]:
        my_list.append(i*j)

print(my_list)

>> [200, 400, 600, 300, 600, 900, 400, 800, 1200]
```

---

**D. The list comprehension way**

```javascript
my_list = []
my_list = [(i*j) for i in [2, 3, 4] for j in [100, 200, 300]]
print(my_list)

>> [200, 400, 600, 300, 600, 900, 400, 800, 1200]
```

---

**E. Dictionary comprehension**

`dictionary = {key: value for var in iterable}`

```javascript
family_age = {'Lea': 12, 'Mark': 25, 'George': 50}

new_year = 1

new_family_age = {name: age+new_year for (name, age) in family_age.items()}

print(new_family_age)

>> {'Lea': 13, 'Mark': 26, 'George': 51}
```
