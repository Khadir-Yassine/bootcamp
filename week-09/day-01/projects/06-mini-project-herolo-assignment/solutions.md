# Mini-project : Herolo Assignment — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/weather.jsx)

## How to run

From `week-09/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **weather**.

## Approach and implementation

The two React Router pages share selected city, weather, forecast, favorites, units, and errors. Tel Aviv (location key 215854) is the default. Debounced autocomplete accepts English letters, requests matching cities, then fetches current conditions and five-day forecast in parallel. A per-session request cache reduces provider usage. Favorites retain location ID, name, and last-fetched current conditions in localStorage; selecting one navigates back to weather and refreshes. Celsius/Fahrenheit and light/dark switches are included.

The assignment requires AccuWeather: enter your own key in the configuration form. This integration does not replace live weather with fabricated values. Cached favorites are explicitly labelled as last fetched. No deployment credentials or service key were supplied, so the code/build is provided here; external hosted deployment and authenticated live API verification remain user-configured steps.

## Check the result

- Supply an AccuWeather key and check Tel Aviv and the five-day forecast.
- Search London, choose a suggestion, save it, then reload and visit Favorites.
- Click the favorite to return to its details; toggle units and theme.
- Try non-English input and an invalid key; each produces a clear error.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
