# Daily Challenge: Voting app — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/state.jsx)

## How to run

From `week-07/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **voting**.

## Approach and implementation

`Voting` initializes four language/vote objects with zero counts. Each button updates only the matching language through an immutable `map`, using the functional state updater so rapid clicks do not lose votes. The source typo “JavaSript” is corrected to “JavaScript” for the label.

## Check the result

- Vote for Python twice: its count becomes 2 while the others remain 0.
- Vote for each other language and check independent totals.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
