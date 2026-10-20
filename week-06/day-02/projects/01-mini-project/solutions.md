# Reference solution

Complete layered REST API using Express and PostgreSQL. The model contains only parameterized SQL, controllers validate requests and map missing rows to 404, routes expose the exact required methods, and the server checks its database connection before listening. Prices use SMALLINT as assigned (integer currency units; range 0–32767). Names are unique to make GET by name unambiguous. Set DATABASE_URL for your local credentials. Create restaurant_db first, apply schema.sql, then start server.js. The contract test uses an explicit in-memory model double; it verifies HTTP behavior but does not claim PostgreSQL integration coverage. requests.http contains ready-to-run examples.

## Files

- [`db.js`](solution/db.js)
- [`schema.sql`](solution/schema.sql)
- [`models/menuModel.js`](solution/models/menuModel.js)
- [`controllers/menuController.js`](solution/controllers/menuController.js)
- [`routes/menuRoutes.js`](solution/routes/menuRoutes.js)
- [`app.js`](solution/app.js)
- [`server.js`](solution/server.js)
- [`app.test.js`](solution/app.test.js)
- [`requests.http`](solution/requests.http)

## Run

From this activity's `solution` directory:

```sh
npm install
createdb -U postgres restaurant_db
psql -U postgres -d restaurant_db -v ON_ERROR_STOP=1 -f schema.sql
node --test --test-isolation=none app.test.js
node server.js
```

These are reference implementations. The original assignment is preserved in [README.md](README.md).
