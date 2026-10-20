# Daily Challenge: Enhanced Task Manager — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/tasks.jsx)

## How to run

From `week-09/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **tasks**.

## Approach and implementation

The enhanced task manager extends the context/reducer solution. Clicking task text opens an input backed by an edit ref; submit dispatches EDIT_TASK. FILTER_TASKS changes the reducer's filter, and a selector derives the visible list without deleting hidden tasks. Save, cancel, complete, and remove all act by task ID.

## Check the result

- Add two tasks, complete one, and switch between all/active/completed.
- Click a task, edit it, save, and check that switching filters retains the update.
- Cancel an edit and verify the original text remains.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
