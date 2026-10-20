# Worked solutions

Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Go Wildcats

Two forEach passes produce **[john!, becky!, susy!, tyson!]** and **[becky, susy]**. The comparison is strictly greater than 5, excluding john. A reduce computes total score **71**.

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
