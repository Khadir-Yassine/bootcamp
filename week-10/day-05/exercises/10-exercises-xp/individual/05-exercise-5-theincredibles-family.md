# Exercise 5 : TheIncredibles Family

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

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

## Worked solution

[English explanation and runnable source](../solutions.md#exercise-5).
