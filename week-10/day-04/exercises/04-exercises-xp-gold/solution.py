"""Geometry, custom lists and restaurant menu demonstration."""
import math
import random
from menu_manager import MenuManager


class Circle:
    def __init__(self, radius=1.0):
        if radius < 0: raise ValueError('Radius must be non-negative')
        self.radius = radius
    def perimeter(self): return 2 * math.pi * self.radius
    def area(self): return math.pi * self.radius ** 2
    def definition(self):
        message = 'A circle is the set of points in a plane at a fixed distance from a center.'; print(message); return message


class MyList:
    def __init__(self, letters): self.letters = list(letters)
    def reversed_list(self): return self.letters[::-1]
    def sorted_list(self): return sorted(self.letters)
    def random_list(self, rng=random): return [rng.randint(0, 100) for _ in self.letters]


if __name__ == '__main__':
    circle = Circle(); print('Perimeter:', circle.perimeter(), 'Area:', circle.area()); circle.definition()
    letters = MyList(['d', 'a', 'c', 'b']); print(letters.reversed_list(), letters.sorted_list(), letters.random_list())
    menu = MenuManager(); menu.add_item('Pasta', 14, 'A', True); menu.update_item('Soup', 11, 'B', False); menu.remove_item('Hamburger')
