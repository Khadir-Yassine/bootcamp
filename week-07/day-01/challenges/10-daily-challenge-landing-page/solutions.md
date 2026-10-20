# Daily challenge: Landing Page — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/basics.jsx)

## How to run

From `week-07/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **landing**.

## Approach and implementation

`Header`, `Card`, and `Contact` are reusable function components. The landing page includes a hero, three distinct feature cards, inline pictographic icons, anchor navigation, and a contact form. Tailwind grid utilities and media queries support narrow, tablet, and desktop screens. The contact form confirms submission locally; no unrequested email service is implied.

## Check the result

- Use Home, Features, and Contact navigation links.
- Resize the page and verify the feature cards collapse into one column.
- Submit a valid contact email and message, and check the local confirmation.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
