# Exercise 4 : Family

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

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

## Worked solution

[English explanation and runnable source](../solutions.md#exercise-4).
