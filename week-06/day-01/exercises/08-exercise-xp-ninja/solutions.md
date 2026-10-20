# Reference solution

A film is available when at least one inventory copy has no outstanding rental, including copies never borrowed. Waiting-list rows reference customer and film, not a particular unavailable copy, so the child can take the next available copy. The standard sample has no child-age records; customer IDs stand in for patrons without inventing ages. Seed rows and a dequeue example demonstrate the counts. Rating eligibility is enforced by the application selecting G/PG films; a foreign key alone does not constrain the rating.

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
