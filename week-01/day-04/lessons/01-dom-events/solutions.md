# DOM Event Workshop: Worked Solutions

[Lesson](README.md) · [Open browser demo](index.html) · [JavaScript](solutions.js)

## Run

Open `index.html` in a browser, or serve the repository with `python -m http.server 8000` and navigate to this folder.


## Exercise 1: Add Table Rows

`insertRow()` creates a row with two cells, using the current row count for its labels. Repeated clicks append Row3, Row4 and so on.

## Exercise 2: Multiple Event Listeners

Hover changes the button background, mouseout restores it, and click toggles bold text. Each listener has a distinct responsibility.

## Exercise 3: Propagation

The parent div and nested button both listen for clicks. Without the checkbox, a button click logs the button and then the parent through bubbling. With “Stop propagation” enabled, `stopPropagation()` keeps the parent listener from firing. Other button listeners still work.
