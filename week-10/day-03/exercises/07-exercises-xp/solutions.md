# Worked solutions

Run `python solution.py` from this folder. Source: [solution.py](solution.py). Python 3 and its standard library are sufficient. Interactive/demo options are explained below.

<a id="exercise-1"></a>

## 1. Lists to dictionary

dict(zip(keys,values)) produces **{Ten:10,Twenty:20,Thirty:30}**.

[Original exercise](individual/01-exercise-1-convert-lists-into-dictionaries.md)

<a id="exercise-2"></a>

## 2. Family tickets

Under 3 is free, ages 3–12 inclusive cost $10, and over 12 costs $15. Rick pays 15, Beth 15, Morty 10 and Summer 10: **$50 total**. `--interactive` builds the family from name/age prompts instead.

[Original exercise](individual/02-exercise-2-cinemax-2.md)

<a id="exercise-3"></a>

## 3. Zara

The script constructs the complete nested brand dictionary; sets stores to 2; prints its markets; adds Spain; appends Desigual; removes creation_date; prints the last competitor, US colors, length and keys; then update restores creation_date and overwrites stores with **10000**. These are values from the assignment, not current business statistics.

[Original exercise](individual/03-exercise-3-zara.md)

<a id="exercise-4"></a>

## 4. Geography

describe_city accepts a city and a country defaulting to Iceland, then prints and returns the sentence. Both Reykjavik/Iceland and Casablanca/Morocco calls are demonstrated.

[Original exercise](individual/04-exercise-4-some-geography.md)

<a id="exercise-5"></a>

## 5. Random comparison

Validate the supplied number in 1–100, generate another number in that inclusive range, compare them and print success or failure. A failure displays both numbers. The generator can be injected for deterministic use.

[Original exercise](individual/05-exercise-5-random.md)

<a id="exercise-6"></a>

## 6. Shirts

make_shirt defaults to large and I love Python. The demo creates the large default, a medium default and a small shirt with another message using keyword arguments.

[Original exercise](individual/06-exercise-6-let-s-create-some-personalized-shirts.md)

<a id="exercise-7"></a>

## 7. Seasonal temperature

get_random_temp initially supports the full -10…40 integer range and accepts a season for restricted ranges. winter is -10…16; spring/autumn are 0…23; summer is 24…40. Advice covers freezing, chilly, mild, warm and hot conditions with explicit nonoverlapping boundaries. `--interactive` accepts either a season or a month and demonstrates floating-point generation, completing both bonuses.

[Original exercise](individual/07-exercise-7-temperature-advice.md)

<a id="exercise-8"></a>

## 8. Star Wars quiz

Run `python solution.py --quiz`. The program asks all six supplied questions, compares trimmed answers case-insensitively, tracks correct/incorrect answers and records each wrong question, entered answer and correct answer. It prints a score-dependent message and offers a replay when more than three answers were wrong. This is a local practice program, not an automatic platform submission.

[Original exercise](individual/08-exercise-8-star-wars-quiz.md)

