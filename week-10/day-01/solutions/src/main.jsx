import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Calculator from "./Calculator";
import Quotes from "./Quotes";
import Gallery from "./Gallery";
import "./style.css";
const screens = { calculator: Calculator, quotes: Quotes, gallery: Gallery };
function App() {
  const [tab, setTab] = useState("calculator");
  const Screen = screens[tab];
  return (
    <>
      <header>
        <span>THE MINI PROJECT COLLECTION</span>
        <nav>
          {Object.keys(screens).map((name) => (
            <button
              key={name}
              onClick={() => setTab(name)}
              aria-pressed={tab === name}
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
