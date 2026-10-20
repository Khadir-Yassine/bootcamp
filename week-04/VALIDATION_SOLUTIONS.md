# Solution validation

## Executed checks

- All **126 JavaScript source/test files** across weeks 4–6 passed `node --check` under Node.js 24.
- All **14 test files** across weeks 4–6 passed: 13 Node test files and one Python unittest file.
- Week 4 checks cover CRUD routes, missing IDs, JSON field validation, search, JWT registration/login/profile, password hashing, duplicate registrations, account lockout, role restrictions, quiz completion, emoji scoring, per-player state, date arithmetic, regex edge cases, and ESM TodoList behavior.
- All **23 SQL scripts** across weeks 5–6 executed successfully under PGlite (PostgreSQL compiled to WebAssembly), including schema creation, seed inserts, queries, functions, cascades and embedded assertions.

The reports are [JavaScript/Python results](validation-results.json) and [SQL results](sql-validation-results.json).

## Reproduce the local checks

From `week-04` with Node.js 22+ and Python 3 installed:

```sh
npm install --prefix .validation --no-save express@4 mongoose@8 bcrypt@6 jsonwebtoken@9 @electric-sql/pglite
python validate_solutions.py
node validate_sql.cjs
```

The runner sets NODE_PATH for its test subprocesses. Install the dependencies in each activity's `solution` directory separately when running an individual app. The `.validation` dependency directory is ignored by Git. Python tests use temporary files; the Windows execution sandbox needed elevated filesystem access for tempfile cleanup, and the successful final run included that access.

## What these checks do not claim

- No external lesson API request was used in the tests. Giphy and OpenWeather require the learner's API keys; API availability, rate limits and browser CORS behavior remain external prerequisites.
- MongoDB examples passed JavaScript syntax checks, and week 5 schemas passed offline validation tests. There was no MongoDB server, so persistence, population, save hooks and transactions were not executed against MongoDB. NexusMarket purchases require a replica set.
- The browser GIF/sunrise forms have not been visually tested in this run. Express games are tested through HTTP; their browser interfaces are included.
- DVD SQL executed against the explicitly labeled [synthetic fixture](sql-fixture.sql). This verifies PostgreSQL syntax and representative relationships; it does not reproduce or certify counts/titles from the official DVD rental dataset. Restore that dataset to obtain its actual results.

Week 4 has **28 activity answer documents**, including a complete choice for each open weekend project: Todo Manager and Expense Ledger. Empty extracted headings are identified as empty rather than assigned invented requirements.
