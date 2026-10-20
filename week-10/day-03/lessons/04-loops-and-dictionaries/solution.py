"""Interactive dictionary builder with explicit quit sentinel."""


def build_dictionary(input_fn=input):
    entries = {}
    while True:
        key = input_fn('Key (quit to finish): ')
        if key == 'quit': return entries
        value = input_fn('Value: ')
        if value == 'quit': return entries
        entries[key] = value


if __name__ == '__main__': print(build_dictionary())
