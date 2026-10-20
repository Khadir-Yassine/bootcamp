"""Shared class color and instance-local diameter."""


class Circle:
    color = 'red'
    def __init__(self, diameter): self.diameter = diameter
    def grow(self, factor=2): self.diameter *= factor
    def get_color(self): return Circle.color


if __name__ == '__main__':
    circle1 = Circle(2); print(circle1.color); print(Circle.color); print(circle1.get_color()); circle1.grow(3); print(circle1.diameter)
