# Design Your Own Component Structure for a Simple App — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/autobarista.jsx)

## How to run

From `week-09/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **autobarista**.

## Approach and implementation

The component tree is CoffeeOrderScreen → UserWelcome(name), DrinkList(selected,onSelect), RobotStatus(busy), BaseButton(text,action,disabled). The parent owns selected drink and busy state. Clicking Brew makes the robot Busy, disables the button, then restores Ready after a simulated three-second brew.

## Check the result

Open AutoBarista and exercise the corresponding panel. All hardware behavior is labelled and implemented as a local learning simulation.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
