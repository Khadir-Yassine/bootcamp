# Reference solution

The source says three columns for purchases but lists four; all four are implemented. NULL item references are allowed because item_id is not declared NOT NULL. The student query uses count(math_grade), which counts actual non-NULL grades: ungraded students correctly have zero, despite the source’s claim that everyone would have one. The total is 370 for the specified grades. Repeated names are only a learning exercise; real exams belong in a separate grades table.

All statements execute inside a transaction ending with ROLLBACK. Temporary fixtures make this answer self-contained; no production tables are modified. PostgreSQL execution requires a running server and psql; live database execution is not claimed in this solution.

## Files

- [`solution.sql`](solution/solution.sql)
- [`dvdrental.sql`](solution/dvdrental.sql)

## Run

From this activity's `solution` directory:

```sh
# No third-party dependencies needed.
psql -U postgres -d postgres -v ON_ERROR_STOP=1 -f solution.sql
```

These are reference implementations. The original assignment is preserved in [README.md](README.md).
