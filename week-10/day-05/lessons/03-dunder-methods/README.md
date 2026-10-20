# Dunder Methods

Course source: [Geeks Institute](https://www.geeks.institute/).
### **Table of Contents**

- What you will learn

- Useful Resources
  
  - Dunder Methods
  
  - 1. What is a dunder method?
  - 2. Some Dunder Methods that you already know
  - 4. How to use the dunder methods?
  - 5. Understanding what happens behind the curtain
  - 6. How to overload a dunder method?

---

### **What you will learn**

- Dunder Methods

## **Useful Resources**

- [Video on Dunder Methods](https://www.youtube.com/watch?v=3ohzBxoFHAY)

- [Article on **slots** Dunder Method](https://medium.com/@stephenjayakar/a-quick-dive-into-pythons-slots-72cdc2d334e)

---

### **Dunder Methods**

---

**1. What is a dunder method?**

Fun fact: Due to the naming convention used for these methods, they are also called dunder methods which is a shorthand for **d**ouble **under**score methods. Sometimes they’re also referred to as special methods or magic methods. We prefer dunder methods, though!

`__init__`,`__str__` are some dunder methods.

The magic about Dunder Methods is that the invocation is realized behind the scenes.

*For example :*
When you create an instance x of class A with the statement

```javascript
x = A()
```

Python will do the necessary calls to `__new__` and `__init__`.

---

### **2. Some Dunder Methods that you already know**

---

**1. The **`__init__` method

You already noticed the weird syntax of the `__init__` method; those four underscores surrounding the method’s name are here on purpose; in fact, they represent unique methods that python automatically calls when he needs them.

For example, the `__init__` function is the function that python automatically calls when it creates an object.

---

**2. The **`__str__` method

The `__str__` function is the function that python calls when it needs to convert an object to a string, for example, when printing it.

For example:

```javascript
mylist = [1, 3, 5]
print(str(mylist))
```

Is actually:

```javascript
mylist = [1, 3, 5]
print(mylist.__str__())
```

---

**3. The **`__len__` method

The `__len__` method is here to return the length of the object. It’s the method that is called when you try to reach `len(my_object)`.

---

**4. The **`__call__` method

One of the essential unique methods will be used when you try to call the object (meaning adding `()` at the end of the name: `my_object()`).

```javascript
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __call__(self):
        print (f"Person: {self.name}, Age: {self.age}")

person1 = Person("Sarah", 25)
person1()
# Person: Sarah, Age: 25
```

---

### **5. **`__repr__` and `__str__`

Most classes should at least have these unique methods:

- `object.__str__`:

Called by the `str()` built-in function and by the print function to compute the *informal* string representation of an object.
`__str__` will always be a string representation,

- `object.__repr__`:

Called by the `repr()` built-in function to compute the *official* string representation of an object.
`__repr__` can be a more “behind the scenes” look at the object.

---

### **4. How to use the dunder methods?**

**Example with **`__repr__()`

```javascript
class Person:
  def __init__(self, name, age):
      self.name = name
      self.age  = age

  def __repr__(self):
      return f"{self.__class__.__name__} : {self.name} {self.age}"

newPerson = Person('Sarah', 24)

print(newPerson)
# >> Person : Sarah 24 
# __repr__ is the representation of an object
```

---

**Example with **`__add__()`

```javascript
class Person:
  def __init__(self, name, lastName):
      self.name = name
      self.lastName = lastName

  def __repr__(self):
      return f"{self.__class__.__name__} : {self.name} {self.lastName}"

  def __add__(self, other):
      return Person(self.name, other.lastName)

father = Person('John', 'Snow')
mother = Person('Kaleesi', 'MotherOfDragons')
# using the __add__() method
dragonChild = father + mother 

print(dragonChild)
# >> Person : John MotherOfDragons // __add__ is called to add two objects

print(type(dragonChild))
# >> <class '__main__.Person'>

print(dir(dragonChild))
# >> ['__add__', '__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', 'lastName', 'name']
```

---

### **5. Understanding what happens behind the curtain**

When you write :

```javascript
dir(list)
>> ['__add__', '__class__', '__contains__', '__delattr__', '__delitem__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__gt__', '__hash__', '__iadd__', '__imul__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mul__', '__ne__', '__new__','__reduce__', '__reduce_ex__', '__repr__', '__reversed__', '__rmul__', '__setattr__', '__setitem__', '__sizeof__', '__str__', '__subclasshook__', 'append', 'clear', 'copy', 'count', 'extend', 'index', 'insert', 'pop', 'remove', 'reverse', 'sort']
```

You get all the Dunder Method that you can use with the type `list`

So when you write :

```javascript
first_list = ["a", "b", "c"]
second_list = ["d", "e", "f"]

print("\nCalling the `+` builtin with both lists")
print(first_list + second_list)
# >> Calling the `+` builtin with both lists
# ['a', 'b', 'c', 'd', 'e', 'f']

print("\nCalling `__add__()` with both lists")
print(first_list.__add__(second_list))
# >> Calling `__add__()` with both lists
# ['a', 'b', 'c', 'd', 'e', 'f']
```

Using the + operator to add two lists is like using the `__add__()` Dunder Method with two objects (i.e., the lists)

---

### **6. How to overload a dunder method?**

Overloading a dunder method means to give this method an extended meaning beyond its native meaning. Overloading a method is used to change the behavior of the method of functions such as len, abs, hash, divmod, and so on. To accomplish overloading a method, you only need to define the corresponding method in your class. Let’s look at a few examples:

```javascript
 # To overload a dunder method, we need to implement it in a class.

class Person:
  def __init__(self, name, lastName):
      self.name = name
      self.lastName = lastName

  # Here we overloaded the method by redefining '__repr__ 'using 'def' and passed the argument '(self)'
  def __repr__(self):
  # We can write whatever we want inside this method, but we have to return an object.
      return f"{self.__class__.__name__} : {self.name} {self.lastName}"

  def __add__(self, other):
      name = self.name[0] + other.name[1:]
      lastname = other.lastName
      return Person(name,lastname)

father = Person('John', 'Snow')
mother = Person('Kaleesi', 'MotherOfDragons')

# using the __add__() method
dragonChild = father + mother 

print(dragonChild)
# >>Person : Jaleesi MotherOfDragons
```

---

**Exercise**

Analyse the code below before executing it. What will be the output ?

```javascript
class PrintList():

    def __init__(self, my_list):
        self.my_list = my_list

    def __repr__(self):
        return str(self.my_list)

print_list_instance = PrintList(["a", "b", "c"])
print(print_list_instance.__repr__())
```

## Worked solutions

[English explanations and runnable Python implementation](solutions.md).
