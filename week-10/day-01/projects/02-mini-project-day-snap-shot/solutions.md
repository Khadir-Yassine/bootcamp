# Mini-Project Day - Snap Shot — Solution

[Original assignment](README.md) · [Runnable workspace](../../solutions/README.md) · [Implementation](../../solutions/src/Gallery.jsx)

## How to run

From `week-10/day-01/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **gallery**.

## Approach and implementation

The gallery uses React Router with four category links plus /search/:query. Pexels requests use per_page=30 with pagination, abort cleanup, loading/empty/error states, lazy-loaded images, attribution, and hover transitions. Search queries are URL encoded. Supply your own Pexels key in the session-only configuration field; no credential is committed. Live API requests need a valid key and internet access.

## Check the result

- Enter a valid Pexels key, visit each category, and search another topic.
- Check up to 30 matching images per response, photo attribution, and hover zoom.
- Use Next/Previous and confirm the page changes; invalid keys show an error.

## Validation and dependencies

See the [workspace guide](../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
