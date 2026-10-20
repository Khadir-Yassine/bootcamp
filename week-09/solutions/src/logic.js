export const initialTasks = { tasks: [], filter: "all" };
export function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return action.text.trim()
        ? {
            ...state,
            tasks: [
              ...state.tasks,
              { id: action.id, text: action.text.trim(), completed: false },
            ],
          }
        : state;
    case "COMPLETE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.id ? { ...t, completed: !t.completed } : t,
        ),
      };
    case "REMOVE_TASK":
      return { ...state, tasks: state.tasks.filter((t) => t.id !== action.id) };
    case "EDIT_TASK":
      return action.text.trim()
        ? {
            ...state,
            tasks: state.tasks.map((t) =>
              t.id === action.id ? { ...t, text: action.text.trim() } : t,
            ),
          }
        : state;
    case "FILTER_TASKS":
      return { ...state, filter: action.filter };
    default:
      return state;
  }
}
export const selectTasks = (state) =>
  state.tasks.filter(
    (t) =>
      state.filter === "all" ||
      (state.filter === "completed" ? t.completed : !t.completed),
  );
export function cartReducer(cart, { type, product, id }) {
  if (type === "ADD")
    return cart.some((p) => p.id === product.id)
      ? cart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p,
        )
      : [...cart, { ...product, quantity: 1 }];
  if (type === "REMOVE") return cart.filter((p) => p.id !== id);
  return cart;
}
export const cartTotal = (cart) =>
  cart.reduce((sum, p) => sum + p.price * p.quantity, 0);
export const counterReducer = (state, { type }) =>
  type === "increment" ? state + 1 : type === "decrement" ? state - 1 : state;
export function coffeeReducer(state, action) {
  switch (action.type) {
    case "ORDER":
      return state.machineStatus === "Idle" &&
        state.inventoryLevel > 0 &&
        !state.maintenance
        ? {
            ...state,
            inventoryLevel: state.inventoryLevel - 1,
            machineStatus: "Brewing",
          }
        : state;
    case "DELIVER":
      return state.machineStatus === "Brewing"
        ? { ...state, machineStatus: "Delivering" }
        : state;
    case "FINISH":
      return state.machineStatus === "Delivering"
        ? { ...state, machineStatus: "Idle", brewCount: state.brewCount + 1 }
        : state;
    case "RESTOCK":
      return { ...state, inventoryLevel: state.inventoryLevel + 10 };
    case "MAINTENANCE":
      return { ...state, maintenance: !state.maintenance };
    default:
      return state;
  }
}
