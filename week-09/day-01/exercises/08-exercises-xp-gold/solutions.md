# Exercises XP GOLD — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/tasks.jsx)

## How to run

From `week-09/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **tasks**.

## Approach and implementation

The shared task reducer implements add/remove actions for the required todo list, plus completion, edit, and filtering for subsequent exercises. Blank additions are rejected, every task uses an independent ID, and list updates return new arrays instead of mutating previous state.

## Check the result

- Add two identically named tasks, remove one, and verify the second remains.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
