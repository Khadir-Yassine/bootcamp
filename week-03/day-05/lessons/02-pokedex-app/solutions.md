# Worked solutions

Open [index.html](index.html) in a browser for the interactive solution. Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Pokédex app

Open index.html. Random fetches a Pokémon; Previous and Next fetch adjacent records, with boundary buttons disabled. The page displays artwork, name, ID, height in meters, weight in kilograms and every type. Each async operation has a loading state and catch message. Cached records avoid repeat network requests. This implementation intentionally browses the contiguous original **151** Pokémon; later form IDs are not assumed contiguous. Internet access is required. Tests mock API responses and verify caching, failure handling and unit conversions. See [PokéAPI documentation](https://pokeapi.co/docs/v2).

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
