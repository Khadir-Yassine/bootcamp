# Keyless Car: Worked Exercises

[Lesson](README.md) · [JavaScript](solutions.js) · [Browser demo](index.html)

## Run

```sh
node solutions.js
```


## Solution

Convert valid prompt text to a number before comparing it. Test `< 18` first, then `=== 18`, then the older-age branch. Cancellation, blank input, negative values and nonnumeric text do not accidentally power on the car. The browser demo uses both `prompt()` and `alert()` as required.
