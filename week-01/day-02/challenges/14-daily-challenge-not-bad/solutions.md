# Not Bad — Solutions

[Original instructions](README.md) · [JavaScript source](solutions.js)

## Run

```sh
node solutions.js
```

Run this command from this exercise folder. The source exports its functions for automated tests and prints a demonstration when run directly.


## Approach

Find the first `not` and first `bad` using `indexOf`, as requested. Replace the inclusive range from `not` through `bad` only when both exist and `bad` comes later. Keep the prefix and suffix unchanged. Matching is case-sensitive and substring-based, following the original prompt.

Example: `The movie is not that bad, I like it` becomes `The movie is good, I like it`. Missing words or `bad` before `not` leave the original sentence unchanged.
