"""Attribute overriding, method overriding, super and blocked-door inheritance."""


class Circle:
    color = 'red'


class NewCircle(Circle):
    color = 'blue'


class GrowingCircle:
    def __init__(self, diameter): self.diameter = diameter
    def grow(self, factor=2): self.diameter *= factor


class NewGrowingCircle(GrowingCircle):
    # Preserve the actual supplied formula; despite its docstring this is not
    # the formula for multiplying a circle's area by factor.
    def grow(self, factor=2): self.diameter = self.diameter * factor * 2


class B:
    def __init__(self, *args, **kwargs): self.initialized = True


class DirectA(B):
    def __init__(self, *args, **kwargs): B.__init__(self, *args, **kwargs)


class CooperativeA(B):
    def __init__(self, *args, **kwargs): super().__init__(*args, **kwargs)


class Door:
    def __init__(self, is_opened=False): self.is_opened = is_opened
    def open_door(self): self.is_opened = True
    def close_door(self): self.is_opened = False


class BlockedDoor(Door):
    def open_door(self): raise RuntimeError('A blocked door cannot be opened')
    def close_door(self): raise RuntimeError('A blocked door cannot be closed')


if __name__ == '__main__':
    nc = NewCircle; print(nc.color)
    circle = NewGrowingCircle(1); print(circle.diameter); circle.grow(); print(circle.diameter)
    print('Parent initialized:', DirectA().initialized, CooperativeA().initialized)
    door = Door(); door.open_door(); print('Open:', door.is_opened); door.close_door(); print('Open:', door.is_opened)
    blocked = BlockedDoor()
    for action in (blocked.open_door, blocked.close_door):
        try: action()
        except RuntimeError as error: print(error)
