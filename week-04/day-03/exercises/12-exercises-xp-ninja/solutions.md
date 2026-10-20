# Reference solution

Express serves a complete browser interface and keeps scoring on the server, independently for each player session. Answers are not sent in question payloads. The quiz shows each question once and ends with a final score. This exercise uses in-memory storage; scores reset when the server restarts. Sessions expire after an hour.

## Files

- [`app.js`](solution/app.js)
- [`public/index.html`](solution/public/index.html)
- [`public/game.js`](solution/public/game.js)

## Run

From this activity's `solution` directory:

```sh
npm install
node app.js
# Open http://localhost:3000
```

These are reference implementations. The original assignment is preserved in [README.md](README.md).

## Local verification

Run `npm test` after installing dependencies. Tests exercise the HTTP handlers through a local server on an ephemeral port. No external API requests are made by these tests.
