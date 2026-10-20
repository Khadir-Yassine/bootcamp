# Exercises XP Ninja — Solutions

[Original instructions](README.md) · [JavaScript source](solutions.js)

## Run

```sh
node solutions.js
```

Run this command from this exercise folder. The source exports its functions for automated tests and prints a demonstration when run directly.


## Exercise 1: Checking the BMI

Each person object stores a full name, mass in kilograms and height in meters. Its method uses `mass / height²` and accesses the object's values through `this`. The comparison function reports the person with the larger value and handles ties. Inputs must be positive finite numbers.

## Exercise 2: Grade Average

`findAvg` calculates and logs the average, then calls a separate `reportResult` function for the pass/fail decision. This completes the bonus separation of responsibilities. Empty arrays and nonnumeric grades are rejected instead of producing misleading results.

The prompt leaves an average of exactly 65 unspecified. This solution uses a passing threshold of **65 or above** and tests that boundary explicitly.
