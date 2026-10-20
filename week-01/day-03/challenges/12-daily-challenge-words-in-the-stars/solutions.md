# Words in the Stars — Worked Solutions

[Instructions](README.md) · [Source](solutions.js)

## Run

```sh
node solutions.js
```


## Approach

Split the input on commas, trim each word and find the longest length. Each content row has a star, a space, a padded word, a space and a final star. The top and bottom borders are therefore `longestLength + 4` stars. Empty entries are skipped; cancellation produces no output.

No HTML or CSS is required. Run `node solutions.js "Hello, World, in, a, frame"`, or paste the source into a browser console to use `prompt()`.
