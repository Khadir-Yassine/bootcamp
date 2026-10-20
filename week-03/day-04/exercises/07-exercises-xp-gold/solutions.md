# Worked solutions

Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Promise.all

The three inputs resolve to **[3,42,"foo"]** after the slowest Promise completes (about three seconds). Plain 42 is accepted as an already fulfilled value. Input order is retained, and any rejection rejects the aggregate. The demo includes an explicit rejection caught with catch.

[Original exercise](individual/01-exercise-1-promise-all.md)

<a id="exercise-2"></a>

## 2. Analyze Promise.all

map creates three promises resolving to doubled values. Promise.all produces **[2,4,6]** in input order. In the combined runnable demonstration this prints before the three-second example.

[Original exercise](individual/02-exercise-2-analyse-promise-all.md)

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
