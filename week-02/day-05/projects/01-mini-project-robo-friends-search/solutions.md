# Worked solutions

Open [index.html](index.html) in a browser for the interactive solution. Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Robot directory

Open index.html. All ten robot objects from the assignment are included exactly, with image/name/username/email cards created through DOM methods. Input events filter names case-insensitively and update the result count. Empty search restores all ten; no matches shows zero results. Robot images require network access to RoboHash.

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
