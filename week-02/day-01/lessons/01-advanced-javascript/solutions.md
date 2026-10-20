# Worked solutions

Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Redeclaration

`var num` can be redeclared. The second assignment replaces 8 with 10, so the output is **10**. The lesson also contrasts a block-scoped `let` (outer value remains 1) with `var` (the block changes it to 2).

[Original exercise](individual/01-exercise.md)

<a id="exercise-2"></a>

## 2. Block scope

The original `checkAge(21)` throws **ReferenceError**: both `message` declarations belong only to their respective blocks. The runnable file catches that error, then supplies a corrected function that returns a ternary expression directly.

[Original exercise](individual/02-exercise.md)

<a id="exercise-3"></a>

## 3. Loop scope

Replace `var i` with `let i`. The loop logs **0, 1, 2, 3, 4**. Outside it, `typeof i` is the string `"undefined"`; directly reading `i` throws ReferenceError. Being out of scope is different from a declared variable whose value is undefined.

[Original exercise](individual/03-exercise.md)

<a id="exercise-4"></a>

## 4. Year condition

The function uses the exact requested comparison `year > 2000`. It returns “You are in the 21st century” for 2001 onward and the exercise’s “You live in the Middle Age” otherwise. This reproduces the prompt rather than making a historical classification.

[Original exercise](individual/04-exercise-1.md)

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
