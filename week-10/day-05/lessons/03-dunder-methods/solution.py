"""__repr__ supplies a useful printable representation."""


class PrintList:
    def __init__(self, my_list): self.my_list = list(my_list)
    def __repr__(self): return str(self.my_list)


if __name__ == '__main__': print(PrintList(['a', 'b', 'c']).__repr__())
