# Mini Project : Users and Posts — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/data.jsx)

## How to run

From `week-07/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **data**.

## Approach and implementation

`PostList` and `UsersList` extend a common class-based lifecycle loader. It fetches the required JSONPlaceholder endpoints after mounting, holds an initially empty collection and loading/error state, and maps posts to title/body and users to name/email/city. Component unmounting aborts its request. Loading and unsuccessful HTTP responses are rendered explicitly.

## Check the result

- With internet available, check post titles/bodies and user names/emails/cities.
- Refresh with network throttling to observe Loading.
- Block an endpoint and check its error text.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
