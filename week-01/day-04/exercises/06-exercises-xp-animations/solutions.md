# Timers & Motion — Worked Solutions

[Instructions](README.md) · [Browser app](index.html) · [JavaScript source](solutions.js)

## Run

Open `index.html` in a browser, or run `python -m http.server 8000` from the repository and navigate to this folder.


## Exercise 1: Timer

Two timeouts request actions after two seconds: an alert and a paragraph. A separate interval adds a paragraph every two seconds. The button clears the interval, and the same stop function runs automatically once five paragraphs exist. Counting existing children also includes the one-time paragraph. The two one-time timeouts remain separate from clearing the interval, as requested.

## Exercise 2: Move the Box

An interval requests a one-pixel rightward movement every millisecond. The stopping position is the container's inner width minus the box width, preventing overflow. Clicking again cancels the previous interval and starts from the left. Browser timers may run more slowly than their requested delay; the code does not assume exact wall-clock timing.
