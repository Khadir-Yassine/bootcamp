# Dictionaries

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Dictionaries**

---

### **Introduction**

In this lesson, we will explore Python dictionaries, which are highly optimized hash tables. Dictionaries provide an efficient means to store and retrieve data using keys, making them indispensable for handling large datasets and complex data structures in Python programming.

---

### **👩‍🏫 👩🏿‍🏫 What You’ll learn**

- Understanding the structure and usage of dictionaries in Python.

- Differentiating dictionaries from lists based on data access methods.

- Creating, modifying, and retrieving data from dictionaries.

- Handling nested dictionaries and performing operations such as adding, deleting, and updating dictionary entries.

---

### **💼 Prerequisites**

- Basic understanding of Python syntax.

- Familiarity with other Python data types such as strings, integers, lists, and tuples.

- Ability to write simple Python scripts and functions.

---

### **📖 Useful Resources**

- [Python Dictionaries](https://www.w3schools.com/python/python_dictionaries.asp)

- [How to Use Python Dictionaries + Lists of Dicts](https://www.youtube.com/watch?v=6x8oN6FtpLo)

---

### **Definition**

Dictionary is a data type provided by python, which is another collection of objects.
A dictionary is similar to a list, in many ways:

- It’s mutable (his elements can be changed)

- It’s dynamic (it can grow as needed)

Dictionaries are an unordered collection of items that store values on a key-value pair basis.
With a dictionary, you create a structured piece of data and retrieve values using a key.
You can think of them as a spreadsheet table: you have columns with names (keys) and cells with data (values).

**Difference between dictionaries and lists**

How elements are accessed:
In lists, elements are accessed by their position in the list (via indexing)
Example:

```javascript
my_list = ['Rick', 'Sanchez']
print("My last name is:", my_list[1])
```

To access the word “Sanchez”, we need to put his index in the square brackets [].

In dictionaries, it’s a bit different; elements have no index; they are accessed via keys. A dictionary is an associative array, it consists of a collection of key-value pairs. Each key=value pair maps the key to its associated value.
For example, the key `first_name` is associated to `Rick`, and the key `last_name` is associated with `Sanchez`.

---

### **Define a dictionary**

While lists are defined by square brackets [], dictionaries are defined by enclosing a list of key-value pairs in curly braces {}.
A colon : is used to separate each key from its associated value:

```javascript
rick_dict = {
    'first_name':'Rick',
    'last_name':'Sanchez'
}
```

Keys need to be declared as strings with quotation marks. Values can be of any type.

```javascript
my_dog = {
  'name': 'Rufus',
  'age': 4,
  'good_dog': True
}
```

---

### **Accessing data**

Accessing values in a dictionary is just a matter of referencing the key of that value between brackets. This is similar to how we access values from a list, but instead of using the index of the value, we use the name of its key.

```javascript
my_dog = {
  'name': 'Rufus',
  'age': 4
}

print(my_dog['name'])

>> 'Rufus'
```

Example:

```javascript
rick_dict = {
    'first_name':'Rick',
    'last_name':'Sanchez'
}
print("The last name of rick is:", rick_dict['last_name'])
```

If you refer to a key that is not in the dictionary, you will get an error:

```javascript
print("The last name of rick is:", rick_dict['age'])
```

Traceback (most recent call last):
File ““, line 1, in
rick_dict[‘age’]
KeyError: ‘age’

You can use tuple unpacking to iterate through the keys and values of the dictionary you are working with.
To achieve this, you just need to unpack the elements of every item into two different variables representing the key and the value:

```javascript
a_dict = {'color': 'blue', 'fruit': 'apple', 'pet': 'dog'}

print(a_dict.items())
# output : 
dict_items([('color', 'blue'), ('fruit', 'apple'), ('pet', 'dog')])

# The items() method returns a view object that displays 
# a list of dictionary's (key, value) tuple pairs.

for key, value in a_dict.items():
    print(key, '->', value)

# output
color -> blue
fruit -> apple
pet -> dog 
```

---

### **Data types**

You can store any type of data inside a dictionary. That could be strings and integers but also other dictionaries or lists.

```javascript
my_dog = {
  'name': 'Rufus',
  'age': 4,
  'best_friend': {
    'name': 'Felix',
    'age': 4.5
  },
  'favorite_foods': ['steaks', 'sausages', 'shawarma']
}
```

---

### **Dictionaries and lists**

Dictionaries can be especially useful when stored in a list to represent a collection of multiple items representing the same thing, such as a list of products.

```javascript
shirts = [
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'S',
    'price': 20
  },
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'M',
    'price': 25
  },
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'L',
    'price': 30
  },
]
```

---

**🚀 Challenge**

Access the value of key history

```javascript
sample_dict = { 
   "class":{ 
      "student":{ 
         "name":"Mike",
         "marks":{ 
            "physics":70,
            "history":80
         }
      }
   }
}
```

---

### **Operations on Dictionnaries**

- Modify an entry in a dictionary : Modifying an element in a dictionary works the same as a list, first, you need to select it (with his key) and then assign it to a new value with the equal sign =.

```javascript
rick_dict['last_name'] = 'SANCHEZ'
```

- Adding an entry to an existing dictionary : To add an entry to an existing dictionary, just assign a new key to its value, like you would have modified it if it was an existing key.

```javascript
rick_dict['hair_color'] = 'white'
```

- Delete an entry in a dictionary : To delete an entry, use the del statement, specifying the key to delete:

```javascript
del rick_dict['hair_color']
```

---

### **Keys restrictions**

Almost any type of value can be used as a dictionary key in Python. But there are a couple of restrictions.

- First, keys are uniques; they can appear in a dictionary only once; if you assign a value to an existing dictionary key, it does not add the key a second time but replaces the current value.

- Secondly, the key must be an immutable type; it can be an integer, a float, a string, a boolean, and even a tuple because all those types are immutables. List can’t be a dictionary key.
By contrast, there are no restrictions on dictionary values.

**The **`in` keyword

In a list, the `in` keyword returns True or False according to whether the specified operand occurs in the list.
A dictionary returns True if the operand occurs as a key in the dictionary.

**Iterating**

Iterating over a list of dictionaries is simple; your iterator contains the dictionary you want to look at.

```javascript
for shirt in shirts:
  print(shirt['size'])

>> S
>> M
>> L
```

**Built-in methods**

- keys() :The my_dict.keys() method returns a dict_keys of all the keys in my_dict

- values() : The my_dict.values() method returns a dict_values of all the values in my_dict

- items() : The my_dict.items() method returns a dict_items of tuples containing the key-value pairs in a dictionary.

```javascript
rick_dict = {
    'first_name':'Rick',
    'last_name':'Sanchez'
}
print(rick_dict.items())
```

- update() : If and d are dictionaries, d.update() merges the entries from into d.
For each key in :

- If the key is not present in d, the key-value pair from is added to d.

- If the key is already present in d, the corresponding value in d for that key is updated to the value from .

---

**🚀 Challenge**

Delete set of keys from Python Dictionary

```javascript
sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"

}
keys_to_remove = ["name", "salary"]
```

---

### **Conclusion**

Dictionaries are a powerful tool in Python that provide efficient data manipulation capabilities. They are particularly useful in data analysis, web development, and any applications where quick lookup of configuration values or properties is required. Mastery of dictionaries enhances your ability to work with large datasets and develop complex, data-driven applications.

## Worked solutions

[English explanations and runnable Python implementation](solutions.md).
