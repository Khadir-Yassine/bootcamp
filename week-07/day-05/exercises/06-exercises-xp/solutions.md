# Exercises XP — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/data.jsx)

## How to run

From `week-07/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **data**.

## Approach and implementation

`RouterExercise` uses BrowserRouter, NavLink, Routes, and Route for Home, Profile, and an intentionally crashing Shop. Each route has an error boundary. The next examples map the supplied posts JSON and the original nested profile JSON into social media, skills, and experience components. `Webhook` serializes the exact hardcoded payload and POSTs it to a user-provided webhook.site URL; response text and failures are visible and successful responses are logged.

## Check the result

- Navigate Home → Profile → Shop → Home; the shop failure remains isolated.
- Compare posts and nested profile sections to the local JSON files.
- Enter your own CORS-enabled webhook URL and send; inspect its dashboard and console.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
