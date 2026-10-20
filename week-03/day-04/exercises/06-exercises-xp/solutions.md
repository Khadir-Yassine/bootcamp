# Worked solutions

Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Comparison

compareToTen returns a Promise. Values at or below 10 resolve; values above 10 reject with an Error. The runnable demo handles both 15 and 8 without an unhandled rejection.

[Original exercise](individual/01-exercise-1-comparison.md)

<a id="exercise-2"></a>

## 2. Delayed success

A setTimeout resolves the Promise with **success** after **4000 ms** by default. The delay argument exists for fast deterministic tests.

[Original exercise](individual/02-exercise-2-promises.md)

<a id="exercise-3"></a>

## 3. Resolve and reject

The demo awaits Promise.resolve(3) and catches Promise.reject("Boo!"). Outputs are **3** and **Boo!**.

[Original exercise](individual/03-exercise-3-resolve-reject.md)

<a id="exercise-4"></a>

## 4. External optional quiz

The assignment only links to an external tutorial quiz; it does not contain its questions. No quiz answers or submissions are invented. This optional external activity is excluded from implementation coverage.

[Original exercise](individual/04-exercise-4-quizz-not-mandatory.md)

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
