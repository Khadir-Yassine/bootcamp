# Encapsulation,Polymorphism,Inheritance

Course source: [Geeks Institute](https://www.geeks.institute/).
### **Table of Contents**

- **What you will learn**

- **Useful Resources**
  
  - I. Encapsulation
  - II. Polymorphism
  - III. Multiple Inheritance

---

## **What you will learn**

- Encapsulation

- Polymorphism

- Multiple inheritances

---

## **Useful Resources**

- [Article on Encapsulation](https://medium.com/@kateolenya/encapsulation-in-python-3-1a93fd8fa9cd)

---

### **I . Encapsulation**

We can restrict access to methods and variables. This prevents data from direct modification, which is called **encapsulation**. In Python, we denote private attributes using underscore as prefix i.e., single `_` or double `__`.

Lets define an object class `Computer` and try to access its variables and methods both private and global.

```javascript
class Computer():

    def __init__(self):
        self.name = "Apple Computer" # public
        self.__max_price = 900 # private

    def sell(self):            # public method
        print(f"Selling Price: {self.__max_price}")

    def __sell(self):          # private method
      print('This is private method')

    def set_max_price(self, price):
        self.__max_price = price

c = Computer()
```

**Note**: So once we try to access attributes and methods of our class - we should receive a restriction if they are private.

```javascript
c.sell()
# >> Selling Price: 900
```

Explanation of the output `Selling Price: 900`:
the`__max_price` which is a private attribute, is displayed by using the public `sell()` method.

```javascript
c.__sell()
# >> AttributeError: 'Computer' object has no attribute '__sell'
```

Explanation of the output `AttributeError: 'Computer' object has no attribute '__sell'`:
The interpreter cannot perform the `__sell()` function because of the `__` underscore meaning it’s private and can’t be accessed by the user.

```javascript
# change the price
c.__max_price = 1000
# >> The private attribute __max_price cannot be changed
c.sell()
# >> Selling Price: 900

# using setter function
c.set_max_price(1000)
c.sell()
# >> Selling Price: 1000
```

---

### **II. Polymorphism**

In programming, polymorphism means different or related classes that use the same names for their functions.

Polymorphism allows the ability to use a standard interface for multiple forms or data types.

Let’s define two classes, `Parrot` and `Penguin`, both with functions called `fly` and `swim` and then we’ll call these functions with the `flying_test(bird)` function.

```javascript
class Parrot():

    def fly(self):
        print("Parrot can fly")

    def swim(self):
        print("Parrot can't swim")

class Penguin():

    def fly(self):
        print("Penguin can't fly")

    def swim(self):
        print("Penguin can swim")

# common interface
def flying_test(bird):
    bird.fly()

#instantiate objects
blu = Parrot()
peggy = Penguin()

# passing the object
flying_test(blu)
# >> Parrot can fly

flying_test(peggy)
# >> Penguin can't fly
```

---

### **III. Multiple Inheritance**

![Types-of-Inheritance](https://github.com/devtlv/studentsGitHub/blob/master/Images%20cours%20%C3%A0%20h%C3%A9berger%20-%2006.03.2024/Week%203%20-%20Object%20Oriented%20Programming/W3D2/Types-of-Inheritance.jpg?raw=true)

A class can inherit from two different classes; in this case, the order of the parent class in a class definition will decide what will be inherited. The first parent class will prioritize classes below (meaning the functions last to be inherited can override functions from the parent class).

```javascript
class Alien():
    def __init__(self, name, planet):
        self.name = name
        self.planet = planet

    def fly(self):
        print(self.name, 'is flying!')

    def sleep(self):
        print("Aliens don't sleep")

class Animal():
    def __init__(self, name):
        self.name = name

    def sleep(self):
        print("zzzZZZZZ")

class Dog(Animal):
    def bark(self):
        print(f"{self.name} barked, WAF !")

class AlienDog(Alien, Dog):
    def bark(self):
        print(f"{self.name} barked, 0ul10ul0u (that is how aliens dogs bark..) !")

my_normal_dog = Dog("Roger")
my_normal_dog.sleep()
# >> zzzZZZZZ

my_normal_dog.bark()
# >> Roger barked, WAF !

my_alien_dog = AlienDog("Rex", "Neptune")
print(my_alien_dog.planet)
# >> Neptune

my_alien_dog.fly()
# >> Rex is flying!

my_alien_dog.sleep()
# >> Aliens don not sleep

my_alien_dog.bark()
# >> Rex barked, 0ul10ul0u (that is how aliens dogs bark..) !
```

Here I have created two new classes, `Alien` and `AlienDog`, `AlienDog` inherit from `Alien` and `Dog`, but both classes have an `__init__` and a `sleep` method. However, the functions of `Alien` will be transferred to `AlienDog` because `Alien` is before `Dog` in the class definition (`class AlienDog(Alien, Dog)`).

In the next section we learn that a child class (`AlienDog`) inherits all the methods from the parent class (`Dog`). However, in some situations, the method inherited from the parent class doesn’t quite fit into the child class (because of different attributes and characteristics). In such cases, you will have to re-implement the method in the child class.

---

**Exercise**

Analyse the code below before executing it. What will be the output ? Why ?

```javascript
class A():
    def dothis(self):
        print("doing this in A")

class B(A):
    pass

class C():
    def dothis(self):
        print("doing this in C")

class D(B, C):
    pass

d_instance = D()
d_instance.dothis() 
```

The code defines four classes with the following inheritance structure:

- Class A defines a method `dothis()` that prints "doing this in A"

- Class B inherits from A but doesn't override any methods

- Class C defines its own method `dothis()` that prints "doing this in C"

- Class D inherits from both B and C (multiple inheritance)

When we create a D instance and call `dothis()`, Python needs to determine which `dothis()` method to use since it's defined in both inheritance chains (through B from A, and directly from C).

### Method Resolution Order (MRO)

To figure out which `dothis()` will be called, we need to understand Python's Method Resolution Order (MRO), which determines the sequence in which Python searches for methods in a class hierarchy.

The MRO follows these principles:

1. Children have priority over their parents

2. If there are multiple parents, they're searched in the order they're listed in the class definition

For class D, the inheritance is defined as `class D(B, C)`, so the search order will be:

1. Look in D first

2. Then look in B (the first parent)

3. Then look in A (B's parent)

4. Then look in C (the second parent)

### The Output

Given this MRO, when `d_instance.dothis()` is called:

- D doesn't have a `dothis()` method

- Python checks B next, which doesn't have its own `dothis()` method

- Python checks A next, which DOES have a `dothis()` method

- Python executes this method before reaching C

---

**Exercise**

Analyse the code below before executing it. What will be the output ? Why ?

```javascript
class Book():
    def __init__(self, title, author, publication_date, price):
        self.title = title
        self.author = author
        self.publication = publication_date
        self.price = price

    def present(self):
        print(f'Title: {self.title}')

class Fiction(Book):
    def __init__(self, title, author, publication_date, price, is_awesome):
        super().__init__(title, author, publication_date, price)
        self.genre = 'Fiction'
        self.is_awesome = is_awesome
        if self.is_awesome:
            self.bored = False
            print('Woow this is an awesome book')
        else:
            self.bored = True
            print('I am very bored')

if __name__ == '__main__':
    foundation = Fiction('Asimov', 'Foundation', '1966', '5£', True)
    foundation.present()
    print(foundation.price)
    print(foundation.bored)
    boring_book = Fiction('boring_guy', 'boring_title', 'boring_date', '9000£', False)
    print(boring_book.bored)
```
