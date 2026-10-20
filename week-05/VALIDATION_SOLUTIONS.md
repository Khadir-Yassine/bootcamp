# Solution validation

This week contains **26 activity answer documents**, including lesson exercises, Mongoose labs, daily challenges, NexusMarket and PostgreSQL practice.

## Executed

- Every JavaScript solution passed syntax checking.
- Student schema tests reject missing names/emails and underage students.
- Task schema tests check required titles, status enums and creation-date defaults.
- NexusMarket schema tests reject negative prices/stock, reject fractional inventory, enforce order items/status, and check password exclusion and the category/price index.
- The Python file-processing unittest passed with a temporary input; it checks name counts, Luke replacement, the appended name and source-file preservation.
- Every SQL script executed successfully in PGlite, including the SQL puzzle's four output assertions. These scripts are transaction-scoped and end in ROLLBACK.

The shared [validation guide and reports](../week-04/VALIDATION_SOLUTIONS.md) contain commands and details. All 14 test files and all 23 SQL scripts across weeks 4–6 passed.

## External prerequisites and limits

MongoDB persistence, population, save hooks and multi-document transactions require a real MongoDB service and were not exercised here. NexusMarket's atomic purchase flow requires a replica set. Password hashing itself is exercised by week 4's HTTP authentication test, while the Mongoose pre-save hook needs database integration testing. The NexusMarket API is a local data-layer demonstration with explicit buyer IDs, not a deployed authenticated commerce service.

DVD queries ran against a synthetic relational fixture, not the full official dataset. Restore the assignment's DVD rental database for its actual records and output counts. The other SQL scripts carry their own temporary fixture data. SQL syntax, constraints, joins and functions were executed using PostgreSQL semantics rather than translated to SQLite.

The downloaded names dataset is optional for the Python test; `python names.py --download` requires internet access. A source file is preserved, and edits are written to a separate `*-updated.txt` file.
