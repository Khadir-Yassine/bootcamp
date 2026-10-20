# Mini Project : Error boundary — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/errors.jsx)

## How to run

From `week-07/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **errors**.

## Approach and implementation

`ErrorProject` retains independent image and description columns. “Get images” requests two dog images. The object replacement intentionally causes React's invalid-child render error inside a paragraph-level `ErrorBoundary`; surrounding controls and images remain available. `getDerivedStateFromError` sets the fallback and `componentDidCatch` records details. Event-handler errors require an explicit try/catch and are displayed separately because boundaries do not intercept event errors.

## Check the result

- Click Get images (internet required) and confirm two images load.
- Replace string with object: only that paragraph is replaced by the fallback.
- Fetch images again to prove the left column is still alive.
- Invoke event handler and see its caught error without a render crash.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
