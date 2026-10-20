# Build an Interactive Feature (e.g., Task List or Counter App) — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/autobarista.jsx)

## How to run

From `week-09/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **autobarista**.

## Approach and implementation

`OrderQueue` starts with []. After two Add Random Order clicks it holds [orderA, orderB], each with a UUID and drink. Serving orderA creates a filtered new array [orderB]. Independent IDs distinguish even two orders of the same drink.

## Check the result

Open AutoBarista and exercise the corresponding panel. All hardware behavior is labelled and implemented as a local learning simulation.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
