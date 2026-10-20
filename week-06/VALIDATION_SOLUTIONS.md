# Solution validation

This week contains **9 answer/status documents**: the five SQL exercise/challenge groups, the restaurant project, unavailable quiz questions, and two explicitly empty project pages.

## Executed

- All SQL solution scripts executed successfully in PGlite against representative fixture data. The relationship challenge checks cascade deletion, and the orders challenge asserts order totals and user scoping.
- The complete Restaurant Menu Manager source passed JavaScript syntax checks.
- The restaurant HTTP contract test passed with an explicitly injected in-memory model double. It tests creation, name lookup, updates, deletion, negative-price rejection, invalid IDs and missing records.

See the shared [validation guide and reports](../week-04/VALIDATION_SOLUTIONS.md). All 23 SQL scripts and all 14 test files across weeks 4–6 passed.

## Remaining environment checks

The Restaurant Menu Manager uses real parameterized PostgreSQL queries in its model. There was no native PostgreSQL server, so the HTTP contract test does not claim live pg-pool integration coverage. Run schema.sql and server.js against restaurant_db to verify your credentials and connection.

The DVD SQL queries were exercised against a documented synthetic schema/seed; restore the official DVD dataset for the actual catalog, rental counts and clue answers. The fixture deliberately covers returned/unreturned copies, missing inventory, language relationships, categories and customer rentals.

The database quiz's questions are not present in the archive. Work on Project pages on days 4 and 5 say “No Content Available.” No hidden questions or project requirements were invented.
