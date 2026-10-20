"""Inline map/filter challenge."""


def short_name_greetings(people):
    return list(map(lambda name: f'Hello {name}', filter(lambda name: len(name) <= 4, people)))


if __name__ == '__main__': print(short_name_greetings(['Rick', 'Morty', 'Beth', 'Jerry', 'Snowball']))
