import React, { Component, useState } from "react";
export class Modal extends Component {
  componentDidMount() {
    this.closeButton?.focus();
  }
  render() {
    return (
      <div
        className="modal-background"
        onKeyDown={(e) => {
          if (e.key === "Escape") this.props.onClose();
        }}
      >
        <div
          className="modal-body"
          role="dialog"
          aria-modal="true"
          aria-label="Error details"
        >
          <h2>Something went wrong</h2>
          <p>{this.props.message}</p>
          <button
            ref={(el) => (this.closeButton = el)}
            onClick={this.props.onClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}
export class ErrorBoundary extends Component {
  state = { hasError: false, error: null, errorInfo: null };
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
    this.setState({ errorInfo });
  }
  occurError = () =>
    this.setState({
      hasError: true,
      error: new Error("The requested action failed."),
    });
  reset = () => {
    this.props.onReset?.();
    this.setState({ hasError: false, error: null, errorInfo: null });
  };
  render() {
    if (this.state.hasError)
      return this.props.modal ? (
        <Modal message={this.state.error?.message} onClose={this.reset} />
      ) : (
        <section role="alert">
          <h3>This section could not render.</h3>
          <p>{this.state.error?.message}</p>
          <details>
            <summary>Development details</summary>
            <pre>{this.state.errorInfo?.componentStack}</pre>
          </details>
          <button onClick={this.reset}>Try again</button>
        </section>
      );
    return this.props.children;
  }
}
export class BuggyCounter extends Component {
  state = { count: 0 };
  render() {
    if (this.state.count === 5) throw Error("I crashed!");
    return (
      <button onClick={() => this.setState((s) => ({ count: s.count + 1 }))}>
        Counter: {this.state.count}
      </button>
    );
  }
}
export class LifecycleColor extends Component {
  state = { favoriteColor: "red", show: true, allowUpdates: true };
  componentDidMount() {
    this.timer = setTimeout(
      () => this.setState({ favoriteColor: "yellow" }),
      2000,
    );
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.allowUpdates ||
      nextState.allowUpdates !== this.state.allowUpdates
    );
  }
  getSnapshotBeforeUpdate() {
    console.log("in getSnapshotBeforeUpdate");
    return this.state.favoriteColor;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("After update", snapshot, "→", this.state.favoriteColor);
  }
  render() {
    return (
      <section>
        <h2>My favorite color is {this.state.favoriteColor}</h2>
        <button onClick={() => this.setState({ favoriteColor: "blue" })}>
          Blue
        </button>
        <button
          onClick={() =>
            this.setState((s) => ({ allowUpdates: !s.allowUpdates }))
          }
        >
          Allow updates: {String(this.state.allowUpdates)}
        </button>
        {this.state.show ? <Child /> : null}
        <button onClick={() => this.setState({ show: false })}>
          Delete child
        </button>
      </section>
    );
  }
}
export class Child extends Component {
  componentWillUnmount() {
    alert("Child has been unmounted");
  }
  render() {
    return <h3>Hello World!</h3>;
  }
}
export class CompassClock extends Component {
  readDate() {
    const d = new Date();
    return {
      year: d.getFullYear(),
      month: d.getMonth(),
      weekday: d.getDay(),
      day: d.getDate(),
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds(),
    };
  }
  state = this.readDate();
  componentDidMount() {
    this.timer = setInterval(() => this.setState(this.readDate()), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const { year, month, day, hour, minute, second, weekday } = this.state;
    return (
      <section>
        <h2>Compass clock</h2>
        <div className="compass">
          <b className="year">{year}</b>
          <b className="month">
            {new Date(year, month).toLocaleString("en", { month: "long" })}
          </b>
          {[
            [24, hour, 95],
            [60, minute, 115],
            [60, second, 135],
          ].map(([count, value, radius], r) => (
            <div
              key={r}
              className="ring"
              style={{ transform: `rotate(${(-value * 360) / count}deg)` }}
            >
              {Array.from({ length: count }, (_, i) => (
                <small
                  key={i}
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: `rotate(${(i * 360) / count}deg) translateY(-${radius}px)`,
                    fontWeight: i === value ? "bold" : "normal",
                    color: i === value ? "#9d3824" : "#819187",
                    fontSize: 9,
                  }}
                >
                  {i}
                </small>
              ))}
            </div>
          ))}
          <span>
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][weekday]} {day}
            <br />
            {[hour, minute, second]
              .map((x) => String(x).padStart(2, "0"))
              .join(":")}
          </span>
        </div>
      </section>
    );
  }
}
function Crash({ crash }) {
  if (crash) throw Error("Triggered render error");
  return <p>Click the button to test the boundary.</p>;
}
export function ModalExercise() {
  const [crash, setCrash] = useState(false);
  return (
    <section>
      <h2>Error modal</h2>
      <button onClick={() => setCrash(true)}>Trigger error</button>
      <ErrorBoundary modal key={String(crash)} onReset={() => setCrash(false)}>
        <Crash crash={crash} />
      </ErrorBoundary>
      {crash ? (
        <button onClick={() => setCrash(false)}>Reset demonstration</button>
      ) : null}
    </section>
  );
}
export function MathOperation() {
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  if (error) throw error;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const a = Number(data.get("a")),
          b = Number(data.get("b"));
        try {
          if (b === 0) throw Error("Cannot divide by zero");
          setResult(a / b);
        } catch (err) {
          setError(err);
        }
      }}
    >
      <input
        name="a"
        type="number"
        step="any"
        aria-label="Dividend"
        defaultValue="10"
      />
      <input
        name="b"
        type="number"
        step="any"
        aria-label="Divisor"
        defaultValue="0"
      />
      <button>Divide</button>
      <output>{result}</output>
    </form>
  );
}
function ColumnRight() {
  const [value, setValue] = useState('{"function":"I live to crash"}');
  const [eventError, setEventError] = useState("");
  return (
    <section>
      <h2>Right column</h2>
      <p>Only the paragraph below is isolated.</p>
      <ErrorBoundary>
        <RenderValue value={value} />
      </ErrorBoundary>
      <button onClick={() => setValue({ function: "I live to crash" })}>
        Replace string with object
      </button>
      <button
        onClick={() => {
          try {
            throw Error("Event handler error");
          } catch (error) {
            console.error(error);
            setEventError(error.message);
          }
        }}
      >
        Invoke event handler
      </button>
      <p role="alert">{eventError}</p>
    </section>
  );
}
function RenderValue({ value }) {
  return <p>{value}</p>;
}
export function ErrorProject() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  return (
    <div className="grid">
      <section>
        <h2>Left column</h2>
        <button
          onClick={async () => {
            try {
              setError("");
              const r = await fetch(
                "https://dog.ceo/api/breeds/image/random/2",
              );
              if (!r.ok) throw Error("Image request failed");
              const json = await r.json();
              setImages(json.message);
            } catch (e) {
              setError(e.message);
            }
          }}
        >
          Get images
        </button>
        <p role="alert">{error}</p>
        {images.map((src) => (
          <img key={src} src={src} alt="Random dog" />
        ))}
      </section>
      <ColumnRight />
    </div>
  );
}
export function ErrorExercises() {
  const [unprotected, setUnprotected] = useState(false);
  return (
    <>
      <h2>Shared boundary</h2>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <h2>Separate boundaries</h2>
      <div className="grid">
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
      </div>
      <h2>Unprotected simulation</h2>
      <p>
        At 5 this intentionally unprotected counter unmounts the entire app.
        Reload to recover.
      </p>
      <button onClick={() => setUnprotected((v) => !v)}>
        Enable unprotected counter
      </button>
      {unprotected ? <BuggyCounter /> : null}
      <LifecycleColor />
      <CompassClock />
      <ModalExercise />
      <section>
        <h2>Division error</h2>
        <ErrorBoundary>
          <MathOperation />
        </ErrorBoundary>
      </section>
      <ErrorProject />
    </>
  );
}

