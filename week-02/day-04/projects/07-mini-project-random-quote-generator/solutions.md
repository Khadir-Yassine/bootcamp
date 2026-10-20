# Worked solutions

Open [index.html](index.html) in a browser for the interactive solution. Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Quote generator

Open index.html. The collection stores sequential zero-based IDs, author, quote and likes. Generate chooses a random quote excluding the current ID when an alternative exists. With a one-item pool the only quote remains available.

<a id="exercise-2"></a>

## 2. Adding quotes and statistics

The form validates quote/author and assigns the next ID. Buttons count characters with spaces, characters excluding whitespace, and whitespace-delimited words. Like updates the current quote’s counter. Character counts use Unicode code points.

<a id="exercise-3"></a>

## 3. Author filter and navigation

A case-insensitive author filter creates a pool and displays one matching quote. Previous and Next cycle through that pool, and Generate also respects it. Empty matches show an explicit message and disable quote actions. Adding a new quote clears the filter and displays the new entry. Data is in memory and resets when reloading.

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
