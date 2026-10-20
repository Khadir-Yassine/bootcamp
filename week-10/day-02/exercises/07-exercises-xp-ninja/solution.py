"""Expression predictions, longest-sentence game, and paragraph statistics."""
import argparse
import re

# Public-domain opening, Alice's Adventures in Wonderland, Lewis Carroll (1865).
# Source: https://www.gutenberg.org/ebooks/11
PARAGRAPH = ("Alice was beginning to get very tired of sitting by her sister on the bank, "
             "and of having nothing to do: once or twice she had peeped into the book "
             "her sister was reading, but it had no pictures or conversations in it, "
             "'and what is the use of a book,' thought Alice 'without pictures or conversation?'")


def expression_predictions():
    # Chained comparisons combine adjacent tests; bool is an int subclass.
    return [3 <= 3 < 9, 3 == 3 == 3, bool(0), bool(5 == '5'), bool(4 == 4) == bool('4' == '4'), bool(bool(None)), 1 == True, 1 == False, True + 4, False + 10]


def paragraph_stats(text):
    words = re.findall(r"\b[\w]+(?:['’][\w]+)*\b", text.casefold())
    sentences = [part for part in re.split(r'[.!?]+', text) if part.strip(" '\"\n")]
    unique = set(words)
    return {'characters': len(text), 'sentences': len(sentences), 'words': len(words), 'unique_words': len(unique), 'non_whitespace': sum(not char.isspace() for char in text), 'average_words_per_sentence': len(words) / len(sentences) if sentences else 0, 'non_unique_occurrences': len(words) - len(unique)}


def longest_without_a(input_fn=input, output=print):
    longest = ''
    while True:
        sentence = input_fn('Longest sentence without A (or /quit): ')
        if sentence == '/quit':
            return longest
        if 'a' in sentence.casefold():
            output('Contains A; try again.')
        elif len(sentence) > len(longest):
            longest = sentence; output(f'Congratulations! New record: {len(longest)} characters.')
        else:
            output('Valid, but not a new record.')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(); parser.add_argument('--interactive', action='store_true')
    args = parser.parse_args()
    print('Predictions:', expression_predictions())
    for label, value in paragraph_stats(PARAGRAPH).items(): print(f'{label.replace("_", " ").title()}: {value}')
    if args.interactive: longest_without_a()
