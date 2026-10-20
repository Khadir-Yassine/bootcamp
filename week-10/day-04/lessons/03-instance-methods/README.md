# Instance methods

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Instance methods**

---

![Illustration](https://github.com/devtlv/studentsGitHub/blob/master/Images%20cours%20%C3%A0%20h%C3%A9berger%20-%2006.03.2024/Week%203%20-%20Object%20Oriented%20Programming/W3D1/Using%20Objects.jpg?raw=true)

---

### **Instance Methods**

Instance methods are defined inside a class and are used to describe a function that belongs to a class. For example, in real life, the “bark” function belongs to “Dog” class.

Instance methods can be used to perform operations with the attributes, get the contents of an instance, and many other things.

To define a method, use the `def` keyword inside the class, like we were doing with the `__init__` method. All instance methods need to receive `self` as the first argument; this allows us to play with the object inside the method.

Let’s define the bark method.

```javascript
class Dog():
    # Initializer / Instance Attributes
    def __init__(self, name_of_the_dog):
        print("A new dog has been initialized !")
        print("His name is", name_of_the_dog)
        self.name = name_of_the_dog

    def bark(self):
        print(f"{self.name} barks ! WAF")
```

To call an instance method, type the name of the instance (object) followed by a dot `.` and the function’s name. Let’s create a `Dog` object and call the `bark` function.

```javascript
shelter_dog = Dog("Rex")
shelter_dog.bark()
```

The first line will output:

```javascript
>> A new dog has been initialized
>> His name is Rex
```

And the second:

```javascript
>> Rex barks ! WAF
```

After the ‘ self ‘ one, the methods can also receive arguments, which will be passed implicitly.

```javascript
class Dog():
    # Initializer / Instance Attributes
    def __init__(self, name_of_the_dog):
        print("A new dog has been initialized !")
        print("His name is", name_of_the_dog)
        self.name = name_of_the_dog

    def bark(self):
        print(f"{self.name} barks ! WAF")

    def walk(self, number_of_meters):
        print(f"{self.name} walked {number_of_meters} meters")

shelter_dog = Dog("Rex")
shelter_dog.walk(10)
```

You can also use instance methods to modify object’s attributes.
Here is a function that change the dog’s name:

```javascript
class Dog():
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

shelter_dog = Dog("Rex")
shelter_dog.rename("Paul")
```

Remember that the `self` keyword refers to the object itself.

---

**Exercise**

- Analyse the code below. What will be the output ?

- Explain the goal of the methods

- Create a method that modifies the name of the person

```javascript
class Person():
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def show_details(self):
    print("Hello my name is " + self.name)

first_person = Person("John", 36)
first_person.show_details()
```

---

**Exercise**

Analyse the code below. What will be the output ?

```javascript
class Computer():

    def description(self, name):
        """
        This is a totally useless function
        """
        print("I am a computer, my name is", name)
        #Analyse the line below
        print(self)

mac_computer = Computer()
mac_computer.brand = "Apple"
print(mac_computer.brand)

dell_computer = Computer()

Computer.description(dell_computer, "Mark")
# IS THE SAME AS:
dell_computer.description("Mark")
```
