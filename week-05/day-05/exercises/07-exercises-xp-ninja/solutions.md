# Reference solution

Deleting Scott’s purchase leaves Scott in customers, but the removed purchase cannot appear in any join. The prompt’s later requirement contradicts that deletion. The script explicitly demonstrates the alternative intended scenario: ON DELETE SET NULL preserves the purchase when deleting its customer. LEFT JOIN includes the orphan with NULL name; INNER JOIN excludes it.

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
