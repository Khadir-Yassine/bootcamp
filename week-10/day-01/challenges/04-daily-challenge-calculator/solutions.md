# Daily Challenge: Calculator — Solution

[Original assignment](README.md) · [Runnable workspace](../../solutions/README.md) · [Implementation](../../solutions/src/Calculator.jsx)

## How to run

From `week-10/day-01/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **calculator**.

## Approach and implementation

The controlled number inputs are explicitly converted with Number so addition cannot concatenate strings. The selected operation delegates to a pure calculate function. Missing, invalid, or infinite values and division by zero produce visible errors; valid results use an output element. All four bonus operations are supported.

## Check the result

- Add 2 and 3 to get 5; multiply 1.5 and −2 to get −3.
- Divide by zero and check the error. Then correct the divisor and verify recovery.

## Validation and dependencies

See the [workspace guide](../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
