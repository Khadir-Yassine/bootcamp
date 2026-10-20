# Letters Only — Worked Solutions

[Instructions](README.md) · [Browser app](index.html) · [JavaScript source](solutions.js)

## Run

Open `index.html` in a browser, or run `python -m http.server 8000` from the repository and navigate to this folder.


## Solution

Listen to the `input` event so filtering applies to typing, pasting and other input changes. The Unicode letter property keeps letters and removes digits, spaces and punctuation. Restore the caret to its filtered position instead of sending it to the end. Composition is allowed to finish before filtering, supporting input methods that build a letter through intermediate characters.
