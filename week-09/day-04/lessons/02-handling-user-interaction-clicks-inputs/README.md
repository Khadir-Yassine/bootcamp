# Handling User Interaction (Clicks, Inputs)

Course source: [Geeks Institute](https://www.geeks.institute/).
A system isn't interactive unless it listens to the user. We handle interactions using **Events**. Whenever a user clicks a button, types in a text box, or toggles a switch, they fire an event. We write "Event Handlers" (functions) to catch those events and update our State.

**The Action-Reaction Loop:**

1. **Action:** User clicks the "Order Espresso" button (`onClick` event).

2. **Reaction:** The event handler function runs. It updates the component's State from `orderPlaced: false` to `orderPlaced: true`.

3. **Result:** The UI immediately updates to show a checkmark instead of the button.

**AutoBarista Example:** Let's look at the Tuya Fingerbot connection toggle.

JavaScript

```javascript
// Conceptual Code
function FingerbotToggle() {
  // 1. Define the State (memory)
  let [isOnline, setIsOnline] = useState(false);

  // 2. Define the Event Handler (reaction)
  function handleToggleClick() {
    setIsOnline(!isOnline); // Flips false to true, or true to false
    // Here, you would also send the API command to the Tuya Gateway!
  }

  // 3. The UI (action)
  return (
    <button onClick={handleToggleClick}>
      {isOnline ? "Disconnect Fingerbot" : "Connect Fingerbot"}
    </button>
  );
}
```
