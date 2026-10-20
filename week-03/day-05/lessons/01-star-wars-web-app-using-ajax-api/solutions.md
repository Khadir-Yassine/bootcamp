# Worked solutions

Open [index.html](index.html) in a browser for the interactive solution. Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Star Wars AJAX app

Open index.html. Find someone first requests existing character IDs from SWAPI, picks one randomly, then fetches its details and separately resolves the homeworld URL. The page displays name, height, gender, birth year and homeworld. Loading and failure messages are visible and the button is disabled while requests are pending. Discovering real IDs avoids failures caused by assuming old counts or missing IDs. Internet access is required. Endpoint behavior is tested with deterministic mock responses; this does not claim a live availability guarantee. See [SWAPI documentation](https://www.swapi.tech/documentation).

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
