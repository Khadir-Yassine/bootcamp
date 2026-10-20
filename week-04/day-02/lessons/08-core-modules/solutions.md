# Reference solution

The unnamed first Exercise is only a heading. The actual filesystem task writes a UTF-8 file then reads it. Paths resolve relative to the script so running from another directory works.

## Files

- [`write-file.js`](solution/write-file.js)
- [`read-file.js`](solution/read-file.js)

## Run

From this activity's `solution` directory:

```sh
# No third-party dependencies needed.
node write-file.js
node read-file.js
```

These are reference implementations. The original assignment is preserved in [README.md](README.md).
