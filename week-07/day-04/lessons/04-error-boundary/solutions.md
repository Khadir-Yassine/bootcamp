# Error Boundary — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/errors.jsx)

## How to run

From `week-07/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **errors**.

## Approach and implementation

`MathOperation` divides two numbers. The click/submit handler catches zero-division errors and stores them in state; the following render throws them so ErrorBoundary can catch them. An error thrown only inside an event would bypass an error boundary.

## Check the result

Divide by zero to see the fallback; reset and divide by a nonzero number to see the result.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
