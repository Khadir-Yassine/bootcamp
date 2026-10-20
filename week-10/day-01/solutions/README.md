# React Mini Projects — Week 10, Day 1

Runnable calculator, quote generator, and Snap Shot gallery. [Assignment index](../SOLUTIONS.md).

## Run

Use Node.js 20.19 or newer and npm. From this folder:

```sh
npm ci
npm run dev
```

The application has calculator, quotes, and gallery tabs. `src/Calculator.jsx`, `src/Quotes.jsx`, and `src/Gallery.jsx` keep the projects separate while sharing the development setup. `src/logic.js` contains the pure calculation and quote-selection functions.

The quote generator uses the original public assignment dataset, saved in `src/quotes-original.js` from [QuotesDatabase.js](https://github.com/devtlv/RandomQuotesProject-JSBOOTCAMP-Week8Day5/blob/main/QuotesDatabase.js). Consecutive quotes and colors do not repeat.

The gallery needs your own Pexels API key, entered in the UI and stored only for the browser session. It includes four category routes, a search route, 30 images per page, attribution, pagination, abort cleanup, hover transitions, and clear errors. No key is committed and no offline photographs are described as API search results. React Router deployments require unknown paths to fall back to `index.html`.

## Verify

```sh
npm test
npm run build
```

Automated tests verify all four calculator operations, invalid input/zero-division handling, and non-repeating quote selection at random-value boundaries. The production build validates the React modules and original quote dataset. Live gallery results need a valid API key and available network access.

Recorded verification: all three logic tests passed. The cross-workspace React interaction suite in Week 7 confirmed the calculator's initial render and quote text/color changes. Further verification stopped at the user's request to conserve credits. Pexels remains unverified without a user-owned API key.

Manual checks: calculate decimal and negative numbers; change quotes several times and inspect the coordinated colors; configure Pexels and search a category, navigate between categories, and request the next page.

The archived React quiz does not expose its questions. No quiz answers are invented and nothing is submitted to the learning platform.
