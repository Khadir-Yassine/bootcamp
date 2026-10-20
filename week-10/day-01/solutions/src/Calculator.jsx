import React, { useState } from "react";
import { calculate } from "./logic";
export default function Calculator() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  return (
    <section>
      <p className="eyebrow">01 / Numbers</p>
      <h1>A little arithmetic.</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          try {
            setResult(calculate(first, second, operation));
            setError("");
          } catch (err) {
            setResult(null);
            setError(err.message);
          }
        }}
      >
        <label>
          First number
          <input
            type="number"
            step="any"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            required
          />
        </label>
        <label>
          Operation
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
          >
            <option value="add">Addition +</option>
            <option value="subtract">Subtraction −</option>
            <option value="multiply">Multiplication ×</option>
            <option value="divide">Division ÷</option>
          </select>
        </label>
        <label>
          Second number
          <input
            type="number"
            step="any"
            value={second}
            onChange={(e) => setSecond(e.target.value)}
            required
          />
        </label>
        <button>{operation === "add" ? "Add Them" : "Calculate"}</button>
      </form>
      <p role="alert">{error}</p>
      {result !== null ? (
        <output className="result" aria-live="polite">
          {result}
        </output>
      ) : null}
    </section>
  );
}
