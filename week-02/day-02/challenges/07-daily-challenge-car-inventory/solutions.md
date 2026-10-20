# Worked solutions

Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Car inventory

`find` returns the first Honda and formats **This is a Honda Accord from 1983**. Sorting a shallow copy by numeric year gives IDs **3,5,2,1,4** and leaves the source inventory unchanged. The empty lookup returns an explicit no-Honda message.

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
