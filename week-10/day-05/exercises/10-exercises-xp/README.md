# Exercises XP

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn :**

- Inheritance

---

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

### **🌟 Exercise 2 : Dogs**

**Instructions**

1. Create a class called `Dog` with the following attributes `name`, `age`, `weight`.

2. Implement the following methods in the `Dog` class:
  
  - `bark`: returns a string which states: “`<dog_name>` is barking”.
  - `run_speed`: returns the dogs running speed `(weight/age*10)`.
  - `fight` : takes a parameter which value is another `Dog` instance, called `other_dog`. This method returns a string stating which dog won the fight. The winner should be the dog with the higher *run_speed x weight*.

3. Create 3 dogs and run them through your class.

---

### **🌟 Exercise 3 : Dogs Domesticated**

**Instructions**

1. Create a new python file and import your `Dog` class from the previous exercise.

2. In the new python file, create a class named `PetDog` that inherits from `Dog`.

3. Add an attribute called `trained` to the `__init__` method, this attribute is a boolean and the value should be `False` by default.

4. Add the following methods:
  
  - `train`: prints the output of `bark` and switches the trained boolean to `True`
  - `play`: takes a parameter which value is a few names of other `Dog` instances (use ***args**). The method should print the following string: “`dog_names` all play together”.
  - `do_a_trick`: If the dog is trained the method should print one of the following sentences at random:
  
  - “`dog_name` does a barrel roll”.
  - “`dog_name` stands on his back legs”.
  - “`dog_name` shakes your hand”.
  - “`dog_name` plays dead”.

---

### **Exercise 4 : Family**

**Instructions**

1. Create a class called `Family` and implement the following attributes:
  
  - **members**: list of dictionaries
  - **last_name** : (string)

2. Implement the following methods:
  
  - `born`: adds a child to the **members** list (use `**kwargs`), don’t forget to print a message congratulating the family.
  - `is_18`: takes the name of a family member as a parameter and returns `True` if they are over 18 and `False` if not.
  - `family_presentation`: a method that prints the family’s last name and all the members’ details.

3. Create an instance of the Family class, with the last name of your choice, and the below members. Then call all the methods you created in Point 2.
  
  ```javascript
    [
        {'name':'Michael','age':35,'gender':'Male','is_child':False},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False}
    ]
```

---

### **Exercise 5 : TheIncredibles Family**

**Instructions**

1. Create a class called `TheIncredibles`. This class should inherit from the `Family` class:
This is no random family they are an incredible family, therefore the `members` attributes, will be a list of dictionaries containing the additional keys : *power* and *incredible_name*. (See Point 4)

2. Add a method called `use_power`, this method should print the power of a member only if they are over 18 years old. If not raise an exception (look up exceptions) which stated they are not over 18 years old.

3. Add a method called `incredible_presentation` which :
  
  - Print a sentence like “****Here is our powerful family *****”
  - Prints the family’s last name and all the members’ details (ie. use the `super()` function, to call the `family_presentation` method)

4. Create an instance of the Incredibles class, with the “Incredibles” last name, and the below members.
  
  ```javascript
    [
        {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
    ]
```

5. Call the `incredible_presentation` method.

6. Use the `born` method inherited from the `Family` class to add Baby Jack with the following power: “Unknown Power”.

7. Call the `incredible_presentation` method again.
