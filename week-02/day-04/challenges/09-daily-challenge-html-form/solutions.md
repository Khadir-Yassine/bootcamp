# Worked solutions

Open [index.html](index.html) in a browser for the interactive solution. Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Form to JSON

The submit handler prevents navigation, retrieves the two fields using FormData, calls JSON.stringify and appends the resulting string to the DOM. Quotes and special characters are escaped correctly rather than assembled by string concatenation.

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
