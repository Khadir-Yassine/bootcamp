# Refactor for Clarity and Reusability — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/autobarista.jsx)

## How to run

From `week-09/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **autobarista**.

## Approach and implementation

`CheckSystemHealth(deviceName, connections)` replaces three repetitive checks with a parameterized lookup returning {deviceName, online}. A real integration can inject asynchronous adapters by device name instead of duplicating validation and status mapping. The supplied map makes the exercise deterministic without pretending to contact real hardware.

## Check the result

Open AutoBarista and exercise the corresponding panel. All hardware behavior is labelled and implemented as a local learning simulation.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
