# Reference solution

Each task has its own module. Faker uses the maintained @faker-js/faker package (v9 supports CommonJS). The regex accepts two capitalized Unicode-letter names separated by exactly one space and extracts all digits in order. The optional prompt adds real user input to the same array.

## Files

- [`data/example.txt`](solution/data/example.txt)
- [`file-info.js`](solution/file-info.js)
- [`fetch-data.js`](solution/fetch-data.js)
- [`date-operations.js`](solution/date-operations.js)
- [`faker-users.js`](solution/faker-users.js)
- [`regex.js`](solution/regex.js)
- [`prompt-user.js`](solution/prompt-user.js)
- [`app.js`](solution/app.js)

## Run

From this activity's `solution` directory:

```sh
npm install
node app.js files
node app.js posts
node app.js dates
node app.js users
node app.js regex
node regex.js "John Doe"
node prompt-user.js
```

These are reference implementations. The original assignment is preserved in [README.md](README.md).
