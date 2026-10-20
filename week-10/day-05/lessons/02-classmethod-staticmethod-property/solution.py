"""Class counter, static validator, and an additional property illustration."""


class MyClass:
    count = 0
    def __init__(self, val): self.val = val; MyClass.count += 1
    def set_val(self, newval): self.val = newval
    def get_val(self): return self.val
    @classmethod
    def get_count(cls): return cls.count


class FilteredClass:
    count = 0
    def __init__(self, val): self.val = self.filterint(val); FilteredClass.count += 1
    @staticmethod
    def filterint(value):
        if not isinstance(value, int): print('Entered value is not an INT, value set to 0'); return 0
        return value


class PropertyExample:
    def __init__(self, value): self.value = value
    @property
    def value(self): return self._value
    @value.setter
    def value(self, new_value): self._value = FilteredClass.filterint(new_value)


if __name__ == '__main__':
    object_1 = MyClass(10); print('Value of object:', object_1.get_val()); print(MyClass.get_count())
    object_2 = MyClass(20); print('Value of object:', object_2.get_val()); print(MyClass.get_count())
    a, b, c = FilteredClass(5), FilteredClass(10), FilteredClass(15)
    print(a.val); print(b.val); print(c.val); print(a.filterint(100))
    example = PropertyExample(3); example.value = 9; print('Property:', example.value)
