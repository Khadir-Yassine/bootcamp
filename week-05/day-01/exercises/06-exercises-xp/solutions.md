# Reference solution

Connects to collegeDB and compiles a validated Student model. The intentionally invalid 16-year-old is caught as a ValidationError, not saved. The unique email rule is a MongoDB index, so Student.init waits for index creation. Set MONGODB_URI to override the default. The schema test runs without a database; app.js needs MongoDB.

## Files

- [`config/connect.js`](solution/config/connect.js)
- [`models/Student.js`](solution/models/Student.js)
- [`app.js`](solution/app.js)
- [`schema.test.js`](solution/schema.test.js)

## Run

From this activity's `solution` directory:

```sh
npm install
node --test --test-isolation=none schema.test.js
node app.js
```

These are reference implementations. The original assignment is preserved in [README.md](README.md).
