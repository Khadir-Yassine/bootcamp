# Reference solution

Exercise 1 renders category search results and supports clearing all GIFs. Exercises 2–4 are covered by timing.js.

Ninja 2: after 1s, header, starting slow, starting fast; fast done at about 2s, slow done at 3s, then slow and fast. Ninja 3: after 5s, header and both start messages; fast done then fast at 6s; slow done then slow at 7s. Ninja 4 has the same completion order after its 13s initial delay. Run the original examples with `node timing.js`.

Open index.html in a browser and supply your own API key. External requests require internet access.

## Files

- [`index.html`](solution/index.html)
- [`app.js`](solution/app.js)
- [`timing.js`](solution/timing.js)

## Run

From this activity's `solution` directory:

```sh
# No third-party dependencies needed.
python -m http.server 8000
# Open http://localhost:8000
```

These are reference implementations. The original assignment is preserved in [README.md](README.md).
