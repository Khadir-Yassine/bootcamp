import test from "node:test";
import assert from "node:assert/strict";
import { calculate, nextQuoteIndex } from "../src/logic.js";
test("calculator handles numeric strings, decimals, negatives and every operation", () => {
  assert.equal(calculate("2", "3", "add"), 5);
  assert.equal(calculate("1.5", "-2", "multiply"), -3);
  assert.equal(calculate(8, 3, "subtract"), 5);
  assert.equal(calculate(9, 2, "divide"), 4.5);
});
test("calculator rejects blank, nonfinite, zero division and unknown operation", () => {
  for (const args of [
    ["", 2, "add"],
    ["x", 2, "add"],
    [1, 0, "divide"],
    [1, 2, "power"],
  ])
    assert.throws(() => calculate(...args));
});
test("quote selection never repeats the immediately previous quote", () => {
  for (let i = 0; i < 5; i++)
    for (const n of [0, 0.1, 0.5, 0.99999]) {
      const next = nextQuoteIndex(i, 5, () => n);
      assert.notEqual(next, i);
      assert.ok(next >= 0 && next < 5);
    }
});
