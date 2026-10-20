# Exercises XP — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/state.jsx)

## How to run

From `week-07/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **state**.

## Approach and implementation

`Car` receives `{ name: "Ford", model: "Mustang" }`, keeps red in state, and renders a small `Garage`. `Events` implements the click alert, Enter-key input alert, and a functional ON/OFF toggle. `Phone` keeps the required Samsung Galaxy S20 data in state and changes black to blue immutably. `Color` begins red, alerts from its mount effect, and changes to blue on demand.

## Check the result

- Check “This car is red Mustang” and the small-garage message.
- Click the alert button, press Enter in the input, and toggle ON/OFF twice.
- Change the phone color and favorite color without changing the other fields.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
