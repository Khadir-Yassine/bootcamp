# Worked solutions

Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Merge words

The curried arrow function accumulates one word per call. A call with no argument terminates the chain. `mergeWords("Hello")()` returns **Hello**; `mergeWords("There")("is")("no")("spoon.")()` returns **There is no spoon.** Each branch has its own closure, so extending one chain does not mutate another.

[Original exercise](individual/01-exercise-1-merge-words.md)

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
