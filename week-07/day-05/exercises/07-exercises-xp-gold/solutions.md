# Exercises XP Gold — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/data.jsx)

## How to run

From `week-07/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **data**.

## Approach and implementation

The class `PostForm` supports two explicit modes. Fetch mode controls user/email and POSTs JSON to `/users/`. Axios mode controls userId/title/body, converts the numeric ID, and POSTs to `/posts`. Both log and display the returned object, with visible network errors. JSONPlaceholder simulates creation and does not persist records.

## Check the result

- Submit valid user/email and inspect the returned object.
- Submit the three-field Axios form and inspect userId/title/body plus the generated ID.
- Disconnect the network to verify a visible error.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
