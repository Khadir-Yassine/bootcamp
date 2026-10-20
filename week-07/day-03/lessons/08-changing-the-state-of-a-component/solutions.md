# Changing the state of a component — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/state.jsx)

## How to run

From `week-07/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **state**.

## Approach and implementation

`Actor` reads its form on submit using FormData and replaces the actor state, updating the name and image.

## Check the result

Edit firstName, lastName, and image URL, then submit and compare the rendered actor.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
