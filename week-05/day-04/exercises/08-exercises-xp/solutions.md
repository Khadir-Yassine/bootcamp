# Reference solution

Creates and queries the exact three items and five customers. The prompt calls the database public; public is also PostgreSQL’s common default schema name. For a literal database named public, run `createdb -U postgres public` once, then use `-d public` instead. The self-contained answer can run in any practice database.

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
