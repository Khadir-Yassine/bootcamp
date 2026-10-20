# Reference solution

Users and post authors are references. Each post embeds comment data, while comments.author is another user reference. The feed populates both author paths. Existing demo users/posts are reused so rerunning does not cause duplicate-email errors.

## Files

- [`config/connect.js`](solution/config/connect.js)
- [`models/blog.js`](solution/models/blog.js)
- [`app.js`](solution/app.js)

## Run

From this activity's `solution` directory:

```sh
npm install
node app.js
```

These are reference implementations. The original assignment is preserved in [README.md](README.md).
