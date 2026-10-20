"""__init__ initializes attributes belonging to each new instance."""


class Point:
    def __init__(self, x, y): self.x, self.y = x, y


if __name__ == '__main__':
    p = Point(3, 4); print('p.x is:', p.x); print('p.y is:', p.y)
