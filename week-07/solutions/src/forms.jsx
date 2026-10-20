import React, { useState } from "react";
import { validate } from "./validation";
export function Input({ name, value, onChange, error }) {
  return (
    <label>
      {name}
      <input
        name={name}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error ? (
        <small id={`${name}-error`} role="alert">
          {error}
        </small>
      ) : null}
    </label>
  );
}
export function Form() {
  const empty = { firstName: "", lastName: "", phone: "", email: "" };
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  return (
    <section>
      <h2>Contact registration</h2>
      {submitted ? (
        <>
          <pre>{JSON.stringify(values, null, 2)}</pre>
          <button
            onClick={() => {
              setValues(empty);
              setErrors({});
              setSubmitted(false);
            }}
          >
            Reset
          </button>
        </>
      ) : (
        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            const next = validate(values);
            setErrors(next);
            if (!Object.values(next).some(Boolean)) {
              console.log(values);
              setSubmitted(true);
            }
          }}
        >
          {Object.keys(empty).map((name) => (
            <Input
              key={name}
              {...{
                name,
                value: values[name],
                error: errors[name],
                onChange: (e) =>
                  setValues((v) => ({ ...v, [name]: e.target.value })),
              }}
            />
          ))}
          <button>Submit</button>
        </form>
      )}
    </section>
  );
}
export function BookForm() {
  const [data, setData] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
  });
  const [saved, setSaved] = useState(null);
  return (
    <section>
      <h2>New book</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSaved({ ...data });
          console.log(data);
        }}
      >
        {Object.keys(data).map((name) => (
          <label key={name}>
            {name}
            <input
              name={name}
              value={data[name]}
              type={name === "year" ? "number" : "text"}
              onChange={(e) =>
                setData((v) => ({ ...v, [name]: e.target.value }))
              }
              required
            />
          </label>
        ))}
        <button>Submit book</button>
      </form>
      {saved ? (
        <p role="status">
          Successfully submitted {saved.title} by {saved.author}.
        </p>
      ) : null}
    </section>
  );
}
export function Forms() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [content, setContent] = useState("Write something here.");
  const [car, setCar] = useState("Volvo");
  const errormessage =
    age !== "" && !/^\d+$/.test(age) ? "Age must be numeric." : "";
  return (
    <section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!errormessage) alert(username);
        }}
      >
        <label>
          Name{" "}
          <input
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Age{" "}
          <input
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        {username ? (
          <h2>
            Hello {username}
            {age !== "" && !errormessage ? `, ${age}` : ""}
          </h2>
        ) : null}
        <p role="alert">{errormessage}</p>
        <textarea
          aria-label="Biography"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <select
          aria-label="Car brand"
          value={car}
          onChange={(e) => setCar(e.target.value)}
        >
          {["Volvo", "Ford", "BMW"].map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <button disabled={Boolean(errormessage)}>Submit name</button>
      </form>
    </section>
  );
}
export function FormComponent({ data, handleChange, onSubmit }) {
  return (
    <section>
      <h2>Travel form</h2>
      <form onSubmit={onSubmit}>
        {["firstName", "lastName", "age"].map((name) => (
          <label key={name}>
            {name}
            <input
              name={name}
              value={data[name]}
              onChange={handleChange}
              type={name === "age" ? "number" : "text"}
              required
            />
          </label>
        ))}
        <fieldset>
          <legend>Gender</legend>
          {["male", "female", "other"].map((value) => (
            <label key={value}>
              <input
                type="radio"
                name="gender"
                value={value}
                checked={data.gender === value}
                onChange={handleChange}
              />
              {value}
            </label>
          ))}
        </fieldset>
        <label>
          Destination{" "}
          <select
            name="destination"
            value={data.destination}
            onChange={handleChange}
          >
            {["Japan", "France", "Morocco"].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        {["lactoseFree", "vegan", "nutsFree"].map((name) => (
          <label key={name}>
            <input
              type="checkbox"
              name={name}
              checked={data[name]}
              onChange={handleChange}
            />
            {name}
          </label>
        ))}
        <button>Submit travel details</button>
      </form>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </section>
  );
}
export function FormContainer() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    destination: "Japan",
    lactoseFree: false,
    vegan: false,
    nutsFree: false,
  });
  const handleChange = ({ target }) =>
    setData((d) => ({
      ...d,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    }));
  return (
    <FormComponent
      {...{ data, handleChange }}
      onSubmit={(e) => {
        e.preventDefault();
        const params = new URLSearchParams();
        Object.entries(data).forEach(([k, v]) => {
          if (v !== false) params.set(k, v === true ? "on" : v);
        });
        history.replaceState(
          null,
          "",
          `${location.pathname}?${params}${location.hash}`,
        );
      }}
    />
  );
}
export function FormExercises() {
  return (
    <>
      <BookForm />
      <Form />
      <Forms />
      <FormContainer />
    </>
  );
}
