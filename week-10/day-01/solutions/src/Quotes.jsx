import React, { useState } from "react";
import { nextQuoteIndex } from "./logic";
import quotes from "./quotes-original";
const colors = ["#22493d", "#8d3d28", "#28455f", "#664531", "#504460"];
export default function Quotes() {
  const [index, setIndex] = useState(() =>
    Math.floor(Math.random() * quotes.length),
  );
  const [color, setColor] = useState(colors[0]);
  const ink = ["#e0eec6", "#ffe5b4", "#d0eafa", "#ffe6d5", "#f0dcff"][
    colors.indexOf(color)
  ];
  return (
    <section
      style={{
        background: color,
        color: ink,
        minHeight: 400,
        transition: "background .5s",
      }}
    >
      <p className="eyebrow">02 / Words to keep</p>
      <h1 style={{ color: ink }}>“{quotes[index].quote}”</h1>
      <p>— {quotes[index].author}</p>
      <button
        style={{ color, background: ink }}
        onClick={() => {
          setIndex((i) => nextQuoteIndex(i, quotes.length));
          setColor(
            (c) => colors[nextQuoteIndex(colors.indexOf(c), colors.length)],
          );
        }}
      >
        New quote
      </button>
    </section>
  );
}
