# Worked solutions

Open [index.html](index.html) in a browser for the interactive solution. Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Capitalize and sort

makeAllCaps rejects an array containing a non-string, otherwise resolves uppercase strings. sortWords rejects arrays of four or fewer elements, otherwise resolves a sorted copy. The supplied successful case produces **[APPLE,BANANA,KIWI,MELON,PEAR]**. Run the script in Node for all three supplied cases, or open index.html for an interactive form.

<a id="exercise-2"></a>

## 2. Morse promise chain

toJs parses the complete JSON dictionary and rejects malformed or empty dictionaries. toMorse asks for a word/sentence through a browser prompt and returns a Promise; it lowercases letters and rejects unsupported characters such as ¡. joinWords joins the translation with line breaks and updates the DOM. The browser button chains all three functions and displays errors. Hello becomes **.... / . / .-.. / .-.. / ---** on separate lines. As an explicit sentence extension, whitespace becomes a word separator `/`.

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
