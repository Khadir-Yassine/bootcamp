# Reference solution

Predicted outputs: **Q1 = 0, Q2 = 2, Q3 = 0, Q4 = 2**. Comparisons with NULL evaluate to UNKNOWN, not true. NOT IN with a NULL in its subquery cannot evaluate true for unmatched IDs, so the WHERE clause discards those rows. Without that NULL, IDs 6 and 7 pass; the outer NULL is still discarded. The DO block asserts all four predictions.

All statements execute inside a transaction ending with ROLLBACK. Temporary fixtures make this answer self-contained; no production tables are modified. PostgreSQL execution requires a running server and psql; live database execution is not claimed in this solution.

## Files

- [`solution.sql`](solution/solution.sql)

## Run

From this activity's `solution` directory:

```sh
# No third-party dependencies needed.
psql -U postgres -d postgres -v ON_ERROR_STOP=1 -f solution.sql
```

These are reference implementations. The original assignment is preserved in [README.md](README.md).
