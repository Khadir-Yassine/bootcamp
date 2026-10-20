# Worked solutions

Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Calculator

An arrow function accepts two operands and an operator. A nested ternary selects addition, subtraction, multiplication, or division; any other operator returns **Invalid operator**. `calculator(8, 2, "/")` returns 4. JavaScript division by zero retains its standard Infinity/NaN behavior.

[Original exercise](individual/01-exercise.md)

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
