# Worked solutions

Open [index.html](index.html) in a browser for the interactive solution. Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. GET form

Open index.html. The form sends name/message using GET to the same page. Fields appear as percent-encoded query parameters in the address bar; the page also displays their decoded values.

[Original exercise](individual/01-exercise-1-html-form.md)

<a id="exercise-2"></a>

## 2. POST form

From this folder run `node server.js`, then open **http://localhost:3040**. The second form submits a real POST to /submit. Inspect Network → Payload: the fields are URL-encoded in the request body. The included Node server returns the received fields as JSON. A static HTML-only host cannot process a POST.

[Original exercise](individual/02-exercise-2-html-form-2.md)

<a id="exercise-3"></a>

## 3. JSON Mario

JSON.stringify serializes the full object recursively, including all three nested characters. JSON is a string representation; it does not turn nested objects into references or discard them. A second call with null and 2 formats it with two-space indentation. Open developer tools and click **Pause in debugger** to inspect marioGame, compact and pretty.

[Original exercise](individual/03-exercise-3-json-mario.md)

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
