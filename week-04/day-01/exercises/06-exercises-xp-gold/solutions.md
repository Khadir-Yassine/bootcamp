# Reference solution

Exercise 1 appends one randomly chosen GIF. Exercises 2–4 are covered by timing.js and requests.js.

Gold 2: header, starting slow, slow done, slow, starting fast, fast done, fast (about 3s total). Gold 3: after the initial 4s delay, header, starting slow, starting fast, fast done, slow done, slow, fast. The two requests start together; awaiting slow first delays printing fast.

Open index.html in a browser and supply your own API key. External requests require internet access.

## Files

- [`index.html`](solution/index.html)
- [`app.js`](solution/app.js)
- [`timing.js`](solution/timing.js)
- [`requests.js`](solution/requests.js)

## Run

From this activity's `solution` directory:

```sh
# No third-party dependencies needed.
python -m http.server 8000
# Open http://localhost:8000
```

These are reference implementations. The original assignment is preserved in [README.md](README.md).
