# Worked solutions

Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Map analysis

Every item is numeric, so map returns **[2, 4, 6]**. For a nonnumeric item the callback would return undefined while preserving the array length.

[Original exercise](individual/01-exercise-1-analyzing-the-map-method.md)

<a id="exercise-2"></a>

## 2. Reduce analysis

The initial accumulator is [1,2]. Concatenating [0,1] and then [2,3] gives **[1,2,0,1,2,3]**.

[Original exercise](individual/02-exercise-2-analyzing-the-reduce-method.md)

<a id="exercise-3"></a>

## 3. Index analysis

i is the zero-based source index: **0,1,2,3,4,5**. The callback logs `(1,0), (2,1), (4,2), (5,3), (8,4), (9,5)` and returns **[2,4,8,10,16,18]**. The Node demonstration uses console output for the original browser alert side effect.

[Original exercise](individual/03-exercise-3-analyze-this-code.md)

<a id="exercise-4"></a>

## 4. Nested arrays

`flat(2)` returns **[1,2,3,[4],[5]]**. Joining each greeting subarray yields three phrases; joining those gives **Hello young grasshopper! you are learning fast!**. `trapped.flat(Infinity)` releases **[3]** at any nesting depth.

[Original exercise](individual/04-exercise-4-nested-arrays.md)

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
