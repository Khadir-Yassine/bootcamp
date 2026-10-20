# Exercises XP — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/basics.jsx)

## How to run

From `week-07/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **basics**.

## Approach and implementation

The JSX exercise renders `Hello World!`, a JSX-valued `myElement`, and `5 + 5` inside a sentence. `UserFavoriteAnimals` receives the array from its parent and maps it into keyed list items. `Exercise` renders the required heading, paragraph, link, form, image, and list. `styleHeader` supplies the specified inline style; the imported stylesheet supplies `.para`.

## Check the result

- Find the exact JSX messages and separate first/last-name headings.
- Check the four animals.
- Submit the simple form and inspect the blue heading and dark paragraph.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
