"""Manufacturer processing, optional names and reversible Morse translation."""
MORSE = dict(zip('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', '.- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --.. ----- .---- ..--- ...-- ....- ..... -.... --... ---.. ----.'.split()))


def manufacturer_report():
    companies = [name.strip() for name in 'Volkswagen, Toyota, Ford Motor, Honda, Chevrolet'.split(',')]
    duplicates = ['Honda', 'Volkswagen', 'Toyota', 'Ford Motor', 'Honda', 'Chevrolet', 'Toyota']
    unique = sorted(set(duplicates))
    return {'count': len(companies), 'descending': sorted(companies, reverse=True), 'with_o': sum('o' in name.casefold() for name in companies), 'without_i': sum('i' not in name.casefold() for name in companies), 'unique_names': ', '.join(unique), 'unique_count': len(unique), 'ascending_reversed_letters': [name[::-1] for name in sorted(companies)]}


def get_full_name(first_name, middle_name='', last_name=''):
    return ' '.join(part.strip().title() for part in (first_name, middle_name, last_name) if part.strip())


def english_to_morse(text):
    try: return ' / '.join(' '.join(MORSE[char] for char in word) for word in text.upper().split())
    except KeyError as error: raise ValueError(f'Unsupported character: {error.args[0]}') from error


def morse_to_english(text):
    reverse = {code: letter for letter, code in MORSE.items()}
    try: return ' '.join(''.join(reverse[token] for token in word.split()) for word in text.strip().split('/'))
    except KeyError as error: raise ValueError(f'Unknown Morse token: {error.args[0]}') from error


if __name__ == '__main__':
    for key, value in manufacturer_report().items(): print(f'{key}: {value}')
    print(get_full_name(first_name='john', middle_name='hooker', last_name='lee'))
    print(get_full_name(first_name='bruce', last_name='lee'))
    encoded = english_to_morse('Hello World 123'); print(encoded); print(morse_to_english(encoded))
