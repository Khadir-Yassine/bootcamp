# useRef — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/hooks.jsx)

## How to run

From `week-09/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **hooks / tasks**.

## Approach and implementation

`CharacterCounter` updates a DOM output through refs without rerendering on each key. `SmoothScroll` references a target heading and calls scrollIntoView with smooth behavior. `DataFetcher` stores the response in a ref for the life of the component mount; reading the cached value does not fetch again. Its abort controller cleans up on unmount.

## Check the result

Exercise each control and run `npm test` to verify the reducer transitions independently of the UI.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
