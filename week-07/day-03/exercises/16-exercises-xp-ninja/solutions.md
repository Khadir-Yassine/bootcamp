# Exercises XP Ninja — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/forms.jsx)

## How to run

From `week-07/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **forms / state**.

## Approach and implementation

`Clock` in `state.jsx` stores a Date and uses an interval to call `tick` once a second; cleanup clears that interval on unmount. The `Form` and reusable `Input` in `forms.jsx` implement first/last-name, phone, and email validation. `noValidate` disables native form validation so the custom regex checks and field errors are responsible for correctness. Phone validation additionally counts real digits.

## Check the result

- Select state to watch the live local-time display advance.
- Select forms, submit empty fields, then malformed email and punctuation-only phone values.
- Correct every field and confirm submission works.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
