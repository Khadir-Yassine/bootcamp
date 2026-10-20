# React Fieldnotes — Week 7 Solutions

A runnable React application containing the solutions to the archived exercises, challenges, projects, and embedded lesson exercises. [Assignment index](../SOLUTIONS.md).

## Run

Requirements: Node.js 20.19 or newer and npm. From this folder:

```sh
npm ci
npm run dev
```

Open Vite's printed address. Use the tabs to select basics, landing, state, forms, voting, errors, or data. Each assignment's `solutions.md` identifies the relevant component and tab. The workspace shares React tooling; implementations remain separately exported and named in `src/`.

For backend users, customers, and the data/server challenge, keep a second terminal running:

```sh
npm run server
```

The Express backend uses port 3001. Vite proxies `/users` and `/api` from the frontend, so no cross-origin workaround is needed. The POST examples using JSONPlaceholder, webhook.site, Star Wars, or dog images require internet access. Webhook submission needs your own CORS-enabled endpoint, entered in the UI. No credentials are embedded.

## Source map

| Module | Solutions |
| --- | --- |
| `basics.jsx` | JSX, props, animals, HTML/styles, celebrity cards, planets, responsive landing page |
| `state.jsx` | Car/garage, events, phone, effect, live clock, editable actor, voting |
| `forms.jsx` | Book submission, validated registration/reset, name/age/textarea/select, travel URL serialization |
| `errors.jsx` | Shared/separate/unprotected counters, lifecycle, child unmount, compass clock, modal, division, isolated error project |
| `data.jsx` | Router/boundaries, JSON, Express consumers, POST fetch/Axios, autocomplete, users/posts, lifecycle API list |
| `server.js` | Separate users/customer routes, hello route, POST echo route |

The original country list and nested profile JSON are copied from the public repositories specified by the exercises. Their source links remain in the original assignment pages. The source quote data lives in Week 10's workspace.

## Verification

```sh
npm run build
npm test
```

Tests cover custom contact validation and the real Express endpoints through a temporary local HTTP server. The production build checks all JSX, JSON, imports, router, and Tailwind compilation. Tests require permission to start local processes/listeners in restricted environments.

Recorded verification: three validation/backend tests passed. The React interaction suite (`npm run test:ui`) also passed voting increments, registration errors, error-boundary crash/reset, autocomplete initial render, task add/edit/complete/filter/remove, timed AutoBarista transitions/maintenance, calculator initial render, and nonrepeating quote/color changes. That integration suite loads the Week 9 and Week 10 workspaces too. A production build passed before the final styling/data refinements; additional verification stopped at the user's request to conserve credits.

The optional unprotected-counter demonstration deliberately unmounts the entire app when its count reaches five. Reload to recover. Other render errors are isolated by boundaries. Events use explicit error handling; they are not caught by React boundaries.

Live public API uptime and webhook delivery are external checks. No claim of service availability is made when offline. Narrow-screen styling uses responsive grids and media queries; the landing page and celebrity cards also use compiled Tailwind utilities.
