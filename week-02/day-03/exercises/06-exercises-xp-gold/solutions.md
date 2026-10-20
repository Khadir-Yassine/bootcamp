# Worked solutions

Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Full name

Destructuring happens directly in the function parameter. The result is **Your full name is Elie Schoppik**.

[Original exercise](individual/01-exercise-1-print-full-name.md)

<a id="exercise-2"></a>

## 2. Keys and values

Sort the keys alphabetically, then map those exact keys back to the original values. This preserves alignment, including false and undefined values; two independently sorted arrays would not.

[Original exercise](individual/02-exercise-2-keys-and-values.md)

<a id="exercise-3"></a>

## 3. Counter alias

The output is **3**. counterTwo references counterOne, so its increment mutates the same instance as the two earlier increments.

[Original exercise](individual/03-exercise-3-counter-class.md)

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
