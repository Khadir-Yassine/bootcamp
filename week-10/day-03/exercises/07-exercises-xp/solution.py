"""Dictionary operations, functions, seasonal advice, and the supplied quiz."""
import argparse
import random


def lists_to_dictionary(): return dict(zip(['Ten', 'Twenty', 'Thirty'], [10, 20, 30]))


def ticket_price(age):
    if age < 0: raise ValueError('Age cannot be negative')
    return 0 if age < 3 else 10 if age <= 12 else 15


def family_tickets(family): return {name: ticket_price(age) for name, age in family.items()}


def input_family(input_fn=input):
    family = {}
    while True:
        name = input_fn('Family member (blank to finish): ').strip()
        if not name: return family
        try:
            age = int(input_fn('Age: ')); ticket_price(age); family[name] = age
        except ValueError: print('Please enter a non-negative integer age.')


def zara_demo():
    brand = {'name': 'Zara', 'creation_date': 1975, 'creator_name': 'Amancio Ortega Gaona', 'type_of_clothes': ['men', 'women', 'children', 'home'], 'international_competitors': ['Gap', 'H&M', 'Benetton'], 'number_stores': 7000, 'major_color': {'France': 'blue', 'Spain': 'red', 'US': ['pink', 'green']}}
    brand['number_stores'] = 2
    print('Zara serves these markets:', ', '.join(brand['type_of_clothes']))
    brand['country_creation'] = 'Spain'
    if 'international_competitors' in brand: brand['international_competitors'].append('Desigual')
    del brand['creation_date']
    print('Last competitor:', brand['international_competitors'][-1]); print('US colors:', brand['major_color']['US'])
    print('Key/value pairs:', len(brand)); print('Keys:', list(brand))
    more_on_zara = {'creation_date': 1975, 'number_stores': 10000}
    brand.update(more_on_zara)
    print('Stores after update:', brand['number_stores'])
    return brand


def describe_city(city, country='Iceland'):
    sentence = f'{city} is in {country}'; print(sentence); return sentence


def compare_random(number, randint=random.randint):
    if not 1 <= number <= 100: raise ValueError('Number must be 1 through 100')
    drawn = randint(1, 100)
    message = 'Success!' if number == drawn else f'Fail: your number {number}; random number {drawn}'
    print(message); return number == drawn


def make_shirt(size='large', text='I love Python'):
    message = f'The size of the shirt is {size} and the text is {text}'; print(message); return message


SEASON_RANGES = {'winter': (-10, 16), 'spring': (0, 23), 'summer': (24, 40), 'autumn': (0, 23), 'fall': (0, 23)}


def season_for_month(month):
    if month not in range(1, 13): raise ValueError('Month must be 1 through 12')
    return 'spring' if 3 <= month <= 5 else 'summer' if 6 <= month <= 8 else 'autumn' if 9 <= month <= 11 else 'winter'


def get_random_temp(season=None, floating=False, rng=random):
    if season is not None and season.casefold() not in SEASON_RANGES: raise ValueError('Unknown season')
    low, high = SEASON_RANGES[season.casefold()] if season is not None else (-10, 40)
    return rng.uniform(low, high) if floating else rng.randint(low, high)


def temperature_advice(temp):
    if temp < 0: return 'Brrr, that is freezing! Wear extra layers.'
    if temp < 16: return 'Quite chilly! Do not forget your coat.'
    if temp < 24: return 'A pleasant day; take a light layer.'
    if temp <= 32: return 'Warm weather; drink water and use shade.'
    return 'Very hot; stay cool and drink water.'


def main(season=None, floating=False):
    temperature = get_random_temp(season, floating)
    print(f'The temperature right now is {temperature:.2f} degrees Celsius.' if floating else f'The temperature right now is {temperature} degrees Celsius.')
    print(temperature_advice(temperature)); return temperature


QUIZ_DATA = [
    {'question': "What is Baby Yoda's real name?", 'answer': 'Grogu'},
    {'question': 'Where did Obi-Wan take Luke after his birth?', 'answer': 'Tatooine'},
    {'question': 'What year did the first Star Wars movie come out?', 'answer': '1977'},
    {'question': 'Who built C-3PO?', 'answer': 'Anakin Skywalker'},
    {'question': 'Anakin Skywalker grew up to be who?', 'answer': 'Darth Vader'},
    {'question': 'What species is Chewbacca?', 'answer': 'Wookiee'}
]


def ask_quiz(input_fn=input):
    wrong_answers = []
    for item in QUIZ_DATA:
        answer = input_fn(item['question'] + ' ').strip()
        if answer.casefold() != item['answer'].casefold(): wrong_answers.append({**item, 'given': answer})
    return len(QUIZ_DATA) - len(wrong_answers), len(wrong_answers), wrong_answers


def quiz_results(correct, incorrect, wrong_answers, output=print):
    output(f'Correct: {correct}; incorrect: {incorrect}')
    output('Perfect score!' if incorrect == 0 else 'Good work; review the missed answers.' if incorrect <= 3 else 'Keep practicing!')
    for item in wrong_answers: output(f"{item['question']} Your answer: {item['given']}; correct: {item['answer']}")


def play_quiz(input_fn=input):
    while True:
        result = ask_quiz(input_fn); quiz_results(*result)
        if result[1] <= 3 or input_fn('More than three wrong. Play again? (y/n): ').casefold() != 'y': return result


if __name__ == '__main__':
    parser = argparse.ArgumentParser(); parser.add_argument('--interactive', action='store_true'); parser.add_argument('--quiz', action='store_true')
    args = parser.parse_args()
    if args.quiz: play_quiz()
    else:
        print(lists_to_dictionary())
        family = input_family() if args.interactive else {'rick': 43, 'beth': 13, 'morty': 5, 'summer': 8}
        costs = family_tickets(family); print(costs); print('Total cost:', sum(costs.values()))
        zara_demo(); describe_city('Reykjavik'); describe_city('Casablanca', 'Morocco'); compare_random(50)
        make_shirt(); make_shirt('medium'); make_shirt(size='small', text='Build something useful')
        if args.interactive:
            choice = input('Season or month number (1–12): ').strip()
            main(season_for_month(int(choice)) if choice.isdigit() else choice, floating=True)
        else: main('winter')
