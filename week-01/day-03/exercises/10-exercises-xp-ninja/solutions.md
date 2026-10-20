# Function Challenges and Calendar — Worked Solutions

[Instructions](README.md) · [Source](solutions.js) · [Browser app](index.html)

## Run

```sh
node solutions.js
```


## Exercises 1–5

1. Generate an integer from 1 through 100 and loop over even values starting at 0. Injecting the random function makes both range endpoints testable.
2. Return even-index and odd-index capitalization as two separate strings. Index 0 belongs to the even case.
3. Compare a normalized phrase with its reverse. This version ignores case, spaces and punctuation in English letters and digits.
4. Inspect only numeric, non-NaN entries. Do not initialize the maximum to zero: negative-only arrays must still return their largest negative value. Empty or nonnumeric arrays return 0.
5. A Set removes duplicate entries while preserving first-seen order.

## Exercise 6: Calendar

The HTML body contains only scripts; all controls and the calendar table are created in JavaScript. `createCalendar(year, month)` uses one-based months, Monday-first headers and empty padding cells. UTC calculations avoid local daylight-saving changes. The year is set explicitly so years below 100 are not shifted to the 1900s.

Open `index.html`, choose a month, and render it. September 2012 begins on Saturday and ends on Sunday, matching the supplied table. Leap-year February is covered by tests.
