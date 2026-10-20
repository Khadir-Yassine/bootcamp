# Exercise XP Gold — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/basics.jsx)

## How to run

From `week-07/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **basics**.

## Approach and implementation

`CelebrityCard` destructures the five props and renders a photo, title, description, and Wikipedia link. The exact Bob Dylan and Paul McCartney objects are mapped with their names as stable keys. Tailwind utility classes style each card. The planets array is mapped into a semantic unordered list with stable planet-name keys.

## Check the result

- Check both celebrity names, photos, descriptions, and working Wikipedia links.
- Count six planets and verify Mars, Venus, Jupiter, Earth, Saturn, and Neptune appear once each.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
