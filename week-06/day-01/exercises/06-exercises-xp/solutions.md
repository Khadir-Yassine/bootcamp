# Reference solution

The first three joins distinguish film-language matches from retaining unused languages. Review deletion cascades; review scores are constrained to 1–10. The catalog query explains customer foreign keys. Dropping the review table is safe in this exercise because no other table references it; PostgreSQL would reject a dependent DROP without explicit handling. “Most expensive” is interpreted as replacement_cost, and multiple outstanding copies are grouped per film. The final clue is subjective, so candidate boat films are ordered by replacement cost rather than inventing a threshold or a specific unseen result.

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
