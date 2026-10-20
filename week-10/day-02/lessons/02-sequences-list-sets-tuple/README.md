# Sequences, List, Sets, Tuple

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn:**

- Sequence

- List

- Tuple

- Sets

---

### **Sequences**

A sequence is not a data type; it’s a **category of data types**.

Here are several types of sequences in Python; the following three are the most important.

`Lists` are the most versatile sequence type. The elements of a list can be any object, and lists are mutable - they can be changed. Elements can be reassigned or removed, and new elements can be inserted.

For example:

```javascript
my_name = "Jack"
hello = "Hello World"
my_age = 27
my_list = [my_name, my_age, hello]
```

`Tuples` are like lists, but they are immutable - they can’t be changed.
*Note*: Tuples use parenthesis

```javascript
my_tuple = (1+3, 2.7, 'Thursday')
```

`Strings` are a particular type of sequence that can only store characters, and they have a special notation. However, all of the sequence operations described below can also be used on strings.

```javascript
my_string = "I love cheese!"
```

---

### **Indexing Sequences**

Sequences can be indexable, which means each element can be retrieved with his index : `sequence_name[index_num]`.

For example, using a `list`

```javascript
my_name = "Jack"
hello = "Hello World"
my_age = 27

my_list = [my_name, hello, my_age]
print(my_list[0]) # The result gives us "Jack" 
```

You may wonder why does `my_list[0]` give me the first item in my list? Be sure to take note that indexes start from `[0]`, which would be the first item in the list, and index `[1]`, will give us the second item in our list being the `hello` variable with the value of `"Hello World"`.

There are other indexing methods:

- Negative indexes, meaning starting from the end to the beginning (`sequence_name[-index_num]`) this is an example using a `tuple`:

```javascript
my_tuple = (1, 2, 3, 4, 5, 6, 7, 8, 9)
print(my_tuple[-2])  # The result gives us the number 8
```

- Range indexes return a list from one index to the other (`sequence_name[start:end]`), this is an example using a `list`:

```javascript
my_list = [10, 20, 30, 40, 50, 60, 70, 80, 90]
print(my_list[0:4])  # The result gives us [10, 20, 30, 40]
```

When using ranges, the end index is **not included**

---

### **Strings**

Actually, `str` is a sequence; it’s a sequence of letters.
You can index the letters of a string with the indexing technique.

```javascript
>>> my_name = "Rick"

>>> print(my_name[0])
"R"

>>> print(my_name[2])
"c"

>>> print(my_name[-1])
"k"

>>> print(my_name[1:3])
"ic"
```

---

### **Lists**

Lists let you store a collection of items. These items can be of any type: integers, strings, booleans or even other lists.
See the official documentation [**here**](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)

A List is a collection that is ordered and changeable. It allows duplicate members.

To create a list, use square brackets `[]`, and insert elements, separated by comma `,`. Elements can be every data type.

For example:

```javascript
>>> my_hobbies = ["Eat", "Sleep", "Code"]
```

To access the items, refer to the index number.

```javascript
>>> my_hobbies[0]
"Eat"

>>> my_hobbies[2]
"Code"

>>> my_hobbies[-2]
"Sleep"
```

---

- **Modify an element**

The list is mutable; it means that the contents of a list can be updated. To change an element in a list, refer to the index number and assign a new value.

**Careful: **Indexes in list start from 0, not from 1

```javascript
>>> print(my_hobbies)
["Eat", "Sleep", "Code"]

>>> my_hobbies[1] = "Meditate"

>>> print(my_hobbies)
["Eat", "Meditate", "Code"]
```

Be careful! If you try to refer to an index that doesn’t exist, your program will crash to an `IndexError`

---

- **Add an element**

Adding an element to a list is called appending.

To append an item to a list, use the `append()` method.

```javascript
>>> print(my_hobbies)
["Eat", "Meditate", "Code"]

>>> my_hobbies.append("Baseball")

>>> print(my_hobbies)
["Eat", "Meditate", "Code", "Baseball"]
```

---

- **Remove an element**

There are several methods to remove items from a list.

- To remove a specified item, use the `remove` method; this method removes the first occurrence of the element.

```javascript
>>> print(my_hobbies)
["Eat", "Meditate", "Code"]

>>> my_hobbies.remove("Meditate")

>>> print(my_hobbies)
["Eat", "Code"]
```

- To remove an item by its index, use the `pop` method; this method removes the element at the given index and returns it.

```javascript
>>> print(my_hobbies)
["Eat", "Code"]

>>> my_hobbies.pop(0)

>>> print(my_hobbies)
["Code"]
```

---

- **Adding two lists**

Adding two lists will concatenate them.

```javascript
>>> my_hobbies = ["Food", "Code"]

>>> additional_hobbies = ["Sport", "More code"]

>>> my_hobbies + additional_hobbies 
["Food", "Code", "Sport", "More code"]
```

---

### **List functions**

List have several built-in functions you can use.

- **Length**
Using the `len()` function allows to retrieve the number of items contained in a given list.

```javascript
fruits = ["apple","pear", "banana", "melon"]
len(fruits)
>> 4
```

- **Sum**
If you have a list of numbers, you can get the sum of all numbers again through a function.

```javascript
numbers = [3, 12, 1, -4]
sum(numbers)
>> 12
```

- **Sorting**
There are different ways of sorting elements of a list, `sorted()` lets you straightforwardly do that.

If you have numbers, a list will be sorted from smallest to biggest.

```javascript
numbers = [3, 5, 1, 2]
sorted(numbers)
>> [1, 2, 3, 5]
```

If you have strings, they will get sorted alphabetically.

```javascript
letters = ['d', 'a', 'g', 'b']
sorted(letters)
>> ['a', 'b', 'd', 'g']
```

It will not work if you have mixed values.

```javascript
mixed = [3, 'd', 1, 'a']
sorted(mixed)
>> error!
```

---

### **More list methods**

```javascript
food = ['spam', 'eggs', 'ham']
food.append('sushi')
print(food)
>> ['spam', 'eggs', 'ham', 'sushi']

food.insert(0, 'beans')
print(food)
>> ['beans', 'spam', 'eggs', 'ham', 'sushi']

food.extend(['bread', 'water'])
print(food)
>> ['beans', 'spam', 'eggs', 'ham', 'sushi', 'bread', 'water']
```

**More on lists **[**here**](https://www.w3schools.com/python/python_lists.asp)

---

### **Exercise**

Given this list:

list1 = [5, 10, 15, 20, 25, 50, 20]

find the value 20 in the list, and if it is present, replace it with 200. Only update the first occurrence of a value

**Hint : Look at the index method**

```javascript
Expected output:
list1 = [5, 10, 15, 200, 25, 50, 20]
```

---

### **Tuples**

Tuples are immutable lists, which means items **can’t be changed**.

To create a tuple, use parentheses:

```javascript
>>> my_tuple = (5,6,7)
```

The good thing about tuples is that they can be unpacked, meaning each value will go to one variable:

```javascript
>>> a, b, c = my_tuple

>>> print(a)
5

>>> print(b)
6

>>> print(c)
7
```

---

### **Exercise**

Unpack the following tuple into 4 variables

`a_tuple = (10, 20, 30, 40)`

```javascript
Expected output:

a_tuple = (10, 20, 30, 40)
# Your code
print(a) # should print 10
print(b) # should print 20
print(c) # should print 30
print(d) # should print 40
```

---

### **Sets**

**Important!!**

`Lists` and `tuples` are standard Python data types that store values in a `sequence`.

**Sets and dictionaries have no notion of an element index**, and therefore CANNOT be considered sequences. In mathematics, informally speaking, a sequence is an ordered list of objects (or events). Like a set, it contains members (also called elements, or terms).

`Sets` are another standard Python data type that also store values. The major difference is that sets, unlike lists or tuples :

- cannot have multiple occurrences of the same element

- and store unordered values

We use `Sets` to make a list with no duplicates in it.

To create a set, use the `set()` function

To add an element to a set, use `set.add(element)`

```javascript
>>> my_set = set()

>>> my_set.add("Rick")

>>> my_set.add("Morty")

>>> my_set.add("Rick")

>>> print(my_set)
{"Rick", "Morty"}

>>> this_set = {"banana", "apple", "cherry", "apple"}

>>> print(this_set)
{'banana', 'cherry', 'apple'}

# the set named this_set is unordered
```
