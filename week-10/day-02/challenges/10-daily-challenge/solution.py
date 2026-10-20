"""Multiples and consecutive duplicate removal."""
import argparse


def multiples(number, length):
    if length < 0: raise ValueError('Length must be non-negative')
    return [number * index for index in range(1, length + 1)]


def remove_consecutive_duplicates(text):
    return ''.join(char for index, char in enumerate(text) if index == 0 or char != text[index - 1])


if __name__ == '__main__':
    parser = argparse.ArgumentParser(); parser.add_argument('--demo', action='store_true')
    if parser.parse_args().demo:
        print(multiples(7, 5)); print(remove_consecutive_duplicates('wiiiinnnnd'))
    else:
        try: print(multiples(int(input('Number: ')), int(input('Length: '))))
        except ValueError as error: print(error)
        print(remove_consecutive_duplicates(input('A string: ')))
