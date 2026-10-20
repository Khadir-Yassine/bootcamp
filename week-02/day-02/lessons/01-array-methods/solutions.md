# Worked solutions

Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Even numbers

The required forEach checks remainder modulo 2 and logs **10, 12, 20**.

[Original exercise](individual/01-exercise.md)

<a id="exercise-2"></a>

## 2. At least one

`some(word => word.startsWith("h"))` returns **true** because hey matches.

[Original exercise](individual/02-exercise.md)

<a id="exercise-3"></a>

## 3. Every element

`every(word => word.startsWith("h"))` returns **true** because hello, hey and hola all match.

[Original exercise](individual/03-exercise.md)

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
