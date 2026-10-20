# Reference solution

CommonJS uses module.exports/require; ESM uses export/import inside a type:module package. Both examples print 5.

## Files

- [`commonjs/math.js`](solution/commonjs/math.js)
- [`commonjs/app.js`](solution/commonjs/app.js)
- [`esm/package.json`](solution/esm/package.json)
- [`esm/math.js`](solution/esm/math.js)
- [`esm/app.js`](solution/esm/app.js)

## Run

From this activity's `solution` directory:

```sh
# No third-party dependencies needed.
node commonjs/app.js
node esm/app.js
```

These are reference implementations. The original assignment is preserved in [README.md](README.md).
