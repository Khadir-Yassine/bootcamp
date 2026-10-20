# Reference solution

Promise.all waits for both HTTP requests and both JSON bodies. The interface replaces the output only when both succeed. ISO timestamps are labeled UTC rather than incorrectly presented as local city time.

## Files

- [`index.html`](solution/index.html)
- [`app.js`](solution/app.js)

## Run

From this activity's `solution` directory:

```sh
# No third-party dependencies needed.
python -m http.server 8000
# Open http://localhost:8000
```

These are reference implementations. The original assignment is preserved in [README.md](README.md).
