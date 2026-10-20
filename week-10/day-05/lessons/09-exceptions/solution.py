"""Ignore non-addable values without letting one bad string stop the sum."""


def sum_numbers(values):
    total = 0
    for value in values:
        try: total += value
        except TypeError: continue
    return total


if __name__ == '__main__': print(sum_numbers([2, 3, 1, 2, 'four', 42, 1, 5, 3, 'imanumber']))
