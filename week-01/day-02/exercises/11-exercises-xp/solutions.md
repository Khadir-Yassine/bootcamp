# Exercises XP — Solutions

[Original instructions](README.md) · [JavaScript source](solutions.js)

## Run

```sh
node solutions.js
```

Run this command from this exercise folder. The source exports its functions for automated tests and prints a demonstration when run directly.


## Exercise 1: List of People

`shift()` removes Greg, James is replaced at his index, and `push()` appends the chosen name. `slice(1, -1)` copies Devon and Jason while excluding the first and last entries. Mary has index `0`; Foo has index `-1` because no matching element exists. The last index is `length - 1`. The second loop stops immediately after including Devon.

## Exercise 2: Favorite Colors

The loop converts zero-based indices to one-based rankings. The bonus uses an array of suffixes and handles 11th, 12th and 13th correctly.

## Exercise 3: Repeat the Question

A `do...while` loop asks at least once. Browser prompts return strings, or `null` on cancellation, so conversion must be explicit. Blank input and non-finite numbers cannot satisfy the condition.

## Exercise 4: Building Management

The building has 4 floors, with 3 and 9 apartments on floors 1 and 3. Dan is the second tenant and has 4 rooms. Sarah and David pay 1490 in total, exceeding Dan's original 1000, so his rent becomes 1200.

## Exercise 5: Family

The first `for...in` loop collects keys; the second reads values with bracket notation. The ownership check avoids inherited properties.

## Exercise 6: Rudolf

Append each key and its value while iterating through the object, then join the words with spaces: `my name is Rudolf the reindeer`.

## Exercise 7: Secret Group

Extract the first letter from each name, sort those letters and join them: `ABJKPS`.

## Browser interaction

Open [browser.html](browser.html) to run the prompt-based exercises. Cancellation exits cleanly; invalid or blank numeric input is rejected.
