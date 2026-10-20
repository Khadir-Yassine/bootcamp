# Worked solutions

Open [index.html](index.html) in a browser for the interactive solution. Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Scope

Independent snippets produce **#1: 3; #2: 0 then 5; #3: hello in an isolated classic browser script; #4: test; #5: 5 inside and 2 outside**. Replacing the reassigned bindings in #1 or #2 with const raises TypeError. The shadowing examples #4 and #5 behave the same with const. `window.a` is an object property, while top-level `let a` is a separate lexical binding: if all snippets are combined, the earlier lexical `a` shadows `window.a`. They also redeclare `let a`, so they must be considered independently. The file records predictions without combining incompatible declarations.

[Original exercise](individual/01-exercise-1-scope.md)

<a id="exercise-2"></a>

## 2. Ternary operator

`winBattle` is an arrow function returning true. `winBattle() ? 10 : 1` sets **experiencePoints to 10**, which is logged.

[Original exercise](individual/02-exercise-2-ternary-operator.md)

<a id="exercise-3"></a>

## 3. Is it a string?

`isString` checks `typeof value === "string"`. It returns true for `hello` and false for arrays, null and other non-string values.

[Original exercise](individual/03-exercise-3-is-it-a-string.md)

<a id="exercise-4"></a>

## 4. Find the sum

`sum = (a, b) => a + b` returns the sum of the two numeric arguments. For example, `sum(2, 3)` returns **5**.

[Original exercise](individual/04-exercise-4-find-the-sum.md)

<a id="exercise-5"></a>

## 5. Kilograms and grams

Function declaration, function expression and one-line arrow versions all multiply by 1000. A function declaration is hoisted with its callable value; an expression is available after its initialization. The file invokes all three forms.

[Original exercise](individual/05-exercise-5-kg-and-grams.md)

<a id="exercise-6"></a>

## 6. Fortune teller

Open `index.html`. An IIFE takes four arguments and writes the requested job/location/partner/children sentence to the DOM using textContent.

[Original exercise](individual/06-exercise-6-fortune-teller.md)

<a id="exercise-7"></a>

## 7. Welcome

The browser page contains a navbar. A name-accepting IIFE appends a div with **Welcome, John** and a self-contained profile picture with descriptive alternative text.

[Original exercise](individual/07-exercise-7-welcome.md)

<a id="exercise-8"></a>

## 8. Juice bar

Part I nests `addIngredients` and calls it once with three ingredients. Part II stores ingredients in an enclosing array, calls `addIngredients` twice, and calls `displayJuice` once. Both resulting sentences appear on the browser page. The six ingredients are apple, orange, ginger, mango, lemon and mint.

[Original exercise](individual/08-exercise-8-juice-bar.md)

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
