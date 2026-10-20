# Reference solution

Uses SERIAL IDs and ISO dates to avoid locale ambiguity (the source dates are day/month/year). ILIKE handles the capitalized Amelia case. A row cannot have ID 1 AND ID 3; the script shows the literal empty result and the likely intended IN alternative. The personal insertion uses clearly labeled fictional data. To create the requested separate database, run `createdb -U postgres bootcamp` once and use `-d bootcamp`.

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
