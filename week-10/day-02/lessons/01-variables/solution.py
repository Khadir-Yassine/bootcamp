"""Three variable/input exercises; add --interactive to enter an age."""
import argparse


def greeting(name='Alice', age=30, city='New York'):
    return f'Hello, {name}! You are {age} years old and live in {city}.'


def years_until_100(age): return 100 - int(age)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(); parser.add_argument('--interactive', action='store_true')
    interactive = parser.parse_args().interactive
    name, age, city = 'Alice', 30, 'New York'
    print(greeting(name, age, city))
    print('Hello, {}! You are {} years old and live in {}.'.format(name, age, city))
    age = input('How old are you? ') if interactive else '30'
    print(f'You will turn 100 in {years_until_100(age)} years')
    # input returns a string. An f-string can interpolate that string unchanged.
    print(f'You are {age} years old')
