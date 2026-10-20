# Daily challenge #1 : Data and Server — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/data.jsx)

## How to run

From `week-07/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **data**.

## Approach and implementation

`ServerChallenge` is a class component that loads `/api/hello` on mount. A controlled message form POSTs JSON to `/api/world`; the Express handler logs the received body and returns the exact required prefix plus the input value. The client displays the returned message immediately below the form.

## Check the result

- Run `npm run server` beside Vite.
- Verify Hello From Express, submit a message, and compare the echoed text in the UI and backend console.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
