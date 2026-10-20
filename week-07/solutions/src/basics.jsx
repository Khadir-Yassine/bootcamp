import React, { useState } from "react";
export function UserFavoriteAnimals({ animals }) {
  return (
    <ul>
      {animals.map((a) => (
        <li key={a}>{a}</li>
      ))}
    </ul>
  );
}
export function Exercise() {
  const styleHeader = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };
  return (
    <section>
      <h1 style={styleHeader}>Styled Header</h1>
      <p className="para">HTML tags work inside JSX.</p>
      <a href="https://react.dev">React documentation</a>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Submitted");
        }}
      >
        <label>
          Your name <input required />
        </label>
        <button>Submit</button>
      </form>
      <img
        alt="Mountain landscape"
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600"
      />
      <ul>
        <li>Heading</li>
        <li>Paragraph</li>
        <li>Form</li>
      </ul>
    </section>
  );
}
const celebrities = [
  {
    title: "Bob Dylan",
    imageUrl: "https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg",
    buttonLabel: "Go to Wikipedia",
    buttonUrl: "https://en.wikipedia.org/wiki/Bob_Dylan",
    description:
      "Bob Dylan is an American singer, songwriter and cultural icon who has influenced music for more than five decades.",
  },
  {
    title: "Paul McCartney",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg",
    buttonLabel: "Go to Wikipedia",
    buttonUrl: "https://en.wikipedia.org/wiki/Paul_McCartney",
    description:
      "Paul McCartney is an English singer, songwriter, and musician best known as a member of the Beatles.",
  },
];
export function CelebrityCard({
  title,
  imageUrl,
  description,
  buttonLabel,
  buttonUrl,
}) {
  return (
    <section className="max-w-md rounded shadow p-6">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a className="button" href={buttonUrl}>
        {buttonLabel}
      </a>
    </section>
  );
}
export function Basics() {
  const user = {
    firstName: "Bob",
    lastName: "Dylan",
    favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
  };
  const myElement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;
  return (
    <>
      <p>Hello World!</p>
      {myElement}
      <p>React is {sum} times better with JSX</p>
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteAnimals animals={user.favAnimals} />
      <Exercise />
      <div className="grid">
        {celebrities.map((c) => (
          <CelebrityCard key={c.title} {...c} />
        ))}
      </div>
      <ul>
        {["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"].map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </>
  );
}
export function Header() {
  return (
    <nav>
      <a href="#home">Home</a>
      <a href="#features">Features</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}
export function Card({ icon, title, description }) {
  return (
    <section>
      <span aria-hidden="true">{icon}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
}
export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <p>Tell us what you want to build.</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <label>
          Email <input type="email" required />
        </label>
        <label>
          Message <textarea required />
        </label>
        <button>Send message</button>
      </form>
      {sent ? (
        <p role="status">
          Thanks! This demonstration records your message locally; it does not
          send email.
        </p>
      ) : null}
    </section>
  );
}
export function Landing() {
  return (
    <div id="home">
      <Header />
      <h1>Build something that matters.</h1>
      <p>A small toolkit. A world of possibilities.</p>
      <div className="grid md:grid-cols-3 gap-6" id="features">
        {[
          ["🚀", "Fast performance", "Only the essentials, delivered quickly."],
          ["⚡", "Easy to use", "Clear tools for a clear purpose."],
          ["▣", "Modern design", "An interface that fits every screen."],
        ].map(([icon, title, description]) => (
          <Card key={title} {...{ icon, title, description }} />
        ))}
      </div>
      <Contact />
    </div>
  );
}
