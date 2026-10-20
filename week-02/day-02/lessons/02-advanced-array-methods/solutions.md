# Worked solutions

Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Map values and indices

The result is `[{value:10,index:0},{value:20,index:1},{value:30,index:2},{value:40,index:3}]`. map creates one object per source element; it does not change the original values.

[Original exercise](individual/01-exercise.md)

<a id="exercise-2"></a>

## 2. Dessert calories

reduce adds Chocolate Mousse 30, Croissant 50 and Strawberry Icecream 5, skipping Apple Pie. The result is **85**.

[Original exercise](individual/02-exercise.md)

<a id="exercise-3"></a>

## 3. Spread copies

The outputs are **[12, 20, 18]** and **[A, B, C, D, E]**. The prices array is copied into a new array, while spreading BCD inserts its individual characters.

[Original exercise](individual/03-exercise.md)

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
