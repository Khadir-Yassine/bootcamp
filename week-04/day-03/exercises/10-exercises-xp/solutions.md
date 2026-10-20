# Reference solution

Exercise 1 is blog-server.js (/posts, port 3000); Exercise 2 is book-app.js (/api/books, port 5000). Exercise 3 is proxy-app.js, which calls the separate Axios data service and returns upstream posts. Run one server at a time. IDs are validated, input fields are allowlisted, and failed upstream requests return 502.

## Files

- [`crud.js`](solution/crud.js)
- [`crud.test.js`](solution/crud.test.js)
- [`blog-server.js`](solution/blog-server.js)
- [`book-app.js`](solution/book-app.js)
- [`data/dataService.js`](solution/data/dataService.js)
- [`proxy-app.js`](solution/proxy-app.js)

## Run

From this activity's `solution` directory:

```sh
npm install
node --test crud.test.js
node blog-server.js
# Or: node book-app.js
# Or: node proxy-app.js
```

These are reference implementations. The original assignment is preserved in [README.md](README.md).
