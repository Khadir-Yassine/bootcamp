# Exercise 4 : Afternoon at the Zoo

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

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

## Worked solution

[English explanation and runnable source](../solutions.md#exercise-4).
