"""Circle arithmetic and comparisons, with one radius as the source of truth."""
import math
from functools import total_ordering

def nonnegative(value):
    if isinstance(value, bool) or not isinstance(value, (int, float)):
        raise TypeError("A numeric length is required.")
    if not math.isfinite(value) or value < 0:
        raise ValueError("Length must be finite and nonnegative.")
    return float(value)

@total_ordering
class Circle:
    def __init__(self, radius=None, *, diameter=None):
        if (radius is None) == (diameter is None):
            raise ValueError("Supply exactly one of radius or diameter.")
        self.radius = radius if diameter is None else nonnegative(diameter) / 2

    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        self._radius = nonnegative(value)

    @property
    def diameter(self):
        return self.radius * 2

    @diameter.setter
    def diameter(self, value):
        self.radius = nonnegative(value) / 2

    @property
    def area(self):
        return math.pi * self.radius ** 2

    def __repr__(self):
        return f"Circle(radius={self.radius:g})"

    def __str__(self):
        return f"Circle: radius={self.radius:g}, diameter={self.diameter:g}, area={self.area:.3f}"

    def __add__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return Circle(self.radius + other.radius)

    def __eq__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return self.radius == other.radius

    def __lt__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return self.radius < other.radius

if __name__ == "__main__":
    first, second = Circle(3), Circle(diameter=10)
    print(first)
    print(second)
    print("Combined:", first + second)
    print("First is smaller:", first < second)
    print("Equal radii:", first == Circle(diameter=6))
    print("Sorted:", sorted([second, Circle(1), first]))
