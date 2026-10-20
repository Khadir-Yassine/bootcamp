# Reference solution

The runnable script demonstrates both required validation failures, creates a valid task, completes it using runValidators:true, and lists all tasks with automatically assigned createdAt. A missing task ID is handled explicitly. Data is retained between runs.

## Files

- [`config/connect.js`](solution/config/connect.js)
- [`models/Task.js`](solution/models/Task.js)
- [`app.js`](solution/app.js)
- [`schema.test.js`](solution/schema.test.js)

## Run

From this activity's `solution` directory:

```sh
npm install
node --test --test-isolation=none schema.test.js
node app.js "Study schemas"
```

These are reference implementations. The original assignment is preserved in [README.md](README.md).
