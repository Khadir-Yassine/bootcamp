# Worked solutions

Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. All truthy

The rest parameter collects every argument and every(Boolean) applies JavaScript truthiness. The examples return **true, false, false**. Empty arrays and objects are truthy; 0, empty string, null, undefined, false and NaN are falsy. No arguments returns true by the usual every convention.

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
