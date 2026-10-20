# Reference solution

The address is small and loaded with its owner, so embedding avoids another query. Orders grow over time, so the order references the real inserted ObjectId. The optional $lookup demonstrates resolving the reference; MongoDB itself does not enforce a foreign-key constraint. Resets only the two dedicated example collections.

## Files

- [`solution.js`](solution/solution.js)

## Run

From this activity's `solution` directory:

```sh
# No third-party dependencies needed.
mongosh --file solution.js
```

These are reference implementations. The original assignment is preserved in [README.md](README.md).
