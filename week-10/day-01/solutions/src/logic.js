export function calculate(first, second, operation) {
  if (String(first).trim() === "" || String(second).trim() === "")
    throw Error("Enter both numbers.");
  const a = Number(first),
    b = Number(second);
  if (!Number.isFinite(a) || !Number.isFinite(b))
    throw Error("Enter finite numbers.");
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      if (b === 0) throw Error("Cannot divide by zero.");
      return a / b;
    default:
      throw Error("Unknown operation.");
  }
}
export function nextQuoteIndex(current, length, random = Math.random) {
  if (length < 2) return 0;
  const offset = 1 + Math.floor(random() * (length - 1));
  return (current + offset) % length;
}
