# Reference solution

This task practices psql itself. Use uppercase -U for the username (the lesson’s lowercase -u is incorrect). Connect to the database containing your actors table. The script displays connection, database, table, column and command information. Create hollywood separately with `createdb -U postgres hollywood` if needed; use `\c hollywood` interactively to switch. `\g` executes the current query buffer again and may repeat writes, so it is explained rather than blindly invoked.

## Files

- [`practice.psql`](solution/practice.psql)

## Run

From this activity's `solution` directory:

```sh
# No third-party dependencies needed.
psql -U postgres -d hollywood -f practice.psql
```

These are reference implementations. The original assignment is preserved in [README.md](README.md).
