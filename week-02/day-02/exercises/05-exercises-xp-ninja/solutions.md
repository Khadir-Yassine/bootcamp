# Worked solutions

Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Dog ages

Both a for loop and reduce include only dogs. `(3 + 6 + 3 + 10) * 7` is **154 human years**.

[Original exercise](individual/01-exercise-1-dog-age-to-human-years.md)

<a id="exercise-2"></a>

## 2. Email

The one-line replacement removes all whitespace and returns **cannotfillemailformcorrectly@gmail.com** without changing the source string.

[Original exercise](individual/02-exercise-2-email.md)

<a id="exercise-3"></a>

## 3. Employees 3

A new object maps each full name to its role, for all seven provided users. For example, `employees["Bradley Bouley"]` is **Full Stack Resident**.

[Original exercise](individual/03-exercise-3-employees-3.md)

<a id="exercise-4"></a>

## 4. Array to object

Both a for loop and reduce produce **{x:1,y:1,z:2}**. The reducer uses a dictionary without an inherited prototype so unusual keys are counted safely.

[Original exercise](individual/04-exercise-4-array-to-object.md)

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
