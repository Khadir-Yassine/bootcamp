# Reference solution

The hybrid model references users and products while embedding immutable receipt fields in each order. Passwords are hashed by a pre-save hook and hidden from normal reads. Product search includes the required category/price compound index, select/lean, and 12-item pagination. The purchase service uses a conditional $inc and a transaction so a failed order cannot consume stock. This strengthens the assignment’s findByIdAndUpdate example by preventing overselling. It requires MongoDB configured as a replica set (including a single-node development replica set). Set MONGODB_URI accordingly. Demo seed prints IDs for purchase.js and resets only its demo product stock to 10. The API is an unauthenticated data-layer demonstration; buyer IDs are explicit exercise inputs, and this is not a deployed commerce service. Money snapshots use rounded numeric values for the exercise; production currency would use integer minor units or Decimal128.

## Files

- [`config/connect.js`](solution/config/connect.js)
- [`models/User.js`](solution/models/User.js)
- [`models/Product.js`](solution/models/Product.js)
- [`models/Order.js`](solution/models/Order.js)
- [`services/purchase.js`](solution/services/purchase.js)
- [`app.js`](solution/app.js)
- [`seed.js`](solution/seed.js)
- [`purchase.js`](solution/purchase.js)
- [`schema.test.js`](solution/schema.test.js)

## Run

From this activity's `solution` directory:

```sh
npm install
node --test --test-isolation=none schema.test.js
node seed.js
node purchase.js BUYER_ID PRODUCT_ID 2
node app.js
# GET /api/products?page=1&category=Electronics
# GET /api/orders/ORDER_ID
```

These are reference implementations. The original assignment is preserved in [README.md](README.md).
