"""Short names and FizzBuzz; --interactive enables prompts."""
import argparse


def short_name(name): return 'You have a short name :)' if len(name) < 5 else 'Your name has at least five letters.'


def fizzbuzz(number):
    if not 1 <= number <= 100: raise ValueError('Enter a number from 1 to 100')
    if number % 15 == 0: return 'FizzBuzz'
    if number % 3 == 0: return 'Fizz'
    if number % 5 == 0: return 'Buzz'
    return str(number)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(); parser.add_argument('--interactive', action='store_true')
    interactive = parser.parse_args().interactive
    print(short_name(input('Your name: ') if interactive else 'John'))
    print(fizzbuzz(int(input('Number 1–100: ')) if interactive else 15))
