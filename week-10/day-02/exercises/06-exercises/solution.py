"""Eight introductory exercises. Run with --interactive for name/height prompts."""
import argparse


def compare_name(name, own_name='Yassine'):
    return 'Name twins! Who copied whom?' if name.casefold() == own_name.casefold() else 'Different names, same excellent taste in Python!'


def can_ride(height):
    return height > 145


def favorite_numbers():
    my_fav_numbers = {3, 7, 11}
    my_fav_numbers.add(13)
    my_fav_numbers.add(17)
    # Sets have no last position: explicitly remove the last number added.
    my_fav_numbers.remove(17)
    friend_fav_numbers = {2, 7, 19}
    return my_fav_numbers, friend_fav_numbers, my_fav_numbers | friend_fav_numbers


def basket_operations():
    basket = ['Banana', 'Apples', 'Oranges', 'Blueberries']
    basket.remove('Banana'); basket.remove('Blueberries')
    basket.append('Kiwi'); basket.insert(0, 'Apples')
    apples = basket.count('Apples')
    basket.clear()
    return apples, basket


def prepare_sandwiches():
    sandwich_orders = ['Tuna sandwich', 'Pastrami sandwich', 'Avocado sandwich', 'Pastrami sandwich', 'Egg sandwich', 'Chicken sandwich', 'Pastrami sandwich']
    while 'Pastrami sandwich' in sandwich_orders:
        sandwich_orders.remove('Pastrami sandwich')
    finished_sandwiches = []
    while sandwich_orders:
        finished_sandwiches.append(sandwich_orders.pop(0))
    return finished_sandwiches


def main(interactive=False):
    print('Hello world\n' * 4, end='')
    print('Math:', 99 ** 3 * 8)
    name = input('Your name: ') if interactive else 'Alex'
    height = float(input('Height in centimeters: ')) if interactive else 146
    print(compare_name(name))
    print('You are tall enough to ride.' if can_ride(height) else 'Grow some more before riding.')
    print('Favorite sets:', favorite_numbers())
    numbers = (1, 2, 3)
    print('Tuples are immutable; concatenation creates a new tuple:', numbers + (4, 5))
    apples, basket = basket_operations(); print('Apples before clearing:', apples); print(basket)
    for sandwich in prepare_sandwiches():
        print(f'I made your {sandwich.lower()}')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(); parser.add_argument('--interactive', action='store_true')
    main(parser.parse_args().interactive)
