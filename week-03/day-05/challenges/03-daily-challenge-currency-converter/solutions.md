# Worked solutions

Open [index.html](index.html) in a browser for the interactive solution. Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Currency converter

Open index.html, paste your own ExchangeRate-API key, and click Load supported currencies. The app fetches the **codes** endpoint before enabling the From/To selects. Convert then requests the **pair/from/to/amount** endpoint and displays the returned amount/rate. Switch exchanges the selected currencies and immediately converts the same input amount again. Invalid amounts, HTTP errors, provider errors and quota failures are displayed. The key stays in page memory and is never written into this repository. A real key and internet access are required for live conversions; no account was created and no live rate is fabricated. Tests use mocked supported-code and pair responses. Sources: [supported codes](https://www.exchangerate-api.com/docs/supported-codes-endpoint) and [pair conversion](https://www.exchangerate-api.com/docs/pair-conversion-requests).

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
