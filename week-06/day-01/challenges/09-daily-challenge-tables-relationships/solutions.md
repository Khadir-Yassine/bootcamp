# Reference solution

A unique, non-null customer_id gives the requested one-to-one profile ownership while allowing customers without profiles. IS NOT TRUE counts both false and missing-profile NULL as not logged in (Jerome and Lea). The library uses a composite primary key and cascading foreign keys. Alice borrowers have average age 11.5; deleting Bob cascades away his two loans. The composite key models one current borrowing per student/book pair; lending history would need a separate loan ID.

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
