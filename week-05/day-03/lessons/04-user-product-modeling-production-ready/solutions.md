# Reference solution

The final mastery query filters by the owner ObjectId and populates only the seller’s name. This small companion reuses the NexusMarket models; install that project’s dependencies and seed it first, then pass its buyer/user ID. Set MONGODB_URI consistently.

## Files

- [`vendor-products.js`](solution/vendor-products.js)

## Run

From this activity's `solution` directory:

```sh
npm install
node vendor-products.js USER_ID
```

These are reference implementations. The original assignment is preserved in [README.md](README.md).
