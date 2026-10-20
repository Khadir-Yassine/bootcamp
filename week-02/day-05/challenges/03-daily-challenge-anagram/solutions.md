# Worked solutions

Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Anagrams

Normalize Unicode composition, lowercase, remove all whitespace, sort code points and compare. All three supplied examples return **true**. Repeated letters remain significant, so ab and aab are not anagrams. Punctuation is retained because the prompt requests whitespace handling, not deleting arbitrary characters.

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
