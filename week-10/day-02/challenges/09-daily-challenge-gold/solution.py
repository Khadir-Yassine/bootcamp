"""Birthday cake, age calculation and leap-year bonus."""
import argparse
import calendar
from datetime import date, datetime


def age_on(birthdate, today=None):
    today = today or date.today()
    if birthdate > today: raise ValueError('Birthdate cannot be in the future')
    return today.year - birthdate.year - ((today.month, today.day) < (birthdate.month, birthdate.day))


def birthday_cake(birthdate, today=None):
    candles = 'i' * (age_on(birthdate, today) % 10)
    top = ('___' + candles + '___').center(19)
    cake = '\n'.join([top, '    |:H:a:p:p:y:|', '  __|___________|__', ' |^^^^^^^^^^^^^^^^^|', ' |:B:i:r:t:h:d:a:y:|', ' |                 |', ' ~~~~~~~~~~~~~~~~~~~'])
    return cake + ('\n\n' + cake if calendar.isleap(birthdate.year) else '')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(); parser.add_argument('--birthdate', help='DD/MM/YYYY; prompts when omitted')
    args = parser.parse_args()
    try:
        birthday = datetime.strptime(args.birthdate or input('Birthdate (DD/MM/YYYY): '), '%d/%m/%Y').date()
        print(f'You are {age_on(birthday)} years old.'); print(birthday_cake(birthday))
    except ValueError as error: parser.error(str(error))
