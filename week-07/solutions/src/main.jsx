import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Basics, Landing } from "./basics";
import { StateExercises, Voting } from "./state";
import { FormExercises } from "./forms";
import { ErrorExercises } from "./errors";
import { DataExercises } from "./data";
import "./style.css";
const screens = {
  basics: Basics,
  landing: Landing,
  state: StateExercises,
  forms: FormExercises,
  voting: Voting,
  errors: ErrorExercises,
  data: DataExercises,
};
function App() {
  const [tab, setTab] = useState(() =>
    location.hash.slice(1) in screens ? location.hash.slice(1) : "basics",
  );
  const Screen = screens[tab];
  return (
    <>
      <header>
        <p>Bootcamp / Week 07 / Working solutions</p>
        <h1>React Fieldnotes.</h1>
        <nav>
          {Object.keys(screens).map((name) => (
            <button
              key={name}
              aria-pressed={tab === name}
              onClick={() => {
                setTab(name);
                history.replaceState(null, "", `#${name}`);
              }}
            >
              {name}
            </button>
          ))}
        </nav>
      </header>
      <main>
        <Screen />
      </main>
    </>
  );
}
createRoot(document.getElementById("root")).render(<App />);
