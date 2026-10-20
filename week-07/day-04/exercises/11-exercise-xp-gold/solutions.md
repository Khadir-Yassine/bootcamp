# Exercise XP GOLD — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/errors.jsx)

## How to run

From `week-07/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **errors**.

## Approach and implementation

`Modal` and `ErrorBoundary` are class components. Clicking Trigger error sets state so `Crash` throws on the next render; the boundary displays a centered error modal over a translucent overlay. `occurError` is also provided for explicitly marking failure. Close clears the boundary state; Reset demonstration clears the parent trigger. Escape closes the modal, and the close button receives focus.

## Check the result

- Click Trigger error and verify the modal and overlay.
- Close or press Escape, then reset the demonstration to trigger it again.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
