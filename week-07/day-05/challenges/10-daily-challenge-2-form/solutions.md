# Daily challenge #2: Form — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/data.jsx)

## How to run

From `week-07/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **data**.

## Approach and implementation

`AutoCompletedText` is a class component with the specified `suggestions` and `text` state. It filters English country names case-insensitively by prefix, renders suggestions in an unordered list, and on selection copies the country to the input and empties the suggestion list. The full original country list is stored locally in `countries.js`.

## Check the result

- Type “mo” and choose Morocco; the input becomes Morocco and the list clears.
- Clear the text and verify no suggestions are shown.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
