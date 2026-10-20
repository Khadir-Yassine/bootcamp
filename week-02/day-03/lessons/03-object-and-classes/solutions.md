# Worked solutions

Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Speaking rabbits

The file creates independent Rabbit instances of types **killer** and **black**, displays both types and calls speak on both. The output identifies the rabbit’s type because each method reads its own instance’s `this.type`.

[Original exercise](individual/01-exercise.md)

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
