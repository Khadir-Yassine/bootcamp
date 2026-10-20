# Worked solutions

Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Object alias

The output is **Hello**. Assignment copies the object reference, so `c` and `d` point at the same object. Changing the referenced object through `c` is visible through `d`.

[Original exercise](individual/01-exercise.md)

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
