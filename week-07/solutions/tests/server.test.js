import test from "node:test";
import assert from "node:assert/strict";
process.env.NODE_ENV = "test";
const { app } = await import("../server.js");
test("Express endpoints return users, six customers, greeting and echoed message", async () => {
  const server = app.listen(0, "127.0.0.1");
  await new Promise((resolve) => server.once("listening", resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    const users = await (await fetch(`${base}/users`)).json();
    assert.equal(users[1].username, "somebody_else");
    const customers = await (await fetch(`${base}/api/customers/`)).json();
    assert.equal(customers.length, 6);
    assert.equal(customers[5].firstName, "Megan");
    assert.equal(
      (await (await fetch(`${base}/api/hello`)).json()).message,
      "Hello From Express",
    );
    const echo = await (
      await fetch(`${base}/api/world`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "Learning React" }),
      })
    ).json();
    assert.equal(
      echo.message,
      "I received your POST request. This is what you sent me: Learning React",
    );
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});
