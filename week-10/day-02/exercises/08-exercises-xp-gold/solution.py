"""Control flow exercises and replayable guessing game."""
import argparse
import random


def season_for_month(month):
    if month not in range(1, 13): raise ValueError('Month must be 1 through 12')
    return 'Spring' if 3 <= month <= 5 else 'Summer' if 6 <= month <= 8 else 'Autumn' if 9 <= month <= 11 else 'Winter'


def ask_until_name(own_name='Yassine', input_fn=input):
    while True:
        name = input_fn('Your name: ')
        if name == own_name: return name


def first_name_index(name):
    names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
    return names.index(name) if name in names else None


def greatest(a, b, c): return max(a, b, c)


def guessing_game(input_fn=input, output=print, randint=random.randint):
    won = lost = 0
    while True:
        value = input_fn('Guess 1–9, or q to quit: ').strip()
        if value.casefold() == 'q': break
        try:
            guess = int(value)
            if not 1 <= guess <= 9: raise ValueError
        except ValueError:
            output('Enter an integer between 1 and 9.'); continue
        drawn = randint(1, 9)
        if guess == drawn: won += 1; output('Winner')
        else: lost += 1; output(f'Better luck next time. The number was {drawn}.')
    output(f'Total won: {won}; total lost: {lost}')
    return won, lost


def main(interactive=False):
    print(season_for_month(int(input('Month (1–12): ')) if interactive else 10))
    for number in range(1, 21): print(number)
    # Positions in this sequence are zero based: index 0 contains 1.
    for index, number in enumerate(range(1, 21)):
        if index % 2 == 0: print('Even-index value:', number)
    if interactive: ask_until_name()
    print('First index:', first_name_index(input('A game character name: ') if interactive else 'Cortana'))
    values = [float(input(f'Number {i}: ')) for i in range(1, 4)] if interactive else [25, 78, 87]
    print('The greatest number is:', greatest(*values))
    if interactive: guessing_game()


if __name__ == '__main__':
    parser = argparse.ArgumentParser(); parser.add_argument('--interactive', action='store_true')
    main(parser.parse_args().interactive)
