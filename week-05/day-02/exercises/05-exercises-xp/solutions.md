# Reference solution

app.js creates the users first, stores the author ObjectId on the post, and populates the full author name. middleware-demo.js demonstrates a pre-save hook updating updatedAt on every document save. Query updates bypass save middleware; use save() for that demonstration or Mongoose timestamps for all supported update paths.

## Files

- [`config/connect.js`](solution/config/connect.js)
- [`models/blog.js`](solution/models/blog.js)
- [`models/Student.js`](solution/models/Student.js)
- [`app.js`](solution/app.js)
- [`middleware-demo.js`](solution/middleware-demo.js)

## Run

From this activity's `solution` directory:

```sh
npm install
node app.js
node middleware-demo.js
```

These are reference implementations. The original assignment is preserved in [README.md](README.md).
