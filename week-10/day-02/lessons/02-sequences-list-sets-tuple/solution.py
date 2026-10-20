"""First-occurrence replacement and tuple unpacking."""


def replace_first(values, old=20, new=200):
    result = list(values)
    if old in result: result[result.index(old)] = new
    return result


if __name__ == '__main__':
    print(replace_first([5, 10, 15, 20, 25, 50, 20]))
    a_tuple = (10, 20, 30, 40)
    a, b, c, d = a_tuple
    print(a); print(b); print(c); print(d)
