# Arrow Function Calculator: Worked Solutions

[Lesson](README.md) · [Open browser demo](index.html) · [JavaScript](solutions.js)

## Run

Open `index.html` in a browser, or serve the repository with `python -m http.server 8000` and navigate to this folder.


## Solution and Bonus

The arrow function returns the selected arithmetic operation. A chained ternary covers all four supported operators and returns `Invalid operator` otherwise. Inputs are numbers, so `+` performs addition. Division follows JavaScript arithmetic, including `Infinity` when dividing a nonzero number by zero. The form exposes the invalid-operator branch with `?`.
