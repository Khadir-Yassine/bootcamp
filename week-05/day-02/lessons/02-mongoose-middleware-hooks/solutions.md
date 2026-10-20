# Reference solution

Use a **pre-save** hook and hash only when `this.isModified("password")` is true. Hashing is one-way, not encryption. The [NexusMarket User model](../../../day-03/projects/05-final-project-capstone/solution/models/User.js) implements the answer. Updates through findOneAndUpdate do not run save hooks: load the document, assign its new plaintext password, and call save(). Never accept a client-supplied pre-hashed password.

## Files



## Run

From this activity's `solution` directory:

```sh
# No third-party dependencies needed.

```

These are reference implementations. The original assignment is preserved in [README.md](README.md).
