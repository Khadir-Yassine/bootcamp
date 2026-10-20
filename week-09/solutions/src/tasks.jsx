import React, {
  createContext,
  useContext,
  useReducer,
  useRef,
  useState,
} from "react";
import { initialTasks, taskReducer, selectTasks } from "./logic";
const TaskContext = createContext(null);
export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialTasks);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
export function AddTask() {
  const { dispatch } = useContext(TaskContext);
  const input = useRef(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: "ADD_TASK",
          id: crypto.randomUUID(),
          text: input.current.value,
        });
        input.current.value = "";
        input.current.focus();
      }}
    >
      <label>
        New task <input ref={input} required />
      </label>
      <button>Add task</button>
    </form>
  );
}
function Task({ task }) {
  const { dispatch } = useContext(TaskContext);
  const [editing, setEditing] = useState(false);
  const editRef = useRef(null);
  return (
    <li>
      <input
        aria-label={`Complete ${task.text}`}
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch({ type: "COMPLETE_TASK", id: task.id })}
      />
      {editing ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch({
              type: "EDIT_TASK",
              id: task.id,
              text: editRef.current.value,
            });
            setEditing(false);
          }}
        >
          <input
            aria-label="Edited task"
            ref={editRef}
            defaultValue={task.text}
            autoFocus
            required
          />
          <button>Save</button>
          <button type="button" onClick={() => setEditing(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <button
          className={task.completed ? "completed" : ""}
          onClick={() => setEditing(true)}
        >
          {task.text}
        </button>
      )}
      <button onClick={() => dispatch({ type: "REMOVE_TASK", id: task.id })}>
        Remove
      </button>
    </li>
  );
}
export function TaskList() {
  const { state, dispatch } = useContext(TaskContext);
  return (
    <>
      <nav>
        {["all", "active", "completed"].map((filter) => (
          <button
            key={filter}
            aria-pressed={state.filter === filter}
            onClick={() => dispatch({ type: "FILTER_TASKS", filter })}
          >
            {filter}
          </button>
        ))}
      </nav>
      <ul>
        {selectTasks(state).map((t) => (
          <Task key={t.id} task={t} />
        ))}
      </ul>
      {selectTasks(state).length === 0 ? <p>No {state.filter} tasks.</p> : null}
    </>
  );
}
export function TaskManager() {
  return (
    <section>
      <h2>Task Manager</h2>
      <p>Add, complete, click to edit, filter, or remove a task.</p>
      <TaskProvider>
        <AddTask />
        <TaskList />
      </TaskProvider>
    </section>
  );
}
