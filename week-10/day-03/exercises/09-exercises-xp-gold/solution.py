"""Birthday directory, repeated-digit sum and 100 doubles simulations."""
import argparse
import random

BIRTHDAYS = {'Alice': '1994/05/20', 'Bob': '1990/10/12', 'Charlie': '2001/02/28', 'Diana': '1998/07/04', 'Eli': '1996/12/16'}


def birthday_lookup(name, birthdays=None):
    birthdays = BIRTHDAYS if birthdays is None else birthdays
    return f"{name}'s birthday is {birthdays[name]}" if name in birthdays else f"Sorry, we don't have the birthday information for {name}"


def repeated_sum(x):
    if not isinstance(x, int) or isinstance(x, bool) or x < 0: raise ValueError('X must be a non-negative integer')
    return sum(int(str(x) * repeats) for repeats in range(1, 5))


def throw_dice(rng=random): return rng.randint(1, 6)


def throw_until_doubles(roller=throw_dice):
    throws = 0
    while True:
        first, second = roller(), roller(); throws += 1
        if first == second: return throws


def dice_statistics(games=100, roller=throw_dice):
    if games <= 0: raise ValueError('Games must be positive')
    results = [throw_until_doubles(roller) for _ in range(games)]
    return results, sum(results), round(sum(results) / games, 2)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(); parser.add_argument('--interactive', action='store_true')
    interactive = parser.parse_args().interactive
    print('Welcome! You can look up the birthdays of the people in the list!')
    print('Names:', ', '.join(BIRTHDAYS))
    print(birthday_lookup(input("Person's name: ") if interactive else 'Alice'))
    print('3 + 33 + 333 + 3333 =', repeated_sum(3))
    results, total, average = dice_statistics()
    print(f'Total throws: {total}'); print(f'Average throws to reach doubles: {average:.2f}')
