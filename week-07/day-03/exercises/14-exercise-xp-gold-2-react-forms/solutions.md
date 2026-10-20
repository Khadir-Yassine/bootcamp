# Exercise XP GOLD #2 : React & Forms — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/forms.jsx)

## How to run

From `week-07/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **forms**.

## Approach and implementation

`BookForm` stores title, author, genre, and year in state, copies them to a submitted object, logs that object, and displays a success message. The contact `Form` tracks first name, last name, phone, and email. It uses custom validation before submission, swaps the form for the submitted data, and provides a reset that clears values and restores the form.

## Check the result

- Submit a book and check both the success text and console object.
- Try malformed phone/email values; the contact form must remain visible with errors.
- Submit valid contact values, verify the data replaces the form, then click Reset.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
