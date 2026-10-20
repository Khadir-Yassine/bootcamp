# Reference solution

Selected Inspiration 3 (Expense Tracker), which fulfills the open-choice brief. The model comment maps the relationship; expenses reference users, have timestamps and nonnegative amounts, and the user password is hidden and hashed. The compound index serves category queries. getPaginatedData validates page numbers and uses deterministic skip/limit pagination. The CLI also aggregates category totals. seed.js resets only the dedicated expense example and creates three expenses.

## Files

- [`config/connect.js`](solution/config/connect.js)
- [`models.js`](solution/models.js)
- [`seed.js`](solution/seed.js)
- [`app.js`](solution/app.js)

## Run

From this activity's `solution` directory:

```sh
npm install
node seed.js
node app.js USER_ID Food 1
```

These are reference implementations. The original assignment is preserved in [README.md](README.md).
