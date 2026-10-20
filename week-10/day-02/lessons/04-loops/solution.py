"""Multiplication table and a terminating while loop."""
import argparse


def multiplication_table(number): return [f'{number} × {factor} = {number * factor}' for factor in range(1, 11)]


if __name__ == '__main__':
    parser = argparse.ArgumentParser(); parser.add_argument('--number', type=int)
    args = parser.parse_args()
    number = args.number if args.number is not None else int(input('Number: '))
    for row in multiplication_table(number): print(row)
    counter = 1
    while counter <= 10: print(counter); counter += 1
