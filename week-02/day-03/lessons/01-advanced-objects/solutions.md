# Worked solutions

Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Keys and values

There are **4 keys and 4 values**. Object.entries pairs each key with its value and forEach prints the requested one-based numbered lines.

[Original exercise](individual/01-exercise.md)

<a id="exercise-2"></a>

## 2. Object spread

The output is **{admin:true,name:"Lydia",age:21}**. Object spread creates a shallow copy of the user’s enumerable properties.

[Original exercise](individual/02-exercise.md)

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
