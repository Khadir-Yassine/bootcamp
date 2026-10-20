# Reference solution

These artificial IDs deliberately demonstrate joins rather than real actor nationalities. INNER returns IDs 1 and 2; LEFT additionally keeps actors 3–5; RIGHT additionally keeps country 10; FULL preserves all unmatched rows from both sides. Missing columns are NULL.

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
