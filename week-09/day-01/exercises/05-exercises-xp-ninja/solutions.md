# Exercises XP Ninja — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/tasks.jsx)

## How to run

From `week-09/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **tasks**.

## Approach and implementation

`TaskProvider` shares reducer state and dispatch through context. `AddTask` dispatches trimmed text with a unique UUID. Tasks have id, text, and completed fields; completion toggles immutably and removal filters by ID. `TaskList` and each row consume the provider. The enhanced editor/filter controls are included in this shared final implementation.

## Check the result

- Add two tasks, complete one, remove the other, and confirm IDs keep actions attached to the correct row.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
