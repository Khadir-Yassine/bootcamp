# Create Interactive Elements (e.g., Counter, Toggle) — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/autobarista.jsx)

## How to run

From `week-09/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **autobarista**.

## Approach and implementation

AutoBarista stores maintenance as a boolean. Toggle maintenance flips it through the reducer, updates the warning panel, and disables new orders while ON. An already running cycle may complete; only new starts are blocked. The toggle stays accessible so maintenance can be turned OFF.

## Check the result

Open AutoBarista and exercise the corresponding panel. All hardware behavior is labelled and implemented as a local learning simulation.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
