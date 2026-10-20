# Build a Small UI Using Only Reusable Components — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/autobarista.jsx)

## How to run

From `week-09/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **autobarista**.

## Approach and implementation

`HardwareStatusGrid` composes only Card and StatusRow: Hardware Health contains Dobot Arm (Online, green), Tuya Fingerbot (Asleep, yellow), and Coffee Machine (Offline, red). Status text accompanies colors so meaning is not conveyed by color alone.

## Check the result

Open AutoBarista and exercise the corresponding panel. All hardware behavior is labelled and implemented as a local learning simulation.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
