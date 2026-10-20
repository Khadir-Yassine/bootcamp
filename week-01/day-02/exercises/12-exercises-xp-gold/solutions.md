# Exercises XP Gold — Solutions

[Original instructions](README.md) · [JavaScript source](solutions.js)

## Run

```sh
node solutions.js
```

Run this command from this exercise folder. The source exports its functions for automated tests and prints a demonstration when run directly.


## Exercise 1: Divisible by Three

A number is divisible by three when its remainder after division by three equals zero. The supplied results are `true, true, true, true, false`.

## Exercise 2: Attendance

Normalize the input and check the object's own keys, then read the country with bracket notation. This also treats cancellation and unknown names as guests. Prototype keys such as `toString` are not admitted as student names.

## Exercise 3: Playing with Numbers

The implementation uses only a simple indexed loop for the calculations, with no `reduce`, `sort`, `Math.max` or other aggregation methods. Maintain a running sum and a largest-so-far value. The supplied array has sum `233` and maximum `98`. Initialize the maximum from the first value so negative-only arrays also work.

## Browser interaction

Open [browser.html](browser.html) to run the prompt-based exercises. Cancellation exits cleanly; invalid or blank numeric input is rejected.
