# Daily Challenge : Form Container — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/forms.jsx)

## How to run

From `week-07/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **forms**.

## Approach and implementation

`FormContainer` owns the values and passes data and handlers to the presentational `FormComponent`. `handleChange` reads checkbox `checked` values and all other input `value` properties. The preview updates as you type. Submission writes URL query parameters with `URLSearchParams`; checked dietary boxes become `on`, unchecked boxes are omitted, and the demo tab hash is preserved.

## Check the result

- Enter name, age, gender, destination, and dietary selections and watch the preview.
- Submit and inspect the URL query string for the values and checked-box `on` entries.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
