# Worked solutions

Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Bird class

The output is **I'm pink. 🌸** followed by **I'm a bird. 🦢**. The child logs before calling super; this is valid because the log does not read this. super then executes the parent constructor.

[Original exercise](individual/01-exercise-1-bird-class.md)

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
