# Worked solutions

Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Colors

forEach prints the seven requested numbered color choices. `some` finds Violet, so the final message is **Yeah**.

[Original exercise](individual/01-exercise-1-colors.md)

<a id="exercise-2"></a>

## 2. Ordinal color choices

The suffix helper uses the provided ordinal array and a ternary. The first choices are **1st**, **2nd**, **3rd**, **4th**. It also handles 11th–13th correctly rather than treating them as 11st–13rd.

[Original exercise](individual/02-exercise-2-colors-2.md)

<a id="exercise-3"></a>

## 3. Spread analysis

Outputs: `["bread","carrot","potato","chicken","apple","orange"]`, `["U","S","A"]`, and `[undefined, undefined]`. Array holes become explicit undefined values when spread through the iterator.

[Original exercise](individual/03-exercise-3-analyzing.md)

<a id="exercise-4"></a>

## 4. Employees

map creates the seven Hello messages. filter selects **Bradley, Chloe, Robert** as Full Stack Residents; chained filter/map produces **Bouley, Alnaji, Hajek**.

[Original exercise](individual/04-exercise-4-employees.md)

<a id="exercise-5"></a>

## 5. Star Wars

reduce joins the words with exactly one separator, producing **a long time ago in a galaxy far far away**.

[Original exercise](individual/05-exercise-5-star-wars.md)

<a id="exercise-6"></a>

## 6. Employees 2

filter selects **Ray, Jenner, Marco**. A chained filter/forEach logs the requested congratulations including each student’s course name.

[Original exercise](individual/06-exercise-6-employees-2.md)

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
