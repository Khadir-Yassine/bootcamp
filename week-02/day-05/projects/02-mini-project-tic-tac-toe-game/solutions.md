# Worked solutions

Open [index.html](index.html) in a browser for the interactive solution. Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Human versus computer

Open index.html. Choose X or O and Easy or Hard. X moves first, so the computer opens when the human selects O. The board array tracks all nine cells and the provided win combinations detect wins/ties. Occupied cells and finished games reject further moves; Play again resets the state.

<a id="exercise-2"></a>

## 2. Easy and hard AI

Easy picks a random legal empty cell. Hard uses minimax across all possible continuations, scoring fast wins and delayed losses. It wins when possible and blocks threats when necessary. Automated tests enumerate every possible human continuation for either symbol and establish that hard mode never loses.

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
