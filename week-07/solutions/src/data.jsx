import React, { Component, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import axios from "axios";
import { ErrorBoundary } from "./errors";
import profile from "./profile.json";
import posts from "./posts.json";
import countries from "./countries";
export class RemoteList extends Component {
  state = { items: [], error: "", loading: true };
  controller = new AbortController();
  async componentDidMount() {
    try {
      const response = await fetch(this.props.url, {
        signal: this.controller.signal,
      });
      if (!response.ok) throw Error(`Request failed (${response.status})`);
      const json = await response.json();
      this.setState({
        items: Array.isArray(json) ? json : (json.results ?? []),
        loading: false,
      });
    } catch (e) {
      if (e.name !== "AbortError")
        this.setState({ error: e.message, loading: false });
    }
  }
  componentWillUnmount() {
    this.controller.abort();
  }
  render() {
    return (
      <section>
        <h2>{this.props.title}</h2>
        {this.state.loading ? <p role="status">Loading…</p> : null}
        <p role="alert">{this.state.error}</p>
        <ul>
          {this.state.items.map((item, i) => (
            <li key={item.id ?? item.url ?? i}>
              <h3>
                {item.title ??
                  item.name ??
                  item.username ??
                  `${item.firstName} ${item.lastName}`}
              </h3>
              {item.body ? <p>{item.body}</p> : null}
              {item.email ? <p>{item.email}</p> : null}
              {item.address ? <p>{item.address.city}</p> : null}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
export class PostList extends RemoteList {
  static defaultProps = {
    url: "https://jsonplaceholder.typicode.com/posts",
    title: "Posts",
  };
}
export class UsersList extends RemoteList {
  static defaultProps = {
    url: "https://jsonplaceholder.typicode.com/users",
    title: "Users",
  };
}
export class Customers extends RemoteList {
  static defaultProps = { url: "/api/customers", title: "Customers" };
}
export class Example1 extends Component {
  render() {
    return (
      <section>
        <h2>Social media</h2>
        <ul>
          {profile.SocialMedias.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>
    );
  }
}
export class Example2 extends Component {
  render() {
    return (
      <section>
        <h2>Skills</h2>
        {profile.Skills.map((s) => (
          <div key={s.Area}>
            <h3>{s.Area}</h3>
            <ul>
              {s.SkillSet.map((t) => (
                <li key={t.Name}>{t.Name}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    );
  }
}
export class Example3 extends Component {
  render() {
    return (
      <section>
        <h2>Experiences</h2>
        {profile.Experiences.map((e) => (
          <div key={e.companyName}>
            <h3>{e.companyName}</h3>
            <a href={e.url}>{e.url}</a>
            {e.roles.map((r) => (
              <div key={r.title}>
                <h4>
                  {r.title} · {r.startDate}–{r.endDate}
                </h4>
                <p>{r.description}</p>
              </div>
            ))}
          </div>
        ))}
      </section>
    );
  }
}
export class PostForm extends Component {
  state = {
    user: "",
    email: "",
    userId: "",
    title: "",
    body: "",
    result: null,
    error: "",
  };
  async submit(e) {
    e.preventDefault();
    try {
      let result;
      if (this.props.axios) {
        const { userId, title, body } = this.state;
        result = (
          await axios.post("https://jsonplaceholder.typicode.com/posts", {
            userId: Number(userId),
            title,
            body,
          })
        ).data;
      } else {
        const { user, email } = this.state;
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user, email }),
          },
        );
        if (!response.ok) throw Error("POST failed");
        result = await response.json();
      }
      console.log(result);
      this.setState({ result, error: "" });
    } catch (error) {
      this.setState({ error: error.message });
    }
  }
  render() {
    const fields = this.props.axios
      ? ["userId", "title", "body"]
      : ["user", "email"];
    return (
      <section>
        <h2>POST with {this.props.axios ? "Axios" : "fetch"}</h2>
        <form onSubmit={(e) => this.submit(e)}>
          {fields.map((name) => (
            <label key={name}>
              {name}
              <input
                name={name}
                type={
                  name === "email"
                    ? "email"
                    : name === "userId"
                      ? "number"
                      : "text"
                }
                value={this.state[name]}
                placeholder={name}
                onChange={(e) => this.setState({ [name]: e.target.value })}
                required
              />
            </label>
          ))}
          <button>Send JSON</button>
        </form>
        <p role="alert">{this.state.error}</p>
        {this.state.result ? (
          <pre>{JSON.stringify(this.state.result, null, 2)}</pre>
        ) : null}
      </section>
    );
  }
}
export function Webhook() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");
  return (
    <section>
      <h2>Webhook POST</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            const r = await fetch(url, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                key1: "myusername",
                email: "mymail@gmail.com",
                name: "Isaac",
                lastname: "Doe",
                age: 27,
              }),
            });
            const text = await r.text();
            if (!r.ok) throw Error(`HTTP ${r.status}: ${text}`);
            console.log(text);
            setResult(text || "Request accepted");
          } catch (err) {
            setResult(err.message);
          }
        }}
      >
        <label>
          Your webhook.site URL (enable CORS){" "}
          <input
            value={url}
            type="url"
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </label>
        <button>Send sample payload</button>
      </form>
      <pre>{result}</pre>
    </section>
  );
}
export class ServerChallenge extends Component {
  state = { hello: "", message: "", response: "", error: "" };
  async componentDidMount() {
    try {
      const r = await fetch("/api/hello");
      if (!r.ok) throw Error("Start npm run server in another terminal");
      const data = await r.json();
      this.setState({ hello: data.message });
    } catch (e) {
      this.setState({ error: e.message });
    }
  }
  submit = async (e) => {
    e.preventDefault();
    try {
      const r = await fetch("/api/world", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: this.state.message }),
      });
      if (!r.ok) throw Error("Server request failed");
      this.setState({ response: (await r.json()).message, error: "" });
    } catch (e) {
      this.setState({ error: e.message });
    }
  };
  render() {
    return (
      <section>
        <h2>{this.state.hello || "Express message"}</h2>
        <form onSubmit={this.submit}>
          <label>
            Message{" "}
            <input
              value={this.state.message}
              onChange={(e) => this.setState({ message: e.target.value })}
            />
          </label>
          <button>Send to server</button>
        </form>
        <p>{this.state.response}</p>
        <p role="alert">{this.state.error}</p>
      </section>
    );
  }
}
export class AutoCompletedText extends Component {
  state = { suggestions: [], text: "" };
  render() {
    return (
      <section>
        <h2>Country autocomplete</h2>
        <label>
          Country{" "}
          <input
            value={this.state.text}
            autoComplete="off"
            onChange={(e) => {
              const text = e.target.value;
              this.setState({
                text,
                suggestions: text
                  ? countries.filter((c) =>
                      c.toLowerCase().startsWith(text.toLowerCase()),
                    )
                  : [],
              });
            }}
          />
        </label>
        <ul>
          {this.state.suggestions.map((c) => (
            <li key={c}>
              <button
                onClick={() => this.setState({ text: c, suggestions: [] })}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
function ShopScreen() {
  throw Error("Shop is unavailable");
}
export function RouterExercise() {
  return (
    <BrowserRouter>
      <section>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/shop">Shop</NavLink>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary key="home">
                <h2>Home</h2>
              </ErrorBoundary>
            }
          />
          <Route
            path="/profile"
            element={
              <ErrorBoundary key="profile">
                <h2>Profile</h2>
              </ErrorBoundary>
            }
          />
          <Route
            path="/shop"
            element={
              <ErrorBoundary key="shop">
                <ShopScreen />
              </ErrorBoundary>
            }
          />
        </Routes>
      </section>
    </BrowserRouter>
  );
}
export function DataExercises() {
  return (
    <>
      <RouterExercise />
      <section>
        <h2>Local JSON posts</h2>
        {posts.map((p) => (
          <article key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.content}</p>
          </article>
        ))}
      </section>
      <Example1 />
      <Example2 />
      <Example3 />
      <RemoteList url="/users" title="Backend users" />
      <Customers />
      <ServerChallenge />
      <PostForm />
      <PostForm axios />
      <Webhook />
      <AutoCompletedText />
      <PostList />
      <UsersList />
      <RemoteList
        url="https://swapi.dev/api/people/"
        title="Star Wars lifecycle exercise"
      />
    </>
  );
}
