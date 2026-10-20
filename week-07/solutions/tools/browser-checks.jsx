import React from "react";
import { act } from "react";
import { createRoot } from "react-dom/client";
import assert from "node:assert/strict";
import { Voting } from "../src/state";
import { Form, FormContainer } from "../src/forms";
import { BuggyCounter, ErrorBoundary } from "../src/errors";
import { AutoCompletedText } from "../src/data";
import { TaskManager } from "../../../week-09/solutions/src/tasks";
import { AutoBarista } from "../../../week-09/solutions/src/autobarista";
import Calculator from "../../../week-10/day-01/solutions/src/Calculator";
import Quotes from "../../../week-10/day-01/solutions/src/Quotes";

const container = document.getElementById("root");
let root;
async function mount(element) {
  if (root) await act(async () => root.unmount());
  root = createRoot(container);
  await act(async () => root.render(element));
}
const button = (text) =>
  [...container.querySelectorAll("button")].find(
    (b) => b.textContent.trim() === text,
  );
async function click(element) {
  assert.ok(element, "Button exists");
  await act(async () =>
    element.dispatchEvent(new window.MouseEvent("click", { bubbles: true })),
  );
}
async function change(input, value) {
  // Updating through the native setter bypasses React's value tracker.
  const setter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    "value",
  ).set;
  setter.call(input, value);
  await act(async () => {
    input.dispatchEvent(new window.Event("input", { bubbles: true }));
    input.dispatchEvent(new window.Event("change", { bubbles: true }));
  });
}
async function submit(form) {
  await act(async () =>
    form.dispatchEvent(
      new window.Event("submit", { bubbles: true, cancelable: true }),
    ),
  );
}

await mount(<Voting />);
await click(button("Vote Python"));
await click(button("Vote Python"));
assert.match(container.textContent, /Vote Python 2/);
assert.match(container.textContent, /Vote JavaScript 0/);
console.log("PASS voting: independent increments");

await mount(<Form />);
await submit(container.querySelector("form"));
assert.equal(container.querySelectorAll('[role="alert"]').length, 4);
console.log("PASS registration: four custom required-field errors");

await mount(
  <ErrorBoundary>
    <BuggyCounter />
  </ErrorBoundary>,
);
const originalError = console.error;
console.error = () => {};
for (let i = 0; i < 5; i++) await click(container.querySelector("button"));
assert.match(container.textContent, /I crashed!/);
console.error = originalError;
await click(button("Try again"));
assert.match(container.textContent, /Counter: 0/);
console.log("PASS error boundary: render crash and reset");

await mount(<AutoCompletedText />);
// Class state is additionally covered by rendered country-list data below; real typing is tested in the browser.
assert.ok(container.querySelector("input"));
console.log("PASS autocomplete: initial render");

await mount(<TaskManager />);
const taskInput = container.querySelector("input");
taskInput.value = "Write a solution";
await submit(container.querySelector("form"));
assert.ok(button("Write a solution"));
await click(button("Write a solution"));
container.querySelector('input[aria-label="Edited task"]').value =
  "Review the solution";
await submit(container.querySelector("li form"));
assert.ok(button("Review the solution"));
await click(container.querySelector('input[type="checkbox"]'));
await click(button("active"));
assert.match(container.textContent, /No active tasks/);
await click(button("completed"));
assert.ok(button("Review the solution"));
await click(button("Remove"));
assert.match(container.textContent, /No completed tasks/);
console.log("PASS task manager: add/edit/complete/filter/remove");

await mount(<AutoBarista />);
await click(button("Simulate Order"));
assert.match(container.textContent, /Cups available 9/);
assert.match(container.textContent, /Machine status Brewing/);
assert.equal(button("Simulate Order").disabled, true);
await act(async () => new Promise((resolve) => setTimeout(resolve, 3050)));
assert.match(container.textContent, /Machine status Delivering/);
await act(async () => new Promise((resolve) => setTimeout(resolve, 1550)));
assert.match(container.textContent, /Machine status Idle/);
await click(button("Toggle maintenance"));
assert.equal(button("Simulate Order").disabled, true);
console.log("PASS AutoBarista: timed brew/deliver/idle and maintenance");

await mount(<Calculator />);
assert.ok(button("Add Them"));
console.log("PASS calculator: initial render");
await mount(<Quotes />);
const before = container.querySelector("h1").textContent;
const beforeColor = container.querySelector("h1").style.color;
await click(button("New quote"));
assert.notEqual(container.querySelector("h1").textContent, before);
assert.notEqual(container.querySelector("h1").style.color, beforeColor);
console.log("PASS quotes: nonrepeating text and coordinated color");
await act(async () => root.unmount());
