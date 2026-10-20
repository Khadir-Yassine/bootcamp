# Events & Forms Lab — Worked Solutions

[Instructions](README.md) · [Browser app](index.html) · [JavaScript source](solutions.js)

## Run

Open `index.html` in a browser, or run `python -m http.server 8000` from the repository and navigate to this folder.


## Exercise 1: Change the Article

The script logs the article heading, removes only the article's final paragraph, and binds the requested click handlers. Clicking h2 makes its background red; clicking h3 hides it. The button makes the remaining article paragraphs bold. Hovering h1 sets an integer font size from 0 through 100px. Hovering the second paragraph fades it out through an opacity transition.

## Exercise 2: Work with Forms

The form and inputs are retrieved by ID and by name. `preventDefault()` keeps the browser from navigating away on submission. Trim both values, reject blank entries, and create exactly two list items with `textContent`. Resubmission replaces the prior answers rather than accumulating stale results.

## Exercise 3: Transform the Sentence

The global `allBoldItems` variable is filled by `getBoldItems()`. The two named functions switch the strong elements between blue and black on mouseover/mouseout.

## Exercise 4: Sphere Volume

Calculate `4 / 3 * Math.PI * radius ** 3`, display three decimal places, and reject invalid or negative input. Zero is valid. The test checks known values and rejected inputs.
