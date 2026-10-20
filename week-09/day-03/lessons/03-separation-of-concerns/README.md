# Separation of Concerns

Course source: [Geeks Institute](https://www.geeks.institute/).
Separation of Concerns" is a fancy way of saying: **Don't mix your jobs.** In a well-built application, your UI components (the things the user sees) should not be writing directly to your database, and your database files shouldn't care what color a button is.

**The Golden Rule for UI Components:** A UI component should only be concerned with *displaying data* and *listening for user clicks*.

**AutoBarista Example:** Imagine your `<BrewButton>` component. When a user clicks it, it needs to trigger the Tuya Fingerbot to push the physical button.

- **Bad Practice:** Writing the complex Python/API logic to connect to the Tuya Cloud *inside* the `<BrewButton>` visual component.

- **Good Practice:** The Parent (`<Dashboard>`) handles the complex Tuya API logic. It simply passes a function down to the `<BrewButton>` via a prop. The button's only job is saying, *"I was clicked! Hey Parent, run that function you gave me!"*
