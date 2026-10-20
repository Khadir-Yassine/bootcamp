# Stars — Solutions

[Original instructions](README.md) · [JavaScript source](solutions.js)

## Run

```sh
node solutions.js
```

Run this command from this exercise folder. The source exports its functions for automated tests and prints a demonstration when run directly.


## One-Loop Solution

Keep the previous row and append one additional star each iteration. The default prints the six requested rows.

## Nested-Loop Solution

The outer loop chooses the row length, and the inner loop creates that many stars. Spaces appear between stars without a trailing space. Both functions return the same exact pattern, including newline boundaries, so the result can be tested.
