# The React Workshop — Week 9 Solutions

Runnable advanced hooks, component architecture, state machines, and API projects. [Assignment index](../SOLUTIONS.md).

## Run

Use Node.js 20.19 or newer and npm in this folder:

```sh
npm ci
npm run dev
```

Choose **hooks**, **tasks**, **autobarista**, or **weather** in the application. The assignment guides point to named components and explain their reasoning. No real coffee equipment is controlled: AutoBarista implements the specified local simulation.

## Source map

| Source | Responsibility |
| --- | --- |
| `src/hooks.jsx` | Ref character count, smooth scroll, cached fetch, context counter/theme/authentication, reducer shopping cart |
| `src/tasks.jsx` | Context provider, reducer actions, add/complete/remove/edit/filter UI |
| `src/logic.js` | Pure task, cart, counter, and coffee state transitions |
| `src/autobarista.jsx` | Reusable props/components, hardware panel, queue, client coffee screen, maintenance, final machine simulation |
| `src/weather.jsx` | AccuWeather autocomplete/current/five-day endpoints, routed weather/favorites, local persistence, units/theme/errors |
| `component-map.svg` | Annotated reconstruction explaining layout boundaries and reusable video-page components |

## Weather setup

Enter your own AccuWeather API key in the app's configuration form. It stays in `sessionStorage`; the repository contains no key. Tel Aviv is the default location. Requests are debounced/cached, current conditions and forecast load together, and failed HTTP responses are visible. Favorites are retained locally with their location ID and last-fetched conditions.

Live provider verification requires a valid key, available quota, and network access. The assignment's separate hosted deployment step needs a hosting destination and credentials; this repository provides runnable source and a production build command. BrowserRouter hosting requires fallback of unknown paths to `index.html`.

## Tests

```sh
npm test
npm run build
```

The automated tests cover task creation/edit/completion/filter/removal, blank-input rejection, immutable cart quantities/totals, counter transitions, and coffee ordering/maintenance/busy/out-of-stock transitions. The production build validates all React modules and imports. API-key integrations are not falsely replaced with mock live responses.

Recorded verification: all four reducer tests passed. The cross-workspace React interaction checks in Week 7 also passed task editing/filtering/removal and the real three-second Brewing → Delivering → Idle flow, including maintenance blocking. Further verification stopped at the user's request to conserve credits. AccuWeather remains unverified without a user-owned API key.

Manual behavior checks: toggle theme; type in the character counter; edit/filter tasks; place two queue orders and serve one; simulate a brew and observe Brewing for three seconds, then Delivering and Idle; deplete/restock inventory; enable maintenance and confirm new orders are blocked.

The archived generated project-cover image is absent. The architecture exercise therefore documents a component decomposition of the actual written dashboard brief. The annotated video layout is a reconstruction, clearly labelled, rather than an invented screenshot capture.
