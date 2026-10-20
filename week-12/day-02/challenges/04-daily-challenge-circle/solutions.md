# Circle — Worked Solution

[Original instructions](README.md)

## Run

From this directory, run:

```sh
python circle.py
```

Python 3.10 or newer; standard library only.

## Design and results

`Circle(3)` uses a radius; `Circle(diameter=6)` produces an equal circle. Properties keep radius and diameter synchronized. The area is computed from the current radius. Negative, non-finite and nonnumeric lengths are rejected; zero is valid.

`__str__` prints readable attributes and `__repr__` identifies the constructor. Addition creates a new circle whose **radius is the sum of both radii**, as requested; this is not the same as combining areas. `__eq__` and `__lt__` compare radii, and `total_ordering` supplies the other comparisons so `sorted()` works. Unsupported operands return `NotImplemented`.

Optional: `python draw_sorted.py` draws sorted circles with Turtle and waits for a click. It requires Tk and a graphical desktop; this optional window is not part of the automated checks. Standard console and class behavior is tested in `../../../tests/test_solutions.py` from the week root.
