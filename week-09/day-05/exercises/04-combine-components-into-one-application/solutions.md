# Combine Components into One Application — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/autobarista.jsx)

## How to run

From `week-09/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **autobarista**.

## Approach and implementation

The final tree is AutoBarista → Header, DashboardLayout → Sidebar and main sections → operations Card, HardwareStatusGrid, RobotArmStatus, OrderQueue, CoffeeOrderScreen, SessionBrewCounter. The reducer lives in the composition root for machine-wide state; each independent queue or selection keeps its own state.

## Check the result

Open AutoBarista and exercise the corresponding panel. All hardware behavior is labelled and implemented as a local learning simulation.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
