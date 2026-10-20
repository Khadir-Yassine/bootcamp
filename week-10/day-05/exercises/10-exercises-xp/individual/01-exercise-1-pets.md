# 🌟 Exercise 1 : Pets

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

### **🌟 Exercise 1 : Pets**

**Instructions**

Using this code:

```javascript
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
```

1. Create another cat breed named `Siamese` which inherits from the `Cat` class.

2. Create a list called `all_cats`, which holds three cat instances : one Bengal, one Chartreux and one Siamese.

3. Those three cats are Sara’s pets. Create a variable called `sara_pets` which value is an instance of the `Pet` class, and pass the variable `all_cats` to the new instance.

4. Take all the cats for a walk, use the `walk` method.

---
