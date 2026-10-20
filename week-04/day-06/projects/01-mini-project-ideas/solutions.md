# Reference solution

Selected Option 1 (Todo Manager), as the assignment says to choose one project. Todos reference users to avoid an unbounded user document. The CLI implements all CRUD operations, completed-task queries, category validation/indexing, timestamps, and lean reads. Passwords are hashed and excluded by default. seed.js resets the dedicated bootcamp_todo collections and creates one user plus three todos.

## Files

- [`config/connect.js`](solution/config/connect.js)
- [`models.js`](solution/models.js)
- [`seed.js`](solution/seed.js)
- [`app.js`](solution/app.js)

## Run

From this activity's `solution` directory:

```sh
npm install
node seed.js
node app.js list USER_ID
node app.js add USER_ID "Study indexes" Work
node app.js complete USER_ID TODO_ID
node app.js completed USER_ID
node app.js delete USER_ID TODO_ID
```

These are reference implementations. The original assignment is preserved in [README.md](README.md).
