# Reference solution

Each item belongs to exactly one order through a non-null foreign key; each order references one user. NUMERIC avoids floating-point currency errors. COALESCE returns zero for an empty or nonmatching order. The second function scopes the total to the requested user/order pair; an API would separately validate ownership and return 404 for an unauthorized ID.

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
