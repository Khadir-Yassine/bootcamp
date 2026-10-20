# Worked solutions

Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Nested counter

`plus()` closes over the enclosing `counter`, increments it once and logs **1**. Calling the outer `add()` again would create a fresh counter.

[Original exercise](individual/01-exercise.md)

<a id="exercise-2"></a>

## 2. Persistent closure

The IIFE executes only once and returns `calculus`. Successive calls share that same counter and return **1, 2, 3**. The file logs the returned values; the original calls by themselves do not log anything.

[Original exercise](individual/02-exercise.md)

<a id="exercise-3"></a>

## 3. Composition

`g(20)` produces 21, then `f(21)` produces **42**. `h(20)` returns that result; the runnable example logs it.

[Original exercise](individual/03-exercise.md)

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
