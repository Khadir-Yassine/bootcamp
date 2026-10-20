import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Hooks, ThemeProvider } from "./hooks";
import { TaskManager } from "./tasks";
import { AutoBarista } from "./autobarista";
import { WeatherApp } from "./weather";
import "./style.css";
const screens = {
  hooks: Hooks,
  tasks: TaskManager,
  autobarista: AutoBarista,
  weather: WeatherApp,
};
function App() {
  const [tab, setTab] = useState(() =>
    location.hash.slice(1) in screens ? location.hash.slice(1) : "hooks",
  );
  const Screen = screens[tab];
  return (
    <ThemeProvider>
      <header>
        <p>Bootcamp / Week 09 / Applied React</p>
        <h1>The React Workshop.</h1>
        <nav>
          {Object.keys(screens).map((name) => (
            <button
              key={name}
              aria-pressed={name === tab}
              onClick={() => {
                setTab(name);
                history.replaceState(null, "", `/#${name}`);
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
    </ThemeProvider>
  );
}
createRoot(document.getElementById("root")).render(<App />);
