# Exercises XP GOLD — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/forms.jsx)

## How to run

From `week-07/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **forms**.

## Approach and implementation

`Forms` implements all staged requirements in a single final component: controlled `username` and `age`, a conditional greeting, submit alert, numeric-age error text, initialized textarea, and the Volvo-default car selector. Empty age is permitted until entered; invalid age blocks submission and displays an inline error rather than repeatedly alerting on each keystroke.

## Check the result

- Type a name and age and verify the greeting updates.
- Enter letters in age to see an error, then enter digits to clear it.
- Edit the textarea and change Volvo to another brand; submit to see the username alert.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
