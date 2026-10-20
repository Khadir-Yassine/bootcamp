import test from "node:test";
import assert from "node:assert/strict";
import {
  initialTasks,
  taskReducer,
  selectTasks,
  cartReducer,
  cartTotal,
  counterReducer,
  coffeeReducer,
} from "../src/logic.js";
test("tasks add, reject blank, complete, edit, filter, remove immutably", () => {
  let state = taskReducer(initialTasks, {
    type: "ADD_TASK",
    id: "a",
    text: " First ",
  });
  assert.equal(initialTasks.tasks.length, 0);
  assert.equal(state.tasks[0].text, "First");
  assert.equal(
    taskReducer(state, { type: "ADD_TASK", id: "b", text: "  " }),
    state,
  );
  state = taskReducer(state, { type: "COMPLETE_TASK", id: "a" });
  state = taskReducer(state, { type: "EDIT_TASK", id: "a", text: "Updated" });
  state = taskReducer(state, { type: "FILTER_TASKS", filter: "completed" });
  assert.equal(selectTasks(state)[0].text, "Updated");
  state = taskReducer(state, { type: "FILTER_TASKS", filter: "active" });
  assert.equal(selectTasks(state).length, 0);
  assert.equal(
    taskReducer(state, { type: "REMOVE_TASK", id: "a" }).tasks.length,
    0,
  );
});
test("cart combines quantities, totals, and removes", () => {
  const product = { id: 1, price: 12, name: "Book" };
  const one = cartReducer([], { type: "ADD", product });
  const two = cartReducer(one, { type: "ADD", product });
  assert.equal(one[0].quantity, 1);
  assert.equal(cartTotal(two), 24);
  assert.equal(cartReducer(two, { type: "REMOVE", id: 1 }).length, 0);
});
test("counter increments and decrements", () => {
  assert.equal(counterReducer(0, { type: "increment" }), 1);
  assert.equal(counterReducer(0, { type: "decrement" }), -1);
});
test("coffee state machine prevents duplicate orders, honors maintenance, depletes inventory", () => {
  const initial = {
    inventoryLevel: 1,
    machineStatus: "Idle",
    maintenance: false,
    brewCount: 0,
  };
  const brewing = coffeeReducer(initial, { type: "ORDER" });
  assert.equal(brewing.inventoryLevel, 0);
  assert.equal(brewing.machineStatus, "Brewing");
  assert.equal(coffeeReducer(brewing, { type: "ORDER" }), brewing);
  const delivered = coffeeReducer(brewing, { type: "DELIVER" });
  const done = coffeeReducer(delivered, { type: "FINISH" });
  assert.equal(done.machineStatus, "Idle");
  assert.equal(done.brewCount, 1);
  assert.equal(coffeeReducer(done, { type: "ORDER" }), done);
  assert.equal(coffeeReducer(done, { type: "RESTOCK" }).inventoryLevel, 10);
  assert.equal(
    coffeeReducer({ ...initial, maintenance: true }, { type: "ORDER" })
      .inventoryLevel,
    1,
  );
});
