# Reference solution

Exercise 1 forwards all five CRUD methods using Axios. JSONPlaceholder simulates writes; it does not persist them. Exercise 2 implements registration, bcrypt password hashing, signed expiring JWTs, protected profile, a five-failure lockout, and an admin-only route. Set JWT_SECRET before starting login-app.js. Users are deliberately held in memory for this exercise and disappear on restart. Registration never allows clients to choose admin. Exercise 3 is the complete todo CRUD API. Run one app at a time.

## Files

- [`crud.js`](solution/crud.js)
- [`crud.test.js`](solution/crud.test.js)
- [`external-api.js`](solution/external-api.js)
- [`login-app.js`](solution/login-app.js)
- [`todo-app.js`](solution/todo-app.js)

## Run

From this activity's `solution` directory:

```sh
npm install
node --test crud.test.js
node external-api.js
# Or (after setting JWT_SECRET): node login-app.js
# Or: node todo-app.js
```

These are reference implementations. The original assignment is preserved in [README.md](README.md).

## Local verification

Run `npm test` after installing dependencies. Tests exercise the HTTP handlers through a local server on an ephemeral port. No external API requests are made by these tests.
