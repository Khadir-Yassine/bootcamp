# Final Project: Build a Complete Mini App — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/autobarista.jsx)

## How to run

From `week-09/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **autobarista**.

## Approach and implementation

`coffeeReducer` models an explicit state machine. ORDER succeeds only while Idle, in stock, and outside maintenance; it decrements cups once and changes status to Brewing. An effect schedules delivery after exactly 3 seconds; another schedules Idle after 1.5 seconds. Cleanup cancels timers on unmount. FINISH increases the session brew count. Repeated clicks cannot consume extra cups while busy. At zero cups the order button is replaced by the exact red warning; Restock adds ten cups.

## Check the result

- Start with 10 cups/Idle. Simulate Order: cups become 9 and status Brewing.
- After 3 seconds check Delivering, then Idle after 1.5 more seconds.
- Exhaust all cups and check “Out of Cups! Please Restock.” replaces the order button.
- Restock and confirm ordering returns; verify maintenance blocks new orders.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
