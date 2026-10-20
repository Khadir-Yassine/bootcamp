# Worked solutions

Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Groceries

`displayGroceries` logs pear, apple and banana using forEach. On the first call to `cloneGroceries`, user stays **John** while client becomes **Betty**, because strings are primitive values. shopping and groceries are the **same object**, so both show totalPrice **35$** and nested paid **false**. The function is invoked in the runnable file.

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
