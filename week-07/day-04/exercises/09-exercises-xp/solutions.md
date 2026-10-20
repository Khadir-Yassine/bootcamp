# Exercises XP — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/errors.jsx)

## How to run

From `week-07/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **errors**.

## Approach and implementation

The first simulation wraps two `BuggyCounter` instances in one boundary; the second isolates each counter. Reaching 5 throws `I crashed!`. The intentionally unprotected third simulation is opt-in and demonstrates the whole React tree unmounting. `LifecycleColor` logs snapshots and post-update state, changes red to yellow after mounting, supports a blue button, and exposes a shouldComponentUpdate switch. Its child alerts during unmount when Delete is clicked.

## Check the result

- In the shared pair, take one counter to 5: both disappear into one fallback.
- In the separate pair, take one to 5: its sibling remains usable.
- Inspect lifecycle logs; delete the child to see its unmount alert.
- Enable the unprotected simulation only when ready to reload the app after its deliberate crash.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
