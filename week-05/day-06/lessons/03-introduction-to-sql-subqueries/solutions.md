# Reference solution

Compare each customer’s SUM of order values with the AVG of individual orders, as the wording specifies. The fixture average is 72.5; Lina (120) and Adam (150) pass. Comparing with the average customer total would be a different question.

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
