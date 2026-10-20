import React, { useEffect, useState } from "react";
export function Garage({ size }) {
  return <p>Who lives in my {size} Garage?</p>;
}
export function Car({ carInfo }) {
  const [color] = useState("red");
  return (
    <section>
      <h2>
        This car is {color} {carInfo.model}
      </h2>
      <Garage size="small" />
    </section>
  );
}
export function Events() {
  const [isToggleOn, setToggle] = useState(true);
  const clickMe = () => alert("I was clicked");
  const handleKeyDown = (e) => {
    if (e.key === "Enter") alert(e.target.value);
  };
  return (
    <section>
      <button onClick={clickMe}>Click me</button>
      <label>
        Press Enter <input onKeyDown={handleKeyDown} />
      </label>
      <button onClick={() => setToggle((on) => !on)}>
        {isToggleOn ? "ON" : "OFF"}
      </button>
    </section>
  );
}
export function Phone() {
  const [phone, setPhone] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020,
  });
  return (
    <section>
      <h2>My {phone.brand}</h2>
      <p>
        It is a {phone.color} {phone.model} from {phone.year}.
      </p>
      <button onClick={() => setPhone((p) => ({ ...p, color: "blue" }))}>
        Change color
      </button>
    </section>
  );
}
export function Color() {
  const [favoriteColor, setColor] = useState("red");
  useEffect(() => {
    alert("useEffect reached");
  }, []);
  return (
    <section>
      <h2>My favorite color is {favoriteColor}</h2>
      <button onClick={() => setColor("blue")}>Change to blue</button>
    </section>
  );
}
export function Clock() {
  const [currentDate, setDate] = useState(() => new Date());
  useEffect(() => {
    const tick = () => setDate(new Date());
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section>
      <h2>Local time</h2>
      <time dateTime={currentDate.toISOString()}>
        {currentDate.toLocaleString()}
      </time>
    </section>
  );
}
export function Actor() {
  const [actor, setActor] = useState({
    firstName: "Bob",
    lastName: "Dylan",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400",
  });
  return (
    <section>
      <h2>
        {actor.firstName} {actor.lastName}
      </h2>
      <img src={actor.image} alt={`${actor.firstName} ${actor.lastName}`} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setActor(Object.fromEntries(new FormData(e.currentTarget)));
        }}
      >
        {Object.entries(actor).map(([name, value]) => (
          <label key={name}>
            {name}
            <input
              name={name}
              defaultValue={value}
              type={name === "image" ? "url" : "text"}
              required
            />
          </label>
        ))}
        <button>Update actor</button>
      </form>
    </section>
  );
}
export function Voting() {
  const [languages, setLanguages] = useState(
    ["Php", "Python", "JavaScript", "Java"].map((name) => ({ name, votes: 0 })),
  );
  return (
    <section>
      <h2>Vote for your language</h2>
      {languages.map((language) => (
        <p key={language.name}>
          <button
            onClick={() =>
              setLanguages((all) =>
                all.map((l) =>
                  l.name === language.name ? { ...l, votes: l.votes + 1 } : l,
                ),
              )
            }
          >
            Vote {language.name}
          </button>{" "}
          {language.votes}
        </p>
      ))}
    </section>
  );
}
export function StateExercises() {
  return (
    <>
      <Car carInfo={{ name: "Ford", model: "Mustang" }} />
      <Events />
      <Phone />
      <Color />
      <Clock />
      <Actor />
    </>
  );
}
