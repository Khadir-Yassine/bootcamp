# Mini-Project: Random Quote Generator — Solution

[Original assignment](README.md) · [Runnable workspace](../../solutions/README.md) · [Implementation](../../solutions/src/Quotes.jsx)

## How to run

From `week-10/day-01/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **quotes**.

## Approach and implementation

The original assignment's QuotesDatabase is stored locally. The initial quote is random. nextQuoteIndex chooses a nonzero offset modulo the quote count, guaranteeing the immediate previous quote cannot repeat. Each click changes the background and coordinated quote/button colors; the colors also avoid immediate repeats.

## Check the result

- Click New quote repeatedly and verify the author, quote, background, and button update.
- Run npm test to verify the selection cannot immediately repeat at boundary random values.

## Validation and dependencies

See the [workspace guide](../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
