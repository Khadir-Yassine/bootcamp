# Worked solutions

Run `python solution.py` from this folder. Source: [solution.py](solution.py). Python 3 and its standard library are sufficient. Interactive/demo options are explained below.

<a id="exercise-1"></a>

## 1. Circle

Circle defaults to radius 1.0 and computes perimeter **2πr** and area **πr²**. definition prints the set-of-points geometric definition. Negative radii are rejected.

[Original exercise](individual/01-exercise-1-geometry.md)

<a id="exercise-2"></a>

## 2. MyList

The class copies the provided letters. reversed_list and sorted_list return new lists without changing the input. The bonus uses a list comprehension to generate one random integer per original letter, preserving length.

[Original exercise](individual/02-exercise-2-custom-list-class.md)

<a id="exercise-3"></a>

## 3. Menu manager

The separate menu_manager.py initializes all five supplied dishes with name, price, spice and boolean gluten. add_item appends a validated dish, update_item modifies an existing dish, and remove_item deletes it and prints the updated menu. Missing names notify the manager; duplicate additions are rejected. Run solution.py for all three exercises, or menu_manager.py for the menu alone.

[Original exercise](individual/03-exercise-3-restaurant-menu-manager.md)

## Supporting source files

- [menu_manager.py](menu_manager.py)
