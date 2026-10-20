"""The two inline setup challenges. Values are examples, not personal age claims."""
import argparse


if __name__ == '__main__':
    parser = argparse.ArgumentParser(); parser.add_argument('--name', default='Yassine'); parser.add_argument('--age', type=int, default=20)
    args = parser.parse_args()
    print(args.name)
    my_age = args.age
    print(f'In 24 years: {my_age + 24}')
