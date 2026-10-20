# Worked solutions

Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Nested functions

The result is `____/''''\____`: four underscores, an opening slash, four apostrophes, a closing backslash, four underscores. Both helpers are rewritten as nested arrow functions that mutate their enclosing result.

[Original exercise](individual/01-exercise-1-nested-functions.md)

<a id="exercise-2"></a>

## 2. Closure

`addToTen(3)` returns **13**. The returned function retains the outer value x = 10.

[Original exercise](individual/02-exercise-2-closure.md)

<a id="exercise-3"></a>

## 3. Currying

`curriedSum(30)(1)` returns **31**. Each call supplies one argument.

[Original exercise](individual/03-exercise-3-currying.md)

<a id="exercise-4"></a>

## 4. Partial application

`add5(12)` returns **17** because `add5` retains a = 5.

[Original exercise](individual/04-exercise-4-currying.md)

<a id="exercise-5"></a>

## 5. Composing

`compose(add1, add5)(10)` returns **16**. First `add5(10)` gives 15; `add1(15)` gives 16.

[Original exercise](individual/05-exercise-5-composing.md)

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
