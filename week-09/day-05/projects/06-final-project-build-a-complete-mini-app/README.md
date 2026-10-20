# Final Project: Build a Complete Mini App

Course source: [Geeks Institute](https://www.geeks.institute/).
**The Mission:** It is time to build the Minimum Viable Product (MVP) of the AutoBarista control panel!

**The Requirements:** You will conceptualize (or code, if you are ready!) a single-page dashboard that integrates everything we've learned:

1. **Layout:** Use a `<Header>` and a main content area.

2. **State Management:** The app must track `inventoryLevel` (e.g., starting at 10 cups) and `machineStatus` ("Idle", "Brewing", "Delivering").

3. **Interactivity:** * A "Simulate Order" button.
  
  - When clicked, `inventoryLevel` goes down by 1.
  - The `machineStatus` changes to "Brewing" (simulating the Tuya Fingerbot press), waits 3 seconds, changes to "Delivering" (simulating the Robotic Arm), and then goes back to "Idle".

4. **Conditional Rendering:** If `inventoryLevel` hits 0, the "Simulate Order" button disappears and is replaced by a red warning: "Out of Cups! Please Restock."

## Working solution

[Working solution](solutions.md) — runnable code, explanation, and verification steps.
