# State vs Props

Course source: [Geeks Institute](https://www.geeks.institute/).
This is the most common point of confusion for new developers, but understanding it unlocks everything.

- **Props (Properties) are for COMMUNICATION.** * They are passed down from a Parent to a Child.
  
  - They are **Read-Only**. A Child component cannot change its own Props. It just obeys what the Parent tells it.
  - *Analogy:* A manager (Parent) handing a specific blueprint (Prop) to a worker (Child).

- **State is for INTERNAL MEMORY.**
  
  - It is created and managed *inside* the component itself.
  - It is **Read/Write**. A component can update its own State whenever a user interacts with it.
  - *Analogy:* The worker's own scratchpad where they tally how many parts they've built so far.

**AutoBarista Example:** Look at a `<CoffeeCup>` component on your dashboard.

- **Prop:** `size="Large"`. The Parent tells the cup to be large. The cup cannot suddenly decide to be small.

- **State:** `fillLevel=50%`. As the coffee machine brews, the cup component updates its own internal memory to show the coffee rising inside the UI.
