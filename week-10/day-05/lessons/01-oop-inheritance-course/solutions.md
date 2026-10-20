# Worked solutions

Run `python solution.py` from this folder. Source: [solution.py](solution.py). Python 3 and its standard library are sufficient. Interactive/demo options are explained below.

<a id="exercise-1"></a>

## 1. Overridden attributes and methods

NewCircle.color is **blue** even when nc refers to the class rather than an instance. The separate overridden grow example prints **1 then 4**, using the exact supplied diameter formula `diameter * factor * 2`. Its original area-growth docstring is mathematically inaccurate; the implementation preserves the actual code being analyzed.

[Original exercise](individual/01-exercise.md)

<a id="exercise-2"></a>

## 2. Parent initialization

A direct `B.__init__` call names that exact base. `super().__init__` follows the method resolution order and supports cooperative multiple inheritance. Both initialize B in this simple single-base example; they need not behave identically in a more complex hierarchy.

[Original exercise](individual/02-exercise.md)

<a id="exercise-3"></a>

## 3. Door and BlockedDoor

Door stores is_opened and toggles it through open_door/close_door. BlockedDoor inherits the state but overrides both operations to raise RuntimeError. The demo catches and displays both expected errors without stopping the rest of the program.

