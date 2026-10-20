# Class Attribute

Course source: [Geeks Institute](https://www.geeks.institute/).
### **Table of Contents**

- What you will learn
  
  - Class Attribute

---

## **What you will learn**

- Class Attribute

---

### **Class Attribute**

You can also define an attribute that belongs to the class and not to each instance; it’s called a class attribute. Anything assigned in the class scope is a class attribute – every instance of the class shares the same one. For example, let’s define the name of dogs king as a class attribute:

```javascript
class Dog():
    dogs_king = "Bernie IV"

    # Initializer / Instance Attributes
    def __init__(self, name_of_the_dog):
        print("A new dog has been initialized !")
        print("His name is", name_of_the_dog)
        self.name = name_of_the_dog

    def bark(self):
        print(f"{self.name} barks ! WAF")

    def walk(self, number_of_meters):
        print(f"{self.name} walked {number_of_meters} meters")

    def rename(self, new_name):
        self.name = new_name

my_dog = Dog("Rex")
my_dog.rename("Paul")
```

The `dogs_king` variable is now defined as “Bernie IV”, we don’t need to have a `Dog` object to call this variable; use:

```javascript
print("The king of the dogs is:", Dog.dogs_king)
```

For example, we can save the number of dogs ever created in a class variable and increment it each time a dog is made (in the `__init__` function).

```javascript
class Dog():
    number_of_dogs = 0
    dogs_king = "Bernie IV"

    # Initializer / Instance Attributes
    def __init__(self, name_of_the_dog):
        print("A new dog has been initialized !")
        print("His name is", name_of_the_dog)
        self.name = name_of_the_dog
        # Increment the number of dogs
        Dog.number_of_dogs += 1

    def bark(self):
        print(f"{self.name} barks ! WAF")

    def walk(self, number_of_meters):
        print(f"{self.name} walked {number_of_meters} meters")

    def rename(self, new_name):
        self.name = new_name

my_dog = Dog("Rex")
my_dog2 = Dog("Bernie V")
print(f"Curently, there are {Dog.number_of_dogs} dogs")
```

---

**Exercise**

Analyse the code below. What will be the outputs ?

Explain the goal of the methods

```javascript
class Circle:
    color = "red"

    def __init__(self, diameter):
        self.diameter = diameter

    def grow(self, factor=2):
        self.diameter = self.diameter * factor

    def get_color(self):
       return Circle.color

circle1 = Circle(2)
print(circle1.color)
print(Circle.color)
print(circle1.get_color())
circle1.grow(3)
print(circle1.diameter)
```

## Worked solutions

[English explanations and runnable Python implementation](solutions.md).
