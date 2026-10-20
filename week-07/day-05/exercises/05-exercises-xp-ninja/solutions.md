# Exercises XP Ninja — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/data.jsx)

## How to run

From `week-07/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **data**.

## Approach and implementation

`server.js` exposes `/users` with the two required usernames and a separate `/api/customers/` route with the six supplied customers. Vite proxies those paths to port 3001. The class components fetch their own endpoint in `componentDidMount`, store results/loading/error state, and map keyed list items. Abort controllers prevent updates after unmounting.

## Check the result

- Start `npm run server` in a second terminal.
- Open the data tab and check both usernames and six customer names.
- Stop the backend and reload to verify an error appears instead of silently showing fake data.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
