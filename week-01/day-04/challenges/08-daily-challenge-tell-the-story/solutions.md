# Mad Libs Story Studio — Worked Solutions

[Instructions](README.md) · [Browser app](index.html) · [JavaScript source](solutions.js)

## Run

Open `index.html` in a browser, or run `python -m http.server 8000` from the repository and navigate to this folder.


## Main Requirements

The submit handler prevents navigation, reads and trims all five inputs, and refuses a blank value. Each story template includes all five submitted values. Output uses `textContent`, so entered text is not interpreted as HTML.

## Shuffle Bonus

Four templates are selected randomly without repetition until the set is exhausted. After the first story, the next three shuffle clicks therefore produce three different stories while keeping the submitted words. Further cycles also avoid an immediate repeat. Editing the form does not change the active story's words until the form is submitted again.
