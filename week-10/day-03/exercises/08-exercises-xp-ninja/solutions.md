# Worked solutions

Run `python solution.py` from this folder. Source: [solution.py](solution.py). Python 3 and its standard library are sufficient. Interactive/demo options are explained below.

<a id="exercise-1"></a>

## 1. Cars

Split the supplied comma-separated string and strip whitespace. The report gives count **5**, descending names, **5** containing o and **5** not containing i. The duplicate list is deduplicated programmatically into five comma-separated names. A separate ascending-name pass reverses each name’s letters without changing the requested alphabetical order.

[Original exercise](individual/01-exercise-1-cars.md)

<a id="exercise-2"></a>

## 2. Full name

Join the nonempty first/middle/last parts and title-case them. The keyword examples produce **John Hooker Lee** and **Bruce Lee**. middle_name defaults to an empty string.

[Original exercise](individual/02-exercise-2-what-s-your-name.md)

<a id="exercise-3"></a>

## 3. English and Morse

The explicit A–Z and 0–9 table supports bidirectional translation. Spaces separate letter codes and `/` separates words. Hello World 123 round-trips to uppercase **HELLO WORLD 123**. Unsupported characters or unknown Morse tokens raise explanatory ValueError rather than being silently discarded.

[Original exercise](individual/03-exercise-3-from-english-to-morse.md)

