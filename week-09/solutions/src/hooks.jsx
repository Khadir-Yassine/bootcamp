import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { counterReducer, cartReducer, cartTotal } from "./logic";
const ThemeContext = createContext(null);
const CountContext = createContext(null);
const AuthContext = createContext(null);
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggle: () => setTheme((t) => (t === "light" ? "dark" : "light")),
      }}
    >
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}
export function ThemeSwitcher() {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <section>
      <h2>Theme: {theme}</h2>
      <button onClick={toggle}>Toggle theme</button>
    </section>
  );
}
export function CharacterCounter() {
  const inputRef = useRef(null);
  const outputRef = useRef(null);
  return (
    <section>
      <h2>Character counter / refs</h2>
      <textarea
        aria-label="Text to count"
        ref={inputRef}
        onInput={() => {
          outputRef.current.textContent = String(inputRef.current.value.length);
        }}
      />
      <p>
        <output ref={outputRef}>0</output> characters
      </p>
    </section>
  );
}
export function SmoothScroll() {
  const target = useRef(null);
  return (
    <section>
      <h2>Smooth scrolling</h2>
      <button
        onClick={() =>
          target.current.scrollIntoView({ behavior: "smooth", block: "center" })
        }
      >
        Scroll to target
      </button>
      <div style={{ height: 300 }} />
      <h3 ref={target}>You reached the target section.</h3>
    </section>
  );
}
export function DataFetcher() {
  const cache = useRef(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      if (cache.current) {
        setData(cache.current);
        return;
      }
      try {
        const r = await fetch("https://jsonplaceholder.typicode.com/users/1", {
          signal: controller.signal,
        });
        if (!r.ok) throw Error(`HTTP ${r.status}`);
        cache.current = await r.json();
        setData(cache.current);
      } catch (e) {
        if (e.name !== "AbortError") setError(e.message);
      }
    }
    load();
    return () => controller.abort();
  }, []);
  return (
    <section>
      <h2>Data cached for this mount</h2>
      <p role="alert">{error}</p>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading…</p>}
      <button onClick={() => setData(cache.current)}>Read cached result</button>
    </section>
  );
}
function CounterDisplay() {
  const { count, dispatch } = useContext(CountContext);
  return (
    <section>
      <h2>Shared counter</h2>
      <button onClick={() => dispatch({ type: "decrement" })}>−</button>
      <output> {count} </output>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </section>
  );
}
export function ContextCounter() {
  const [count, dispatch] = useReducer(counterReducer, 0);
  return (
    <CountContext.Provider value={{ count, dispatch }}>
      <CounterDisplay />
    </CountContext.Provider>
  );
}
function AuthView() {
  const { user, setUser } = useContext(AuthContext);
  return (
    <section>
      <h2>Authentication simulation</h2>
      {user ? (
        <>
          <p>
            Welcome {user.name} ({user.email})
          </p>
          <button onClick={() => setUser(null)}>Log out</button>
        </>
      ) : (
        <button
          onClick={() =>
            setUser({ name: "Yassine", email: "learner@example.com" })
          }
        >
          Log in locally
        </button>
      )}
      <p>This learning example does not authenticate against a server.</p>
    </section>
  );
}
export function Authentication() {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <AuthView />
    </AuthContext.Provider>
  );
}
const products = [
  { id: 1, name: "Notebook", price: 12 },
  { id: 2, name: "Pen", price: 3 },
  { id: 3, name: "Mug", price: 15 },
];
export function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <section>
      <h2>Shopping cart / reducer</h2>
      {products.map((product) => (
        <p key={product.id}>
          {product.name} · ${product.price}{" "}
          <button onClick={() => dispatch({ type: "ADD", product })}>
            Add
          </button>
        </p>
      ))}
      <ul>
        {cart.map((p) => (
          <li key={p.id}>
            {p.name} × {p.quantity}{" "}
            <button onClick={() => dispatch({ type: "REMOVE", id: p.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <strong>Total: ${cartTotal(cart).toFixed(2)}</strong>
    </section>
  );
}
export function Hooks() {
  return (
    <>
      <ThemeSwitcher />
      <CharacterCounter />
      <ContextCounter />
      <Authentication />
      <ShoppingCart />
      <DataFetcher />
      <SmoothScroll />
    </>
  );
}
