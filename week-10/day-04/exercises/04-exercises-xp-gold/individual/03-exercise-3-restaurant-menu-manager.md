# Exercise 3 : Restaurant Menu Manager

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

### **Exercise 3 : Restaurant Menu Manager**

**Instructions**

The purpose of this exercise is to create a restaurant menu. The code will allow a manager to add and delete dishes.

1. Create a python file called *menu_*[*manager.py*](http://manager.py/).

2. Create a class called `MenuManager`.

3. Create a method `__init__` that instantiates an attribute called `menu`. The menu attributes value will be all the current dishes (**list of dictionaries**). Each dish will be stored in a dictionary where the keys are name, price, spice level and gluten index (which value is a boolean).

Here is a list of the dishes currently on the menu:

```javascript
    Soup – 10 – B - False
    Hamburger – 15 - A - True
    Salad – 18 - A - False
    French Fries – 5 - C - False
    Beef bourguignon– 25 - B - True

    Meaning: For the spice level:
       • A = not spicy,
       • B = a little spicy,
       • C = very spicy
```

The dishes provided above should be the value of the `menu` attribute.

1. Create a method called `add_item(name, price, spice, gluten)`. This method will add new dishes to the menu.

2. Create a method called `update_item(name, price, spice, gluten)`. This method checks whether a dish is in the menu, if the dish exists then update it. If not notify the manager that the dish is not in the menu.

3. Create a method called `remove_item(name)`. This method should check if the dish is in the menu, if the dish exists then delete it and print the updated dictionary. If not notify the manager that the dish is not in the menu.

## Worked solution

[English explanation and runnable source](../solutions.md#exercise-3).
