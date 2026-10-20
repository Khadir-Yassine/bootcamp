# Worked solutions

Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Video class

Video stores title, uploader and duration, and watch logs and returns the exact requested sentence. Two distinct instances are created and watched. The bonus uses five descriptive data objects, maps them into Video instances and watches all five. Negative or nonnumeric durations are rejected.

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
