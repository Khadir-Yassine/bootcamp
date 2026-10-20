# OOP Inheritance course

Course source: [Geeks Institute](https://www.geeks.institute/).
### **Table of Contents**

**What you will learn**

- I. Inheritance

- II. Overriding Parent Methods

- III. The `super()` Function

---

## **What you will learn**

- Inheritance

- Overriding Parent Methods

- The `super()` function

---

### **I. Inheritance**

![inheritance](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week5/Day2/Python-Inheritance-Illustration.png?raw=true)

Inheritance is the process by which one class takes on the attributes and methods of another. Newly formed classes are called child classes, and the classes that child classes are derived from are called parent classes.

For example, in real life, Dog is a child class of Animal, every Dog is an Animal, but every Animal isn’t a Dog. Children inherit all of the parent’s attributes and behaviors but can also specify different behavior to follow.

To make a class inherit from another one, simply add it in round brackets on class definition:

```javascript
class Animal():
    def __init__(self, name):
        self.name = name

class Dog(Animal):
    def bark(self):
        print(f"{self.name} barked, WAF !")
```

*Inheritance* is when a class uses code constructed within another class. Classes called *child classes* or *subclasses* inherit methods and variables from *parent classes* or *base classes*.

```javascript
class Animal():
    def __init__(self, type, number_legs, sound):
        self.type = type
        self.number_legs = number_legs
        self.sound = sound

    def make_sound(self):
        print(f"I am an animal, and I love saying {self.sound}")

class Dog(Animal):
    pass

rex= Dog("dog", 4, "wouaf")
print('This animal is a:', rex.type)
# >> This animal is a dog

print('This dog has', rex.number_legs , ' legs')
# >> This dog has 4 legs

print('This dog makes the sound ', rex.sound)
# >> This dog makes the sound wouaf

rex.make_sound()
# >> I am an animal, and I love saying wouaf
```

We have created a Dog object *rex* that uses the method and attributes of the Animal class even though we did not define those methods and attributes in the Dog child class.

```javascript
class Animal():
    def __init__(self, type, number_legs, sound):
        self.type = type
        self.number_legs = number_legs
        self.sound = sound

    def make_sound(self):
        print(f"I am an animal, and I love saying {self.sound}")

class Dog(Animal):
    def fetch_ball(self):
        print("I am a dog, and I love fetching balls")

rex = Dog('dog', 4, "Wouaf")
print('This animal is a:', rex.type)
# >> This animal is a dog

rex.fetch_ball()
# >> I am a dog, and I love fetching balls

roger = Animal('Roger', 4, "Grr")
roger.fetch_ball()
# >> AttributeError: 'Animal' object has no attribute 'fetch_ball'
```

This is because the method `fetch_ball()` belongs only to the Dog *child class*, and not the Animal *parent class*.

---

**Exercise**

Analyse the code below before executing it. What will be the outputs ?

```javascript
class Circle:
    color = "red"

class NewCircle(Circle):
    color = "blue"

nc = NewCircle
print(nc.color)
# >> What will be the output ?
```

```javascript
class Circle:
    def __init__(self, diameter):
      self.diameter = diameter

    def grow(self, factor=2):
        """grows the circle's diameter by factor"""
        self.diameter = self.diameter * factor

class NewCircle(Circle):
    def grow(self, factor=2):
        """grows the area by factor..."""
        self.diameter = (self.diameter * factor * 2)

nc = NewCircle(1)
print(nc.diameter)

nc.grow()

print(nc.diameter)
# >> What will be the output
```

---

### **II . Overriding Parent Methods**

When you create the same method inside the child class, you override the parent class method.
It’s important to note that child classes override or extend the functionality of parent classes. The child class will have all the parent class’s functions, plus his functions.

```javascript
class Animal():
    def __init__(self, type, number_legs, sound):
        self.type = type
        self.number_legs = number_legs
        self.sound = sound

    def make_sound(self):
        print(f"I am an animal, and I love saying {self.sound}")

class Dog(Animal):
    def fetch_ball(self):
        print("I am a dog, and I love fetching balls")

    def make_sound(self):
        print("I am an DOGGG !!! WOUAFFF!!")

rex = Dog('dog', 4, "Wouaf")
rex.make_sound()
# >> I am an DOGGG !!! WOUAFFF!!
```

---

### **III. The super() Function**

With the `super()` function, you can gain access to inherited methods that have been overwritten in a class object.

```javascript
class Animal():
    def __init__(self, type, number_legs, sound):
        self.type = type
        self.number_legs = number_legs
        self.sound = sound

class Dog(Animal):
    def __init__(self, type, number_legs, sound, fetch_ball):
        super().__init__(type, number_legs, sound)
        # Or : Animal.__init__(self,type, number_legs, sound)
        self.fetch_ball = fetch_ball

rex = Dog('dog', 4, "wouaf", True)
print('This animal is a:', rex.type)
# >> This animal is a dog

print('This dog has', rex.number_legs , ' legs')
# >> This dog has 4 legs

print('This dog makes the sound ', rex.sound)
# >> This dog makes the sound wouaf

print('Does this dog fetchs balls ? ', rex.fetch_ball)
# >> Does this dog fetchs balls ? True
```

We use `super()` function before `__init__()` method. We want to pull the content of `__init__()` method from the parent class into the child class.

You can also specify from which class you want to use the `super()` function.

```javascript
class MyClass(object):
    def func(self):
        print("I'm being called from the Parent class")

class ChildClass(MyClass):
    def func(self):
        print("I'm actually being called from the Child class")
        print("But...")
        # Calling the `func()` method from the Parent class.
        super(ChildClass, self).func()

my_instance_2 = ChildClass()
my_instance_2.func()
```

---

**Exercise**

What is the difference between these 2 pieces of code ?

```javascript
class B:
    def __init__(self, *args, **kwargs):
        pass

class A(B):
    def __init__(self, *args, **kwargs):
        B.__init__(self, *args, **kwargs)
        pass
```

```javascript
class B:
    def __init__(self, *args, **kwargs):
        pass

class A(B):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        pass
```

The key difference between these two code snippets is how class A calls the `__init__` method of its parent class B.

### Key Differences:

1. **Multiple Inheritance**: The biggest difference becomes apparent with multiple inheritance.
  
  - `B.__init__()` always calls class B's method specifically
  - `super().__init__()` follows the MRO, which matters when you have multiple parent classes

2. **Method Resolution Order**:
  
  - `super()` automatically follows Python's MRO, which determines the order in which methods are resolved in inheritance hierarchies
  - Direct reference (`B.__init__`) bypasses the MRO

3. **Code Maintainability**:
  
  - If you change the parent class name or inheritance structure, you need to update all direct references
  - With `super()`, the code adapts automatically to inheritance changes

4. **Diamond Inheritance**: In diamond-shaped inheritance patterns (where a class inherits from two classes that share a common ancestor), `super()` ensures each ancestor is initialized exactly once, while direct reference might cause duplicate initializations.

The `super()` approach is generally considered more modern and flexible in Python, especially in complex inheritance scenarios.

---

**Exercise on Inheritance and Composition: Door class**

Try to recreate the class explained below:

We have a class called `Door` that has an attribute of `is_opened` declared when an instance is initiated.

We can create a class called `BlockedDoor` that inherits from the base class `Door`.

We just override the parent class's functions of `open_door()` and `close_door()` with our own `BlockedDoor` version of those functions, which simply raises an **Error** that a blocked door cannot be opened or closed.

## Worked solutions

[English explanations and runnable Python implementation](solutions.md).
