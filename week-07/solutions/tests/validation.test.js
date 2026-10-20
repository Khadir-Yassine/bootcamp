import test from "node:test";
import assert from "node:assert/strict";
import { validate } from "../src/validation.js";
test("custom validation accepts valid international contact data", () => {
  assert.deepEqual(
    validate({
      firstName: "Ada",
      lastName: "Lovelace",
      phone: "+212 600-123456",
      email: "ada@example.com",
    }),
    { firstName: "", lastName: "", phone: "", email: "" },
  );
});
test("empty and malformed contact fields yield custom messages", () => {
  const errors = validate({
    firstName: " ",
    lastName: "",
    phone: "-------",
    email: "invalid@",
  });
  assert.equal(Object.values(errors).filter(Boolean).length, 4);
});
