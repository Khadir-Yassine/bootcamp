"""Map every letter to every zero-based position, preserving repeat positions."""
import argparse


def letter_indexes(word):
    indexes = {}
    for index, letter in enumerate(word): indexes.setdefault(letter, []).append(index)
    return indexes


if __name__ == '__main__':
    parser = argparse.ArgumentParser(); parser.add_argument('--word')
    args = parser.parse_args(); print(letter_indexes(args.word if args.word is not None else input('Word: ')))
