"""Demonstrate all three requested import styles."""
import operators
from operators import addOperator, divideOperator
import operators as arithmetic


def main():
    print('Whole module:', operators.addOperator(8, 2), operators.divideOperator(8, 2))
    print('Specific functions:', addOperator(8, 2), divideOperator(8, 2))
    print('Module alias:', arithmetic.addOperator(8, 2), arithmetic.divideOperator(8, 2))


if __name__ == '__main__': main()
