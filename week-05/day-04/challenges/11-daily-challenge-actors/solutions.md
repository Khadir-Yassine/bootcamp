# Reference solution

The supplied fixture starts with five actors. Omitting required fields or passing NULL violates NOT NULL. Blank text is a different value and passes the lesson schema; an additional CHECK(length(trim(first_name))>0) would reject it. This distinction answers the ambiguity in “blank fields.”

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
