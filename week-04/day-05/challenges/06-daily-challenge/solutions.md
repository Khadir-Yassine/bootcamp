# Reference solution

Posts reference their author and embed a bounded comment array; social links belong to the user document. The prompt alternates user/date and username/timestamp; this answer follows the named requirements consistently. Viral or unbounded comments should move to a separate collection to avoid the 16 MB document limit. Resets only the dedicated example database collections.

## Files

- [`solution.js`](solution/solution.js)

## Run

From this activity's `solution` directory:

```sh
# No third-party dependencies needed.
mongosh --file solution.js
```

These are reference implementations. The original assignment is preserved in [README.md](README.md).
