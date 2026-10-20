# Exercises XP

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Exercises XP**

---

## **What you will learn**

- Classes and Objects

---

### **🌟 Exercise 1: Cats**

**Instructions**

Using this class

```javascript
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age
```

1. Instantiate three `Cat` objects using the code provided above.

2. Outside of the class, create a function that finds the oldest cat and returns the cat.

3. Print the following string: “The oldest cat is `<cat_name>`, and is `<cat_age>` years old.”. Use the function previously created.

---

### **🌟 Exercise 2 : Dogs**

**Instructions**

1. Create a class called `Dog`.

2. In this class, create an `__init__` method that takes two parameters : `name` and `height`. This function instantiates two attributes, which values are the parameters.

3. Create a method called `bark` that prints the following string “`<dog_name>` goes woof!”.

4. Create a method called `jump` that prints the following string “`<dog_name>` jumps `<x>` cm high!”. `x` is the `height`*2.

5. Outside of the class, create an object called `davids_dog`. His dog’s name is “Rex” and his height is 50cm.

6. Print the details of his dog (ie. `name` and `height`) and call the methods `bark` and `jump`.

7. Create an object called `sarahs_dog`. Her dog’s name is “Teacup” and his height is 20cm.

8. Print the details of her dog (ie. `name` and `height`) and call the methods `bark` and `jump`.

9. Create an if statement outside of the class to check which dog is bigger. Print the `name` of the bigger dog.

---

### **🌟 Exercise 3 : Who’s the song producer?**

**Instructions**

**1.** Define a class called `Song`, it will show the lyrics of a song.
Its `__init__()` method should have two arguments: `self` and `lyrics` (a list).
**2.** Inside your class create a method called `sing_me_a_song` that prints each element of `lyrics` on its own line.
**3.** Create an object, for example:

```javascript
stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
```

**4.** Then, call the `sing_me_a_song` method. The output should be:

There’s a lady who's sure

all that glitters is gold

and she’s buying a stairway to heaven

---

### **Exercise 4 : Afternoon at the Zoo**

**Instructions**

1. Create a class called `Zoo`.

2. In this class create a method `__init__` that takes one parameter: `zoo_name`.
It instantiates two attributes: `animals` (an empty list) and `name` (name of the zoo).

3. Create a method called `add_animal` that takes one parameter `new_animal`. This method adds the `new_animal` to the `animals` list as long as it isn’t already in the list.

4. Create a method called `get_animals` that prints all the animals of the zoo.

5. Create a method called `sell_animal` that takes one parameter `animal_sold`. This method removes the animal from the list and of course the animal needs to exist in the list.

6. Create a method called `sort_animals` that sorts the animals alphabetically and groups them together based on their first letter.
Example
  
  ```javascript
{ 
    A: "Ape",
    B: ["Baboon", "Bear"],
    C: ['Cat', 'Cougar'],
    E: ['Eel', 'Emu']
}
```

7. Create a method called `get_groups` that prints the animal/animals inside each group.

8. Create an object called `new_york_zoo` and call all the methods.
**Tip**: The zookeeper is the one who will use this class.
Example
  
  ```javascript
Which animal should we add to the zoo --> Giraffe
x.add_animal(Giraffe)
```

## Worked solutions

[English explanations and runnable Python implementation](solutions.md).
