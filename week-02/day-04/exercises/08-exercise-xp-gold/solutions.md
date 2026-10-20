# Worked solutions

Open [index.html](index.html) in a browser for the interactive solution. Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Two-page form

index.html sends name and lastname to result.html using GET. URLSearchParams decodes both values and the script displays them inside a section. textContent safely renders names containing punctuation or markup as plain text. A missing query prompts the visitor to use the form.

[Original exercise](individual/01-exercise-1-html-form-3.md)

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
