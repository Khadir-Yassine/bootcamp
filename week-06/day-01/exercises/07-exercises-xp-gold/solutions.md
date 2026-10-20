# Reference solution

Outstanding rentals have return_date IS NULL. Aggregation groups customers once while counting their outstanding rentals. Store viewing time counts physical inventory copies and excludes any copy with an outstanding rental. The safe catalog filters Horror relationships and scary title/description words; its CHECK enforces the text restriction for later inserts. A PostgreSQL CHECK cannot query another table, so category exclusion is applied during INSERT. Hours and days use numeric division. Both distinct-title safe totals and available-copy store totals are provided.

All statements execute inside a transaction ending with ROLLBACK. Restore the standard dvdrental sample database first. This script queries its original tables and rolls back example schema/data changes. PostgreSQL execution requires a running server and psql; live database execution is not claimed in this solution.

## Files

- [`solution.sql`](solution/solution.sql)

## Run

From this activity's `solution` directory:

```sh
# No third-party dependencies needed.
psql -U postgres -d dvdrental -v ON_ERROR_STOP=1 -f solution.sql
```

These are reference implementations. The original assignment is preserved in [README.md](README.md).
