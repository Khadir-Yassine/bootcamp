# Selections & Shopping List — Worked Solutions

[Instructions](README.md) · [Browser app](index.html) · [JavaScript source](solutions.js)

## Run

Open `index.html` in a browser, or run `python -m http.server 8000` from the repository and navigate to this folder.


## Exercise 1: Music Selection

Read and display the original selection, `blues`. Create the `classic` option, append it and select it by default. The displayed value also updates when the user changes the dropdown.

## Exercise 2: Delete Colors

`removecolor()` removes the currently selected option. The click listener is attached to the supplied input-button type. After the final color is removed, the button is disabled rather than attempting to remove index -1.

## Exercise 3: Shopping List

The only body content in the initial HTML is `div#root` plus the external script. All forms, inputs, buttons and displayed items are created in JavaScript. `addItem()` trims the input, adds it to the `shoppingList` array and updates the list. `clearAll()` empties that same array and the rendered list. No network or storage service is required.
