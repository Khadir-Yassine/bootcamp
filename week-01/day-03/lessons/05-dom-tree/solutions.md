# DOM Tree: Two Access Patterns: Worked Solutions

[Lesson](README.md) · [Open browser demo](index.html) · [JavaScript](solutions.js)

## Run

Open `index.html` in a browser, or serve the repository with `python -m http.server 8000` and navigate to this folder.


## Exercise 2: Two Ways for Every Selection

- Div: `getElementById` and `querySelector` retrieve the same node.
- Lists and children: use `getElementsByClassName` plus `children`, or `querySelectorAll` plus descendant `li` selectors. Both log John, Pete, Sarah and Dan one by one.
- First list items: use `firstElementChild`, or the CSS `:first-child` selector. Both produce John and Sarah.

The output shows both approaches side by side. The original HTML already renders the child items; the script inspects and logs them without duplicating the page.
