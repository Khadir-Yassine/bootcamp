# @classmethod, @staticmethod, @property

Course source: [Geeks Institute](https://www.geeks.institute/).
### **Class Decorators**

The decorators `@classmethod`, `@staticmethod`, and `@property` are used on functions defined within classes. They are built-in decorators.

---

### **@staticmethod**

A *static method* is a method that doesn’t get `self`.

```javascript
class MyClass:
  @staticmethod
  def add(a, b): 
    return a + b

print(MyClass.add(3, 6))
# >> 9
```

- The code belongs to a class but doesn’t use the object itself.

- It eases the readability of the code:
  
  - when we use `@staticmethod`, we know that the method does not depend on the state of the object itself.

- It bounds a method to the class definition.

---

**Example:**

```javascript
class Man(Person):
    sex = "Male"

    @staticmethod
    def get_nicknames():
        return ["Bro", "Dude", "Buddy"]
```

---

### **@classmethod**

Class methods are methods that are not bound to an object but to a class. Its first argument is the class itself (remember that classes are objects too).

```javascript
class MyClass:
  __counter = 0

  @classmethod
  def add(cls,a): 
    return cls.__counter + a

my_class_add = MyClass.add(3)
print(my_class_add)
# >> 3

new_class = MyClass()
new_class.__counter = 1

print(new_class.add(3))
# >> 3

# The output is still three because the method add refers to the class definition, not the counter of the new_class instance
```

There are several key Python concepts at work here:

### **1. Class Variables vs. Instance Variables**

`__counter = 0` is a class variable - it belongs to the class itself, not to any instance of the class. It's shared across all instances.

### **2. Name Mangling with Double Underscores**

The double underscore prefix (`__counter`) triggers Python's name mangling. This means Python renames the variable internally to avoid name collisions in inheritance hierarchies. It becomes `_MyClass__counter` behind the scenes.

### **3. Class Methods**

The `@classmethod` decorator means:

- The method is bound to the class, not the instance

- The first parameter `cls` refers to the class itself

- It can be called on either the class (e.g., `MyClass.add(3)`) or an instance (e.g., `new_class.add(3)`)

### **Explaining the Outputs**

```python
my_class_add = MyClass.add(3)
print(my_class_add)  # >> 3
```

This calls the class method directly on the class. The `cls` parameter becomes `MyClass`, so it accesses `MyClass.__counter` (which is 0) and adds 3, resulting in 3.

```python
new_class = MyClass()
new_class.__counter = 1
```

This creates a new instance and attempts to set `__counter` to 1. However, due to name mangling, this actually creates a *new instance variable* named `__counter` (which becomes `_new_class__counter` internally), not modifying the class variable.

```python
print(new_class.add(3))  # >> 3
```

When calling the class method through an instance, the `cls` parameter still refers to the class (`MyClass`), not the instance. So it accesses `MyClass.__counter` (still 0) and adds 3, resulting in 3.

### **Key Insight**

The line `new_class.__counter = 1` doesn't modify the class variable because:

1. It creates a new instance variable with the same name due to name mangling

2. `new_class.__counter` becomes `new_class._new_class__counter`

3. But the class method is looking for `MyClass._MyClass__counter`

If you wanted to modify the class variable, you would need to do:

```python
MyClass._MyClass__counter = 1  # Directly modifying the class variable
```

Or without relying on the mangled name:

```python
# Alternative class design
class MyClass:
    _counter = 0  # Single underscore = conventional "protected" attribute
    
    @classmethod
    def set_counter(cls, value):
        cls._counter = value
```

This is why class methods are powerful for operations that involve class-level state rather than instance-level state.

---

### **@property**

**1. Getter**

Methods used in Object-Oriented Programming (OOPS) which helps to access the private attributes from a **class**.

Without `@property`

```javascript
class MyClass:
  def __init__(self, first_name, last_name):
    self.first_name = first_name
    self.last_name = last_name

  def email(self): 
    return f"{self.first_name}.{self.last_name}@gmail.com"

newClass = MyClass("John", "Doe")
print(newClass.email())
# >> John.Doe@gmail.com
```

---

With `@property`

```javascript
class MyClass:
  def __init__(self, first_name, last_name):
    self.__first_name = first_name
    self.__last_name = last_name

  @property
  def email(self): 
    return f"{self.__first_name}.{self.__last_name}@gmail.com"

newClass = MyClass("John", "Doe")

print(newClass.email())
# >> TypeError: 'str' object is not callable

print(newClass.email)
# >> John.Doe@gmail.com
```

---

**2. Setter**

Methods used in Object-Oriented Programming feature which helps to set the value to private attributes in a **class**.

```javascript
class MyClass:
  def __init__(self, first_name, last_name):
    self.__first_name = first_name
    self.__last_name = last_name

  @property
  def email(self): 
    return f"{self.__first_name}.{self.__last_name}@gmail.com"

  @email.setter
  def email(self, name): 
    self.__first_name = name

newClass = MyClass("John", "Doe")
newClass.email = "Sarah"
print(newClass.email)
# >> Sarah.Doe@gmail.com
```

---

**Example**

```javascript
class Person:

    used_names = set()

    def __init__(self, name, age):
        if name in self.used_names:
            name = input("That name is taken. Enter another name: ")

        self.name = name
        self.age = age
        self.used_names.add(name)

    @classmethod
    def fromYear(cls, name, birth_year):
        THIS_YEAR = 2020
        return cls(name, THIS_YEAR - birth_year)

    @property
    def professional_name(self):
        return "Mr " + self.name
```

This `Person` class tracks unique names across all instances and provides multiple ways to create and access Person objects:

1. `used_names` is a class variable that stores all names used by Person instances to prevent duplicates

2. `__init__` constructor:
  
  - Takes name and age parameters
  - If the name is already used, prompts for a new name
  - Adds the name to the class-wide `used_names` set

3. `fromYear` class method:
  
  - Alternative constructor that calculates age from birth year
  - Creates and returns a new Person instance using the main constructor

4. `professional_name` property:
  
  - A read-only attribute that returns "Mr " + the person's name
  - Accessed like an attribute (without parentheses) despite being method-based

The code demonstrates class variables, class methods as factory functions, and properties for computed attributes.

---

**Exercise**

Analyze the code below. What will be the ouput ?

```javascript
class MyClass(object):
    count = 0

    def __init__(self, val):
        self.val = val
        MyClass.count += 1

    def set_val(self, newval):
        self.val = newval

    def get_val(self):
        return self.val

    @classmethod
    def get_count(cls):
        return cls.count

object_1 = MyClass(10)
print("\nValue of object : %s" % object_1.get_val())
print(MyClass.get_count())

object_2 = MyClass(20)
print("\nValue of object : %s" % object_2.get_val())
print(MyClass.get_count())
```

---

**Exercise**

Analyze the code below. What will be the ouput ?

```javascript
class MyClass(object):
    count = 0

    def __init__(self, val):
        self.val = self.filterint(val)
        MyClass.count += 1

    @staticmethod
    def filterint(value):
        if not isinstance(value, int):
            print("Entered value is not an INT, value set to 0")
            return 0
        else:
            return value

a = MyClass(5)
b = MyClass(10)
c = MyClass(15)

print(a.val)
print(b.val)
print(c.val)
print(a.filterint(100))
```
