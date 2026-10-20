# Worked solutions

Run `python solution.py` from this folder. Source: [solution.py](solution.py). Python 3 and its standard library are sufficient. Interactive/demo options are explained below.

<a id="exercise-1"></a>

## 1. Season

Months 3–5 map to Spring, 6–8 to Summer, 9–11 to Autumn and 12/1/2 to Winter. Values outside 1–12 raise ValueError.

[Original exercise](individual/01-exercise-1-what-is-the-season.md)

<a id="exercise-2"></a>

## 2. For loops

The first loop prints 1–20 inclusive. The second enumerates that sequence from index 0 and prints values at even indices: **1,3,5,7,9,11,13,15,17,19**. An even position index is not the same as an even numeric value.

[Original exercise](individual/02-exercise-2-for-loop.md)

<a id="exercise-3"></a>

## 3. While name loop

Interactive mode keeps asking until the name exactly matches the configured own_name. The loop returns only when the required name is entered.

[Original exercise](individual/03-exercise-3-while-loop.md)

<a id="exercise-4"></a>

## 4. First index

Membership is checked before index to handle missing names. Cortana returns **1**, the first occurrence; an unknown name returns None.

[Original exercise](individual/04-exercise-4-check-the-index.md)

<a id="exercise-5"></a>

## 5. Greatest number

The three input values are converted to numbers and max selects the greatest. The supplied example prints **87**.

[Original exercise](individual/05-exercise-5-greatest-number.md)

<a id="exercise-6"></a>

## 6. Random guessing

Interactive mode validates guesses in 1–9 and draws a fresh random number each valid round. Winner and failure messages update won/lost counters. Invalid guesses do not count as games. Enter q to quit and display both totals.

[Original exercise](individual/06-exercise-6-random-number.md)

