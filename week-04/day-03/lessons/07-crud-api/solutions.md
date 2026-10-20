# Reference solution

The app implements /api/greetings, /api/posts, /api/posts/:id, and case-insensitive /api/search?title=express. The CRUD lesson also has create/update/delete handlers. Each app is standalone and uses in-memory storage, reset on restart.

## Files

- [`crud.js`](solution/crud.js)
- [`data.js`](solution/data.js)
- [`app.js`](solution/app.js)
- [`crud.test.js`](solution/crud.test.js)

## Run

From this activity's `solution` directory:

```sh
npm install
node --test crud.test.js
node app.js
```

These are reference implementations. The original assignment is preserved in [README.md](README.md).
